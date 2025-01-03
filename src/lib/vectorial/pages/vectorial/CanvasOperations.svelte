<script lang='ts'>
    //@ts-nocheck
    import Tooltip, {
        Wrapper,
        Title,
        Content,
        Link,
        RichActions,
    } from '@smui/tooltip';
    import Paper, { Subtitle } from '@smui/paper';
    import { Input } from '@smui/textfield';
    import IconButton, { Icon } from '@smui/icon-button';
    import Button from '@smui/button';
    import { Z, PAN, panX, panY, screenCTM, boundingBox } from "$lib/vectorial/pages/vectorial/stores";
    
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    
    
    const reset = () => {
        $Z = 1;
        $panX = 0;
        $panY = 0;
        $screenCTM = $boundingBox.getScreenCTM().inverse();
        dispatch('reset', {Z: $Z})
    };
    const setZoom = (val) => {
        $Z = val;
        $screenCTM = $boundingBox.getScreenCTM().inverse();
        dispatch('onZoom', {Z: $Z})
    }
</script>
<div class="buttons">
    <Wrapper rich>
        <IconButton on:click={() => ($PAN = !$PAN)} style="background:{$PAN ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon class="material-icons">pan_tool_alt</Icon>
        </IconButton>
        <Tooltip>
            <Content>Pan mode. Move the canvas around.</Content>
        </Tooltip>
    </Wrapper>
    <!-- <Wrapper rich>

        <Tooltip>
            <Content></Content>
        </Tooltip>
    </Wrapper>
     -->
    <IconButton on:click={() => setZoom($Z + 0.1)}>
        <Icon class="material-icons">zoom_in</Icon>
    </IconButton>
    <span style="font-size:0.8em;">
        <input type="number" min={0} bind:value={$Z} on:change={() => setZoom($Z)} />
    </span>
    <IconButton on:click={() => setZoom($Z - 0.1)}>
        <Icon class="material-icons">zoom_out</Icon>
    </IconButton>
    <Wrapper rich>
        <Button on:click={reset}>Reset</Button>
        <Tooltip>
            <Content>Reset the canvas i.e. reset pan and zoom.</Content>
        </Tooltip>
    </Wrapper>
    
</div>
<style>
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    input {
        width: 40px;
        height: 2em;
        border-radius: 5px;
        width: 70px;
        outline: none;
        border: none;
    }
</style>
