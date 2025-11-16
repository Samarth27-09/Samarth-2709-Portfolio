function startCipherAnimation(element, phrases, options = {}) {
  if (!element || !Array.isArray(phrases) || phrases.length === 0) {
    return;
  }

  const {
    typingSpeed = 100,
    deletingSpeed = 60,
    pauseAtEnd = 1500,
    pauseAtStart = 400,
  } = options;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId;

  const type = () => {
    const currentPhrase = phrases[phraseIndex];
    const visibleText = currentPhrase.slice(0, charIndex);
    element.textContent = visibleText;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        charIndex += 1;
        timeoutId = setTimeout(type, typingSpeed);
      } else {
        isDeleting = true;
        timeoutId = setTimeout(type, pauseAtEnd);
      }
    } else if (charIndex > 0) {
      charIndex -= 1;
      timeoutId = setTimeout(type, deletingSpeed);
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeoutId = setTimeout(type, pauseAtStart);
    }
  };

  type();

  return () => clearTimeout(timeoutId);
}

window.startCipherAnimation = startCipherAnimation;
