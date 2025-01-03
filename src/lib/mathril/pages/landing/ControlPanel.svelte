<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card'
    import Button, {Icon, Label} from '@smui/button'
    import Performance from "$lib/mathril/utils/practiceproblem/Performance.svelte";
    import Timer from "$lib/mathril/utils/practiceproblem/Timer.svelte";
</script>
<Card>
    <Content>
        <h1 class="mdc-typography--headline4" style="text-align:center;margin: 0em 0 0.7em 0;font-weight:200;">Control Panel</h1>
        <div class="features">
            <div class="point">
                <div class="item refresh">
                    <span class="material-icons"> refresh </span>
                </div>
                <span class="label">Reload</span>
            </div>
            
            <div class="point">
                <div class="item dayscore">
                    <abbr title="Today's accuracy">
                        <Performance strokedasharray={0.9} />
                    </abbr>
                </div>
                <span class="label">Accuracy</span>
            </div>
            <div class="point">
                <div class="item timer">
                    <Timer milli={70} seconds={30} minutes={10}/>
                </div>
                <span class="label">Timer</span>
            </div>
            <!-- <div class="point">
                <div class="item next">
                    <span class="material-icons"> arrow_forward </span>
                </div>
                <span class="label">Next</span>
            </div> -->
            <div class="point">
                <div class="item streak">
                    <svg width="100%" height="100%" viewBox="-48 -20.5 200 190"><path d="M 27.11,56.29 L 43.5,-11.04 L 73,49.45 L 142.11,44.22 L 93.69,90.97 L 120.02,155.08 L 60.59,123.48 L 7.75,168.33 L 19.44,102.05 L -39.53,65.66 L 27.11,56.29 Z" stroke='rgba(0, 175, 255, 1)' stroke-width='2' fill="rgba(0, 175, 255, 1)"/>
                    <text text-anchor="middle" x="55" y="110" font-size="100px" fill="white">12</text>
                    </svg>
                </div>
                <span class="label">Streak</span>
            </div>
            <div class="point">
                <div class="item save">
                    <span class="material-icons"> save </span>
                </div>
                <span class="label">Save</span>
            </div>
            <!-- <div class="point">
                <div class="item share">
                    <span class="material-icons">share</span>
                </div>
                <span class="label">Share</span>
            </div> -->
            <div class="point">
                <div class="item writeMode">
                    <span class="writeMode material-icons">draw</span>
                </div>
                <span class="label">Write</span>
            </div>
        
            
        </div>
    </Content>
</Card>
<style>
    .item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 35px;
		height: 35px;
		border: 0.5px solid gray;
		border-radius: 50%;
	}
	.item span {
		font-size: 1.3em;
	}
    .features {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
        margin: auto;
        align-items: center;
        justify-content: center;
    }
    .streak {
		width: 35px;
		color: magenta;
		padding: 5px;
	}
    .point {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .label {
        font-size: 0.7em;
        font-family: roboto;
        font-weight: 300;
    }
</style>