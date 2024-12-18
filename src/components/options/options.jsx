import React from "react";
import styles from "./options.module.css";

const Options = ({ onUpdate, totalFeedback, onReset }) => {

    return(

        <ul className={styles.optionlist}>
        <li className={styles.listli}>
            <button className={styles.buttonstat}  onClick={() => onUpdate(`good`)}>Good</button>
        </li>
        <li className={styles.listli}>
            <button className={styles.buttonstat} onClick={() => onUpdate(`neutral`)}>Neutral</button>
        </li>
        <li className={styles.listli}>
            <button className={styles.buttonstat} onClick={() => onUpdate(`bad`)}>Bad</button>
        </li>
        {totalFeedback > 0 && (
        <li className={styles.listli}>
            <button className={styles.buttonstat} onClick={onReset}>Reset</button>
        </li>
            ) }
    </ul>
    )
}


export default Options;