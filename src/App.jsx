import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/description/description';
import Options from './components/options/options';
import Feedback from './components/feedback/feedback';
import Notifications from './components/notification/notification';

function App() {

  const [feedback, setFeedback] = useState(()=>{
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0};
  });

  const updateFeedback = (feedbackType) =>{
    setFeedback((prevFeedbackType)=>({
      ...prevFeedbackType,
      [feedbackType]: prevFeedbackType[feedbackType] + 1,
    }));
  }

  useEffect(() =>{
    localStorage.setItem("feedback", JSON.stringify(feedback));
  },[feedback]);


  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback)*100);

  

  const handleReset = () => {
    const resetFeedback = ({good:0 , neutral: 0 , bad:0});
    setFeedback(resetFeedback);
  };

  return (
    <>
     <Description />
      <Options onUpdate={updateFeedback} totalFeedback={totalFeedback} onReset={handleReset} />

      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> 
      ) : (
        <Notifications />
      )
      }
    </>
  )
}

export default App
