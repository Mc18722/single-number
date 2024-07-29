function moveZerosToEnd(arr) {
    // Zähler für die Position des nächsten Nicht-Null-Elements
    let nonZeroIndex = 0;
  
    // Durchlaufe das Array
    for (let i = 0; i < arr.length; i++) {
      // Wenn das aktuelle Element nicht Null ist
      if (arr[i] !== 0) {
        // Tausche es mit dem Element an nonZeroIndex
        [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
        // Erhöhe nonZeroIndex
        nonZeroIndex++;
      }
    }
  
    return arr;
  }