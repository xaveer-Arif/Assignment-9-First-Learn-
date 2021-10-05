import React from 'react';
import "./About.css";
import firstImg from '../../images/about/1.jpg';
import secondImg from '../../images/about/2.jpg';
import thirdImg from '../../images/about/3.jpg'
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div className = 'container about-section'>
            
            <div>
            <h1 id="general" className = 'display-4 mb-5 text-secondary pt-3 fw-bold'>Certification</h1>
                <div className = 'd-flex mb-5'>
                <Row xs={1} md={3} className="g-4 ">
                    <Col>
                    <div><img src={firstImg} className = 'img-fluid img-border ' alt="" /></div>
                    </Col>
                    <Col>
                    <div><img src={secondImg}  className = 'img-fluid img-border ms-4' alt="" /></div>
                    </Col>
                    <Col>
                    <div><img src={thirdImg}  className = 'img-fluid img-border ms-5' alt="" /></div>
                    </Col>
                </Row>
                </div>
            <h1 id="general" className = 'display-4  text-secondary fw-bold pt-3'>General Information</h1>
            <p>Thank you for purchasing our course. We are happy that you are one of our customers and we assure you will not be disappointed. We do our best to produce top notch course with great functionality, premium designs, and clear code.</p>

            <h1 className = 'display-5 front-weight text-secondary mt-5'>Help</h1>
            <p>Take control of your personal financial education. Improve your financial literacy by learning key financial topics such as corporate finance, risk management, M&A, pricing models, and money markets on edX today. You will also learn more about deal structures, economic policy, financial-decision making, and more with online classes in finance from top institutions worldwide.</p>

            <h1 className = 'display-5 text-secondary front-weight mt-5'>Support Policy </h1>
            <p>In order to receive a technical support assistance, you need to have a valid purchase code. To get the code, please navigate to your ThemeForest "Downloads" page and click on the theme download link. Check this guide for more details.</p>

            <h1 className = 'display-5 text-secondary front-weight mt-5'>Third-party Extensions</h1>
            <p>Unfortunately, we do not provide support for third-party extensions. Please contact the author of the extension if needed. If you feel that you might have troubles with installing an extension, we advise you to order a professional installation service.</p>
            
            <h1 id= "service" className = 'display-5 text-secondary front-weight mt-5'>Service</h1>
            <p>When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.</p>

            </div>
        </div>
    );
};

export default About;