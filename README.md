# Vowel [![npm version](https://badge.fury.io/js/vowel.svg)](https://badge.fury.io/js/vowel)

Tiny library for working with vowels.

## Install

```
$ npm install vowel
```

## Usage

```js
const vowel = require('vowel');

const { vowels } = vowel;
//=> ['a', 'e', 'i', 'o', 'u']

const { isVowel } = vowel;
isVowel('o');
//=> true

const { includesVowel } = vowel;
includesVowel('rhythms');
//=> false

const { startsWithVowel } = vowel;
startsWithVowel('xylophone');
//=> false

const { endsWithVowel } = vowel;
endsWithVowel('persiflage');
//=> true
```

## API

### .vowels

Returns an `array` with a list of vowels.

### .y(`boolean`)

If whether `y` should be included as a vowel.

### .isVowel(`string`)

If string is a single character, returns whether the string is a vowel. If string is longer than a single character, calls `.includesVowel`.

### .includesVowel(`string`)

Returns whether the string includes vowels.

### .startsWithVowel(`string`)

Returns whether the string starts with a vowel.

### .endsWithVowel(`string`)

Returns whether the string ends with a vowel.

#

<p align="center">
  <a href="http://paco.sh"><img src="https://raw.githubusercontent.com/pacocoursey/pacocoursey.github.io/master/footer.png" height="300"></a>
</p>
