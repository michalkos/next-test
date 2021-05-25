import App from 'next/app'
import React from 'react'
import Head from 'next/head'

import './_global.scss'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>Next App</title>
                    <meta charSet='UTF-8'></meta>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Head>
                <React.StrictMode>
                    <Component {...pageProps} />
                </React.StrictMode>
            </>
        )
    }
}

export default MyApp
