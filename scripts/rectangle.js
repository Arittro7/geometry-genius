// rectangle

function calculateRectangleArea() {
  // get rectangle width
  const rectangleWidthInput = document.getElementById('rectangle-width');
  const rectangleWidthText = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthText)
  console.log(rectangleWidth);

  // get rectangle length
  const rectangleLengthInput = document.getElementById('rectangle-length');
  const rectangleLengthText = rectangleLengthInput.value;
  const rectangleLength = parseFloat(rectangleLengthText)
  console.log(rectangleLength);

  // area calculation
  const rectangleArea = rectangleWidth * rectangleLength
  console.log('The area of the rectangle is',rectangleArea);

  // display rectangle value

  const rectangleValue = document.getElementById('rectangle-value');
  rectangleValue.innerText = rectangleArea;
// rectangle function code above this comment!!!!
}