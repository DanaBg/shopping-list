import './ShoppingItem.css'

function ShoppingItem(props) {
    const {title, price, image} = props;

    return (
        <div className='shopping-item_card'>
            <div className='details_container'>
                <div className='text'>{title}</div>
                <div className="shopping-item__price text"> {` ${price} שח`}</div>
            </div>
            <div className="shopping-item__image">
                <img className='image' src={image} alt={title}/>
                </div>
        </div>
    );
}

export default ShoppingItem;