require('./index.less');

let dasdas = () => {
   console.log('S');
};

dasdas();

let xhr = new XMLHttpRequest();

xhr.open('GET', '/api/user', true);

xhr.onload = function() {
   console.log(xhr.response);
};

xhr.send();