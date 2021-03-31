import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentNames
// It should not accept any parameters`
// It should return an array of strings. Each string should be the full name of the student
// export const getStudentNames = () => {
//   let studentFullNames = students.map((student) => {
//     return `${student.firstName} ${student.lastName}`
//   });
// }
 export const getStudentNames = () => {
  let studentFullNames = students.map((student) => {
    return `${student.firstName} ${student.lastName}`;
  });
  // console.log(studentFullNames);
  //   console.log(stuFUNM)
  return studentFullNames;
};
// Export a function named StudentList
// It should not accept any parameters
// It should return a single HTMLString that contains a <div> element for every student that looks like the following:
// Ex:
/*
  <div> 
   
    <h1>Summer Smith</h1>
    <h2>Cohort 43</h2>
  </div>
*/
export const StudentList = () => {
  let HtmlString = students.map((student) => {
    return `<div>

      <h1>${student.firstName} ${student.lastName}</h1>
      <h2>Cohort ${student.cohort}</h2>
    </div>`;
  });
  // console.log(HtmlString.join(""));
  return HtmlString.join(" ");
};