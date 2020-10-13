import App from 'next/app';
import React from 'react';
import Link from "next/link";
import Grid from '@material-ui/core/Grid';
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
          <div className="header-text">Stay safe with contact-free delivery</div>
          {/* <div><Link href="/">UPSCRIPT HEALTH</Link></div>
          <div className={`link-title`}><Link href="howItWorks">How It Works</Link></div>
          <div className={`cart`}>cart {this.state.cartValue}</div> */}
        </div>
        <Grid container classes={{ container: "header-grid" }}>
          <Grid item xs={12} sm={4} md={4} lg={4} classes={{ root: "header-content-grid" }}>
            <img className="up-logo" src={"/up-logo.svg"} />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} >
            <Grid container classes={{ container: "header-content-grid1" }}>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="header-content-grid1">Treatments</div>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="header-content-grid1">How It Works</div>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="header-content-grid1">FAQs</div>
              </Grid>
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="header-content-grid1">Support</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <div className="heaeder-3">header2</div>
          </Grid>
        </Grid>
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


