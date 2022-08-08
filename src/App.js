
import './App.css';
import Movies from './components/movies';
import Nav from './components/nav';
import Pop from './components/latest';
function App() {
  return (
    <div className="App">
      <Nav />
      <Pop />
      <Movies />
      
    </div>
  );
}

export default App;
