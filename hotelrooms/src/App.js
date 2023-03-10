import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Hotels from './components/hotels/Hotels';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu />
      <Hotels />
    </div>
  );
}

export default App;
