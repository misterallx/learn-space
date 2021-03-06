import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Course from "./Course";
import { loadQuestions } from "../actions/questions";
// on click, state should load that course's questions!

const Dashboard = ({ courses, score, name, loadQuestions, history }) => {
  const courseButtons = [];
  // onClick, each button should fetch data on the specific course
  // when the backEnd is ready, use a get request with a param id containing course ID
  for (let i = 0; i < courses.length; i++) {
    const { course_id, course_name } = courses[i];
    courseButtons.push(
      <Course
        id={course_id}
        key={i}
        courseName={course_name}
        onClick={() => loadQuestions(course_id, history)}
      />
    );
  }
  return (
    <div className="dashboard">
      <h1>Hi, {name}</h1>
      <h1>Your score is {score}</h1>
      <div className="courses">{courseButtons}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.auth.user.courses,
  score: state.auth.user.score,
  name: state.auth.user.name_info,
});

export default connect(mapStateToProps, { loadQuestions })(Dashboard);
