import { FacebookIcon, FacebookShareButton } from 'react-share'
import './App.css'
function App() {
    return (
        <div className='App'>
            <FacebookShareButton
                url={'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'}>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
        </div>
    )
}

export default App
