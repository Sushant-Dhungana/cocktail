import React,{useRef} from 'react';
import './searchinput.css';

const SearchInput = () => {
    const searchValue = useRef('');
  return (
    <section className='section search'>
        <form className='search-form'>
            <div className="form-control">
               
                <input type="text" name="name" id="name" ref={searchValue} placeholder="Search Cocktail" />
            </div>
        </form> 

    </section>
  )
}

export default SearchInput