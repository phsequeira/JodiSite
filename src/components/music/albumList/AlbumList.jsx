import React from 'react';
import AlbumDetail from '../albumDetail';
import PropTypes from 'prop-types';
import styles from './AlbumList.css';

function AlbumList(stuff) {
    return (
        <ul className={styles.AlbumUL}>
            {stuff.map((album) => (
                <li>
                    <AlbumDetail />
                </li>
            ))}
        </ul>
    )
}