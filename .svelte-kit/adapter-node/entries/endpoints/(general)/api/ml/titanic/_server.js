import { j as json } from "../../../../../../chunks/index.js";
async function predictSurvival(pclass, sex, age, sibsp, parch, fare) {
  try {
    const response = await fetch("http://127.0.0.1:1234/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pclass, sex, age, sibsp, parch, fare })
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.prediction;
  } catch (error) {
    console.error("Prediction error:", error.message);
    throw new Error(`Prediction failed: ${error.message}`);
  }
}
async function POST({ request }) {
  const { pclass, sex, age, sibsp, parch, fare } = await request.json();
  try {
    const result = await predictSurvival(
      Number(pclass),
      Number(sex),
      Number(age),
      Number(sibsp),
      Number(parch),
      Number(fare)
    );
    return json({ prediction: result });
  } catch (error) {
    return json({ error: "Prediction failed: " + error.message }, { status: 500 });
  }
}
export {
  POST
};
