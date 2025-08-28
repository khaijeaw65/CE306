const students = [
  {
    name: "John",
    score: 100
  },
  {
    name: "Jane",
    score: 85
  },
  {
    name: "Bob",
    score: 40
  }
];

/**
 * 
 * @param { number } criteriaScore 
 */
const filterPassedStudents = (criteriaScore) =>{
  students.forEach((student) => {
    if (student.score >= criteriaScore) {
      console.log(`Student ${student.name} passed with score ${student.score}`);
    }
  })
}

filterPassedStudents(50);