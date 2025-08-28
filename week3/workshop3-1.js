/**
 * 
 * @param { number } score 
 */
const gradeCalculator = (score) => {
  if (score >= 80 && score <= 100) {
    return 'A';
  }

  if (score >= 70 && score < 80) {
    return 'B';
  }

  if (score >= 60 && score < 70) {
    return 'C';
  }

  if (score >= 50 && score < 60) {
    return 'D';
  }

  return 'F';
}

const result = gradeCalculator(85);
console.log('grade result: ', result);
