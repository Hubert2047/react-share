import { Helmet } from 'react-helmet'
import { FacebookIcon, FacebookShareButton } from 'react-share'
import './App.css'
function App() {
    // const currentURL = window.location.href
    return (
        <div className='App'>
            <Helmet>
                {/* <meta http-equiv='cleartype' content='on'></meta> */}
                <meta property='og:type' content='website' />
                <meta property='og:title' content='react-share11'></meta>
                <meta property='og:description' content='Socialeact...'></meta>
                <meta property='og:image' content='http://chat.openai.com/images/chatgpt-share-og.png' />
                <meta property='og:url' content='https://hubert2047.github.io/react-share/' />
                {/* <meta property='og:site_name' content='npm'></meta> */}
                {/* <meta name='msapplication-TileColor' content='#cb3837'></meta> */}
                {/* <meta
                    name='msapplication-TileImage'
                    content='http://static-production.npmjs.com/7a7ffabbd910fc60161bc04f2cee4160.png'></meta> */}
                {/* <meta
                    name='msapplication-config'
                    content='http://static-production.npmjs.com/668aac888e52ae13cac9cfd71fabd31f.xml'></meta> */}
                {/* <meta property='og:site_name' content='npm'></meta> */}
                {/* <meta name='keywords' content='rsocial-media,share,button,count'></meta> */}
            </Helmet>
            <FacebookShareButton url='https://hubert2047.github.io/react-share/'>
                <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
        </div>
    )
}

export default App
