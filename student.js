function getAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(classScores, studentScore) {
  const average = getAverage(classScores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  const result = passed ? "You passed the course." : "You failed the course.";
  return `Class average: ${average}. Your grade: ${grade}. ${result}`;
}
studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85);
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));