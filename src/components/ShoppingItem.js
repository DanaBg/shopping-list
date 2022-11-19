import './ShoppingItem.css'
import { Link } from "react-router-dom";

function ShoppingItem(props) {
    const {id,title, price, image} = props;
    console.log({obj: props});

    return (
        <Link to={`/details/${id}`} className='shopping-item_card'>
            <div className='details_container'>
                <div className='text'>{title}</div>
                <div className="shopping-item__price text"> {` ${price} שח`}</div>
            </div>
            <div className="shopping-item__image">
                <img className='image' src={image} alt={title}/>
                </div>
        </Link>
    );
}

export default ShoppingItem;