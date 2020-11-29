import React from 'react';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

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
                    <a href="cart.html"> Cart</a>
                    {
                      userInfo ? <Link to="/profile">{userInfo.name}</Link>
                    ) : (
                    <Link to="/signin"></Link>
                    )}
                    <a href="signin.html"> Sign In</a>
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
              <Route path="/product/:id" component={ProductScreen}/>
              <Route path="/signin" component={SigninScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
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
