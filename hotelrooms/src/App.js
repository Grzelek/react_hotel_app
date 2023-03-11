
import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { Component } from 'react';

class App extends Component {
  state = {
    hotels:[
      {
        id:1,
        name: 'Prime Hotel',
        town: 'London',
        rating: 8.2,
        description: 'Lorem Ipsum',
        image: ''
      },
      {
        id:2,
        name: 'Big Hotel',
        town: 'Watford',
        rating: 7.4,
        description: 'Lorem Ipsum impsum lorem',
        image:''
      },
    ]
  }
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Menu />
        <Hotels hotels={this.state.hotels}/>
      </div>
    );
}
}

export default App;
