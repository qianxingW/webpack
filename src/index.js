require('./index.less');
// import $ from 'jquery';

import str from './other.js';
 
let dasdas = () => {
   console.log('S');
};

// dasdas();

let xhr = new XMLHttpRequest();

xhr.open('GET', '/api/user', true);

xhr.onload = function() {
   console.log(xhr.response);
};

xhr.send();

console.log(ENV.NODE_ENV);

// console.log($);

console.log(str);

if(module.hot) {
   module.hot.accept('./other.js', () => {
      let str = require('./other.js');

      console.log('更新了', str);
   });
}