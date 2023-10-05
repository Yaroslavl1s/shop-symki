import './Home.css'
import symka1 from '../../../../image/symka1.jpg'
import symka2 from '../../../../image/symka2.jpg'
import symka3 from '../../../../image/symka3.jpg'
import symka4 from '../../../../image/symka4.jpg'
import symka5 from '../../../../image/symka5.jpg'
import dude from '../../../../image/dude.png'


function Home () {
    return (
     <div className="Selars">
          <h4>BEST SELLERS</h4>
          <div className="box">
            <span className="symka1"><img src={symka1} alt='foto'></img></span>
            <span className="symka2"><img src={symka2} alt='foto'></img></span>
            <span className="symka3"><img src={symka3} alt='foto'></img></span>
            <span className="symka4"><img src={symka4} alt='foto'></img></span>
            <span className="symka5"><img src={symka5} alt='foto'></img></span>
            <span className="symka5"><img src={dude} alt='foto'></img></span>
          </div>

          <button className="btmALL"> Shop All Bags</button>
     </div>
    )
}

export default Home;