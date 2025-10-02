export const speakResults = (predictions) => {
  const topPrediction = predictions[0];
  const probability = Math.round(topPrediction.probability * 100);

  const textToSpeak = `I classified this image. The most likely result is ${topPrediction.className} with ${probability} percent confidence.`;

  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.lang = 'en-US';

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn('Text-to-speech not supported in this browser.');
  }
};
