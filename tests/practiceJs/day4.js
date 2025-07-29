const originalString = "1001";
const reversedString = originalString.split("").reverse().join("");
console.log(reversedString); // Output: "olleh"

if (originalString===reversedString){
    console.log("Its a palindrom ")
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]