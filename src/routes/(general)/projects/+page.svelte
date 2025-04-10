<!-- src/routes/+page.svelte -->
<script>
    let pclass = '';
    let sex = '';
    let age = '';
    let sibsp = '';
    let parch = '';
    let fare = '';
    let prediction = '';
    let error = '';
  
    async function handleSubmit() {
      const data = { pclass, sex, age, sibsp, parch, fare };
      try {
        const response = await fetch('/api/ml/titanic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        if (result.error) {
          error = result.error;
          prediction = '';
        } else {
          prediction = result.prediction;
          error = '';
        }
      } catch (err) {
        error = 'Error connecting to server';
        prediction = '';
      }
    }
  </script>
  
  <main>
    <h1>Titanic Survival Predictor</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <label>
        Pclass (1-3):
        <input type="number" bind:value={pclass} min="1" max="3" required />
      </label>
      <label>
        Sex (0=Female, 1=Male):
        <input type="number" bind:value={sex} min="0" max="1" required />
      </label>
      <label>
        Age:
        <input type="number" bind:value={age} step="0.1" required />
      </label>
      <label>
        SibSp:
        <input type="number" bind:value={sibsp} min="0" required />
      </label>
      <label>
        Parch:
        <input type="number" bind:value={parch} min="0" required />
      </label>
      <label>
        Fare:
        <input type="number" bind:value={fare} step="0.01" required />
      </label>
      <button type="submit">Predict</button>
    </form>
  
    {#if prediction}
      <h2>Prediction: {prediction}</h2>
    {/if}
    {#if error}
      <p style="color: red">{error}</p>
    {/if}
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 2rem;
    }
    form {
      display: inline-block;
      text-align: left;
    }
    label {
      display: block;
      margin: 10px 0;
    }
    button {
      margin-top: 20px;
      padding: 10px;
    }
  </style>