/**
 * Objective: get base, height of the triangle. calculate thr area by using the provided formula, and then display the area.
 * step 1: get base value
 * step 2: added an id in the base input field
 * step 3: use getElementById to access the input field (triangleBaseInput)
 * step 4: get value from the input field (value is string now)
 * step 5: apply perseFlote to convert the value into number
 */

// Triangle
function calculateTringleArea() {
  // get triangle base
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseText)
  console.log(triangleBase)

  // get triangle height
  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const triangleHeight = parseFloat(triangleHeightText)
  console.log(triangleHeight);

  // Area calculation
  const triangleArea = 0.5 * triangleBase * triangleHeight;
  console.log("the area of the triangle is", triangleArea);

  // Value display
  const triangleValue = document.getElementById('triangle-value');
  triangleValue.innerText = triangleArea;
}
