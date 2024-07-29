function isPalindrome(str) {
    // Entferne alle Nicht-Alphanumerischen Zeichen und konvertiere zu Kleinbuchstaben
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Vergleiche den bereinigten String mit seiner umgekehrten Version
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  // Testfälle
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(isPalindrome("race a car")); // false
  console.log(isPalindrome("Was it a car or a cat I saw?")); // true
  console.log(isPalindrome("Hello, World!")); // false
  console.log(isPalindrome("12321")); // true
  console.log(isPalindrome("Madam, I'm Adam")); // true