import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  return (
    <div className="App">
      <h1>React Application</h1>

      <small>Powered By <a href="https://www.cluemediator.com/" target="_blank" title="Clue Mediator" data-testid="powered-by" rel="noopener noreferrer">Clue Mediator</a></small>

      <input
        type="email"
        placeholder="Enter email"
        data-testid="email-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      
      {email && !(/\S+@\S+\.\S+/).test(email) && <span className="error" data-testid="error-msg">Please enter a valid email.</span>}
    </div>
  );
}

export default App;