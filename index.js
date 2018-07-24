const vowels = ['a', 'e', 'i', 'o', 'u'];

function validate(s) {
  if (typeof s !== 'string') {
    throw new TypeError(`Expected string, received ${typeof s}.`);
  }
}

function isVowel(c) {
  if (c.length > 1) return includesVowel(c);
  validate(c);
  return vowels.indexOf(c.toLowerCase()) !== -1;
}

function y(b) {
  if (b === true) vowels.push('y');
  else if (b === false) vowels.splice(vowels.indexOf('y'), 1);
  return this;
}

function includesVowel(s) {
  validate(s);

  for (let i = 0; i < s.length; i += 1) {
    if (isVowel(s.charAt(i))) return true;
  }
  return false;
}

function startsWithVowel(s) {
  validate(s);
  return vowels.some(v => s.toLowerCase().startsWith(v));
}

function endsWithVowel(s) {
  validate(s);
  return vowels.some(v => s.toLowerCase().endsWith(v));
}

module.exports = {
  vowels,
  y,
  isVowel,
  includesVowel,
  startsWithVowel,
  endsWithVowel,
};
