import './Contact.css';


function Contact() {
    return (
        <div className='contact'>
            <div className='slogan'>
                <h1>Get in Touch</h1>
            </div>
            <div className='service'>
                <h2>Customer Service</h2>
                <div className='serv'>
                    <div className='serv_cont'>
                        <b>Flahship Store</b>
                        <b>500 Terry Francine St.</b>
                        <b>San Francisco, CA 94158</b>
                    </div>
                    <div className='serv_cont'>
                        <b>Opening Hours</b>
                        Monday-Friday
                        9:00am - 7:00pm EST
                    </div>
                    <div className='serv_cont'>
                        <b>Contact Us</b>
                        1-800-000-0000
                        info@mysite.com
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;