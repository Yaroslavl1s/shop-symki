import './OurC.sass';
import dude from './../../image/dude.png'




function OurC () {
    return(
        <div>
            <div className="TextS">
                <h4>OUR STORY</h4>
            </div>

            <div className="TheB">
                    <h4>THE BRAND</h4>
                    <p className="TheB__BRAND">I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to
                        add your own content and make changes to the font.
                        Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
            </div>
            <div className="BImg">
                <img className="BRAND__Img" alt="Img" src={dude}></img>
            </div>
        </div>
    );
}

export default OurC;