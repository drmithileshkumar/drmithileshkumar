<script>
    export let milli = 0;
    export let seconds = 0;
    export let minutes = 0;
    $: milliArray = `${milli/100} ${1 - milli/100}`
    $: secondsArray = `${seconds/60} ${1 - seconds/60}`
    $: minuteArray = `${minutes/60} ${1 - minutes/60}`
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
        <circle cx="25px" cy="25px" r="22px" stroke="rgba(0, 0, 0, 0.1)" stroke-width="1px"fill="none" pathLength="1">
        </circle>
        <circle cx="25px" cy="25px" r="22px" stroke="tomato" stroke-width="2px" stroke-dasharray={milliArray} fill="none" pathLength="1" transform="rotate(-90 25 25)">
        </circle>
        <circle cx="25px" cy="25px" r="18px" stroke="rgba(0, 0, 0, 0.1)" stroke-width="1px"fill="none" pathLength="1">
        </circle>
        <circle cx="25px" cy="25px" r="18px" stroke="green" stroke-width="2px" stroke-dasharray={secondsArray} fill="none" pathLength="1" transform="rotate(-90 25 25)">
        </circle>
        <circle cx="25px" cy="25px" r="14px" stroke="rgba(0, 0, 0, 0.1)" stroke-width="1px"fill="none" pathLength="1">
        </circle>
        <circle cx="25px" cy="25px" r="14px" stroke="blue" stroke-width="2px" stroke-dasharray={minuteArray} fill="none" pathLength="1" transform="rotate(-90 25 25)">
        </circle>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="green">{seconds}</text>
    </svg> 
</div> 