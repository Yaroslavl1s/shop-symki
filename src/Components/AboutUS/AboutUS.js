import './AboutUS.sass';
import symka6 from '../../image/symka6.jpg'
import symka4 from '../../image/symka4.jpg'



export const AboutUS = () => {
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
                <img className="BRAND__Img" alt="Img" src={symka6}></img>
            </div>

            <div className="TheD">
                    <h4>THE DESIGNERS</h4>
                    <p className="TheD__DESIGNERS">I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to
                        add your own content and make changes to the font.
                        Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
            </div>

            <div className="DImg">
                <img className="DESIGNERS__Img" alt="Img" src={symka4}></img>
            </div>

        </div>
    );
}