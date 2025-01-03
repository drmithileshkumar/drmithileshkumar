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
    import IconButton, { Icon } from '@smui/icon-button';
    export let showAppearance = false;
    export let showDimensions = false;
    export let showLayers = false;
    export let showFilters = false;
    export let showMasks = false;
    export let showMarkers = false;
    
</script>
<style>
    
</style>

    <Wrapper rich>
        <IconButton on:click={() => showAppearance = !showAppearance} style="background:{showAppearance ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon class="material-icons">tune</Icon>
        </IconButton>
        <Tooltip yPos="above" style="min-width:fit-content;">
            <Content>Styles</Content>
        </Tooltip>
    </Wrapper>
    <Wrapper rich>
        <IconButton on:click={() => showDimensions = !showDimensions} style="background:{showDimensions ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon class="material-icons">picture_in_picture</Icon>
        </IconButton>
        <Tooltip style="min-width:fit-content;">
            <Content>Transforms</Content>
        </Tooltip>
    </Wrapper>
    <Wrapper rich>
        <IconButton on:click={() => showFilters = !showFilters} style="background:{showFilters ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon class="material-icons">blur_on</Icon>
        </IconButton>
        <Tooltip style="min-width:fit-content;">
            <Content>Filters</Content>
        </Tooltip>
    </Wrapper>
    <Wrapper rich>
        <IconButton on:click={() => showMarkers = !showMarkers} style="background:{showMarkers ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon class="material-icons">arrow_right_alt</Icon>
        </IconButton>
        <Tooltip style="min-width:fit-content;">
            <Content>Markers</Content>
        </Tooltip>
    </Wrapper>
    <Wrapper rich>
        <IconButton on:click={() => showMasks = !showMasks} style="background:{showMasks ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon class="material-icons">masks</Icon>
        </IconButton>
        <Tooltip style="min-width:fit-content;">
            <Content>Masks</Content>
        </Tooltip>
    </Wrapper>
    <Wrapper rich>
        <IconButton on:click={() => showLayers = !showLayers} style="background:{showLayers ? 'rgba(255, 255, 255, 0.5)': 'none'}">
            <Icon class="material-icons">layers</Icon>
        </IconButton>
        <Tooltip style="min-width:fit-content;">
            <Content>Layers</Content>
        </Tooltip>
    </Wrapper>

