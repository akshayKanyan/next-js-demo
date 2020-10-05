import App from 'next/app';
import React from 'react';
import Link from "next/link";
import "../styles/globals.css"


class MyApp extends App {
  state = { cartValue: 0 }


  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <div className={`mainPage`}>
        <div className="header">
          <div><Link href="/">UPSCRIPT HEALTH</Link></div>
          <div className={`link-title`}><Link href="howItWorks">How It Works</Link></div>
          <div className={`cart`} onClick={_ => { this.setState({ cartValue: this.state.cartValue + 1 }) }}>cart {this.state.cartValue}</div>
        </div>
        <Component {...pageProps} />
      </div>
    );
  }
}

//makeStore function that returns a new store for every request

//withRedux wrapper that passes the store to the App Component
export default MyApp;


