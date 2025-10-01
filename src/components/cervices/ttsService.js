export const speakResults = (predictions, languageCode) => {
  const topPrediction = predictions[0];

  const textToSpeak = `The image is likely a ${
    topPrediction.className
  } with ${Math.round(topPrediction.probability * 100)} percent confidence.`;

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.lang = languageCode;

    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Text-to-speech not supported in this browser.");
  }
};
