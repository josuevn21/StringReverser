function FirstReverse(str) {
  return str.split('').reverse().join('');
}

const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const str = document.querySelector('#string').value;
  const result = FirstReverse(str);
  resultDiv.textContent = `Reversed string: ${result}.`;
});
