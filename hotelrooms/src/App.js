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
    theme:'primary'
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

changeTheme = () => {
  const newTheme = (this.state.theme == 'primary') 
  ? 'secondary'
  : 'primary'
  this.setState({theme:newTheme})
}

  render(){
    return (
      <div className="App">
        <Layout 
          header={
            <Header>
              <Searchbar 
                onSearch={(term) => this.searchHandler(term)}
                theme={this.state.theme}
              ></Searchbar>
              <button onClick={this.changeTheme}
              className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
                <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
              </svg>
              </button>
            </Header>
          }
          menu={
            <Menu 
              theme={this.state.theme}
            />
          }
          content={
            this.state.loading 
            ? (<Loader text={'Loading Hotels'} theme={this.state.theme} />)
            : (<Hotels 
              hotels={this.state.hotels} 
              loading={this.state.loading}
              theme={this.state.theme}
              />)
          }
          footer={
            <Footer 
              theme={this.state.theme}
            />
          }
        />
      </div>
    )
  };
}

export default App;
