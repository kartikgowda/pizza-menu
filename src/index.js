import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

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
  const pizzas = pizzaData;

  //! Empty Pizza Array for Test
  // const pizzas = [];

  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still cooking our menu. Please check back later 😃</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato,mozzarella, spinach and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={20}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, mushrooms"
        price={22}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
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
      {isOpen ? (
        <Order closingTime={closingTime} />
      ) : (
        <p>We're are closed. Please check back later 😃</p>
      )}
    </footer>
  );
}

function Order({ closingTime }) {
  return (
    <div className="order">
      <p>We're open until {closingTime}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
