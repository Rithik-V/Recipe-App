import "./RecipeTile.css" 
function Recipetile({recipe})
{
   return(
    <div className="recipeTile" onClick={()=>{
      window.open(recipe.recipe.url)
    }}>
       <p>Recipe Name</p>
       <img className='recipeTile__img' src={recipe.recipe.image}></img>
       <p className="recipeTile__name">{recipe.recipe.label}</p>
    </div>
   )
}
export default Recipetile;