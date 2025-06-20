import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';

function HomeScreen() {
  return <h1> Home </h1>;
}

function ProfileScreen() {
  return <h1>Profile Screen</h1>;
}

function ShopScreen() {
  throw new Error("Shop crashed!");
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          } />
          <Route path="/profile" element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          } />
          <Route path="/shop" element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          } />
        </Routes>
      </div>
      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />
    </BrowserRouter>
    
  );
}

export default App;
