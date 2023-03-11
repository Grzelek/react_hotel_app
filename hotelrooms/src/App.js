import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import { Component } from 'react';

class App extends Component {
  hotels = [
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
    ];
  state = {
    hotels: this.hotels
  
  }
  
searchHandler(term){
 
  console.log(term, 'aaa ', term.toLowerCase())
  const hotels = [...this.hotels].filter(
        x => x.name.toLowerCase()
        .includes(term.toLowerCase())
      )
  this.setState({hotels})

  
}

  render(){
    return (
      <div className="App">
        <Header onSearch={(term) => this.searchHandler(term)}></Header>
        <Menu />
        <Hotels hotels={this.state.hotels}/>
      </div>
    );
}
}

export default App;
