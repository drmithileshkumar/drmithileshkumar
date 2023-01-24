<script>
    export let strokedasharray = 0.6;
    $: strArray = `${strokedasharray} ${1-strokedasharray}`;
    //$: console.log('dash...', strArray);
    $: strokeColor = strokedasharray < 0.5 ? 'red' : strokedasharray < 0.9 ? 'goldenrod' : 'green';
</script>
<style>
    .scorepercent {
        display: flex;
        align-items: center;
        width: 100%;
    }
</style>
<div class="scorepercent" style="padding: 0px;">
    <svg width="100%" height="100%" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle cx="25px" cy="25px" r="22px" stroke="gray" stroke-width="1px"fill="none" pathLength="1">
        </circle>
        <circle cx="25px" cy="25px" r="22px" stroke={strokeColor} stroke-width="2px" stroke-dasharray={strArray} fill="none" pathLength="1" transform="rotate(-90 25 25)">
        </circle>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill={strokeColor}>{Math.floor(100*strokedasharray)}%</text>
    </svg> 
</div> 