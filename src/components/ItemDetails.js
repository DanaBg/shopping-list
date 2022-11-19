import { useParams } from 'react-router-dom';
import { products } from '../products';
import '../App.css';

const ItemList = () => {
    const {itemKey} = useParams();
    const {title, extraInfo,shop, extraImage } = products.find(product => product.id === parseInt(itemKey));

    return (
        <div className='details'>
            <h2>{title}</h2>
            <div>{extraInfo}</div>
            <div>{shop}</div>
            <img src={extraImage} alt={title}/>
        </div>
    )
}

export default ItemList;