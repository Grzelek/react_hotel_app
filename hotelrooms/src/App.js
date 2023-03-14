import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import Loader from './components/UI/Loader/Loader';
import React, { Component, useEffect, useReducer, useState } from 'react';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import {ThemeContext} from './context/themeContext';
import AuthContext from './context/authContext';


const hotelsList = [
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

const reducer = (reducer, action) => {
  if(action.type === 'change-theme'){
    reducer = (reducer==='primary') ? 'warning' : 'primary'
  }
  return reducer
}
function App(){

  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  //const [theme, setTheme] = useState('primary')
  const [theme, dispatch] = useReducer(reducer,'primary')

  const searchHandler = (term) => {
    const hotelsResults = [...hotelsList].filter(
          x => x.name.toLowerCase()
          .includes(term.toLowerCase())
        )
    setHotels(hotelsResults)
  }

  const changeTheme = () => {
    /*
    const newColorTheme = (theme === 'primary') 
    ? 'secondary'
    : 'primary'
    setTheme(newColorTheme)
    */
    dispatch({type: 'change-theme'})
  }

  useEffect(() => {
    setTimeout(() =>{
      setHotels(hotelsList)
      setLoading(false)
    },1000)
  }, [])

  const header = (
    <Header>
      <Searchbar 
        onSearch={(term) => searchHandler(term)}
      
      ></Searchbar>
      <ThemeButton />
    </Header>
  )
  const content = (
    loading 
    ? (<Loader text={'Loading Hotels'} />)
    : (<Hotels 
      hotels={hotels} 
      loading={loading}
      />)
  )

  return (
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      login: () => setIsAuthenticated(true),
      logout: () => setIsAuthenticated(false)
     }}>
    <ThemeContext.Provider value={{
      colorTheme: theme,
      changeTheme: changeTheme
    }}>
    <div className="App">
      <Layout 
        header={header}
        menu={<Menu />}
        content={content}
        footer={<Footer />}
      />
    </div>
    </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;
