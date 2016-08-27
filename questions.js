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
  return 'Write your method here';
};

var everyPossiblePair = function(array) {
  return 'Write your method here';
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
};

var addElementToBeginning = function(array, element) {
  return [element].concat(array);
};

var sortByLastLetter = function(array) {
  return 'Write your method here';
};

var getFirstHalf = function(string) {
  half = Math.ceil(string.length / 2);
  return string.substring(0, half);
};

var makeNegative = function(number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
  return 'Write your method here';
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
  return 'Write your method here';
};

var convertArrayToObject = function(array) {
  return 'Write your method here';
};

var getAllLetters = function(array) {
  return 'Write your method here';
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
  return 'Write your method here';
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
  var domain = string.replace(/.*@/, "");
  return domain;
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
