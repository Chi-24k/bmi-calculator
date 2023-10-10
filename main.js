function calculateBMI(weight, height){
      let BMI = weight/(Math.pow(height, 2));
      return Math.round(BMI);
    }

    


    document.addEventListener('DOMContentLoaded', function () {
      const calculateButton = document.getElementById('calculateButton');
      const weightInput = document.getElementById('weight');
      const heightInput = document.getElementById('height');
      const resultDiv = document.getElementById('result');
  
      calculateButton.addEventListener('click', function () {
          const weight = parseFloat(weightInput.value);
          const height = parseFloat(heightInput.value);
  
          if (!isNaN(weight) && !isNaN(height)) {
              const BMI = calculateBMI(weight, height);
              resultDiv.textContent = `Your BMI is: ${BMI}`;
          } else {
              resultDiv.textContent = 'Please enter valid weight and height values.';
          }
      });
  });
  