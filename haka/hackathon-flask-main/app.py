from flask import Flask, request, jsonify
from menu_item import MenuItem
from menu_manager import MenuManager
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from user import User

app = Flask(__name__)


app.config["JWT_SECRET_KEY"] = "super-secret-key" 

jwt = JWTManager(app)

# Register
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    if User.find_by_username(data['username']):
        return jsonify({"error": "Username already exists"}), 400
    hashed = generate_password_hash(data['password'])
    User.create(data['username'], hashed)
    return jsonify({"message": "User created"}), 201

# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.find_by_username(data['username'])
    if not user or not check_password_hash(user['password'], data['password']):
        return jsonify({"error": "Invalid credentials"}), 401
    access_token = create_access_token(identity=user['username'])
    return jsonify(access_token=access_token)

# Protected Example
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user)


@app.route('/menu', methods=['POST'])
@jwt_required()
def add_menu_item():
    data = request.json
    item = MenuItem(data['name'], data['price'])
    item.save()
    return jsonify({"message": "Item added"}), 201

@app.route('/menu/<string:name>', methods=['GET'])
def get_menu_item(name):
    item = MenuManager.get_by_name(name)
    if item:
        return jsonify({"name": item.name, "price": item.price})
    return jsonify({"error": "Item not found"}), 404

@app.route('/menu', methods=['GET'])
def get_all_menu_items():
    items = MenuManager.all()
    return jsonify([{"name": item.name, "price": item.price} for item in items])

@app.route('/menu/<string:name>', methods=['PUT'])
@jwt_required()
def update_menu_item(name):
    data = request.json
    item = MenuManager.get_by_name(name)
    if item:
        item.update(data['new_name'], data['new_price'])
        return jsonify({"message": "Item updated"})
    return jsonify({"error": "Item not found"}), 404

@app.route('/menu/<string:name>', methods=['DELETE'])
@jwt_required()
def delete_menu_item(name):
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        return jsonify({"message": "Item deleted"})
    return jsonify({"error": "Item not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
