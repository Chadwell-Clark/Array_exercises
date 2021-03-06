import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
export const getStudentsInCohort = (cohort) => {
    let studentsInCohort = students.filter(student => student.cohort === cohort)
    return studentsInCohort
}

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students
export const getFullTimeStudents = () => {
  return students.filter((student) => student.fullTime);
  
};

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor
export const getStudentsByInstructorId = (instructorId) => {
    return students.filter(student => student.instructorId === instructorId)
}
// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
export const getPolyglotStudents = (languageCount) => {
    return students.filter(student => student.languages.length >= languageCount)
}
// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students
export const getAvailableInstructors = () => {
    let availableInstructors = instructors.filter((instructor) => {
     return !students.find(student => {
        return instructor.id === student.instructorId
     })
    });
  return availableInstructors;
}
// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method
export const getStudentsByLanguage = (language) => {
  return students.filter((student) =>
    student.languages.some((lang) => lang === language)
  );
};
/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
//   ***  Chris's solution
// export const getStudentsByLanguages = (languages) => {
//     return students.filter(student => {
//         let isInArray = true;
//         languages.forEach(language => {
//             if(!student.languages.includes(language))isInArray = false
//         })
//         return isInArray;
//     })
//     }   

    //   ***  Bryson's solution
//    export const getStudentsByLanguages = (languages) => {
//       return students.filter((student) => {
//         if (
//           languages.every((language) => student.languages.includes(language))
//         ) {
//           return student;
//         }
//       });
//     };  
    
//   ***  Chad's Solution refactored from below  ***  //
// export const getStudentsByLanguages = (languages) => { 
//   return useStudents().filter((student) => {
//     if (languages.every((lang) => student.languages.includes(lang))) {
//       console.log("every lang found in", student);
//       return student;
//     }
//   });
// };
//   ***  Solution prior to refactor  ***   //
export const getStudentsByLanguages = (languages) => {
  let studentsAll = useStudents();
  let stuWithLang = [];
  studentsAll.forEach((student) => {
    if (languages.every((lang) => student.languages.includes(lang))) {
      console.log("every lang found in", student);
      stuWithLang.push(student);
    } else {
      console.log("NOT every lang found in", student);
    }
  });
  return stuWithLang;
};