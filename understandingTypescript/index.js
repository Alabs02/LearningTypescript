var getInput = function (selector) { return document.querySelector(selector).value; };
var add = function (num1, num2) { return num1 + num2; };
var btn = document.querySelector('#submit');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#output').innerHTML = add(+getInput('#num1'), +getInput('#num2')).toString();
});
