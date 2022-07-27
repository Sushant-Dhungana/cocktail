import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchCocktails } from './redux/features/CocktailSlice';
import {Link} from 'react-router-dom';
import './cocktaillist.css';
// import { set } from 'immer/dist/internal';

const CocktailList = () => {
    const {cocktails,loading} = useSelector(state => ({...state.app}));
    const [modifiedCocktail, setModifiedCocktail] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCocktails());
    },[dispatch]);
    useEffect(()=>{
        if(cocktails){
            const newCocktails = cocktails.map(item => {
                const {idDrink, strDrink, strDrinkThumb, strAlcoholic,strGlass} = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass, 
                };
            })
            setModifiedCocktail(newCocktails)
           
        }
            
            else {
                setModifiedCocktail([]);
            }


    },[cocktails]);

    // if(loading){
    //     return (
    //         <div>Loading...</div>
    //     )
    // }

    //if cocktail is not found
    if(!cocktails){
        return (
            <div className='not-found-cocktail'>No cocktail found according to your search  </div>
        )
    }


       
   
  return (
    <div className='container'>
        {modifiedCocktail.map((item)=>{
            const {id, name, image, info, glass} = item;
            return (
                <div key={id}>
                    <div className="card ">
                        <img src={image} alt={name} className="card-img" />
                        <div className="card-body" style={{textAlign:"left"}}>
                            <h5 className="card-title">{name}</h5>
                            <h4 className="card-title">{glass}</h4>
                            <p className="card-text">{info}</p>
                            <Link to={`/cocktail/${id}`} className="btn btn-info">Details</Link>

                        </div>
                    </div>
                </div>
            )
        })}

    </div>
  )
}

export default CocktailList