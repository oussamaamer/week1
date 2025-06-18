const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const tasksPath = path.join(__dirname, '../data/tasks.json');

function readTasks() {
  try {
    const data = fs.readFileSync(tasksPath);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeTasks(tasks) {
  fs.writeFileSync(tasksPath, JSON.stringify(tasks, null, 2));
}

router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    title,
    description
  };

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
  const { title, description } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  tasks[taskIndex] = { ...tasks[taskIndex], title, description };
  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

router.delete('/:id', (req, res) => {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });

  const removedTask = tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  res.json({ message: 'Task deleted', task: removedTask[0] });
});

module.exports = router;
