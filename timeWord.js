function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
   const time = tConvert ('06:03');
   const hour = parseInt(time.slice(0,1))
   const minute = parseInt(time.slice(2, 4))
   const timeOfDay = time.slice(4)
   
  
   
  const theTime = `${convertHourToName(hour)} ${convertNumberToName(minute)} ${timeOfDay}`
   
   
  function convertHourToName(num) {
      if (num > 12) {
          num -= 12;
      }
      return convertNumberToName(num);
  }
  
  function convertNumberToName(num) {
      const lowNames = ["oh clock", "one", "two", "three", 
                    "four", "five", "six", "seven", "eight", "nine", 
                   "ten", "eleven", "twelve", "thirteen", "fourteen", 
                    "fifteen", "sixteen", "seventeen", 
                    "eighteen", "nineteen"];
      const tensNames = ["twenty", "thirty", "forty", "fifty", 
                  "sixty", "seventy", "eighty", "ninety"];
      let tens, ones, result;
      if (num < lowNames.length) {
          result = lowNames[num];
      } else {
          tens = Math.floor(num / 10);
          ones = num % 10;
          if (tens <= 9) {
              result = tensNames[tens - 2];
              if (ones > 0) {
                  result += " " + lowNames[ones];
              }
          } else {
              result = "unknown"
          }
      }
      return result;
  }

  module.exports = {
      tConvert,
        convertHourToName,
        convertNumberToName
  }
  
  
  