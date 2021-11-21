const getInput = (selector: string) => document.querySelector<HTMLInputElement>(selector).value;

const add = (num1: number, num2: number) => num1 + num2;

const btn = document.querySelector('#submit');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#output').innerHTML = add(+getInput('#num1'), +getInput('#num2')).toString();
})