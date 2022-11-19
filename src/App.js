
import './App.css';
import ShoppingItem from "./components/ShoppingItem";
import apple from './images/apple.jpg';
import lightbulb from './images/lightbulb.jpg';
import cucumber from './images/cucumber.jpg';
import spray from './images/spray.jpg';

const App = () => {

  const products = [
    { key: 1, title: 'תפוח', price: 5, image: apple },
    { key: 2, title: 'מלפפון', price: 6, image: cucumber},
    { key: 3, title: 'ספריי נגד נמלים', price: 20, image: spray },
    { key: 4, title: 'נורה', price: 15, image: lightbulb },

  ];
  return (
    <div className="container">
      <h2>רשימת הקניות שלי</h2>
      {
        products.map(product => 
          <ShoppingItem
          {...product}
          />
        )
      }
    </div>
  );
}

export default App;
