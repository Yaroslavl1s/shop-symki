import './App.css';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Button from './Components/Header/components/Button/Button';
import FB from './Components/Header/components/FB/FB';
import Home from './Components/Header/components/Home/Home';
import OurC from './Components/OurC/OurC';
import Carousel from "react-elastic-carousel";
import Product from './Product.jsx'
import 'react-multi-carousel/lib/styles.css';





function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const productData =[
  {
    id: 1,
    imageurl: "https://millzkarta.ru/blog/wp-content/uploads/2022/10/tout.jpg",
    name: "Cумка",
    price: "$20.99",
    description: "Крутая сумка",
  },
  {
    id: 2,
    imageurl: "https://millzkarta.ru/blog/wp-content/uploads/2022/10/tout.jpg",
    name: "Cумка 2",
    price: "$40.99",
    description: "Крутая сумка 2",
  }


  ]
  
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
    <OurC />
   </>
  );
}

export default App;
