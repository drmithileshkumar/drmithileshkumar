<script>
    import Select from "$lib/ui/Select.svelte";
    import {selectedChapter, chapters, selectedGenerator, generators} from '$lib/pages/practice/stores';
    
    const setGenerator = async () => {
        // console.log($selectedChapter)
        switch($selectedChapter) {
            case 'Sets': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['sets']) {
                        let {sets} = await import('$lib/pages/practice/sets.js');
                        $selectedGenerator = sets;
                        $generators['sets'] = sets;
                    } else {
                        $selectedGenerator = $generators['sets'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Relations and functions 11': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['relations']) {
                        let {relations} = await import('$lib/pages/practice/relations.js');
                        $selectedGenerator = relations;
                        $generators['relations'] = relations;
                    } else {
                        $selectedGenerator = $generators['relations'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Trigonometric functions': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['trigonometry']) {
                        let {trigonometry} = await import('$lib/pages/practice/trigonometry.js');
                        $selectedGenerator = trigonometry;
                        $generators['trigonometry'] = trigonometry;
                    } else {
                        $selectedGenerator = $generators['trigonometry'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Principle of mathematical induction': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['induction']) {
                        let {induction} = await import('$lib/pages/practice/induction.js');
                        $selectedGenerator = induction;
                        $generators['induction'] = induction;
                    } else {
                        $selectedGenerator = $generators['induction'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Complex numbers': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['complex']) {
                        let {complex} = await import('$lib/pages/practice/complex.js');
                        $selectedGenerator = complex;
                        $generators['complex'] = complex;
                    } else {
                        $selectedGenerator = $generators['complex'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Quadratic equations': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['quadratic']) {
                        let {quadratic} = await import('$lib/pages/practice/quadratic.js');
                        $selectedGenerator = quadratic;
                        $generators['quadratic'] = quadratic;
                    } else {
                        $selectedGenerator = $generators['quadratic'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Linear inequalities': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['inequalities']) {
                        let {inequalities} = await import('$lib/pages/practice/inequalities.js');
                        $selectedGenerator = inequalities;
                        $generators['inequalities'] = inequalities;
                    } else {
                        $selectedGenerator = $generators['inequalities'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Permutations and combinations': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['combinatorics']) {
                        let {combinatorics} = await import('$lib/pages/practice/combinatorics.js');
                        $selectedGenerator = combinatorics;
                        $generators['combinatorics'] = combinatorics;
                    } else {
                        $selectedGenerator = $generators['combinatorics'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Binomial theorem': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['binomial']) {
                        let {binomial} = await import('$lib/pages/practice/binomial.js');
                        $selectedGenerator = binomial;
                        $generators['binomial'] = binomial;
                    } else {
                        $selectedGenerator = $generators['binomial'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Sequences and series': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['sequences']) {
                        let {sequences} = await import('$lib/pages/practice/sequences.js');
                        $selectedGenerator = sequences;
                        $generators['sequences'] = sequences;
                    } else {
                        $selectedGenerator = $generators['sequences'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Straight lines': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['line']) {
                        let {line} = await import('$lib/pages/practice/line.js');
                        $selectedGenerator = line;
                        $generators['line'] = line;
                    } else {
                        $selectedGenerator = $generators['line'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Circle': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['circle']) {
                        let {circle} = await import('$lib/pages/practice/circle.js');
                        $selectedGenerator = circle;
                        $generators['circle'] = circle;
                    } else {
                        $selectedGenerator = $generators['circle'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Parabola': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['parabola']) {
                        let {parabola} = await import('$lib/pages/practice/parabola.js');
                        $selectedGenerator = parabola;
                        $generators['parabola'] = parabola;
                    } else {
                        $selectedGenerator = $generators['parabola'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Ellipse': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['ellipse']) {
                        let {ellipse} = await import('$lib/pages/practice/ellipse.js');
                        $selectedGenerator = ellipse;
                        $generators['ellipse'] = ellipse;
                    } else {
                        $selectedGenerator = $generators['ellipse'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Hyperbola': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['hyperbola']) {
                        let {hyperbola} = await import('$lib/pages/practice/hyperbola.js');
                        $selectedGenerator = hyperbola;
                        $generators['hyperbola'] = hyperbola;
                    } else {
                        $selectedGenerator = $generators['hyperbola'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Indroduction to 3D geometry': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['threed']) {
                        let {threed} = await import('$lib/pages/practice/threed.js');
                        $selectedGenerator = threed;
                        $generators['threed'] = threed;
                    } else {
                        $selectedGenerator = $generators['threed'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Limits': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['limits']) {
                        let {limits} = await import('$lib/pages/practice/limits.js');
                        $selectedGenerator = limits;
                        $generators['limits'] = limits;
                    } else {
                        $selectedGenerator = $generators['limits'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Derivatives': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['derivatives']) {
                        let {derivatives} = await import('$lib/pages/practice/derivatives.js');
                        $selectedGenerator = derivatives;
                        $generators['derivatives'] = derivatives;
                    } else {
                        $selectedGenerator = $generators['derivatives'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Mathematical reasoning': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['reasoning']) {
                        let {reasoning} = await import('$lib/pages/practice/reasoning.js');
                        $selectedGenerator = reasoning;
                        $generators['reasoning'] = reasoning;
                    } else {
                        $selectedGenerator = $generators['reasoning'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Statistics': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['statistics']) {
                        let {statistics} = await import('$lib/pages/practice/statistics.js');
                        $selectedGenerator = statistics;
                        $generators['statistics'] = statistics;
                    } else {
                        $selectedGenerator = $generators['statistics'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Probability': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['probability']) {
                        let {probability} = await import('$lib/pages/practice/probability.js');
                        $selectedGenerator = probability;
                        $generators['probability'] = probability;
                    } else {
                        $selectedGenerator = $generators['probability'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Relations and functions 12': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['relations12']) {
                        let {relations12} = await import('$lib/pages/practice/relations12.js');
                        $selectedGenerator = relations12;
                        $generators['relations12'] = relations12;
                    } else {
                        $selectedGenerator = $generators['relations12'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Inverse trigonometric functions': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['inverse']) {
                        let {inverse} = await import('$lib/pages/practice/inverse.js');
                        $selectedGenerator = inverse;
                        $generators['inverse'] = inverse;
                    } else {
                        $selectedGenerator = $generators['inverse'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Matrices': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['matrices']) {
                        let {matrices} = await import('$lib/pages/practice/matrices.js');
                        $selectedGenerator = matrices;
                        $generators['matrices'] = matrices;
                    } else {
                        $selectedGenerator = $generators['matrices'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Determinants': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['determinants']) {
                        let {determinants} = await import('$lib/pages/practice/determinants.js');
                        $selectedGenerator = determinants;
                        $generators['determinants'] = determinants;
                    } else {
                        $selectedGenerator = $generators['determinants'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Continuity': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['continuity']) {
                        let {continuity} = await import('$lib/pages/practice/continuity.js');
                        $selectedGenerator = continuity;
                        $generators['continuity'] = continuity;
                    } else {
                        $selectedGenerator = $generators['continuity'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Differentiability': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['differentiability']) {
                        let {differentiability} = await import('$lib/pages/practice/differentiability.js');
                        $selectedGenerator = differentiability;
                        $generators['differentiability'] = differentiability;
                    } else {
                        $selectedGenerator = $generators['differentiability'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Application of derivatives': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['appDerivatives']) {
                        let {appDerivatives} = await import('$lib/pages/practice/appDerivatives.js');
                        $selectedGenerator = appDerivatives;
                        $generators['appDerivatives'] = appDerivatives;
                    } else {
                        $selectedGenerator = $generators['appDerivatives'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Indefinite Integrals': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['indefinite']) {
                        let {indefinite} = await import('$lib/pages/practice/indefinite.js');
                        $selectedGenerator = indefinite;
                        $generators['indefinite'] = indefinite;
                    } else {
                        $selectedGenerator = $generators['indefinite'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Definite Integrals': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['definite']) {
                        let {definite} = await import('$lib/pages/practice/definite.js');
                        $selectedGenerator = definite;
                        $generators['definite'] = definite;
                    } else {
                        $selectedGenerator = $generators['definite'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Application of integrals': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['appIntegrals']) {
                        let {appIntegrals} = await import('$lib/pages/practice/appIntegrals.js');
                        $selectedGenerator = appIntegrals;
                        $generators['appIntegrals'] = appIntegrals;
                    } else {
                        $selectedGenerator = $generators['appIntegrals'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Differential equations': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['differential']) {
                        let {differential} = await import('$lib/pages/practice/differential.js');
                        $selectedGenerator = differential;
                        $generators['differential'] = differential;
                    } else {
                        $selectedGenerator = $generators['differential'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Vector algebra': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['vectors']) {
                        let {vectors} = await import('$lib/pages/practice/vectors.js');
                        $selectedGenerator = vectors;
                        $generators['vectors'] = vectors;
                    } else {
                        $selectedGenerator = $generators['vectors'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Three dimensional geometry': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['geometry3d']) {
                        let {geometry3d} = await import('$lib/pages/practice/geometry3d.js');
                        $selectedGenerator = geometry3d;
                        $generators['geometry3d'] = geometry3d;
                    } else {
                        $selectedGenerator = $generators['geometry3d'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
            case 'Linear programming': {
                $selectedGenerator = null;
                setTimeout(async () => {
                    if(!$generators['linear']) {
                        let {linear} = await import('$lib/pages/practice/linear.js');
                        $selectedGenerator = linear;
                        $generators['linear'] = linear;
                    } else {
                        $selectedGenerator = $generators['linear'];
                    }
                    $generators = $generators;
                }, 0)
                
                break;
            }
        }
    }
</script>
<Select style="max-width: 600px; background:black;color:white;"  label="Chapter" options={chapters} bind:value={$selectedChapter} on:selected={setGenerator}/>
<slot></slot>