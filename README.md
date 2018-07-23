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

#

<p align="center">
  <a href="http://paco.sh"><img src="https://raw.githubusercontent.com/pacocoursey/pacocoursey.github.io/master/footer.png" height="300"></a>
</p>
