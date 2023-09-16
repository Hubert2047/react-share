import { FacebookIcon, FacebookShareButton } from 'react-share'
import './App.css'
function App() {
    const currentURL = window.location.href
    return (
        <div className='App'>
            <FacebookShareButton url={currentURL}>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
        </div>
    )
}

export default App
