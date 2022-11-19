import '../App.css';
import { products } from '../products';
import ShoppingItem from "../components/ShoppingItem";

const HomePage = () => {
      return (
        <div className="container">
          <h2>רשימת הקניות שלי</h2>
          {
            products.map(product => 
              <ShoppingItem key={product.id}
              {...product}
              />
            )
          }
        </div>
      );
}

export default HomePage;