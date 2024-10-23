/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
  // 1. Get the width of room 1, assign it to a variable
  let roomOneWidth = getRoomWidth(1);
  // 2. Get the lenght of room 1, assign it to a variable
  let roomOneLength = getRoomLength(1);
  // 3. Get the width of room 2, assign it to a variable
  let roomTwoWidth = getRoomWidth(2);
  // 4. Get the length of room 2, assign it to a variable
  let roomTwoLength = getRoomLength(2);
  // 5. Get sqft of room 1 (length * width), assign it to a variable
  let roomOneSqFt = roomOneWidth * roomOneLength;
  // 6. Get sqft of room 2 (length * width), assign it to a variable
  let roomTwoSqFt = roomTwoWidth * roomTwoLength;
  // 7. Get total sqft plus 10% - adding room 1 sqft and room 2 sqft, multiply by 1.1
  let totalArea = (roomOneSqFt + roomTwoSqFt) * 1.1;
  // 8. use showResult() function to render value on the page!
  showResult(totalArea);
}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations: 


	2. Custom styles added: 


*/
