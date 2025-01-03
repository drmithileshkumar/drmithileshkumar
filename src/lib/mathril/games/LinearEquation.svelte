<script lang='ts'>
    //@ts-nocheck
    import { ActionButtons } from '@smui/card';
    import Slider from '@smui/slider';
    import FormField from '@smui/form-field';
    import Button, {Label} from '@smui/button';
    import { goto } from '$app/navigation'
    import { browser } from "$app/environment";
    import { randInt } from "$lib/mathril/utils/matlib/common";
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    let open = false;
    let a = 1;
    let x = 0;
    let b = 0;
    let c = 0;
    let sol = 0;
    const genLinear = () => {
        x = 0;
        a = randInt(10, 1);
        b = randInt(10, 0);
        sol = randInt(10, 0);
        c = a * sol + b
    }
    $: angle = (c - a * x - b)/a < -10 ? -10 : (-a * x - b + c)/a > 10 ? 10 : (-a * x - b + c)/a
    let panel;
    $: if (browser && panel && renderMathInElement) {
		setTimeout(() => {
			renderMathInElement(panel, {
				delimiters: [
					{ left: '$$', right: '$$', display: true },
					{ left: '$', right: '$', display: false },
					{ left: '\\(', right: '\\)', display: false },
					{ left: '\\[', right: '\\]', display: true }
				],
				// • rendering keys, e.g.:
				throwOnError: false
			});
		}, 0);
	}

</script>
<article bind:this={panel}>
    <ActionButtons style="justify-content:space-between;">
        <Button on:click={() => open = true}>Help</Button>
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <h1 class="mdc-typography--headline5" style='text-align:center;margin:0'>Linear equation \(ax + b = c\)</h1>
    <Button style="display:flex; margin:auto;" on:click={genLinear}>Generate new equation</Button>
    <figure>
        <svg width="100%" height="100%" viewBox="0 0 1000 510">
            <!--Wedge-->
            <path d="M 450,500 L 550,500 L 500,450 Z" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
            <line x1="0" y1="450" x2="1000" y2="450" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" fill='none' />
            <!--Lever-->
            <g transform="rotate({angle} 500 450)">
                <line x1="200" y1="450" x2="800" y2="450" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                <!--Left Pan-->
                <g transform="rotate({-angle} 200 450)">
                    <line x1="200" y1="450" x2="200" y2="420" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    <line x1="50" y1="420" x2="350" y2="420" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    <line x1="50" y1="420" x2="50" y2="400" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    <line x1="350" y1="420" x2="350" y2="400" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    <g>
                        {#if x !== 0}
                            {#each Array(x) as box, i}
                                <rect x="{55 + 40 * (i % 3)}" y="{380 - 40 * Math.floor(i/3)}" width="40" height="40" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='rgba(0, 150, 200, 1)'></rect>
                                <text x="{55 + 40 * (i % 3) + 12}" y="{380 - 40 * Math.floor(i/3) + 25}" width="40" height="40" fill='white'>{a}</text>
                            {/each}
                        {/if}
                    </g>
                    
                    {#if b!== 0}
                        <rect x="{245}" y="{320}" width="100" height="100" stroke="white" stroke-width="2" fill='green' />
                        <text x="{282}" y="{380}" font-size="32" fill='white'>{b}</text>
                    {/if}
                </g>
                <!--Right Pan-->
                <g transform="rotate({-angle} 800 450)">
                    <line x1="800" y1="450" x2="800" y2="420" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    <line x1="650" y1="420" x2="950" y2="420" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    <line x1="650" y1="420" x2="650" y2="400" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    <line x1="950" y1="420" x2="950" y2="400" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='none' />
                    {#if c!== 0}
                        <rect x="{745}" y="{320}" width="100" height="100" stroke="{a * x + b === c ? 'goldenrod' : 'currentColor'}" stroke-width="2" fill='tomato' />
                        <text x="{782}" y="{380}" font-size="32" fill='white'>{c}</text>
                    {/if}
                </g>
            </g>
        </svg>
    </figure>
    <div class="controls">
            <h1 class="mdc-typography--headline6" style='text-align:center;margin:0'>
                {#key a}
                    <span>{a}</span>
                {/key}
                <span style="color:rgba(0, 150, 200, 1)"> \(x\)  </span>
                <span>+</span>
                {#key b}
                    <span style="color:green">{b}</span>
                {/key} 
                <span>=</span> 
                {#key c}
                    <span style="color:tomato">{c}</span>
                {/key}
            </h1>
            <h1 class="mdc-typography--headline6" style='text-align:center;margin:0;color:{a*x + b === c ? 'goldenrod':'currentColor'}'>
                {#key a*x + b + c}{a*x + b} = {c}{/key}
            </h1>
       
        <!-- <FormField align="end" style="display: flex;">
            
            <Slider
                style="flex-grow: 1;"
                bind:value={a}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="a"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(a\) = {#key a}<span>{a}</span>{/key}
            </span>
        </FormField> -->
        <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={x}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="x"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;color:{a*x + b === c ? 'goldenrod':'currentColor'}"
            >
                \(x\) = {#key x}<span>{x}</span>{/key}
            </span>
        </FormField>
        <!-- <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={b}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="b"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(b\) = {#key b}<span>{b}</span>{/key}
            </span>
        </FormField> -->
        <!-- <FormField align="end" style="display: flex;">
            <Slider
                style="flex-grow: 1;"
                bind:value={c}
                min={0}
                max={100}
                step={1}
                discrete
                tickMarks
                input$aria-label="c"
            />
            <span
                slot="label"
                style="padding-right: 12px; width: 60px; display: block;"
            >
                \(c\) = {#key c}<span>{c}</span>{/key}
            </span>
        </FormField> -->
        
    </div>
</article>
<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <Title id="simple-title">How to play</Title>
  <Content id="simple-content">
    <p>
        Click on Generate New Equation to generate a linear equation.
    </p>
    <p>
        Use the Slider to change value of x.
    </p>
    <p>
        When the equation is solved, the color changes to golden.
    </p>
  </Content>
  <Actions>
    <Button on:click={() => (open = false)}>
      <Label>Done</Label>
    </Button>
  </Actions>
</Dialog>
<style>
    figure {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    :global(.katex) {
		color: currentcolor;
	}
</style>