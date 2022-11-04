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
                                <input type="text" placeholder="Enter your first name" />
                            </label>

                            <label> Last name <br />
                                <input type="text" placeholder="Enter your last name" />
                            </label> <br />
                        </div>
                        <div className="row2">
                            <label> Email <br />
                                <input type="text" placeholder="yourname@email.com" />
                            </label> <br />
                        </div>

                        <label className="text_area"> Message <br />
                            <textarea name="" id="" cols="30" rows="7" placeholder="send me a message and i'll reply you as soon as possible"></textarea>
                        </label>
                        <div className="accept_terms">
                            <input type="checkbox" />
                            <p>You agree to providing your data to jamil who may contact you.</p>
                        </div>
                        <button className="submit">Send message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Contact