import test from 'ava';

const vowel = require('./index');

test('fail isVowel', (t) => {
  t.is(vowel.isVowel('x'), false);
});

test('succeed isVowel', (t) => {
  t.is(vowel.isVowel('o'), true);
});

test('fail includesVowel', (t) => {
  t.is(vowel.includesVowel('rhythms'), false);
});

test('succeed includesVowel with y flag', (t) => {
  t.is(vowel.y(true).includesVowel('rhythms'), true);
});

test('fail startsWithVowel', (t) => {
  t.is(vowel.startsWithVowel('xylophone'), false);
});

test('succeed endsWithVowel', (t) => {
  t.is(vowel.endsWithVowel('persiflage'), true);
});

test('pass string to isVowel', (t) => {
  t.is(vowel.isVowel('alpha'), true);
});
