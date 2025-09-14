document.addEventListener('DOMContentLoaded', function () {
  const typedText = ['Web Developer', 'AI/ML Enthusiast', 'Gamer', 'Video Editor'];
  let currentIndex = 0;
  let currentChar = 0;
  const typedElement = document.getElementById('typed');

  function type() {
    if (currentChar < typedText[currentIndex].length) {
      typedElement.textContent += typedText[currentIndex][currentChar];
      currentChar++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    if (currentChar > 0) {
      typedElement.textContent = typedElement.textContent.slice(0, -1);
      currentChar--;
      setTimeout(erase, 100);
    } else {
      currentIndex = (currentIndex + 1) % typedText.length;
      setTimeout(type, 500);
    }
  }

  type();
});
