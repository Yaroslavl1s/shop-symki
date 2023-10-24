import './Contact.css';


export const Contact = () => {
    return (
        <div className='contact'>
            <div className='slogan'>
                <h1>Get in Touch</h1>
            </div>
            <div className='service'>
                <h2>Customer Service</h2>
                <div class="wrap">
                    <h3 class="wrap__col">Flahship Store</h3>
                    <h3 class="wrap__col">Opening Hours</h3>
                    <h3 class="wrap__col">Contact Us</h3>
                    <div class="wrap__col">500 Terry Francine St.</div>
                    <div class="wrap__col">Monday-Friday</div>
                    <div class="wrap__col">1-800-000-0000</div>
                    <div class="wrap__col">San Francisco, CA 94158</div>
                    <div class="wrap__col">9:00am - 7:00pm EST</div>
                    <div class="wrap__col">info@mysite.com</div>
                </div>
            </div>
            <div className='Mail'>
                <h2>Inquiries</h2>
                <div className='Inquarise'>
                    <div>For questions regarding our products and services you can also contact us by filling out the form below.</div>
                </div>
            <form className="form">
                <h2 className='from_h2'>CONTACT US</h2>
                <p className='p_form' type="Name:"><input className='inp_form' placeholder="Write your name here.."></input></p>
                <p className='p_form' type="Email:"><input className='inp_form' placeholder="Let us know how to contact you back.."></input></p>
                <p className='p_form' type="Subject:"><input className='inp_form' placeholder="Write the subject line.."></input></p>
                <p className='p_form' type="Message:"><input className='inp_form' placeholder="What would you like to tell us.."></input></p>
                <button className='btn_form'>Send Message</button>
            </form>
            </div>
        </div>
    );
}
