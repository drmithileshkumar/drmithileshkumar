<script>
    import Select from "$lib/ui/Select.svelte";
    import {selectedChapter, chapters, selectedGenerator, generators} from '$lib/pages/practice/stores';
    
    const setGenerator = async () => {
        console.log($selectedChapter)
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
        }
    }
</script>
<Select style="max-width: 600px;"  label="Chapter" options={chapters} bind:value={$selectedChapter} on:selected={setGenerator}/>
<slot></slot>