import './App.css';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Button from './Components/Header/components/Button/Button';
import FB from './Components/Header/components/FB/FB';
import Home from './Components/Header/components/Home/Home';
import Carousel from "react-elastic-carousel";
import Product from './Product.jsx'
import 'react-multi-carousel/lib/styles.css';
import { productData, responsive} from './data';





function App() {
  
  
  const product = productData.map(item => (

    <Product name={item.name} url={item.imageurl} price={item.price} description={item.description} />
  ))


  return (

    <>
    <Contact/>
    <Header />
    <Button />
    <FB />
    <Home />
    <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
    <Carousel responsive={responsive}>
       {product}
       
    </Carousel>;
   </>
   
  );
}

export default App;
