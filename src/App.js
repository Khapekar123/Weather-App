import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';

function App() {
  const appStyles = {
    minHeight: '100vh', // Ensures the App fills the viewport height
    backgroundColor: '#f0f0f0', // Background color for the entire app
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className="App" style={appStyles}>
      {/* Header */}
      <header>
        <h1>My Weather App</h1>
      </header>

      {/* Main Content */}
      <main>
        <Weather />
      </main>

      {/* Footer */}
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} My Weather App</p>
          <p>
            Made with <span role="img" aria-label="Heart Emoji">❤️</span> by sakshi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
