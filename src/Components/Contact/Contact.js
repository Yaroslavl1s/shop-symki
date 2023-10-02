import './Contact.css';


function Contact() {
    return (
        <div className='contact'>
            <div className='slogan'>
                <h1>Get in Touch</h1>
            </div>
            <div className='service'>
                <h2>Customer Service</h2>
                <div class="wrap">
                    <b class="wrap__col">Flahship Store</b>
                    <b class="wrap__col">Opening Hours</b>
                    <b class="wrap__col">Contact Us</b>
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
            </div>
            <form action='' method='get' className='form'>
                <div className='form'>
                    <label for="name">First Name</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className='form'>
                    <label for="name">Last Name</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className='form'>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form'>
                    <label for="name">Subject</label>
                    <input type="text, number" name="name" id="name" required />
                </div>
                <div className='form'>
                    <label for="name">Mesage</label>
                    <input type="text, number" name="name" id="name" required />
                </div>
                <div className='form'>
                    <input type="submit" value="Subscribe!" />
                </div>
            </form>
        </div>
    );
}

export default Contact;