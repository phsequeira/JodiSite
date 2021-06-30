import React from 'react';
import styles from './Home.css'
import NewRelease from '../../components/home/newRelease/NewRelease';


export default function Home() {
    const [albums, setAlbums] = useState([]);
    const []

    //make backend have endpoints 
    //all albums
    //newest release
    //top hits from spotify

    useEffect(() => {
        getMusic()
        .then((content) => setMusic(content))
    }, [])

    return (
        <main className={styles.homePage}>
            <section className={styles.homeBody}>
                <section className={styles.homeNewRelease}>
                    <NewRelease NewAlbum={music}/>
                </section>
                <section className={styles.homeMusic}>
                //music componet shows the most recent albums
                </section>
                <section className={styles.homeEvents}>
                    //event componet shows upcoming events 
                </section>
            </section>
            <section className={styles.homeFooter}>

            </section>
        </main>
    )
}