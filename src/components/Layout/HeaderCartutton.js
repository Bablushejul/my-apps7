import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartutton.module.css'
const HeaderCartutton=props=>{
    return(
    <button className={classes.button}>
        <span className={classes.icon}>
<CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
    
    )

}

export default HeaderCartutton;