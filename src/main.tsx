import React from 'react'
import ReactDOM from 'react-dom/client'

const LandingPage = () => (
    <header>
        <center>
            <h1>Jiří Svěcený</h1>
            <h2>Helping startups sail safely through the sea</h2>
            <h3>
                <a href='mailto:jiri.sveceny@icloud.com'>
                    jiri.sveceny@icloud.com
                </a>
            </h3>
        </center>

        <hr/>

        <center>
            <p>
                <a href='https://github.com/sitole'>https://github.com/sitole</a>
            </p>
            <p>
                <a href='https://x.com/jirisveceny'>https://twitter.com/jirisveceny</a>
            </p>
        </center>
    </header>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LandingPage/>
    </React.StrictMode>,
)
