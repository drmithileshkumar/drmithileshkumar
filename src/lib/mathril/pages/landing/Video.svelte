<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card'
    import Button, {Icon, Label} from '@smui/button';
    import { goto } from '$app/navigation';
    let W = 500;
    $: detailsClass = W < 600 ? 'flex' : 'grid';
</script>
<Card>
    <Content>
        <Actions style="align-items:center;justify-content:center">
            <Button on:click={() => goto('/mathril/auth')}>
                <!-- <Icon><img src="/telegram.svg" alt="telegram" /></Icon> -->
                Get Started
            </Button>
        </Actions>
        <h3 class="mdc-typography--headline3" style='word-spacing:normal; font-weight:200;line-height:1.2; text-align:center; margin:0.5em; margin-bottom:0.2em;'>
            Improve your <strong style="color:tomato;">speed</strong> and <strong style="color:tomato;">accuracy</strong> in mathematics
        </h3>
        
        <div class="details flex" bind:clientWidth={W}>
            
            <h3 class="mdc-typography--headline6" style="font-weight:300;text-align:center; color: goldenrod;margin:0 0 1.5em 0">
                Just <strong>10 minutes</strong> of daily workout
            </h3>
            <div class="video">
                <video width="100%" height="100%" autoplay preload loop muted playsinline>
                    <source src="/mathril/landing/practice.mov" type="video/mp4">
                        Your browser does not support the video type.
                </video>
            </div>
        </div>
        
    </Content>
</Card>
<style>
    .details {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .video {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid teal; */
        border-radius: 12px;
        background: #252228;
        overflow: hidden;
        box-shadow: 0 0 3px currentColor;
    }
    /* .details p {
        text-align: center;
        color: rgb(55, 197, 3);
        font-weight: bold;
    } */
    .flex {
        display: flex;
        flex-direction: column;
    }
    /* .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    } */
</style>