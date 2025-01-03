<script lang='ts'>
    //@ts-nocheck
    import {randInt} from '$lib/mathril/utils/matlib/common';
    import {NT} from '$lib/mathril/utils/matlib/nt';
    import { ActionButtons } from '@smui/card';
    import { goto } from '$app/navigation';
    import Button from "@smui/button";
    import Ripple from "@smui/ripple";
    import { browser } from "$app/environment";
    let score = 0, target = 0, initial = 0;
    let operations = ['+', 'x', '/'];//&plus; &times; &divide;
    let option1 = 0, option2 = 0;
    let plus = browser ? new DOMParser().parseFromString('&plus;', 'text/html').body.textContent : '';
    let multiply = browser ? new DOMParser().parseFromString('&times;', 'text/html').body.textContent : '';
    let divide = browser ? new DOMParser().parseFromString('&divide;', 'text/html').body.textContent : '';
    let operation1 = multiply;
    let operation2 = divide;
    let timer, timeLeft = 0;
    let result1 = 0, result2 = 0;
    let status = false;
    let speed = 1000;
    const setOperation = (side) => {
        let index = randInt(operations.length - 1, 0);
        let option = 0, result = 0;
        let operation;
        switch(index) {
            case 0: {
                option = 10 * randInt(10, 1);
                operation = plus;
                result = initial + option;
                break;
            }
            case 1: {
                option = randInt(5, 1);
                operation = multiply;
                result = initial * option;
                break;
            }
            case 2: {
                let nt = new NT(initial);
                let factors = nt.factor();
                let i = randInt(factors.length - 1, 0);
                option = factors[i].prime;
                operation = divide;
                result = initial / option;
                break;
            }
        }
        if(side === 'left') {
            operation1 = operation;
            option1 = option;
            result1 = result;
        } else {
            operation2 = operation;
            option2 = option;
            result2 = result;
        }
    }
    const reset = () => {
        timeLeft = 10;
        initial = 10 * randInt(20, 1);
        setOperation('left');
        setOperation('right');
        target = Math.floor((result1 + result2) / 2)
    }
    const setScore = (opt) => {
        switch(opt) {
            case 'No choice': {
                score = score;
                break;
            }
            case 'left': {
                score +=  -target + result1;
                break;
            }
            case 'right': {
                score += -target + result2;
                break;
            }
        }
    }
    const setStatus = () => {
        status = !status;
        if(status) {
            timeLeft = 10;
            reset();
            timer = setInterval(() => {
                
                timeLeft--;
                if(timeLeft === 0) {
                    setScore('No choice');
                    reset();
                }
                
            }, speed);
        } else {
            clearInterval(timer);
        }
    }
    const choice = (opt) => {
        setScore(opt);
        reset();
    }
</script>
<article>
    <ActionButtons>
        <!-- <Button on:click={() => open = true}>Help</Button> -->
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <p>Starting with the number on bottom, beat the target number at the top by applying one of the two operations in the middle.</p>
    <Button on:click={setStatus}>{status ? 'Stop' : 'Start'}</Button>
    <section class="score">Score : {score}</section>
    <!-- <section class="target">{target}</section>
    <section class="options">
        <div class="option" use:Ripple={{surface: true}} on:click={() => choice('left')}>{operation1 + ' ' + option1}</div>
        <div class="timer">{timeLeft}</div>
        <div class="option" use:Ripple={{surface: true}} on:click={() => choice('right')}>{operation2 + ' ' + option2}</div>
    </section>
    <section class="initial">{initial}</section> -->
    <svg class="SVG Vectorial svelte-10rmvey" width="300" height="300" viewBox="0 0.000011444091796875 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g class="Vectorial" transform="translate(0 0) scale(1)">
            <defs>
                <marker id="Arrow-VectorialApp74R43-6" refX="0" refY="5" markerWidth="6" markerHeight="6" markerUnits="strokeWidth" orient="auto-start-reverse" viewBox="0 0 10 10" preserveAspectRatio="xMidYMid meet">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="currentcolor" stroke="currentcolor" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" transform="matrix(1 0 0 1 0 0)"></path>
                </marker>
            </defs>
            <g id="Layer-VectorialApp74R43-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" transform="matrix(1 0 0 1 0 0)">    
                <polygon id="Regular-VectorialApp74R43-1" points="300.00,250.00 250.00,300.00 200.00,250.00 250.00,200.00 " fill="rgba(255, 255, 255, 0.03)" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 -149.99999129772186)"></polygon>       
                <circle id="Circle-VectorialApp74R43-2" use:Ripple={{surface: true}} on:click={() => choice('left')} style="cursor: pointer;" class="draggable" cx="250" cy="250" r="50" fill="rgba(255, 255, 255, 0.03)" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -119.99999642372131 -6.854532443867356e-7)"></circle>          
                <circle id="Circle-VectorialApp74R43-3" use:Ripple={{surface: true}} on:click={() => choice('right')} style="cursor: pointer;" class="draggable" cx="250" cy="250" r="50" fill="rgba(255, 255, 255, 0.03)" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 119.99999624490738 -5.066394805908203e-7)"></circle>             <polygon id="Regular-VectorialApp74R43-4" class="draggable" points="300.00,250.00 250.00,300.00 200.00,250.00 250.00,200.00 " fill="rgba(255, 255, 255, 0.03)" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 -2.980232238769531e-7 149.99999523162842)"></polygon>            
                <path id="Path-VectorialApp74R43-5" d="M 225.3333673079798,374.9999888241294 L 163.66671265164865,301.33330400784894" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-VectorialApp74R43-6)" transform="matrix(1 0 0 1 0 0)"></path>          
                <path id="Path-VectorialApp74R43-7" d="M 252.6667099992422,333.9999900460246 L 308.6666472951576,258.6666793028509" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-VectorialApp74R43-6)" transform="matrix(1 0 0 1 -91.99993896484375 -124.66668701171875)"></path>          
                <path id="Path-VectorialApp74R43-8" d="M 228.6666801969206,374.9999888241294 L 169.6666514376803,299.3333040674536" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-VectorialApp74R43-6)" transform="matrix(1 0 0 1 112.66668701171875 -165.33331298828125)"></path>          
                <path id="Path-VectorialApp74R43-9" d="M 252.6667099992422,333.9999900460246 L 308.6666472951576,258.6666793028509" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="url(#Arrow-VectorialApp74R43-6)" transform="matrix(1 0 0 1 25.3333740234375 42.6666259765625)"></path>           
                <text id="Text-VectorialApp74R43-10" x="265" y="250" fill="currentcolor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -24.999999225139618 10)">{timeLeft}</text>          
                <text id="Text-VectorialApp74R43-11" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -144 6.66668701171875)">{operation1 + ' ' + option1}</text>          
                <text id="Text-VectorialApp74R43-12" x="250" y="250" fill="currentcolor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 99.33331298828125 6.66668701171875)">{operation2 + ' ' + option2}</text>          
                <text id="Text-VectorialApp74R43-13" x="265" y="250" fill="currentcolor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -30.66668701171875 -142.66668701171875)">{target}</text>          
                <text id="Text-VectorialApp74R43-14" x="260" y="250" fill="currentcolor" font-size="20px" font-weight="400" font-family="Roboto, sans-serif" filter="none" opacity="1" transform="matrix(1 0 0 1 -25.33331298828125 158)">{initial}</text>   
            </g>
        </g>
    </svg>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }
    /* .target {
        border-radius: 5px;
        border: 1px solid currentColor;
        padding: 1em;
        font-size: 2em;
    }
    .options {
        display: flex;
        flex-direction: row;
        gap: 2em;
        
    }
    .timer {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .option {
        border: 1px solid currentColor;
        padding: 1em;
        cursor: pointer;
        font-size: 2em;
    }
    .initial {
        border-radius: 5px;
        border: 1px solid currentColor;
        padding: 1em;
        font-size: 2em;
    } */
</style>