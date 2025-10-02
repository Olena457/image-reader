

import { useState, useEffect, useRef, useContext } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";
import { CircularProgress, Box, Button, Typography } from "@mui/material";

import { speakResults } from "../../components/cervices/ttsService.js";
import { LanguageContext } from '../../components/contexts/LanguageContext.js';

const texts = {
  'en-US': {
    title: 'AI-Classification',
    loading: 'Loading MobileNet Model...',
    upload: 'Upload Image',
    classify: 'Classify',
    clear: 'Clear',
    results: 'Classification Results',
    mostLikely: '(Most Likely)',
  },
  'uk-UA': {
    title: 'ШІ-Класифікація Зображень',
    loading: 'Завантаження моделі MobileNet...',
    upload: 'Завантажити Фото',
    classify: 'Класифікувати',
    clear: 'Очистити',
    results: 'Результати Класифікації',
    mostLikely: '(Найбільш Ймовірно)',
  }
};


function ReaderImage() {
  const { language } = useContext(LanguageContext);
  
  const t = texts[language] || texts['en-US']; 

  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const [results, setResults] = useState([]);

  const imageRef = useRef();
  const fileInputRef = useRef();

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await mobilenet.load({ version: 2, alpha: 1.0 });
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading model:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadModel();
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
      setResults([]);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };
  
  const handleClear = () => {
    if (imageURL) {
      URL.revokeObjectURL(imageURL);
    }
    setImageURL("");
    setResults([]);
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
  };

  const classifyImage = async () => {
    if (model && imageRef.current) {
      const predictions = await model.classify(imageRef.current);
      setResults(predictions);

      if (predictions.length > 0) {
        speakResults(predictions);
      }
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5">{t.loading}</Typography>
        <CircularProgress sx={{ mt: 2 }} />
      </Box>
    );
  }

  return (
    <Box sx={{  mx: "auto", textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t.title}
      </Typography>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={fileInputRef}
        onChange={handleUpload}
      />

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <Button variant="contained" onClick={triggerUpload}>
          {t.upload}
        </Button>
        {imageURL && (
          <Button variant="outlined" onClick={classifyImage}>
            {t.classify}
          </Button>
        )}
        {imageURL && (
          <Button variant="outlined" color="error" onClick={handleClear}>
            {t.clear}
          </Button>
        )}
      </Box>

      {imageURL && (
        <Box sx={{ mb: 3 }}>
          <img
            src={imageURL}
            alt="Image for classification"
            ref={imageRef}
            crossOrigin="anonymous"
            style={{ maxWidth: "100%", borderRadius: "8px"}}
          />
        </Box>
      )}

      {/* CLASSIFICATION RESULTS */}
      {results.length > 0 && (
        <Box>
          {/* ✅ ВИКОРИСТАННЯ ПЕРЕКЛАДУ */}
          <Typography variant="h5" gutterBottom>
            {t.results}
          </Typography>
          {results.map((res, index) => (
            <Box key={res.className} sx={{ mb: 1 }}>
              <Typography variant="body1">
                <strong>{res.className}</strong> —{" "}
                {(res.probability * 100).toFixed(2)}%
                {index === 0 && (
                  <span style={{ color: "#1976d2" }}> {t.mostLikely}</span>
                )}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default ReaderImage;
