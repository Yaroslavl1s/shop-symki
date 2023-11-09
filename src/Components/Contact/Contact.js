import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/submit-form', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Ошибка при отправке данных', error);
            });
    };

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
                <div className='Inquiries'>
                    <p>For questions regarding our products and services you can also contact us by filling out the form below.</p>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className='form_h2'>CONTACT US</h2>
                    <p className='form_p' type="Name:"><input className='form_input' placeholder="Write your name here.." name='username' onChange={handleChange} value={formData.username} /></p>
                    <p className='form_p' type="Email:"><input className='form_input' placeholder="Let us know how to contact you back.." name='email' onChange={handleChange} value={formData.email} /></p>
                    <p className='form_p' type="Subject:"><input className='form_input' placeholder="Write the subject line.." name='subject' onChange={handleChange} value={formData.subject} /></p>
                    <p className='form_p' type="Message:"><input className='form_input' placeholder="What would you like to tell us.." name='message' onChange={handleChange} value={formData.message} /></p>
                    <button className='btn_form' type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
}
