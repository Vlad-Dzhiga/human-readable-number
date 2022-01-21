module.exports = function toReadable (number) {
    let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let hundred = ' hundred';
    let output = '';
    let numString = number.toString();
  
    if (number == 0) {
        return 'zero';
    }
    if (number < 20) {
        output = ones[number];
        return output.slice(1);
    }
  
    if (numString.length == 3) {
      if(number >= 110 && number <= 119 || number >= 210 && number <= 219 ||number >= 310 && number <= 319 ||number >= 410 && number <= 419 ||number >= 510 && number <= 519 ||number >= 610 && number <= 619 ||number >= 710 && number <= 719 ||number >= 810 && number <= 819 ||number >= 910 && number <= 919){
        output = ones[parseInt(numString.charAt(0))] + hundred;
        output += ones[Number(numString.slice(1))];
        return output.slice(1);
      } 
        output = ones[parseInt(numString.charAt(0))] + hundred;
        output += tens[parseInt(numString.charAt(1))];
        output += ones[parseInt(numString.charAt(2))];
        return output.slice(1);
    }
    output += tens[parseInt(numString.charAt(0))];
    output += ones[parseInt(numString.charAt(1))];
  
    return output.slice(1);
}
