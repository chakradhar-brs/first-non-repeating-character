// Function to find the first non-repeating character in a string
function findNonRepeatingCharacter() {
    const inputString = document.getElementById("inputString").value.trim();
    const nonRepeatingChar = findFirstNonRepeatingChar(inputString);
  
    const nonRepeatingCharacterDiv = document.getElementById(
      "nonRepeatingCharacter"
    );
    nonRepeatingCharacterDiv.textContent =
      "First Non-Repeating Character: " + nonRepeatingChar;
  }
  
  // Function to find the first non-repeating character in a string
  function findFirstNonRepeatingChar(str) {
    const charCount = new Map();
  
    // Count occurrences of each character
    for (let char of str) {
      charCount.set(char, charCount.has(char) ? charCount.get(char) + 1 : 1);
    }
  
    // Find the first non-repeating character
    for (let char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return "No non-repeating character found";
  }
  
  // Function to clear input fields
  function clearInputFields() {
    document.getElementById('inputString').value = '';
  }
  
  // Function to handle Enter key press
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      findNonRepeatingCharacter();
    }
  }
  
  // Add event listener for window.onload event to clear input fields
  window.onload = clearInputFields;
  
  // Add event listener for "keypress" event to input field
  document.getElementById("inputString").addEventListener("keypress", handleKeyPress);
  
  // Add event listener for "Find Non-Repeating Character" button click
  document.getElementById("findNonRepeatingCharacterButton").addEventListener("click", findNonRepeatingCharacter);