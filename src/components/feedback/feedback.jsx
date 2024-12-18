import React from "react";
import styles from "./feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) =>{
    return(
      <ul className={styles.listfeedback}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback} </li>
        <li>Positive: {Math.round((feedback.good / totalFeedback)*100)}%</li>
      </ul>
    )
}

export default Feedback;

