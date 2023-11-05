import './Home.scss'
import Carousel from './Slider/Carousel'
import { Button } from './ComponentsButton/Button/Button'




export const Home = () => {
    return (
     <div className="Selars">
          <h1>Most Popular</h1>
          
          <>
          <Button/>
          <Carousel/>
          </>
          
          
          <button class="button">Shop All</button>
    
     </div>
    )
}

