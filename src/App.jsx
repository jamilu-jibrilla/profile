import './App.css'
import Footer from './components/Footer/Footer'
function App() {
    return (
        <div>
            <div className="App">
                <header>
                    <img className='profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmJRoMM1Us2NZFEVmUhqE-Ao0SdHXcfUa8JH7btI8&s' alt="profile image" id='profile__img' />
                    <p className='twitter bold' id='twitter'>Jb_jamil</p>
                    <p id='slack' className='hidden'>Jamil</p>
                    <div className="share_icon">
                        <img className='share' src="/assets/share.png" alt="share icon" />
                        <img className='mobile_nav' src="/assets/mobile_nav.png" alt="share icon" />

                    </div>
                </header>
                <main>
                    <a className='links' href="https://twitter.com/Jb_jameel">Twitter Link </a>
                    <a className='links' id='btn__zuri' href="https://training.zuri.team/">Zuri Team</a>
                    <a className='links' id='books' href="http://books.zuri.team">Zuri Books</a>
                    <a className='links' id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=Jamil">Python Books</a>
                    <a className='links' id='pitch' href="https://background.zuri.team">Background Check for Coders</a>
                    <a className='links' id='book__design' href="https://books.zuri.team/design-rules">Design Books</a>
                    <a className='links' id='contact' href="/contact">contact</a>
                    <div className="social_links">
                        <img src="/assets/slack.png" alt="slack icon" />
                        <img src="/assets/github.png" alt="github icon" />
                    </div>
                </main>
            </div>
            <Footer />
        </div>

    )
}

export default App