import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './App.css';

const Header = () => {

return (
<div>
<header className="header">
<div className="logo1">ELENDIL</div>
<div className="loginButton" >
Login
</div>
</header>
</div>
);
};


const HeaderContent = () => {
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
const timeout = setTimeout(() => {
setIsVisible(true);
}, 500); 
return () => clearTimeout(timeout);
}, []);
return (
<div className={`header-content ${isVisible ? 'visible' : ''}`}>
<h1 className="header-title" style={{ background: '-webkit-linear-gradient(left, #d18ca8, #ae7abd, #ea7d9c, #da1b60)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '70px', fontWeight: 'bold', marginLeft: '30px', textAlign: 'center' }}>Your personal AI Conversation Wizard</h1>
<p className="header-description">Welcome, discover the artistry of conversation and unlock the power of AI!</p>
</div>
);
}


const ContainerCard = () => {
return (
<div className="container">
<div className="card1">
<div className="card2">
<div className="logo-container1">
<img className="logo3" src="https://img.icons8.com/?size=96&id=59023&format=png" alt="Logo3" />
<img className="logo4" src="https://img.icons8.com/?size=32&id=39051&format=png" alt="Logo4" />
</div>
<div className="square-container">
Hey there, welcome! Got Queries? How can I assist you today?
</div>
<div className="card3">
<div className="top-section">
<div className="user-container">
Can you recommend a good programming language to start learning?
</div>
<div className="logo-container2">
<img className="logo6" src="https://img.icons8.com/?size=160&id=HNn3lC0m5uKR&format=png" alt="Logo6" />
</div>
</div>
<div className="bottom-section">
<div className="logo-container3">
<img className="logo7" src="https://img.icons8.com/?size=96&id=59023&format=png" alt="Logo7" />
</div>
<div className="bot-container">
Sure! I recommend starting with Python. It's beginner-friendly, widely used, and has a large community for support.
</div>
</div>
<div className="powered-container">
Powered by 
<img src="https://img.icons8.com/?size=100&id=37628&format=png" alt="Icon" width="20" height="20" style={{ marginLeft: '5px', opacity: '0.6' }}></img>
</div>
<div className="card4">
<div className="logo2">
<img src="https://img.icons8.com/?size=128&id=QIRhukOe1BpC&format=png" alt="Logo2" />
</div>
<div className="message">
<p>Let's Chat!</p>
</div>
<div className="card5">
Any Queries?
<img className="logo5" src="https://img.icons8.com/?size=96&id=E9cG1hfGzMxj&format=png" alt="Logo5" />
</div>
</div>
</div>
</div>
</div>
</div>
);
}


const RowContainer = () => {
return (
<div className="row-container">
<row className="row">
<div className="card01">
<div className="inner-card01">
<h2>CONVENIENCE AND ACCESSIBILITY</h2>
<img src="https://img.icons8.com/?size=160&id=iqeQVE4k9kKR&format=png" alt="Logo01" className="logo01" />
<img src="https://img.icons8.com/?size=96&id=59023&format=png" alt="Bot01" className="bot01" />
<p>Imagine a world where users can seamlessly interact with a chatbot through voice commands while driving, cooking, or even exercising. Through advancements in natural language processing and integration with smart devices, chatbots offer users unprecedented convenience and accessibility. Users can access information, make transactions, and receive assistance hands-free, enhancing their productivity and multitasking capabilities.</p>
</div>
</div>

<div className="card02">
<div className="inner-card02">
<h2>INSTANCE ASSISTANCE</h2>
<img src="https://img.icons8.com/?size=96&id=Ies5ekctQmH9&format=png" alt="Logo02" className="logo02" />
<img src="https://img.icons8.com/?size=160&id=5rjf4RBWzzU4&format=png" alt="Bot02" className="bot02" />
<p>Picture a scenario where users can resolve complex technical issues or troubleshoot problems with their devices instantly, without waiting for customer support agents. Chatbots can analyze user queries in real-time, identify patterns, and provide accurate solutions within seconds. This instant assistance not only saves users valuable time but also minimizes downtime and frustration, leading to a smoother and more efficient user experience.</p>
</div>
</div>

<div className="card03">
<div className="inner-card03">
<h2>SECURE PERSONAL INTERACTIONS</h2>
<img src="https://img.icons8.com/?size=160&id=SwvDja4ryubi&format=png" alt="Logo03" className="logo03" />
<p> Envision a chatbot that not only assists users with their tasks but also ensures the highest level of security and privacy in their interactions. Advanced encryption techniques and secure authentication methods, chatbots can safeguard users sensitive information and transactions. Also, establish personalized interactions and creating a sense of trust and reliability in their interactions.</p>
</div>
</div>
</row>
</div>
);
}


const Button = () => {
return (
<button className="get-started-button">GET STARTED</button>
);
}


const HeadingOnlyContent = () => {
const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
const timeout = setTimeout(() => {
setIsVisible(true);
}, 500); 
return () => clearTimeout(timeout);
}, []);
return (
<div className={`heading-only-content ${isVisible ? 'visible' : ''}`}>
<h1 className="header-title01" style={{ background: '-webkit-linear-gradient(left, #d18ca8, #ae7abd, #ea7d9c, #da1b60)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '50px', fontWeight: 'bold', marginLeft: '30px', textAlign: 'center' }}>Harnessing the Power of Chatbots for Infinite Solutions</h1>
</div>
);
}

  
const ThreeCardsRow = () => {
return (
<div>
<Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', marginBottom: '30px', marginTop: '150px' }}>
<Col md={4}>
<div className="three-card">
<div className="inner-card11">
<h2>Customer Support and Service</h2>
<img src="https://img.icons8.com/?size=96&id=59023&format=png" alt="Logo11" />
</div>
</div>
</Col> 
<Col md={4}>
<div className="three-card">
<div className="inner-card12">
<h2>E-commerce and Sales</h2>
<img src="https://img.icons8.com/?size=96&id=8chNl15hy6jY&format=png" alt="Logo12" />
</div>
</div>
</Col>
<Col md={4}>
<div className="three-card">
<div className="inner-card13">
<h2>Appointment Scheduling</h2>
<img src="https://img.icons8.com/?size=96&id=QTADNrdh5I0o&format=png" alt="Logo13" />
</div>
</div>
</Col>
</Row>
  
<Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
<Col md={4}>
<div className="three-card">
<div className="inner-card21">
<h2>Information Retrieval</h2>
<img src="https://img.icons8.com/?size=96&id=103978&format=png" alt="Logo21" />
</div>
</div>
</Col>
<Col md={4}>
<div className="three-card">
<div className="inner-card22">
<h2>Lead Generation and Qualification</h2>
<img src="https://img.icons8.com/?size=96&id=nrEFWOZ9YrxK&format=png" alt="Logo22" />
</div>
</div>
</Col>
<Col md={4}>
<div className="three-card">
<div className="inner-card23">
<h2>Training and Onboarding</h2>
<img src="https://img.icons8.com/?size=96&id=18906&format=png" alt="Logo23" />
</div>
</div>
</Col>
</Row>
  
<Row className="mb-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
<Col md={4}>
<div className="three-card">
<div className="inner-card31">
<h2>Healthcare Assistance</h2>
<img src="https://img.icons8.com/?size=96&id=14799&format=png" alt="Logo31" />
</div>
</div>
</Col>
<Col md={4}>
<div className="three-card">
<div className="inner-card32">
<h2>Travel Assistance</h2>
<img src="https://img.icons8.com/?size=96&id=15121&format=png" alt="Logo32" />
</div>
</div>
</Col>
<Col md={4}>
<div className="three-card">
<div className="inner-card33">
<h2>Financial Services</h2>
<img src="https://img.icons8.com/?size=96&id=oWdlOvw3CmcM&format=png" alt="Logo33" />
</div>
</div>
</Col>
</Row>
</div>
);
}

  
function BigCard({ title }) {
return (
<div className="big-card">
<h2 className="big-card-title" style={{ color: '#ccc', fontSize: '30px', fontWeight: 'lighter', marginLeft: '20px', textAlign: 'center', marginBottom: '800px' }}>Integrating Security and Privacy for a Seamless Digital Experience</h2>
<div className="big-inner-card">
<div className="circle1">
</div>
<div className="circle2">
</div>
<div className="circle3">
</div>
<div className="circle4">
</div>
<div className="circle5">
<img src="https://img.icons8.com/?size=96&id=59023&format=png" alt="Robot" className="circle-icon5" />
</div>
<div className="circle circle6">
<img src="https://img.icons8.com/?size=96&id=qyRpAggnV0zH&format=png" alt="Google" className="circle-icon6" />
</div>
<div className="circle circle7">
<img src="https://img.icons8.com/?size=96&id=kikR2jIn6485&format=png" alt="Slack" className="circle-icon7" />
</div>
<div className="circle circle8">
<img src="https://img.icons8.com/?size=96&id=16713&format=png" alt="Whatsapp" className="circle-icon8" />
</div>
<div className="circle circle9">
<img src="https://img.icons8.com/?size=96&id=9a46bTk3awwI&format=png" alt="Youtube" className="circle-icon9" />
</div>
<div className="circle circle10">
<img src="https://img.icons8.com/?size=96&id=VLr4hUR8iMGF&format=png" alt="Drive" className="circle-icon10" />
</div>
<div className="circle circle11">
<img src="https://img.icons8.com/?size=96&id=fpGM2cINbbu4&format=png" alt="Cloud" className="circle-icon11" />
</div>
<div className="circle circle12">
<img src="https://img.icons8.com/?size=96&id=uSHYbs6PJfMT&format=png" alt="Shopify" className="circle-icon12" />
</div>
</div>
</div>
);
}


function Footer() {
return (
<MDBFooter className='text-white'>
<div className="social-icons text-center">
<a href="https://www.facebook.com" className="icon-link">
<FontAwesomeIcon icon={faFacebookF} className="icon" />
</a>
<a href="https://www.twitter.com" className="icon-link">
<FontAwesomeIcon icon={faTwitter} className="icon" />
</a>
<a href="https://www.instagram.com" className="icon-link">
<FontAwesomeIcon icon={faInstagram} className="icon" />
</a>
<a href="https://www.linkedin.com" className="icon-link">
<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
</a>
</div>
</MDBFooter>
);
}

export { Header, HeaderContent, ContainerCard, RowContainer, Button, HeadingOnlyContent, ThreeCardsRow, BigCard, Footer };
