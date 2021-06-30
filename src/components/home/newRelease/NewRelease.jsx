import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewRelease.css'
import { useHistory } from 'react-router-dom';



function NewRelease(NewAlbum) {
    let history = useHistory();

    const handleClick = () => {
        history.push(`/album/${NewAlbum.id}`)
    }
return (
    <div className={styles.container}>
        <img className={styles.image} src={NewAlbum.img} />
        <div>
            <h1>{NewAlbum.name}</h1>
            <button className={styles.button} onClick={handleClick}></button>
        </div>
    </div>
)

}

NewRelease.propTypes = {
    NewAlbum: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default NewRelease;