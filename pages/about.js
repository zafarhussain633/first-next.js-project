import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = ()=>{
    return (
        <div>
            <Head>
            <title>simple next.js app by_zafar</title>
            <meta name="keyword" content="next.js"/>
            </Head>
            <h1 className={styles.title}>about page</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum ipsum temporibus sint consequuntur eligendi nihil dicta debitis, vel officiis cupiditate quisquam aut magni consectetur necessitatibus doloribus fuga, error adipisci impedit sequi magnam earum neque quod. Officia repellendus, dolore enim aspernatur corporis, recusandae dignissimos, beatae libero aliquid deserunt vitae veniam.</p>
        </div>
    )
}

export default About;

