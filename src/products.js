import apple from './images/apple.jpg';
import lightbulb from './images/lightbulb.jpg';
import cucumber from './images/cucumber.jpg';
import spray from './images/spray.jpg';
import redApples from './images/redApples.jpg';
import lightBulbs from './images/lightBulbs.jpg';
import cucumbers from './images/cucumbers.jpg';
import antiAnts from './images/antiAnts.jpg';

export const products = [
    { id: 1, title: 'תפוח', price: 5, image: apple, extraInfo: "תפוח אדום", extraImage: redApples, shop: "רמי לוי" },
    { id: 2, title: 'מלפפון', price: 6, image: cucumber, extraInfo: "מלפפון ירוק", extraImage: cucumbers, shop: "שוק ראש העין" },
    { id: 3, title: 'ספריי נגד נמלים', price: 20, image: spray, extraInfo: "תרסיס נגד נמלים ופרעושים", extraImage: antiAnts, shop: "שופרסל"  },
    { id: 4, title: 'נורה', price: 15, image: lightbulb , extraInfo: "נורת אור צהוב", extraImage: lightBulbs, shop: "מחסני חשמל"  },

  ];