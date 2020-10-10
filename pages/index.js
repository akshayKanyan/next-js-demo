import styles from '../styles/Home.module.css'
import axios from "axios";
import Link from "next/link"
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
