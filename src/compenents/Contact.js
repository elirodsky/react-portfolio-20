import React, { useState } from "react";

function Contact() {
    function handleSubmit(event) {
        event.preventDefault();
    }
    function handleChange(event) {
        if (event.target.value){
            setErrorMessage('')
        } else {
            setErrorMessage(`${event.target.name} is required.`)
        }
       setFormData({...formData, [event.target.name]: event.target.value}) 
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
    })
    const [errorMessage, setErrorMessage] = useState('')
    return (
        <form onSubmit={handleSubmit}>
            <div className="errorText">{errorMessage}</div>
            <div>
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" onBlur={handleChange} required/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onBlur={handleChange} required/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" cols="30" rows="10" onBlur={handleChange} required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Contact;