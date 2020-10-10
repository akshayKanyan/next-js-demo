import React from "react";
import axios from "axios";
import styles from '../../styles/HowItWorks.module.css';

export const getStaticProps = async (context) => {
    
    let postData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.index}`).then(
        _ => {
            return _.data;
        }
    )

    console.log("xxxxxxxxx",postData)

    return {
        revalidate: 10,
        props: {
            postData
        }
    }
}

export const getStaticPaths = async (context) => {
    return {
        paths: [],
        fallback: true
    }
}

export default function Home({ postData={} }) {
    return (
        <div className={styles.container}>
            <div className={styles.rowWrapper}>
                <div className={styles.rowContent}>
                    <div className={styles.rowTitle}>name:</div>
                    <div>{postData.title}</div>
                </div>
                <div className={styles.rowContent}>
                    <div className={styles.rowTitle}>description:</div>
                    <div>{postData.body}</div>
                </div>
            </div>
        </div>
    )
}
