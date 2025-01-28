import { Button } from "@/components/ui/button";
import { loadLayersModel, tensor } from "@tensorflow/tfjs";
import React, { useEffect, useState } from "react";

const LoadModel = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        // Load the model from the public folder
        const model = await loadLayersModel("/model/model_cnn_13/model.json");
        setModel(model);
        console.log("Model loaded successfully!");
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, []);
  const makePrediction = async () => {
    if (model) {
      // Example input data for prediction (e.g., an image or tensor)
      const inputTensor = tensor([[1, 2, 3, 4]]); // Replace with actual data

      // Run prediction
      const prediction = await model.predict(inputTensor);
      prediction.print();
    } else {
      console.log("Model is still loading.");
    }
  };
  return (
    <div className="App">
      <h1>TensorFlow.js Model in React</h1>
      <Button onClick={makePrediction}>Make Prediction</Button>
    </div>
  );
};

export default LoadModel;
