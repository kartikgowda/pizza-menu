import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
    </main>
  );
}
function Pizza() {
  return (
    <div className="pizza">
      <img src="/pizzas/spinaci.jpg" alt="Pizza Spinaci"></img>
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese </p>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openingTime = 12;
  const closingTime = 22;
  const isOpen = hour >= openingTime && hour <= closingTime;
  console.log(isOpen);

  // if (hour >= openingTime && hour <= closingTime) {
  //   alert('The Pizza Store is OPEN');
  // } else {
  //   alert('Pizza store is CLOSED');
  // }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently OPEN
    </footer>
  );
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
