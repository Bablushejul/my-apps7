import Card from '../UI/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css'

const DUMY_MEALS=[{
    id:'e1',
    name:'sushi',
    description:'finest fish and veggies',
    price:22.98

}];
const AvailableMeals=()=>{

    const mealList=DUMY_MEALS.map((meal)=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
    return<section className={classes.meals}>
        <Card>
        <ul>
            {mealList}
        </ul>
        </Card>
    </section>

};

export default AvailableMeals;