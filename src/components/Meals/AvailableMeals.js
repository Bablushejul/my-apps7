
import classes from './AvailableMeals.module.css'

const DUMY_MEALS=[{
    id:'e1',
    name:'sushi',
    description:'finest fish and veggies',
    price:22.98

}];
const AvailableMeals=()=>{

    const mealList=DUMY_MEALS.map(meal=><li key={meal.id}>{meal.name}</li>)
    return<section className={classes.meals}>
        <ul>
            {mealList}
        </ul>
    </section>

};

export default AvailableMeals;