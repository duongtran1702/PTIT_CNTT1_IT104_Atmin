import { Component } from 'react';
import styles from '../styles/ColorBox.module.css';
export default class ColorBox extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.boxRed}>Box Red</div>
                <div className={styles.boxBlue}>Box Blue</div>
                <div className={styles.boxGreen}>Box Green</div>
            </div>
        );
    }
}
