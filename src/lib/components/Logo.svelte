<script>
    export let scale = 1;
</script>

<style>
    .webtar {
        position: relative;
        width: 200px;
        aspect-ratio: 1 / 1;
        -webkit-mask: radial-gradient(60px, #0000 98%, #000) -41px;
        mask: radial-gradient(60px, #0000 98%, #000) -40px;
        margin-left: 1em;
        transform: rotate(0)
    }
    .space {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 87.5%;
        height: 87.5%;
        border-radius: 50%;
        background: white;
    }
    .water {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 87.5%;
        height: 87.5%;
        border-radius: 50%;
        background: blue;
    }
    .fire {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 87.5%;
        height: 87.5%;
        border-radius: 50%;
        background: red;
    }
    .air {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 87.5%;
        height: 87.5%;
        border-radius: 50%;
        background: yellow;
    }
    .earth {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: green;
    }
</style>

<div class="webtar" style="transform: scale({scale});">
    <div class="earth">
        <div class="air">
            <div class="fire">
                <div class="water">
                    <div class="space"></div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    
</div>

