// Write a function to check a letter for vowel or consonant:
// Receives a letter from the English alphabet
// Print either "Vowel" or "Consonant"

function vowelOrConsonant(letter) {
  if (letter === 'A' || letter === 'a' ||
    letter === 'E' || letter === 'e' ||
    letter === 'I' || letter === 'i' ||
    letter === 'O' || letter === 'o' ||
    letter === 'U' || letter === 'u')
    console.log("Vowel");
  else
    console.log("Consonant");
}

vowelOrConsonant("a");

function vowelOrConso(letter) {
  var lowerCaseLetter = letter.toLowerCase();
  console.log(lowerCaseLetter);
  if (lowerCaseLetter == "a" ||
      lowerCaseLetter == "e" ||
      lowerCaseLetter == "i" ||
      lowerCaseLetter == "o" ||
      lowerCaseLetter == "u" 
      )
      console.log("Vowel");
    else 
    console.log("Consonant")
}

vowelOrConso("B");
