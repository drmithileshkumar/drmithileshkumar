<script>
	import Select from '$lib/ui/Select.svelte';
	import {
		selectedChapter,
		chapters12,
		selectedGenerator,
		generators
	} from '$lib/pages/practice/stores';

	const setGenerator = async () => {
		// console.log($selectedChapter)
		switch ($selectedChapter) {
			case 'Relations and functions 12': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['relations12']) {
						let { relations12 } = await import('$lib/pages/practice/relations12.js');
						$selectedGenerator = relations12;
						$generators['relations12'] = relations12;
					} else {
						$selectedGenerator = $generators['relations12'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Inverse trigonometric functions': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['inverse']) {
						let { inverse } = await import('$lib/pages/practice/inverse.js');
						$selectedGenerator = inverse;
						$generators['inverse'] = inverse;
					} else {
						$selectedGenerator = $generators['inverse'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Matrices': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['matrices']) {
						let { matrices } = await import('$lib/pages/practice/matrices.js');
						$selectedGenerator = matrices;
						$generators['matrices'] = matrices;
					} else {
						$selectedGenerator = $generators['matrices'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Determinants': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['determinants']) {
						let { determinants } = await import('$lib/pages/practice/determinants.js');
						$selectedGenerator = determinants;
						$generators['determinants'] = determinants;
					} else {
						$selectedGenerator = $generators['determinants'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Continuity': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['continuity']) {
						let { continuity } = await import('$lib/pages/practice/continuity.js');
						$selectedGenerator = continuity;
						$generators['continuity'] = continuity;
					} else {
						$selectedGenerator = $generators['continuity'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Differentiability': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['differentiability']) {
						let { differentiability } = await import('$lib/pages/practice/differentiability.js');
						$selectedGenerator = differentiability;
						$generators['differentiability'] = differentiability;
					} else {
						$selectedGenerator = $generators['differentiability'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Application of derivatives': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['appDerivatives']) {
						let { appDerivatives } = await import('$lib/pages/practice/appDerivatives.js');
						$selectedGenerator = appDerivatives;
						$generators['appDerivatives'] = appDerivatives;
					} else {
						$selectedGenerator = $generators['appDerivatives'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Indefinite Integrals': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['indefinite']) {
						let { indefinite } = await import('$lib/pages/practice/indefinite.js');
						$selectedGenerator = indefinite;
						$generators['indefinite'] = indefinite;
					} else {
						$selectedGenerator = $generators['indefinite'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Definite Integrals': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['definite']) {
						let { definite } = await import('$lib/pages/practice/definite.js');
						$selectedGenerator = definite;
						$generators['definite'] = definite;
					} else {
						$selectedGenerator = $generators['definite'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Application of integrals': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['appIntegrals']) {
						let { appIntegrals } = await import('$lib/pages/practice/appIntegrals.js');
						$selectedGenerator = appIntegrals;
						$generators['appIntegrals'] = appIntegrals;
					} else {
						$selectedGenerator = $generators['appIntegrals'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Differential equations': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['differential']) {
						let { differential } = await import('$lib/pages/practice/differential.js');
						$selectedGenerator = differential;
						$generators['differential'] = differential;
					} else {
						$selectedGenerator = $generators['differential'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Vector algebra': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['vectors']) {
						let { vectors } = await import('$lib/pages/practice/vectors.js');
						$selectedGenerator = vectors;
						$generators['vectors'] = vectors;
					} else {
						$selectedGenerator = $generators['vectors'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Three dimensional geometry': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['geometry3d']) {
						let { geometry3d } = await import('$lib/pages/practice/geometry3d.js');
						$selectedGenerator = geometry3d;
						$generators['geometry3d'] = geometry3d;
					} else {
						$selectedGenerator = $generators['geometry3d'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
			case 'Linear programming': {
				$selectedGenerator = null;
				setTimeout(async () => {
					if (!$generators['linear']) {
						let { linear } = await import('$lib/pages/practice/linear.js');
						$selectedGenerator = linear;
						$generators['linear'] = linear;
					} else {
						$selectedGenerator = $generators['linear'];
					}
					$generators = $generators;
				}, 0);

				break;
			}
		}
	};
</script>

<Select
	style="max-width: 600px; background:black;color:white;"
	label="Chapter"
	options={chapters12}
	bind:value={$selectedChapter}
	on:selected={setGenerator}
/>
<slot />
