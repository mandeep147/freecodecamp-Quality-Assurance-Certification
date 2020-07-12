##Quality Assurance Projects - Metric-Imperial Converter
###Build a full stack JavaScript app that is functionally similar to this: https://incongruous-beard.glitch.me/.

Working on this project will involve you writing your code on Glitch on our starter project. 

After completing this project you can copy your public glitch url (to the homepage of your app) into this screen to test it! 
Optionally you may choose to write your project on another platform but it must be publicly visible for our testing.

Start this project on Glitch using this link or clone this repository on GitHub! 
If you use Glitch, remember to save the link to your project somewhere safe!

1. I will prevent the client from trying to guess(sniff) the MIME type.
1. I will prevent cross-site scripting (XSS) attacks.
1. I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)
1. I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
1. I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
1. I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
1. If my unit of measurement is invalid, returned will be 'invalid unit'.
1. If my number is invalid, returned with will 'invalid number'.
1. If both are invalid, return will be 'invalid number and unit'.
1. I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
1. My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format '{initNum} {initial_Units} converts to {returnNum} {return_Units}' with the result rounded to 5 decimals in the string.
1. All 16 unit tests are complete and passing.
1. All 5 functional tests are complete and passing.