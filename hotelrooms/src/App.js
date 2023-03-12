import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import Loader from './components/UI/Loader/Loader';
import { Component } from 'react';
import Searchbar from './components/UI/Loader/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

class App extends Component {
  hotels = [
      {
        id:1,
        name: 'Prime Hotel',
        town: 'London',
        rating: 8.2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus ullamcorper quam.',
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
      {
        id:3,
        name: 'Holiday Inn',
        town: 'Milton Keynes',
        rating: 4.8,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus ullamcorper quam.',
        image:''
    
      },
      {
        id:4,
        name: 'Knights Hotel',
        town: 'St Albans',
        rating: 9.6,
        description: ' Mauris maximus mi non aliquam elementum. Pellentesque eu lorem erat. Phasellus ornare ornare libero, non volutpat sapien luctus a.',
        image:''
      },
    ];

  state = {
    hotels: [],
    loading: true,  
  }
  
searchHandler(term){
  const hotels = [...this.hotels].filter(
        x => x.name.toLowerCase()
        .includes(term.toLowerCase())
      )
  this.setState({hotels})
}

componentDidMount(){
  console.log('didMoint')
  setTimeout(() =>{
    this.setState({hotels: this.hotels, loading:false})
  },1000)
}

  render(){
    return (
      <div className="App">
        <Layout 
          header={
            <Header>
              <Searchbar onSearch={(term) => this.searchHandler(term)}></Searchbar>
            </Header>
          }
          menu={
            <Menu />
          }
          content={
            this.state.loading 
            ? (<Loader text={'Loading Hotels'} />)
            : (<Hotels hotels={this.state.hotels} loading={this.state.loading}/>)
          }
          footer={
            <Footer />
          }
        />
      </div>
    )
  };
}

export default App;
