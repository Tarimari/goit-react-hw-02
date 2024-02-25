import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [points, setPoints] = useState(() => {
    const savedClicks = localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(points));
  }, [points]);

  const totalFeedback = points.good + points.neutral + points.bad;
  const persent = Math.round(
    ((points.good + points.neutral) / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    setPoints({ ...points, [feedbackType]: points[feedbackType] + 1 });
  };
  const resetClick = () => {
    setPoints({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetClick={resetClick}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback
          points={points}
          totalFeedback={totalFeedback}
          persent={persent}
        ></Feedback>
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </>
  );
}
