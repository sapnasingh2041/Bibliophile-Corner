import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
  <div className = "grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
              <Link to="/" > BiblioPhile Corner</Link>
                </div>
              <div className="header-links">
                    <a href="/cart"> Cart</a>
            
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}                    

          {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
            </div>
          </header>
        
            <aside className="sidebar">
                <h3> Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html"> Novels</a>
                </li>
                <li>
                    <a href="index.html"> Study Materials</a>
                </li>
            </ul>
            </aside>
        <main className="main">
            <div className="content">
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/cart/:id?" component={CartScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>
            </div>
                
            </main>

            <footer className="footer">
                All Rights Reserved.
            </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
