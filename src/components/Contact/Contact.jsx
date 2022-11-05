import Footer from "../Footer/Footer"
import "./Contact.css"
function Contact() {
    return (
        <div className="contact_page">
            <div className="form">
                <div>
                    <h1>Contact me</h1>
                    <p className="intro">Hi there, contact me to ask me about anything you have in mind.</p>
                    <form>
                        <div className="row1">
                            <label className="label1"> First name <br />
                                <input id="first_name" type="text" placeholder="Enter your first name" required />
                            </label>

                            <label> Last name <br />
                                <input id="last_name" type="text" placeholder="Enter your last name" required />
                            </label> <br />
                        </div>
                        <div className="row2">
                            <label> Email <br />
                                <input id="email" type="text" placeholder="yourname@email.com" required/>
                            </label> <br />
                        </div>

                        <label id="message" className="text_area"> Message <br />
                            <textarea name="" id="" cols="30" rows="7" placeholder="send me a message and i'll reply you as soon as possible" required></textarea>
                        </label>

                        <label className="accept_terms">
                            <input type="checkbox" required/>
                            <p>You agree to providing your data to jamil who may contact you.</p>
                        </label>

                        <button id="btn_submit" className="submit">Send message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Contact