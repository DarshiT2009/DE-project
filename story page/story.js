const storyLengthSlider = document.getElementById('story-length');
const lengthValue = document.getElementById('length-value');

storyLengthSlider.addEventListener('input', () => {
  lengthValue.textContent = storyLengthSlider.value;
});

document.getElementById('delete-button').addEventListener('click', () => {
  document.getElementById('result').value = '';
});

document.getElementById('copy-button').addEventListener('click', () => {
  const result = document.getElementById('result');
  result.select();
  document.execCommand('copy');
  alert('Result copied to clipboard!');
});

document.getElementById('generate-button').addEventListener('click', () => {
  const description = document.getElementById('description').value;
  const generated = document.getElementsById('generated').value;
  const creativity = document.getElementsById('creativity').value;
  const length = storyLengthSlider.value;
  const language = document.getElementById('language').value;

  document.getElementById('result').value = `
  Story description : ${description}
  Generation : ${generated}
  Creativity Level : ${creativity}
  Length : ${length}
  Language : ${language}
  `.trim();
});




