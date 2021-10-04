import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className = 'container about-section'>
            <div>
            <h1 id="general" className = 'display-4 fw-bold pt-3'>General Information</h1>
            <p>Thank you for purchasing our theme. We are happy that you are one of our customers and we assure you will not be disappointed. We do our best to produce top notch themes with great functionality, premium designs, and clear code.</p>

            <h1 className = 'display-5 front-weight mt-5'>Help</h1>
            <p>Take control of your personal financial education. Improve your financial literacy by learning key financial topics such as corporate finance, risk management, M&A, pricing models, and money markets on edX today. You will also learn more about deal structures, economic policy, financial-decision making, and more with online classes in finance from top institutions worldwide.</p>

            <h1 className = 'display-5 front-weight mt-5'>Support Policy </h1>
            <p>In order to receive a technical support assistance, you need to have a valid purchase code. To get the code, please navigate to your ThemeForest "Downloads" page and click on the theme download link. Check this guide for more details.</p>

            <h1 className = 'display-5 front-weight mt-5'>Third-party Extensions</h1>
            <p>Unfortunately, we do not provide support for third-party extensions. Please contact the author of the extension if needed. If you feel that you might have troubles with installing an extension, we advise you to order a professional installation service.</p>
            
            <h1 id= "service" className = 'display-5 front-weight mt-5'>Service</h1>
            <p>When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on.</p>

            </div>
        </div>
    );
};

export default About;