const students = [
  {
    name: "John",
    grade: "A",
  },
  {
    name: "Jane",
    grade: "B",
  },
  {
    name: "Bob",
    grade: "C",
  }
]

const showStudentCount = () => {
  console.log(`Total students: [${students.length}]`)
}

students.forEach((student, index) => {
  console.log(`Student [${index}]: [${student.name}], Grade: [${student.grade}]`)
});

showStudentCount();
