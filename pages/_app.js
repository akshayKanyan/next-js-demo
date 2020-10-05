import App from 'next/app';
import React from 'react';
import Link from "next/link";
import "../styles/globals.css"
export const CartContext = React.createContext();


class MyApp extends App {
  state = { cartValue: 0 }


  setCartValue = () => {
    this.setState({ cartValue: this.state.cartValue + 1 })
  }


  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <div className={`mainPage`}>
        <div className="header">
          <div><Link href="/">UPSCRIPT HEALTH</Link></div>
          <div className={`link-title`}><Link href="howItWorks">How It Works</Link></div>
          <div className={`cart`}>cart {this.state.cartValue}</div>
        </div>
        <CartContext.Provider value={{ cartValue: this.state.cartValue, setCartValue: this.setCartValue }}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </div>
    );
  }
}

//makeStore function that returns a new store for every request

//withRedux wrapper that passes the store to the App Component
export default MyApp;


