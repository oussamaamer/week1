const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const USERS_FILE = path.join(__dirname, 'data', 'users.json');

async function initializeUsersFile() {
    try {
        await fs.access(USERS_FILE);
    } catch (error) {
        await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2));
    }
}

async function readUsers() {
    try {
        const data = await fs.readFile(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users file:', error);
        throw error;
    }
}

async function writeUsers(users) {
    try {
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing users file:', error);
        throw error;
    }
}

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, lastName, email, username, password } = req.body;
        
        if (!name || !lastName || !email || !username || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const users = await readUsers();
        
        const usernameExists = users.some(user => user.username === username);
        const emailExists = users.some(user => user.email === email);
        
        if (usernameExists) {
            return res.status(400).json({ error: 'username already exists' });
        }
        
        if (emailExists) {
            return res.status(400).json({ error: 'email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = {
            id: uuidv4(),
            name,
            lastName,
            email,
            username,
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        await writeUsers(users);
        
        res.status(201).json({ 
            message: 'hello your account is now created',
            user: {
                id: newUser.id,
                name: newUser.name,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        const users = await readUsers();
        const user = users.find(u => u.username === username);
        
        if (!user) {
            return res.status(404).json({ error: 'username is not registred' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        
        res.json({ 
            message: `hi ${user.name} welcome back again`,
            user: {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        const sanitizedUsers = users.map(user => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });
        res.json(sanitizedUsers);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const users = await readUsers();
        const user = users.find(u => u.id === id);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        const { password, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }
        
        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === id);
        
        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        if (updates.username) {
            const usernameExists = users.some(
                (user, index) => index !== userIndex && user.username === updates.username
            );
            if (usernameExists) {
                return res.status(400).json({ error: 'username already exists' });
            }
        }
        
        if (updates.email) {
            const emailExists = users.some(
                (user, index) => index !== userIndex && user.email === updates.email
            );
            if (emailExists) {
                return res.status(400).json({ error: 'email already exists' });
            }
        }
        
        users[userIndex] = { ...users[userIndex], ...updates };
        await writeUsers(users);
        
        const { password, ...updatedUser } = users[userIndex];
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use('/', router);

async function startServer() {
    await initializeUsersFile();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();