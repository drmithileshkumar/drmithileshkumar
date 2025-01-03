<script lang='ts'>
    //@ts-nocheck
    import {randInt} from '$lib/mathril/utils/matlib/common';
    import { ripple } from '$lib/ui/ripple';
    import {shareScore} from './shareMatchMyNumber';
    import { ActionButtons } from '@smui/card';
    import Button from '@smui/button';
    import { goto } from '$app/navigation'
    let target = 0;
    let value = 0;
    let score = {
        'red': 0,
        'blue': 0
    }
    let timer;
    let speed = 1000;
    let status = false;
    let valueRefreshed = {
        'red': true,
        'blue': true
    }
    let scoreColor = 'white';
    const refresh = () => {
        score = {
            'red': 0,
            'blue': 0
        };
        status = false;
        if(timer) {
            clearInterval(timer);
        }
    }
    const setStatus = () => {
        status = !status;
        if(status) {
            timer = setInterval(() => {
                value = randInt(10, 0)
                target = Math.random() > 0.5 ? value : randInt(10, 0);
                valueRefreshed['red'] = true;
                valueRefreshed['blue'] = true;
            }, speed);
        } else {
            clearInterval(timer);
        }
    }
    const hitRed = (e) => {
        // console.log('hit red', e.type)
        if(status && valueRefreshed['red']) {
            valueRefreshed['red'] = false;
            if(value === target) {
                score['red']++;
                if(window && window.navigator && window.navigator.vibrate) window?.navigator?.vibrate(100);
            }
            if(value !== target) {
                score['red']--;    
                if(window && window.navigator && window.navigator.vibrate)  window?.navigator?.vibrate([100, 100, 100]);
            }
        }
    }
    const hitBlue = (e) => {
        // console.log('hit blue', e.type)
        if(status && valueRefreshed['blue']) {
            valueRefreshed['blue'] = false;
            if(value === target) {
                score['blue']++;
                if(window && window.navigator && window.navigator.vibrate) window?.navigator?.vibrate(100);
            }
            if(value !== target) {
                score['blue']--;    
                if(window && window.navigator && window.navigator.vibrate)  window?.navigator?.vibrate([100, 100, 100]);
            }
        }
    }
    const hitValue = (player) => {
        if(status && valueRefreshed) {
            valueRefreshed = false;
            if(value === target) {
                // scoreColor = 'green';
                score[player]++;
                speed -= 5;
                if(window && window.navigator && window.navigator.vibrate) window?.navigator?.vibrate(100);
                clearInterval(timer);
                timer = setInterval(() => {
                    value = randInt(10, 0)
                    target = Math.random() > 0.5 ? value : randInt(10, 0);
                    valueRefreshed = true;
                }, speed);
            }
            if(value !== target) {
                // scoreColor = 'red';
                score[player]--;    
                speed += 5;
                if(window && window.navigator && window.navigator.vibrate)  window?.navigator?.vibrate([100, 100, 100]);
                clearInterval(timer);
                timer = setInterval(() => {
                    value = randInt(10, 0)
                    target = Math.random() > 0.5 ? value : randInt(10, 0);
                    valueRefreshed = true;
                }, speed);
            }
        }
    }
    const share = () => {
        let svgData = shareScore(score);
		var svgBlob = new Blob([svgData], {
            type: "image/svg+xml;charset=utf-8",
        });
        let svgUrl = URL.createObjectURL(svgBlob);
		const img = new Image();
        img.src = svgUrl;
        img.onload = async () => {
			let pngScale = 3;
            const canvas = document.createElement("canvas");
            canvas.width = pngScale * 600;
            canvas.height = pngScale * 400;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            let pngUrl = canvas.toDataURL("image/png", 1.0);
			const blob = await (await fetch(pngUrl)).blob();
			const file = new File([blob], 'myscore_mathril.png', {type: blob.type});
			try {
				let shareData = {
					title: 'Mathril',
					url: 'https://drmithileshkumar.com/mathril',
					text: 'Practice at mathril.com',
					files: [file]
				};
				await navigator.share(shareData);
				// alert(shareData.text)
			} catch (err) {
				alert('Failed to share.')
			}
        };
		
    }
</script>
<div class="findMyNumber">
    <ActionButtons style="justify-content:space-between;">
        <!-- <Button on:click={() => open = true}>Help</Button> -->
        <Button on:click={() => goto('/mathril/games')}>More games</Button>
      </ActionButtons>
    <h2 class="mdc-typography--headline6">Match My Number</h2>
    <p>Click on the big circle when its number matches the top circle.</p>
    <div class="status {status ? 'Pause':'Start'}" use:ripple on:click={setStatus}>{status ? 'Pause':'Start'}</div>
    <br>
    <div class="controls">
        <div class="refresh" on:click={refresh} use:ripple><span class="material-icons">refresh</span></div>
        
        <div class="score">
            <svg width="100%" height="100%" viewBox="-48 -20.5 200 190">
                <path d="M 27.11,56.29 L 43.5,-11.04 L 73,49.45 L 142.11,44.22 L 93.69,90.97 L 120.02,155.08 L 60.59,123.48 L 7.75,168.33 L 19.44,102.05 L -39.53,65.66 L 27.11,56.29 Z" stroke='red' stroke-width='2' fill="red"/>
                <text text-anchor="middle" x="55" y="110" font-size="100px" fill="white">{score['red']}</text>
            </svg>
        </div>
        <div class="target">
            <div class="dial">
                <span>{target}</span>
            </div>
        </div>
        <div class="score">
            <svg width="100%" height="100%" viewBox="-48 -20.5 200 190">
                <path d="M 27.11,56.29 L 43.5,-11.04 L 73,49.45 L 142.11,44.22 L 93.69,90.97 L 120.02,155.08 L 60.59,123.48 L 7.75,168.33 L 19.44,102.05 L -39.53,65.66 L 27.11,56.29 Z" stroke='rgb(0, 175, 255)' stroke-width='2' fill="rgb(0, 175, 255)"/>
                <text text-anchor="middle" x="55" y="110" font-size="100px" fill="white">{score['blue']}</text>
            </svg>
        </div>
        <div class="share" on:click={share} use:ripple><span class="material-icons">share</span></div>
    </div>
    <div class="playground">
        <div class="number red" use:ripple on:click={hitRed} on:touchstart|preventDefault={hitRed}>
            <div class="value">{value}</div>
        </div>
        <div class="number blue" use:ripple on:click={hitBlue} on:touchstart|preventDefault={hitBlue}>
            <div class="value">{value}</div>
        </div>
    </div>
</div>
<style>
    .findMyNumber {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        /* border: 0.5px solid white; */
        padding: 0.5em;
        margin-bottom: 1em;
        border-radius: 10px;
        /* box-shadow: -4px 4px 3px #80808085; */
    }
    .controls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        width: min(90vw, 400px);
        /* border: 1px solid; */
    }
    .target {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dial {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        /* border: 1px solid red; */
        background: linear-gradient(90deg, rgba(255, 0, 0, 0.5), rgba(0, 175, 255, 0.5));
        color: white;
        box-shadow: -3px 3px 5px rgba(175, 175, 175, 0.2);
    }
    .dial span {
        font-size: 24px;
        font-weight: bold;
    }
    .playground {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        /* background: white; */
    }
    .number {
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        /* border: 1px solid red; */
        
        color: white;
        /* cursor: pointer; */
        box-shadow: -8px 8px 8px rgba(175, 175, 175, 0.2);
    }
    .red {
        background: radial-gradient(red, transparent);
    }
    .blue {
        background: radial-gradient(rgb(0 175 255), transparent);
    }
    .value {
        display: flex;
        font-size: 100px;
        align-items: center;
        justify-content: center;
    }
    .score {
        display: flex;
        font-size: 30px;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
    }
    .status {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        border-radius: 10px;
        font-family: roboto;
        text-transform: lowercase;
        font-variant: small-caps;
        width: 50px;
        height: 40px;
    }
    .Start {
        background: green;
        
    }
    .Pause {
        background: red;
        border-radius: 50%;
    }
    .share, .refresh {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
    }
    p {
        font-family: roboto;
        font-weight: 300;
        color: rgb(94, 94, 94);
    }
    h2 {
        font-family: roboto;
        font-weight: 400;
        margin: 0;
    }
</style>