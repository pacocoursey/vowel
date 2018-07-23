const vowels = ['a', 'e', 'i', 'o', 'u'];

function isVowel(c) {
  return vowels.indexOf(c.toLowerCase()) !== -1;
}

function includesVowel(s) {
  for (let i = 0; i < s.length; i += 1) {
    if (isVowel(s.charAt(i))) return true;
  }
  return false;
}

function startsWithVowel(s) {
  return vowels.some(v => s.toLowerCase().startsWith(v));
}

function endsWithVowel(s) {
  return vowels.some(v => s.toLowerCase().endsWith(v));
}

module.exports = {
  vowels,
  isVowel,
  includesVowel,
  startsWithVowel,
  endsWithVowel,
};
