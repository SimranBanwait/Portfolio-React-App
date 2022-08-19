import React from 'react';
import {useState} from 'react';
import './Contact.css';
import contactImage from '../../Photos/Styles/contact-2.jpg';



const ContactUs = () => {

    const [formData,setFormData]=useState({
        userName: "",
        userEmail: "",
        userCompany: "",
        userContact: "" ,
        userMessage: "",
    });

    let name,value;
    const valueTaker=(e)=>{
        name=e.target.name;
        value=e.target.value;
        // console.log(name,value);
        setFormData({...formData,[name]:value})
    }

    const dataSubmitter= async (e)=>{
        e.preventDefault();
        const { userName, userEmail, userCompany, userContact,userMessage}=formData
        if (userName && userEmail && userCompany && userContact ){
            const res = fetch("https://portfolio-website-9c0fe-default-rtdb.firebaseio.com/userData.json",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userName, userEmail, userCompany, userContact, userMessage })
                }
            );//fetch function ends here
            if (res) {
                setFormData({
                    userName: "",
                    userEmail: "",
                    userContact: "",
                    userCompany: "",
                    userMessage: "",
                });
                alert("Data Sent ✔");
            }
            else {
                alert("Please Enter Data Properly");
            }
        }else{
            alert("Please, Make sure you Fill all required fields");
        }   
         

    }


    return (
        <>
            <section className='contact' id="to-contact" >

                <div className="contact-label">
                    <h1>Contact</h1>
                    <p>This form will send me the details on my e-mail account directly </p>
                </div>

                <div className="contact-bottom">
                    <div className="contact-left">
                        <img src={contactImage} alt="" />
                    </div>
                    <div className="contact-right">

                        <form action="/form-data" method='POST'> 
                        <div className="form-content">
                            <div className="name">
                                <input
                                name='userName' 
                                placeholder='Your Name *' 
                                type="text" 
                                value={formData.userName}
                                onChange={valueTaker}
                                />
                            </div>
                            <div className="e-mail ">
                                <input
                                name='userEmail' 
                                placeholder='Username@example.com *' 
                                type="email" 
                                value={formData.userEmail}
                                onChange={valueTaker}
                                />
                            </div>
                            <div className="company">
                                <input 
                                name='userCompany'
                                placeholder='Company Name *' 
                                type="text" 
                                value={formData.userCompany}
                                onChange={valueTaker}
                                />
                            </div>
                            <div className="phoneNum">
                                <input
                                name='userContact' 
                                placeholder='Contact number *' 
                                type="text" 
                                value={formData.userContact}
                                onChange={valueTaker}
                                />
                            </div>
                            <div className="text-message">
                                <textarea
                                name='userMessage' 
                                placeholder='Write Your Message' 
                                type="text" 
                                suppressContentEditableWarning={true}
                                value={formData.userMessage}
                                onChange={valueTaker}
                                />
                            </div>
                        </div>
                        
                        <div className="send-button">
                            <button type='submit' className='send' onClick={dataSubmitter}>Send Info</button>
                        </div>


                        </form>

                    </div>
                </div>

                
            </section>
        </>
        
    )
}

export default ContactUs;