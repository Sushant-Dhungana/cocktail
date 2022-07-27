import React, { useRef } from "react";
import "./searchinput.css";
import { fetchSearchCocktail } from "./redux/features/CocktailSlice";
import { useDispatch} from "react-redux";

const SearchInput = () => {
  const searchValue = useRef("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const searchText = searchValue.current.value; //because of use ref we can get the value here
    dispatch(fetchSearchCocktail({ searchText })); //dispatching an action in action creator
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            placeholder="Search Cocktail"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
