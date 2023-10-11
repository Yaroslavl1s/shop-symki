import './App.css';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import Button from './Components/Header/components/Button/Button';
import FB from './Components/Header/components/FB/FB';
import Home from './Components/Header/components/Home/Home';
import Carousel from "react-elastic-carousel";
import Item from "./Item"


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function App() {
  return (

    <>
    <Contact/>
    <Header />
    <Button />
    <FB />
    <Home />
    <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>
   </>
   
  );
}

export default App;
