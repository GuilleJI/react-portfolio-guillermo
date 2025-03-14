
import React, { useState, useRef } from 'react';
//import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null); 

    const form = useRef();

    const sendEmail = (e) => {
    e.persist();
    e.preventDefault(); // Prevent form from being submitted

    // Get form data 
    const fName = form.current.querySelector('#fName').value;
    const lName = form.current.querySelector('#LName').value;
    const email = form.current.querySelector('#email').value;
    const phone = form.current.querySelector('#phone').value;
    const options = form.current.querySelector('#options').value;
    const message = form.current.querySelector('#message').value;
    
    // Check if form fields are empty 
    if(!fName || !lName || !email || options === '0'){
        setStateMessage('Please fill out all fields.');
        setTimeout(() => {
            setStateMessage(null);
        }, 8000); //hide message after 8 seconds  

        return; //returning early if message field is empty 

    }else if (!message){
        setStateMessage('Please type your message');
        setTimeout(() => {
            setStateMessage(null);
        }, 8000);

        return; //returning early if message field is empty
    }
    setIsSubmitting(true);  

    emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
            (result) => {
                setStateMessage('Message sent!'); 
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 8000); //hide message after 8 seconds
            },
            (error) => {
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false); 
                setTimeout(() => {
                    setStateMessage(null); 
                }, 8000); //hide message after 8 seconds
            }
        );
        //Clears the form after sending the email
        e.target.reset(); 
    };

    return (
        <div className="lg:px-12 px-4" id="contact">
            <div className="text-headingColor text-center mb-20">
                <p className="text-xl font-semibold mb-5">For More Details</p>
                <h2 className="md:text-5xl text-4xl font-bold">Contact Me!</h2>
                <p className="mt-5">Feel free to send a message for any inquiries or if you’d like to reach out!</p>
            </div>
            {/* forms here */}
            <div className="md:w-2/3 mx-auto mb-20">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col sm:flex-row gap-8 items-center">
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="fName" className="text-base text-headingColor w-full" >First name</label>
                            <input type="text" id="fName" name="fName" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="LName" className="text-base text-headingColor w-full">Last name</label>
                            <input type="text" id="LName" name="LName" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                    </div> 
                    <div className="flex flex-col sm:flex-row gap-8 items-center">
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="email" className="text-base text-headingColor w-full">Email</label>
                            <input type="text" id="email" name="email" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="phone" className="text-base text-headingColor w-full">Phone Number</label>
                            <input type="text" id="phone" name="phone" className="block border border-primary
                            rounded-lg py-2 mt-2 w-full"/>
                        </div>
                    </div>
                    {/* Input selection */}
                    <div className="w-full mb-8">
                        <label htmlFor="option" className="text-base text-headingColor w-full">Choose a topic</label>
                        <select name="options" id="options" className="block border border-primary rounded-lg py-2 mt-2 w-full px-2">
                            <option value="0">Select one...</option>
                            <option value="Inquires">Inquires</option>
                            <option value="Reach out">Reach out</option>
                        </select>
                    </div>
                    {/* Text area */}
                    <div className="w-full mb-8">
                        <label htmlFor="option" className="text-base text-headingColor w-full">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Type your message" 
                        className="block border border-primary rounded-lg py-2 mt-2 w-full px-2"></textarea>
                    </div>
                    {/* btn submit */}
                    <div className="w-36 mx-auto mt-8">
                        <input type="submit" value="Submit" disabled = {isSubmitting} className="btn-primary bg-primary py-3 px-8 cursor-pointer w-full hover:drop-shadow-2xl"/>
                        {stateMessage && <p className='text-red-600'>{stateMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact; 