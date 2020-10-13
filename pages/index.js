import styles from '../styles/Home.module.css'
import axios from "axios";
import Link from "next/link";
import Grid from '@material-ui/core/Grid';
import { CartContext } from "./_app";

export const getStaticProps = async (context) => {
  let postData = await axios.get("https://jsonplaceholder.typicode.com/posts").then(
    _ => {
      return _.data;
    }
  )

  return {
    revalidate: 10,
    props: {
      postData
    }
  }
}


export default function Home({ postData }) {
  return (
    <div className={styles.container}>
      <Grid container>
        <Grid item classes={{ root: styles["height-100"] }}>
          <div className={styles.banner}>

          </div>
        </Grid>
        <Grid item xs={12} classes={{ root: styles["height-100"] }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={`${styles.tile} ${styles.tileColor1}`}></div>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
      {
        postData.map(_ => {
          return (
            <div key={_.id} className={styles.rowWrapper}>
              <div className={styles.rowContent}>
                <div className={styles.rowTitle}>Post Name:</div>
                <div><Link href={`post/${_.id}`}>{_.title}</Link></div>
              </div>
              <div className={styles.rowContent}>
                <div className={styles.rowTitle}>description:</div>
                <div>{_.body}</div>
              </div>
              {/* <div className={styles.rowContent}>
                <div className={styles.rowTitle}>email:</div>
                <div>{_.email}</div>
              </div>
              <div className={styles.rowContent}>
                <div className={styles.rowTitle}> phone:</div>
                <div>{_.phone}</div>
              </div> */}
              <CartContext.Consumer>
                {({ setCartValue }) => (
                  <input onClick={setCartValue} className={styles["cart-button"]} type="button" value="add to cart"></input>
                )}
              </CartContext.Consumer>
            </div>
          )
        })
      }
    </div>
  )
}
