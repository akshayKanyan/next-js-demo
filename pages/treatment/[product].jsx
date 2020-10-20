import React from "react";
import axios from "axios";
import styles from '../../styles/HowItWorks.module.css';


export const getStaticProps = async (context) => {
    
    let postData = await axios.get(`https://3pupscript.globexcorp.net/wp-json/wp/v2/pages/?slug=${context.params.product}`).then(
        _ => {
            return _.data[0].content.rendered;
        }
    )

    // let staticData = await axios.get(`http://localhost:3000/api/products`).then(
    //     _ => {
    //         return _.data;
    //     }
    // )

    console.log("xxxxxxxxx",postData)
    return {
        revalidate: 10,
        props: {
            postData,
            staticData
        }
    }
}

export const getStaticPaths = async (context) => {
    return {
        paths: [],
        fallback: true
    }
}

export default function Product({ postData={}, staticData={price: '' } }) {
    console.log("xxxxxxxxx",postData);
    return (
        <div>
            <div className={styles.container} dangerouslySetInnerHTML={{__html: postData}}></div>
            <div className={styles.container} >{staticData.price}</div>
        </div>
    )
}
