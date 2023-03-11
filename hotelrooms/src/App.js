import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';

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
