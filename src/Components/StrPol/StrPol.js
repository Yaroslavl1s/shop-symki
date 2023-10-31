import './StrPol.sass';
import { Payment } from './components/Payment';

export const StrPol = () => {
    return (
        <div className='storeP'>
            <div className='storeP__slogan'>
                <h1>Store Policy</h1>
            </div>
            <div className='storeP__policy'>
                <div className='storeP__policy__cc'>
                    <h2>Customer Care</h2>
                    <div className='storeP__policy__cct'>
                        <p>I’m a customer care section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                            I'm the second paragraph in your customer care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className='storeP__policy__ps'>
                    <h2>Privacy & Safety</h2>
                    <div className='storeP__policy__pst'>
                        <p>I’m a privacy & safety policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                            I'm the second paragraph in your privacy & safety policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className='storeP__policy__wi'>
                    <h2>Wholesale Inquiries</h2>
                    <div className='storeP__policy__wit'>
                        <p>I’m a wholesale inquiries section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!
                            I'm the second paragraph in your your wholesale inquiries section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <Payment />
            </div>
        </div>
    );
}