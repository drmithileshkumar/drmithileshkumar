
// src/routes/api/predict/+server.js
import { predictSurvival } from './predict';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
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
    // @ts-ignore
    return json({ error: 'Prediction failed: ' + error.message }, { status: 500 });
  }
}