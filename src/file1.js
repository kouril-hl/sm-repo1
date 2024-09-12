import {trimStart} from 'lodash-es';

console.log('file1.js');
console.log('file1.js branch1');
console.log(trimStart('file1.js from repo1', 'file1.js'));
console.log(trimStart('file1.js from repo1', 'file1.js'));