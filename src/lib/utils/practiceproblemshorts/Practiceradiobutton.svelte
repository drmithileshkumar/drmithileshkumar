 
<script>
// @ts-nocheck

    import { createEventDispatcher } from "svelte";
    import { newChapter, attempted } from './practiceStore';
    import {browser} from '$app/environment';
    export let optionValues = ['', '', '', ''];
    export let correct = '';
    export let answer = '';
    let option1;
    let option2;
    let option3;
    let option4;
    let options;
    
    const dispatch = createEventDispatcher();
    
    const chosen = () => {
        $newChapter = false;
        if(!$attempted) {
            dispatch('chosen', {
                success: correct === answer
            });
            $attempted = true;
        }
        
    }
    
    $: if(browser && options) {
        // answer = '';
        option1 = optionValues[0];
        option2 = optionValues[1];
        option3 = optionValues[2];
        option4 = optionValues[3];
        // setTimeout(() => {MathJax.typeset()}, 0);
        setTimeout(() => {
            renderMathInElement(options, {
			delimiters: [
				{ left: '$$', right: '$$', display: false },
				{ left: '$', right: '$', display: false },
				{ left: '\\(', right: '\\)', display: false },
				{ left: '\\[', right: '\\]', display: false }
			],
			// • rendering keys, e.g.:
			throwOnError: false
		})
        }, 0)
        
    }
</script>
<div class="options" bind:this={options}>
    <div class="option1">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
            <div style="position: relative;">
                <input type="radio" class="option" name="prob" bind:group={answer} value={'A'} on:change={chosen}>
                <div class="optiond">
                    { @html option1 }
                </div> 
                <div class="circle">
                    {#if correct === 'A' && answer !== ''}
                        <div class="circleInner" style="background: green;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid green;"></div>
                    {:else if correct !== 'A' && answer === 'A' }
                        <div class="circleInner" style="background: red;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid red;"></div>
                    {:else}
                        <div class="circleInner"></div>
                        <div class="circleOuter"></div>
                    {/if}  
                </div>     
            </div>
        </label>
    </div>
    <div class="option2">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
            <div style="position: relative;">
                <input type="radio" class="option" name="prob" bind:group={answer} value={'B'} on:change={chosen}>
                <div class="optiond">
                    {@html option2 }
                </div> 
                <div class="circle">
                    {#if correct === 'B' && answer !== ''}
                        <div class="circleInner" style="background: green;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid green;"></div>
                    {:else if correct !== 'B' && answer === 'B' }
                        <div class="circleInner" style="background: red;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid red;"></div>
                    {:else}
                        <div class="circleInner"></div>
                        <div class="circleOuter"></div>
                    {/if}  
                </div>     
            </div>
        </label>
    </div>
    <div class="option3">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
            <div style="position: relative;">
                <input type="radio" class="option" name="prob" bind:group={answer} value={'C'} on:change={chosen}>
                <div class="optiond">
                    { @html option3 }
                </div> 
                <div class="circle">
                    {#if correct === 'C' && answer !== ''}
                        <div class="circleInner" style="background: green;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid green;"></div>
                    {:else if correct !== 'C' && answer === 'C' }
                        <div class="circleInner" style="background: red;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid red;"></div>
                    {:else}
                        <div class="circleInner"></div>
                        <div class="circleOuter"></div>
                    {/if}  
                </div>     
            </div>
        </label>
    </div>
    <div class="option4">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
            <div style="position: relative;">
                <input type="radio" class="option" name="prob" bind:group={answer} value={'D'} on:change={chosen}>
                <div class="optiond">
                    { @html option4 }
                </div> 
                <div class="circle">
                    {#if correct === 'D' && answer !== ''}
                        <div class="circleInner" style="background: green;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid green;"></div>
                    {:else if correct !== 'D' && answer === 'D' }
                        <div class="circleInner" style="background: red;"></div>
                        <div class="circleOuter" style="border: 0.2rem solid red;"></div>
                    {:else}
                        <div class="circleInner"></div>
                        <div class="circleOuter"></div>
                    {/if}  
                </div>     
            </div>
        </label>
    </div>
</div>


<style>
     

    .options {
        display: grid;
        margin-left: 5px;
        margin-top: 10px;
    }
    .option1 {
        grid-area: option1;
        
    }
    .option2 {
        grid-area: option2;

    }
    .option3 {
        grid-area: option3;
        
    }
    .option4 {
        grid-area: option4;
        
    }
    .option1, .option2, .option3, .option4 {
        min-width: 10rem;
        min-height: 3rem;
        display: flex;
        align-items: center;
        overflow: auto;
        scrollbar-width: thin;
    }
    @media only screen and (max-width : 720px) {
       
       .options {
           display: grid;
           grid-template-columns: auto;
           grid-template-areas: 
           "option1"
           "option2"
           "option3"
           "option4";
       }
   }
   @media only screen and (min-width : 720px) {
       /*#youtube {
           width: 100%;
           height: 400px;
       }*/
       .options {
           display: grid;
           grid-template-columns: auto auto;
           grid-template-rows: 1fr 1fr;
           grid-template-areas: 
           "option1 option2"
           "option3 option4";
       }
       
       .option1, .option2, .option3, .option4  {
           margin-top:0;
       }
   }
    /* ---------------------------------------- */
    input[type=radio] {
        display: none;
    }
    ::placeholder {
        color: rgb(0, 163, 253);
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgb(0, 163, 253);
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: rgb(0, 163, 253);
    }
    
    .circle {
        position: absolute;
        /* width: 2rem;
        height: 2rem; */
        top: 50%;
        left: 0%;
        transform: translate(0%, -50%);
        /*filter: url('#gooey');*/
    }

    @keyframes circle__in {
        0% {
            transform: translate(0%, -50%) scale(1);
        }

        16% {
            transform: translate(0%, -50%) scale(0.95, 1.05);
        }

        33% {
            transform: translate(0%, -50%) scale(1);
        }

        50% {
            transform: translate(0%, -50%) scale(1.05, 0.95);
        }

        66% {
            transform: translate(0%, -50%) scale(1);
        }

        83% {
            transform: translate(0%, -50%) scale(0.98, 1.02);
        }

        100% {
            transform: translate(0%, -50%) scale(1);
        }
    }

    .optiond {
        margin-left: 3rem;
        display: flex;
        height: auto;
        align-items: center;
    }
    ::-webkit-scrollbar {
        width: 1px;
    }
    input:checked + .optiond + .circle {
        transform-origin: 50% 50%;
        animation-name: circle__in;
        animation-duration: 750ms;
        animation-timing-function: linear;
    }

    .circle {
        transform-origin: 50% 50%;
        animation-name: circle__out;
        animation-duration: 1000ms;
        animation-timing-function: ease;
        cursor: pointer;
    }

    .circleOuter {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0.2rem solid rgb(0, 163, 253);
    }

    .circleInner {
        top: 13%;
        left: 13%;
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        background: rgb(0, 163, 253);
    }

    @keyframes circleInner__in {
        0% {
            transform: scale(0.0);
        }

        80% {
            transform: scale(1.02);
        }

        100% {
            transform: scale(1);
        }
    }

    input:checked + .optiond + .circle .circleInner {
        transform-origin: 50% -20%;
        animation-name: circleInner__in;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0.85, 0, 0.2, 1);
    }

    @keyframes circleInner__out {
        0% {
            transform: scale(1);
        }

        80% {
            transform: scale(0.19);
        }

        99% {
            transform: scale(0.21);
        }

        100% {
            transform: scale(0);
        }
    }

    .circleInner {
        animation-name: circleInner__out;
        animation-duration: 500ms;
        animation-timing-function: cubic-bezier(0.85, 0, 0.2, 1);
        animation-fill-mode: forwards;
    }

    .circleInner { transform-origin: -12% -8%; }
</style>

    

