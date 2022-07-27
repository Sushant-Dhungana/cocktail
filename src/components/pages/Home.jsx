import React from 'react'
import SearchInput from '../SearchInput';
import CocktailList from '../CocktailList';

const Home = () => {
  return (
    <>
    <h2>Home</h2>
        {/* search input */}
        <SearchInput/> 
        {/* cocktail list */}
        <CocktailList/>
    </>
  )
}

export default Home