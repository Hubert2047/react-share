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
                    content='http://static-production.npmjs.com/338e4905a2684ca96e08c7780fc68412.png'
                />
                <meta data-react-helmet='true' name='msapplication-TileColor' content='#cb3837'></meta>
                <meta
                    data-react-helmet='true'
                    name='msapplication-TileImage'
                    content='http://static-production.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png'></meta>
                <meta
                    data-react-helmet='true'
                    name='msapplication-config'
                    content='http://static-production.npmjs.com/668aac888e52ae13cac9cfd71fabd31f.xml'></meta>
                <meta data-react-helmet='true' property='og:title' content='react-share'></meta>
                <meta data-react-helmet='true' property='og:site_name' content='npm'></meta>
                <meta
                    data-react-helmet='true'
                    name='keywords'
                    content='react,component,react-component,social,media,social-media,share,button,count'></meta>
                <meta
                    data-react-helmet='true'
                    property='og:description'
                    content='Social media share buttons and share counts for React.. Latest version: 4.4.1, last published: a year ago. Start using react-share in your project by running `npm i react-share`. There are 357 other projects in the npm registry using react-share.'></meta>
                <meta property='og:url' content={currentURL} />
            </Helmet>
            <FacebookShareButton>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
        </div>
    )
}

export default App
