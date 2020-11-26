const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

var findReplace = (source, find, replace, capitalize = false, highlight = true) => {
  var output = source;

  var regexIncludes = new RegExp(`( )(${find})(\\.| )`, 'i');
  var matchIncludes = source.match(regexIncludes);

  var regexStartsWith = new RegExp(`^(${find})(\\.| )`, 'i');
  var matchStartsWith = source.match(regexStartsWith);

  if (matchIncludes || matchStartsWith) {
    var match = matchIncludes
      ? matchIncludes[2]
      : matchStartsWith[1];

    var replaceFormatted = !capitalize
      ? replace
      : replace.charAt(0).toUpperCase() + replace.slice(1) + '';

    replaceFormatted = highlight === true ? `<span class="highlight">${replaceFormatted}</span>`: replaceFormatted;

    output = source.replace(match, replaceFormatted);
  }

  return output;
}
class Translator {
  translate(input, localeSelect, highlight = true) {
    var textOutput = input;

    let britishToamericanSpelling = {};
    Object.keys(americanToBritishSpelling).forEach(word => britishToamericanSpelling[americanToBritishSpelling[word]] = word);

    let britishToamericanTitles = {};
    Object.keys(americanToBritishTitles).forEach(word => britishToamericanTitles[americanToBritishTitles[word]] = word);

    const spelling = localeSelect === 'american-to-british' ? americanToBritishSpelling : britishToamericanSpelling;
    const only = localeSelect === 'american-to-british' ? americanOnly : britishOnly;
    const titles = localeSelect === 'american-to-british' ? americanToBritishTitles : britishToamericanTitles;

    Object.keys(spelling).forEach(word => textOutput = findReplace(
      textOutput,
      word,
      spelling[word],
      false,
      highlight
    ));

    Object.keys(only).forEach((word, key) => {
      if (Object.keys(only).lastIndexOf(word) === key) {
        textOutput = findReplace(
          textOutput,
          word,
          only[word],
          false,
          highlight
        )
      }
    });

    Object.keys(titles).reverse().forEach(word => {
      textOutput = findReplace(
        textOutput,
        word,
        titles[word],
        true,
        highlight
      ).replace('  ', ' ')
    });
    let regexHours;
    if (localeSelect === 'american-to-british') {
      regexHours = /\d+:\d+/g;
    } else {
      regexHours = /\d+.\d+/g;
    }

    var match = textOutput.match(regexHours);
    if (match) {
      const toReplace = match[0];
      if (localeSelect === 'american-to-british') {
        match.map(find => {
          if(highlight) {
            let translated = `<span class="highlight">${match[0].replace(':', '.')}</span>`;
            textOutput = textOutput.replace(toReplace, translated);
          } else {
            let translated = match[0].replace(':', '.');
            textOutput = textOutput.replace(toReplace, translated);
          }
        });
      } else {
        match.map(find => {
          if(highlight) {
            let translated = `<span class="highlight">${match[0].replace('.', ':')}</span>`;
          textOutput = textOutput.replace(toReplace, translated);
          } else {
            let translated = match[0].replace('.', ':');
            textOutput = textOutput.replace(toReplace, translated);
          }
        });
      }
    }

    return textOutput;
  }
}

module.exports = Translator;
