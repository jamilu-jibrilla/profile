import { useState } from "react"
import Footer from "../Footer/Footer"
import "./Contact.css"
function Contact() {
    const [name, setName] = useState(false)
    const [name2, setName2] = useState(false)
    const [email, setEmail] = useState(false)
    const [message, setMessage] = useState(false)

    const handleSubmit= (e)=> {
        e.preventDefault()
        Array.from(document.querySelectorAll('textarea, input')).forEach(element => {
            validate(element)
        })
    }

    function validate(item) {
        if(item.id == 'first_name' && item.value.length < 4) {
            setName(true)
        } else if(item.id == 'first_name' && item.value.length > 3) {
            setName(false)
        }

        
        if(item.id == 'last_name' && item.value.length < 4) {
            setName2(true)
        } else if(item.id == 'last_name' && item.value.length > 3) {
            setName2(false)
        }

        if(item.id == 'email' && item.value.length < 1 && !item.value.includes('@')) {
            setEmail(true)
        } else if (item.id == 'email' && item.value.length > 1 && item.value.includes('@')) {
            setEmail(false)
        }

        if(item.id == 'message' && item.value.length < 1) {
            setMessage(true)
        } else if(item.id == 'message' && item.value.length > 1) {
            setMessage(false)
        }
    }
    
    return (
        <div className="contact_page">
            <div className="form">
                <div>
                    <h1>Contact me</h1>
                    <p className="intro">Hi there, contact me to ask me about anything you have in mind.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row1">
                            <label className="label1"> First name <br />
                                <input id="first_name" type="text" placeholder="Enter your first name"  />
                                <p className={`${name ? 'red-error' : "none"}`}>Name must have atleast 4 letters</p>
                            </label>

                            <label className="label2"> <span>Last name</span> <br />
                                <input id="last_name" type="text" placeholder="Enter your last name"  />
                                <p className={`${name2 ? 'red-error' : "none"}`}>Name must have atleast 4 letters</p>
                            </label> <br />
                        </div>
                        <div className="row2">
                            <label> Email <br />
                                <input id="email" type="text" placeholder="yourname@email.com" /> 
                                <p className={`${email ? 'red-error' : "none"}`}>Invalid email</p>
                            </label> <br />
                        </div>

                        <label className="text_area"> Message <br />
                            <textarea id="message" cols="30" rows="7" placeholder="send me a message and i'll reply you as soon as possible" ></textarea>
                            <p className={`${message ? 'red-error' : "none"}`}>Please enter a message</p>
                        </label>

                        <label className="accept_terms">
                            <input type="checkbox" />
                            <p>You agree to providing your data to jamil who may contact you.</p>
                        </label>

                        <button id="btn__submit" className="submit">Send message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Contact