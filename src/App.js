import { useState } from 'react';
import './App.css';
import Axios from 'axios'
import Recipetile from './RecipeTile';
const YOUR_APP_ID='f63db11e';

const YOUR_APP_KEY='01a4afd914dc41f5b2bff63f81692658'
function App() {

  const [query,setquery]= useState("");
  const [recipes ,setrecipes] = useState([]);
  const [healthLabel,sethealthLabel]=useState('vegan')
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  async function getRecipes()
  {
     var result = await Axios.get(url);
     setrecipes(result.data.hits);
     console.log('ji');
     console.log(result.data.hits)
  }
  const onsubmit = (e)=>
  {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className='app'>
      <h1>Food Recipes 🍕</h1>
      <form className='app__searchForm' onSubmit={onsubmit}>
         <input type='text' placeholder='enter intergrident' value ={query} className='app__input' onChange={(e)=>{
          setquery(e.target.value)
         }}></input>
         <input className="app__submit" type='submit' value='search'></input>
         <select className='app_healthLabels'>
          <option onClick={()=>{
            sethealthLabel('vegan')
          }}>Vegan</option>
          <option onClick={()=>{
            sethealthLabel('vegetarian')
          }}>vegetarian</option>
          <option onClick={()=>{
            sethealthLabel('paleo')
          }}>paleo</option>
          <option onClick={()=>{
            sethealthLabel('dairy-free')
          }}>dairy-free</option>
          <option onClick={()=>{
            sethealthLabel('low-sugar')
          }}>low-sugar</option>
          <option onClick={()=>{
            sethealthLabel('wheat-free')
          }}>wheat-free</option>
         </select>
      </form>
      <div className='app__recipes'>
        {recipes.map(recipe=>{
           return <Recipetile recipe = {recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
