import React from 'react'
import SearchInput from '../SearchInput';
import CocktailList from '../CocktailList';

const Home = () => {
  return (
    <>

        {/* search input */}
        <SearchInput/> 
        {/* cocktail list */}
        <CocktailList/>
    </>
  )
}

export default Home