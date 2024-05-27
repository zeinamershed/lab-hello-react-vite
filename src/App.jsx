// src/App.jsx
import './App.css';
import ironhackLogo from './assets/ironhack-logo-xs.png';
import menuTop from './assets/menu-top-xs.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ironhackLogo} alt="Ironhack Logo" className="logo" />
        <img src={menuTop} alt="Menu Top" className="menu" />
      </header>
      <main className="App-main">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      </main>
      <section className="App-icons">
        <div className="App-icon">
          <img src={icon1} alt="Declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="App-icon">
          <img src={icon2} alt="Components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="App-icon">
          <img src={icon3} alt="Single-Way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component’s.</p>
        </div>
        <div className="App-icon">
          <img src={icon4} alt="JSX" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;

