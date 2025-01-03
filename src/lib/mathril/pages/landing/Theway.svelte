<script lang='ts'>
    //@ts-nocheck
    import { draw } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import Card, {Content, Actions} from '@smui/card'
    import Button, {Icon, Label} from '@smui/button'
    import { goto } from '$app/navigation';
    let firstPath = true, secondPath = true, thirdPath = true;
    
</script>
<Card>
    <Content>
        <h1 class="mdc-typography--headline4" style='text-align:center; margin:0.5em 0;'>This is the <span style="color:goldenrod;">Way</span></h1>
        <div class="container">
            <div class="centered">
                <svg class="SVG Vectorial svelte-10rmvey" width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g class="Vectorial" transform="translate(0 0) scale(1)">
                        <defs>
                            <marker id="Arrow-VectorialApp109R66-13" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="goldenrod" stroke="currentColor" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path>
                            </marker>
                        </defs>
                        <g id="Layer-VectorialApp109R66-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" transform="matrix(1 0 0 1 0 0)"> 
                            <circle id="Circle-VectorialApp109R66-1" class="draggable" cx="250" cy="250" r="50" fill="rgba(255, 255, 255, 0.3)" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -162.1007080078125 -145.1639404296875)"></circle>          
                            <circle id="Circle-VectorialApp109R66-2" class="draggable" cx="250" cy="250" r="50" fill="rgba(255, 255, 255, 0.3)" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 158.8038330078125 -48.7100830078125)"></circle>          
                            <circle id="Circle-VectorialApp109R66-3" class="draggable" cx="250" cy="250" r="50" fill="rgba(255, 255, 255, 0.3)" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -154.45095825195312 60.360748291015625)"></circle>          
                            <circle id="Circle-VectorialApp109R66-4" class="draggable" cx="250" cy="250" r="50" fill="rgba(255, 255, 255, 0.3)" stroke="currentColor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 168.17486572265625 148.575927734375)"></circle>                
                            <text id="Text-VectorialApp109R66-6" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -190.81466674804688 -144.83770751953125)">Select</text>          
                            <text id="Text-VectorialApp109R66-7" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -186.79403686523438 -122.81277465820312)">Class</text>          
                            <text id="Text-VectorialApp109R66-8" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 129.70932006835938 -52.44183349609375)">Select</text>          
                            <text id="Text-VectorialApp109R66-9" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 122.48828125 -28.51715087890625)">Chapter</text>          
                            <text id="Text-VectorialApp109R66-10" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -192.67666625976562 66.7657470703125)">Practice</text>          
                            <text id="Text-VectorialApp109R66-11" class="draggable" x="250" y="250" fill="currentColor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 135.9140625 157.04388427734375)">Review</text>   
                            {#if firstPath}
                                <path 
                                id="Path-VectorialApp109R66-12" class="draggable" d="M 123.85507202148438,70.01687622070312 C 269.33222045898435,27.8494842529297 388.3018432617188,67.62422485351561 398.34063720703125,132.81253051757812" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="goldenrod" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-VectorialApp109R66-13)" transform="matrix(1 0 0 1 0 0.128326416015625)"></path>   
                            {/if}  
                            {#if secondPath}     
                                <path 
                                id="Path-VectorialApp109R66-14" class="draggable" d="M 425.2055969238281,138.66082763671875 C 356.35004272460935,203.8890350341797 180.9053894042969,55.525408935546864 159.37469482421875,148.0535888671875" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="goldenrod" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-VectorialApp109R66-13)" transform="matrix(1 0 0 1 -54.08935546875 95.71566772460938)"></path>    
                            {/if}   
                            {#if thirdPath}   
                                <path 
                                id="Path-VectorialApp109R66-15" class="draggable" d="M 119.8343505859375,124.08193969726562 C 164.970556640625,163.69927673339845 342.9353271484375,67.89161987304686 373.09747314453125,115.76895141601562" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="goldenrod" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-VectorialApp109R66-13)" transform="matrix(1 0 0 1 6.919921875 225.11428833007812)"></path>    
                            {/if}
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        
        
        <Actions style="align-items:center;justify-content:center">
            <Button on:click={() => goto('/auth')}>
                Start today
            </Button>
        </Actions>
    </Content>
</Card>
<style>
    .container {
        display: flex;
        justify-content: center;
    }
    /* .centered {
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin:auto
    } */
</style>