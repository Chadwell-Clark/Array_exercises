// There is no need to edit this file

const students = [
  {
    id: 1,
    firstName: "Summer",
    lastName: "Smith",
    languages: ["Javascript", "C#", "Python", "Ruby"],
    cohort: 43,
    fullTime: true,
    instructorId: 2,
  },
  {
    id: 2,
    firstName: "Tammy",
    lastName: "Gueterman",
    languages: ["Swift", "Kotlin"],
    cohort: 42,
    fullTime: true,
    instructorId: 1,
  },
  {
    id: 3,
    firstName: "Rick",
    lastName: "Sanchez",
    languages: ["Kotlin", "Java", "Javascript", "Python", "Go", "PHP"],
    cohort: 43,
    fullTime: true,
    instructorId: 2,
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Krombopulous",
    languages: ["Javascript", "C#", "Go"],
    cohort: 44,
    fullTime: true,
    instructorId: 3,
  },
  {
    id: 5,
    firstName: "Taddy",
    lastName: "Mason",
    languages: ["Rust", "Python"],
    cohort: 12,
    fullTime: false,
    instructorId: 6,
  },
  {
    id: 6,
    firstName: "Morty",
    lastName: "Cronenberg",
    languages: ["Javascript"],
    cohort: 12,
    fullTime: false,
    instructorId: 6,
  },
];

const instructors = [
  {
    id: 1,
    name: "Adam Sheaffer",
  },
  {
    id: 2,
    name: "Andy Collins",
  },
  {
    id: 3,
    name: "Brenda Long",
  },
  {
    id: 4,
    name: "Jisie David",
  },
  {
    id: 5,
    name: "Joe Shepard",
  },
  {
    id: 6,
    name: "Steve Brownlee",
  },
];

// const getAvailableInstructors = () => {

//    let availableInstructors = [];
//   availableInstructors = instructors.filter((instructor) => {
//      return !students.find(student => {
//         return instructor.id === student.instructorId
//      })
//     });
//     console.log(availableInstructors)
//   return availableInstructors;
// };

// getAvailableInstructors();

// const getStudentsByLanguage = (language) => {
//    return students.filter((student) =>
//     student.languages.some(lang=> lang === language)
//   );
//   console.log(stuByLang)

// };

// getStudentsByLanguage("C#");

// const getStudentByName = (fullName) => {
//   let studentByFullName = students.find(
//     (student) =>
//       `${student.firstName} ${student.lastName}`.toLowerCase() ===
//       fullName.toLowerCase()
//   );
//   console.log("full",studentByFullName)
//   return studentByFullName;
// };
// getStudentByName("Summer SMITH");

// const getStudentWithMostLangs = () => {
//     console.log("why YUNO Sushi")
//   let mostLangs = []
//   let largest = [0]
//   students.forEach(student => {
//       mostLangs.push(student.languages.length)
//   })
//   mostLangs.forEach(numLang => {
//       if (numLang > largest[0]) {
//           largest.pop();
//           largest.push(numLang)
//       }

//       console.log(largest)
//   })
//   return students.find(student => student.languages.length === largest[0])
//     }

// getStudentWithMostLangs();

///!!!!    Strangeness
// const getStudentNames = () => {
//     // let stuFUNM =""
//   let studentFullNames = students.map((student) => {
//       return `${student.firstName} ${student.lastName}`;
//   });
//   console.log(studentFullNames)
// //   console.log(stuFUNM)
//   return studentFullNames;
// };
// getStudentNames();

// const getFullTimeStudents = () => {
//   let ftstu = students.filter((student) => student.fullTime);
//   console.log(ftstu)
// };

// getFullTimeStudents()

// const StudentList = () => {
//   let HtmlString = students.map((student) => {
//    return `<div>

//       <h1>${student.firstName} ${student.lastName}</h1>
//       <h2>Cohort ${student.cohort}</h2>
//     </div>`;
//   });
//   console.log(HtmlString.join(""))
//   return HtmlString.join(" ");
// };

// StudentList()

// const getStudentsByLanguages = (languages) => {
//     let studentWithLangs = students.filter(student =>
//          student.languages.includes(languages.forEach(language=> language))
//         )
//         console.log(studentWithLangs)
//     return studentWithLangs
// }
const getStudentsByLanguages = (languages) => {
  return students.filter((student) => {
    let isInArray = true;
    languages.forEach((lang) => {
      if (!student.languages.includes(lang)) isInArray = false;
    });
    return isInArray;
  });
};

getStudentsByLanguages(["Javascript", "C#"]);
console.log(getStudentsByLanguages(["Javascript", "C#"]));
