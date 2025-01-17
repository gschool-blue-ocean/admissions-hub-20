import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import StatusTag from "../StatusTag/StatusTag";
import StudentCardCSS from "./StudentCard.module.css";
import baseurl from "../../url";

const StudentCard = () => {
  const studentId = useUserStore((state) => state.studentId);
  const [studentData, setStudentData] = useState(null);
  const setStudentName = useUserStore((state) => state.setStudentName);
  const navigate = useNavigate();

  useEffect(() => {
    if (studentId) {
      fetch(`${baseurl}/student/${studentId}`)
        .then((res) => res.json())
        .then((data) => {
          //This data is coming is as multiple rows due to the left join in the api. It is pulling multiple rows of data for the one student because that student has multiple attempts in the attempt table. For the studentName, first_name, last_name, email, start_date, and status below, we only need to pull the data from the first index of the array, hence the "data[0].first_name", etc.
          setStudentData(data);
          setStudentName(`${data[0].first_name} ${data[0].last_name}`);
        });
    }
  }, [studentId]);

  if (!studentData) {
    return (
      <div className="w-50 d-flex justify-content-center align-items-center">
        Select a student
      </div>
    );
  }

  return (
    <div className={StudentCardCSS.cardContainer}>
      <div className={StudentCardCSS.studentInfoCard}>
        <div className={StudentCardCSS.cardHeader}>
          <img
            className={StudentCardCSS.icon}
            src="https://img.icons8.com/?size=512&id=kDoeg22e5jUY&format=png"
          ></img>
          <h3>
            {studentData[0].first_name} {studentData[0].last_name}
          </h3>
        </div>
        <ul className={StudentCardCSS.studentInfoList}>
          <li className={StudentCardCSS.studentInfo}>
            Email: <p>{studentData[0].email}</p>
          </li>
          <li className={StudentCardCSS.studentInfo}>
            Cohort start: <p>{studentData[0].start_date}</p>
          </li>
          <li className={StudentCardCSS.studentInfo}>
            Status:
            <StatusTag studentStatus={studentData[0].status} />
          </li>
        </ul>
        <button
          className={StudentCardCSS.interviewButton}
          variant="primary"
          onClick={() => {
            navigate("/interview");
          }}
        >
          Start new interview
        </button>
      </div>
      <div className={StudentCardCSS.studentInfoCard}>
        <h3 className={StudentCardCSS.notesHeading}>Notes:</h3>
        {/* Here is where we utilize the other rows of data from the api call to grab each note and date for display to the page */}
        {studentData.map((note, index) => (
          <div key={note.attempt_id}>
            <p className={StudentCardCSS.notesInfo}>
              Attempt {index + 1}: {new Date(note.date).toLocaleDateString()}{" "}
            </p>
            <p className={StudentCardCSS.notesNarrative}>{note.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
