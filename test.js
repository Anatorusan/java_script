function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  switch (true) {
      case bmi <= 18.5:
        return "Underweight";
        break;
      case bmi <= 25.0:
        return "Normal";
        break;
      case bmi <= 30.0:
        return "Overweight";
        break;
      case bmi > 30:
        return "Obese";
        break;
      default:
        return 'You have a bug';
        break;
  }
}

console.log(bmi(106, 1.88));