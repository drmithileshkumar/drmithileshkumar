<script>
    import {onMount} from 'svelte';
    export let width = 100;
    export let height = 100;
    export let strokeColor = "black";
    export let strokeWidth = 2;
    let canvas, ctx;
    let colors = ['green', 'blue', 'red', 'yellow', 'orange', 'black']
    onMount(() => {
        ctx = canvas.getContext('2d');
        init();
    })
    var flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

    export let globalCompositeOperation = "source-over";
    
    function init() {
        ctx = canvas.getContext("2d");
        width = canvas.width;
        height = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
        // node.addEventListener("touchstart", startDrag);
        // node.addEventListener("touchmove", drag);
        // node.addEventListener("touchend", endDrag);
        // node.addEventListener("touchcancel", endDrag);
        canvas.addEventListener("touchmove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("touchstart", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("touchend", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("touchcancel", function (e) {
            findxy('out', e)
        }, false);
    }
    
    
    
    function draw() {
        ctx.beginPath();
        ctx.globalCompositeOperation = globalCompositeOperation;
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {
        var m = confirm("Want to clear");
        if (m) {
            ctx.clearRect(0, 0, width, height);
            document.getElementById("canvasimg").style.display = "none";
        }
    }
    
    function save() {
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    }
    const getMousePosition = (evt) => {
        let rect = canvas.getBoundingClientRect();
        let scaleX = canvas.width/rect.width;
        let scaleY = canvas.height/rect.height;
        let clientx;
        let clienty;
        switch(evt.type) {
            case 'touchstart':
            case 'touchmove':
            case 'touchend':
            case 'touchcancel': {
                clientx = evt.touches[0].clientX;
                clienty = evt.touches[0].clientY;
                break;
            }
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseleave': {
                clientx = evt.clientX;
                clienty = evt.clientY;
                break;
            }
        }
        return {
            x: (clientx - rect.left) * scaleX,
            y: (clienty - rect.top) * scaleY
        }
    }
    const getCanvasCoords = (screenX, screenY) => {
        let matrix = ctx.getTransform();
        let inv = matrix.inverseSelf();
        return {
            x: screenX * inv.a + screenY * inv.c + inv.e,
            y: screenY * inv.b + screenY * inv.d + inv.f
        }
    }
    function findxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            let pos = getMousePosition(e);
            currX = pos.x;
            currY = pos.y;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = strokeColor;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                let pos = getMousePosition(e);
                e.preventDefault();
                currX = pos.x;
                currY = pos.y;
                draw();
            }
        }
    }
    // let mouseX = 0;
    // let mouseY = 0;
    // const getMousePosition = (evt) => {
    //     let rect = canvas.getBoundingClientRect();
    //     let scaleX = canvas.width/rect.width;
    //     let scaleY = canvas.height/rect.height;
    //     return {
    //         x: (evt.clientX - rect.left) * scaleX,
    //         y: (evt.clientY - rect.top) * scaleY
    //     }
    // }
    // const getCanvasCoords = (screenX, screenY) => {
    //     let matrix = ctx.getTransform();
    //     let inv = matrix.inverseSelf();
    //     return {
    //         x: screenX * inv.a + screenY * inv.c + inv.e,
    //         y: screenY * inv.b + screenY * inv.d + inv.f
    //     }
    // }
    // const handleMouse = (evt) => {
    //     let {x, y} = getMousePosition(evt);
    //     mouseX = x;
    //     mouseY = y;
    // }
    // const start = () => {
    //     canvas.addEventListener('mousemove', (evt) => findxy('move', evt));
    //     canvas.addEventListener('mousedown', (evt) => findxy('down', evt));
    //     canvas.addEventListener('mouseup', (evt) => findxy('up', evt));
    //     canvas.addEventListener('mouseleave', (evt) => findxy('out', evt));
    //     let rect = canvas.getBoundingClientRect();
    //     canvas.width = rect.width;
    //     canvas.height = rect.height;
    //     draw();
    // }

    // const draw = () => {

    // }
</script>
<!-- <div class="colors">
    {#each colors as color}
        <button style="background: {color};" on:click={() => strokeColor = color}></button>
    {/each}
</div> -->
<canvas bind:this={canvas} {width} {height}></canvas>

<!-- <style>
    .colors {
        display: flex;
        gap: 0.5em;
    }
</style> -->