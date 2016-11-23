var selectElementsStartingWithA = function(array) {
  return array.filter(function(element) {
    return element.charAt(0) === 'a';
  });
};

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(element) {
    return element.match(/^[aeiou]/);
  });
};

var removeNullElements = function(array) {
  return array.filter(function(element) {
    return element !== null;
  });
};

var removeNullAndFalseElements = function(array) {
  return array.filter(function(element) {
    return element !== null && element !== false;
  });
};

var reverseWordsInArray = function(array) {
  return array.map(function(word) {
    return word.split("").reverse().join("");
  });
};

var everyPossiblePair = function(array) {
  var pairs = [];
  var sorted = array.sort();
  sorted
    .slice(0, sorted.length - 1)
    .forEach(function (first, n) {
      var tail = sorted.slice(n + 1, sorted.length);
      tail.forEach(function (item) {
        pairs.push([first, item]);
      });
    });
  return pairs.sort();
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
};

var addElementToBeginning = function(array, element) {
  return [element].concat(array);
};

var sortByLastLetter = function(array) {
  return array.sort(function(a, b){
    if(a[a.length -1] < b[b.length -1]){
      return - 1;
    }else{ return 1; }
  });
};

var getFirstHalf = function(string) {
  half = Math.ceil(string.length / 2);
  return string.substring(0, half);
};

var makeNegative = function(number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
  return array.reduce(function(total, word) {
    var wordReversed = word.split("").reverse().join("");
    return word === wordReversed ? total+1 : total;
  }, 0);
};

var shortestWord = function(array) {
  return array.reduce(function(a, b) {
    return a.length < b.length ? a : b;
  });
};

var longestWord = function(array) {
  return array.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
};

var sumNumbers = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  });
};

var repeatElements = function(array) {
  var result = [];
  for  (var i = 0; i < 2; i++)
    result.push(array);
  return Array.prototype.concat.apply([], result);
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += parseInt(array[i], 10);
  }
  var average = sum/array.length;
  return average;
};

var getElementsUntilGreaterThanFive = function(array) {
  var i = 0;
  var newArray = [];
  while(array[i] <= 5){
    newArray.push(array[i]);
    i++;
  }
  return newArray;
};

var convertArrayToObject = function(array) {
  var obj = {};
  array.forEach(function(currentValue, index, array){
    if(index % 2 === 0){
      obj[currentValue] = array[index + 1];
    }
  });
  return obj;
};

var getAllLetters = function(array) {
  return array.join('').split('').reduce(function(pv,cv){
    if(pv.indexOf(cv) < 0){
      pv.push(cv);
    }
    return pv;
  },[]).sort();
};

var swapKeysAndValues = function(object) {
  var new_object = {};
  for (var prop in object) {
    if(object.hasOwnProperty(prop)) {
      new_object[object[prop]] = prop;
    }
  }
  return new_object;
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if(string.charAt(i) === " " || string.charAt(i) !== string.charAt(i).toUpperCase()){
      newString+= string.charAt(i);
    }
  }
  return newString;
};

var roundUp = function(number) {
  return Math.ceil(number);
};

var formatDateNicely = function(date) {
  function pad(s) {
    return (s < 10) ? '0' + s : s;
  }
  var new_date = new Date(date);
  return [pad(new_date.getDate()), pad(new_date.getMonth()+1), new_date.getFullYear()].join('/');
};


var getDomainName = function(string) {
  return string.substring((string.lastIndexOf("@")+1),(string.lastIndexOf(".com")));
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  var specialChars = "~`!#$%^&@*+=-[]\\\';,/{}|\":<>?";
  for (var i = 0; i < string.length; i++) {
    if (specialChars.indexOf(string.charAt(i)) != -1) {
      return true;
    }
  }
  return false;
};

var squareRoot = function(number) {
  return Math.sqrt(number);
};

var factorial = function(number) {
  var value = 1;
  for (var i = 2; i <= number; i++)
       value = value * i;
  return value;
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  var n =  (5/9) * (number-32);
  return Math.ceil(n);
};

var letterPosition = function(array) {
  return 'Write your method here';
};
