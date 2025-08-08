<script lang='ts'>
    //@ts-nocheck
    import {elements, appHistory, currentState} from '$lib/vectorial/pages/vectorial/stores';
    import IconButton, { Icon } from '@smui/icon-button';
    import {ripple} from '$lib/vectorial/ui/ripple';
    import {goto} from '$app/navigation';

    const undo = () => {
        
        $currentState = $currentState > 0 ? $currentState - 1 : $currentState;
        Object.keys($appHistory[$currentState].change).forEach(prop => {
            if(!$elements[$appHistory[$currentState].id]) return;
            $elements[$appHistory[$currentState].id][prop] = $appHistory[$currentState].change[prop];
        })
        $elements = $elements;
        
    }
    const redo = () => {
            
            $currentState = $currentState < $appHistory.length - 1 ? $currentState + 1 : $currentState;
            Object.keys($appHistory[$currentState].change).forEach(prop => {
                $elements[$appHistory[$currentState].id][prop] = $appHistory[$currentState].change[prop];
            })
            $elements = $elements;
        
        
    }
    // $:console.log($elements, $appHistory)
</script>
<style>
    .buttons {
        display: flex;
        flex-direction: row;
    }
</style>
<div class="buttons">
    <IconButton on:click={undo}>
        <Icon class="material-icons">undo</Icon>
    </IconButton>
    <IconButton on:click={redo}>
        <Icon class="material-icons">redo</Icon>
    </IconButton>
</div>
