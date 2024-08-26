import React from 'react'
import ReactDOM from 'react-dom/client'

import './globals.css'

const LandingPage = () => (
    <div className={'flex flex-col h-screen justify-center items-center'}>
        <header className='pt-10 pb-5'>
            <div className='container mx-auto text-center'>
                <h1 className='text-6xl font-bold'>Jiří Svěcený</h1>
                <p className='text-3xl mt-4'>
                    Helping startups sail safely through the sea
                </p>

                <div className={'mt-4 grid gap-2 grid-cols-1'}>
                    <a href='mailto:jiri.sveceny@icloud.com' className='text-2xl text-gray-700 mt-6 block hover:underline border border-gray-300 px-4 py-2 inline-block rounded'>
                        jiri.sveceny@icloud.com
                    </a>
                    <a href='https://github.com/sitole' className='text-2xl text-gray-700 mt-6 block hover:underline border border-gray-300 px-4 py-2 inline-block rounded'>
                        github.com/sitole
                    </a>
                    <a href='https://x.com/jirisveceny' className='text-2xl text-gray-700 mt-6 block hover:underline border border-gray-300 px-4 py-2 inline-block rounded'>
                        twitter.com/jirisveceny
                    </a>
                </div>
            </div>
        </header>
    </div>
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LandingPage/>
    </React.StrictMode>,
)
