// src/lib/predict.js
/**
 * @param {number} pclass
 * @param {number} sex
 * @param {number} age
 * @param {number} sibsp
 * @param {number} parch
 * @param {number} fare
 */
export async function predictSurvival(pclass, sex, age, sibsp, parch, fare) {
  try {
    const response = await fetch('http://127.0.0.1:1234/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pclass, sex, age, sibsp, parch, fare })
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.prediction;
  } catch (error) {
    // @ts-ignore
    console.error('Prediction error:', error.message);
    // @ts-ignore
    throw new Error(`Prediction failed: ${error.message}`);
  }
}