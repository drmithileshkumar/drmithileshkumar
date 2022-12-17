<script>
    import Select from "$lib/ui/Select.svelte";
    import {selectedChapter, chapters, selectedGenerator} from '$lib/pages/practice/stores';
    
    const setGenerator = async () => {
        switch($selectedChapter) {
            case 'Sets': {
                let {sets} = await import('$lib/pages/practice/sets.js');
                $selectedGenerator = sets;
            }
        }
    }
</script>
<Select label="Chapter" options={chapters} bind:value={$selectedChapter} on:selected={setGenerator}/>
<slot></slot>