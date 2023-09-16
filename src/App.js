import { Helmet } from 'react-helmet'
import { FacebookIcon, FacebookShareButton } from 'react-share'
import './App.css'
function App() {
    const currentURL = window.location.href
    return (
        <div className='App'>
            <Helmet>
                <meta name='description' content='Nested component'></meta>
                <meta
                    property='og:image'
                    content='data:image/jpeg;base64,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'
                />
                <meta property='og:url' content={currentURL} />
            </Helmet>
            <FacebookShareButton url={currentURL}>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
        </div>
    )
}

export default App
