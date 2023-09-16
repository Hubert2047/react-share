import { Helmet } from 'react-helmet'
import { FacebookIcon, FacebookShareButton } from 'react-share'
import './App.css'
function App() {
    const currentURL = window.location.href
    return (
        <div className='App'>
            <Helmet>
                <title>react-share</title>
                <meta name='description' content='hello'></meta>
                <meta
                    property='og:image'
                    content='https://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png'
                />
                <meta
                    data-react-helmet='true'
                    property='og:description'
                    content='Social media share buttons and share counts for React.. Latest version: 4.4.1, last published: a year ago. Start using react-share in your project by running `npm i react-share`. There are 357 other projects in the npm registry using react-share.'></meta>
                <meta property='og:url' content={currentURL} />
            </Helmet>
            <FacebookShareButton url={currentURL}>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
        </div>
    )
}

export default App
