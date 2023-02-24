import React from "react";
import styles from "./Overview.module.css";

const Overview = (props) => {
  const { personalInfoArray } = props;
  const { educationArray } = props;
  const { workHistoryArray } = props;

  const personalInfoLabels = ["Name :", "Email: ", "Number: "];
  const educationLabels = ["School: ", "Major: ", "Graduation date: "];
  const workHistoryLabels = [
    "Company: ",
    "Position: ",
    "Description: ",
    "Start date: ",
    "End date: ",
  ];

  let personalInfoPosition = -1;
  let educationPosition = -1;
  let workHistoryPosition = -1;

  return (
    <div>
      <div className={styles.personalInfoHead}>Personal Info</div>
      <div className={styles.personalInfo}>
        {personalInfoArray.map((info) => {
          if (info.text != "") {
            personalInfoPosition++;
            console.log(info);
            return (
              <li key={info.id}>
                {personalInfoLabels[personalInfoPosition]}
                {info.text}
              </li>
            );
          }
        })}
      </div>
      <div className={styles.educationHead}>Education</div>
      <div className={styles.educationInfo}>
        {educationArray.map((info) => {
          educationPosition++;
          return (
            <li key={info.id}>
              {educationLabels[educationPosition]}
              {info.text}
            </li>
          );
        })}
      </div>
      <div className={styles.workHistoryHead}>Work history</div>
      <div className={styles.workHistory}>
        {workHistoryArray.map((info) => {
          workHistoryPosition++;
          return (
            <li key={info.id}>
              {workHistoryLabels[workHistoryPosition]}
              {info.text}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
