<script>
    import {onMount} from 'svelte';
    export let width = 100;
    export let height = 100;
    export let strokeColor = "black";
    export let lineWidth = 2;
    let canvas, ctx;
    let colors = ['green', 'blue', 'red', 'yellow', 'orange', 'black'];
    let isDrawing, points = [], reducedPoints = [], areas = [], tangents = [], controlPoints = [], snapshot, areaThreshold = lineWidth, tangentThreshold = 0.01;
    let curveIndex = 0;
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
        ctx = canvas.getContext("2d", {willReadFrequently: true});
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
    const sqrDist = (p1, p2) => {
        return (p1.x - p2.x)*(p1.x - p2.x) + (p1.y - p2.y)*(p1.y - p2.y)
    }
    const needCubic = (p1, p2, p3, p4) => {
        let d12 = sqrDist(p1, p2);
        let d23 = sqrDist(p2, p3);
        let d34 = sqrDist(p3, p4);
        if(d23 > 2 * (d12 + d34)) return true;
        return false;
    }
    const tangent = (p1, p2) => {
        return (p2.y - p1.y)/(p2.x - p1.x);
    }
    const isSharp = (index) => {
        if(index < 1 || index > reducedPoints.length - 2) return false;
        let intangent = tangent(reducedPoints[index - 1], reducedPoints[index]);
        let outtangent = tangent(reducedPoints[index], reducedPoints[index + 1]);
        // console.log(index, Math.atan(outtangent), Math.atan(intangent), Math.abs(Math.atan(outtangent) - Math.atan(intangent)) > Math.PI - 0.01)
        return Math.abs(Math.atan(outtangent) - Math.atan(intangent)) > Math.PI - 0.01
    }
    const area = (p1, p2, p3) => {
        return 0.5*Math.abs(p1.x * (p2.y - p3.y) - p2.x * (p1.y - p3.y) + p3.x * (p1.y - p2.y))
    }
    const reduceAreaPoints = () => {
        let minArea = Math.min(...areas);
        if(minArea > areaThreshold) {
            // console.log('initial length', points.length);
            // console.log('reduced length', reducedPoints.length);
            return;
        }
        let minIndex = areas.indexOf(minArea);
        // console.log('minIndex-->', minIndex)
        if(minIndex > 0) {
            //check if it is a very sharp point 
            if(isSharp(minIndex)) {
                areas[minIndex] += 1000;
            } else {
                reducedPoints.splice(minIndex, 1);
                areas.splice(minIndex, 1);
                if(minIndex > 1) {
                    areas[minIndex - 1] = area(reducedPoints[minIndex - 2], reducedPoints[minIndex - 1], reducedPoints[minIndex]);
                }
                if(minIndex < reducedPoints.length - 1) {
                    areas[minIndex] = area(reducedPoints[minIndex - 1], reducedPoints[minIndex], reducedPoints[minIndex + 1]);
                }
                
                
            }
            reduceAreaPoints();
        }
    }
    const flatIndex = () => {
        for(let i = 1; i < reducedPoints.length - 1; i++) {
            if(tangents[i].in === 'inf' && tangents[i].out === 'inf') {
                return i;
            }
            if(tangents[i].in === 'inf') {
                if(1/Math.abs(tangents[i].out) > tangentThreshold) return i;
            }
            if(tangents[i].out === 'inf') {
                if(1/Math.abs(tangents[i].in) > tangentThreshold) return i;
            }
            if(Math.abs(tangents[i].in - tangents[i].out) < tangentThreshold) {
                return i;
            }
        }
        return -1;
    }
    const reduceTangentPoints = () => {
        let fIndex = flatIndex();
        if(fIndex !== -1) {
            tangents.splice(fIndex, 1);
            reducedPoints.splice(fIndex, 1);
            tangents[fIndex - 1].out = tangent(reducedPoints[fIndex -1], reducedPoints[fIndex]);
            tangents[fIndex].in = tangents[fIndex - 1].out
        }
    }
    const pointLength = (p1, p2) => {
        return Math.sqrt(sqrDist(p1, p2));
    }
    const cubicControls = (p1, p2, p3) => {
        let alpha = 0.1;
        let beta = 0.1;
        let v = {
            x: p3.x - p1.x,
            y: p3.y - p1.y
        }
        let controls = {
            tin: {x: p2.x - alpha * v.x,
                  y: p2.y - alpha * v.y 
                },
            tout: {x: p2.x + beta * v.x,
                  y: p2.y + beta * v.y 
                }
        }
        return controls;
    }
    function draw(givenPoints) {
        // controlPoints.length = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(snapshot, 0, 0);
        
        ctx.beginPath();
        ctx.globalCompositeOperation = globalCompositeOperation;
        // ctx.moveTo(prevX, prevY);
        // ctx.lineTo(currX, currY);
        ctx.moveTo(givenPoints[0].x, givenPoints[0].y)
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        let i = 1;
        for(i = 1; i < givenPoints.length - 2; i++) {
            
                let midPoint = {
                    x: (givenPoints[i].x + givenPoints[i + 1].x)/2,
                    y: (givenPoints[i].y + givenPoints[i + 1].y)/2
                }
                ctx.quadraticCurveTo(givenPoints[i].x, givenPoints[i].y, midPoint.x, midPoint.y);
                
                // controlPoints.push({
                //     x: 2 * givenPoints[i].x - controlPoints[i - 1].x,
                //     y: 2 * givenPoints[i].y - controlPoints[i - 1].y
                // })
                
                // p1 = givenPoints[i];
                // p2 = givenPoints[i + 1];
            
            
            
        }
        if(givenPoints.length > 2) 
            ctx.quadraticCurveTo(givenPoints[i].x, givenPoints[i].y, givenPoints[i + 1].x, givenPoints[i + 1].y);
        else ctx.quadraticCurveTo(givenPoints[i].x, givenPoints[i].y, givenPoints[i].x, givenPoints[i].y);
        ctx.stroke();
        ctx.closePath();
    }
    function drawSmooth(givenPoints) {
        // controlPoints.length = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(snapshot, 0, 0);
        
        ctx.beginPath();
        ctx.globalCompositeOperation = globalCompositeOperation;
        // ctx.moveTo(prevX, prevY);
        // ctx.lineTo(currX, currY);
        ctx.moveTo(givenPoints[0].x, givenPoints[0].y)
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        let m = 0;
        let dx1 = 0;
        let dy1 = 0;
        let dx2 = 0;
        let dy2 = 0;
        let preP = givenPoints[0];
        let nexP;
        let i = 1;
        for(i = 1; i < givenPoints.length; i++) {
            let curP = givenPoints[i];
            nexP = givenPoints[i + 1]
            if(nexP) {
                m = tangent(preP, nexP);
                dx2 = (nexP.x - curP.x) * (-0.3)
                dy2 = (dx2 * m * 1);
            } else {
                dx2 = 0;
                dy2 = 0;
            }
            // ctx.bezierCurveTo(controlPoints[i - 1].tout.x, controlPoints[i - 1].tout.y,  controlPoints[i].tin.x, controlPoints[i].tin.y, givenPoints[i].x, givenPoints[i].y);
            ctx.bezierCurveTo(preP.x - dx1, preP.y - dy1, curP.x + dx2, curP.y + dy2, curP.x, curP.y);
            dx1 = dx2;
            dy1 = dy2;
            preP = curP;
                
                // controlPoints.push({
                //     x: 2 * givenPoints[i].x - controlPoints[i - 1].x,
                //     y: 2 * givenPoints[i].y - controlPoints[i - 1].y
                // })
                
                // p1 = givenPoints[i];
                // p2 = givenPoints[i + 1];
            
            
            
        }
        // console.log(controlPoints)
        ctx.stroke();
        ctx.closePath();
    }
    function drawCurve(points, tension) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(snapshot, 0, 0);
        
        ctx.beginPath();
        ctx.globalCompositeOperation = globalCompositeOperation;
        ctx.moveTo(points[0].x, points[0].y);

        var t = (tension != null) ? tension : 1;
        for (var i = 0; i < points.length - 1; i++) {
            var p1 = (i > 0) ? points[i - 1] : points[0];
            var p2 = points[i];
            var p3 = points[i + 1];
            // var p3 = (i != points.length - 2) ? points[i + 2] : p2;
            let d12 = pointLength(p1, p2);
            let d23 = pointLength(p2, p3);
            let d123 = d12 + d23;
            let alpha = d12 / d123;
            let beta = d23 / d123;

            var cp1x = p2.x - (p3.x - p1.x) * alpha * t;
            var cp1y = p2.y - (p3.y - p1.y) * alpha * t;

            var cp2x = p2.x + (p3.x - p1.x) * beta * t;
            var cp2y = p2.y + (p3.y - p1.y) * beta * t;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }
        ctx.quadraticCurveTo(cp2x, cp2y, points[i].x, points[i].y);
        ctx.stroke();
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
            snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
            points.push({x: pos.x, y: pos.y});
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = strokeColor;
                ctx.ellipse(currX, currY, lineWidth/2, lineWidth/2, 0, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
                dot_flag = false;
            }
        }
        if(res == 'out') {
            flag = false;
            points.length = 0;
            reducedPoints.length = 0;
            areas.length = 0;
        }
        if (res == 'up') {
            flag = false;
            // console.log(points.length);
            // for(let i = 0; i < points.length; i++) {
            //     reducedPoints.push({
            //         x: points[i].x,
            //         y: points[i].y
            //     });
                
            // } 
            // tangents.push({
            //     in: tangent(points[0], points[1]),
            //     out: tangent(points[0], points[1])
            // })
            // for(let i = 1; i < points.length - 1; i++) {
            //     tangents.push({
            //         in: tangent(points[i - 1], points[i]),
            //         out: tangent(points[i], points[i + 1])
            //     })
            // }
            // tangents.push({
            //     in: tangent(points[points.length - 2], points[points.length - 1]),
            //     out: tangent(points[points.length - 2], points[points.length - 1])
            // })
            // areas.push(1000000);
            // if(points.length > 1) {
            //         for(let i = 1; i < points.length - 1; i++) {
            //         areas.push(area(points[i - 1], points[i], points[i + 1]));
            //     }
            //     areas.push(1000000);
            //     reduceAreaPoints();
                
                
            //     draw(reducedPoints);
            // }
            // console.log(points.length, reducedPoints.length)
            // compute bezier control points {tin, tout}
            if(points.length > 1) {
                // let cp0 = cubicControls(points[0], points[0], points[1])
                // controlPoints.push({
                //     tout: {
                //         x: cp0.tout.x,
                //         y: cp0.tout.y
                //     },
                //     tin: {
                //         x: cp0.tin.x,
                //         y: cp0.tin.y
                //     }
                // })
                // let i = 1;
                // controlPoints.push(cubicControls(points[0], points[0], points[1]));
                // for(i = 1; i < points.length - 1; i++) {
                //     controlPoints.push(cubicControls(points[i - 1], points[i], points[i + 1]));
                // }
                // controlPoints.push(cubicControls(points[i - 1], points[i - 1], points[i]));
                // drawSmooth(points);
                drawCurve(points, 0.3);
            }   
            points.length = 0;
            reducedPoints.length = 0;
            areas.length = 0;
            controlPoints.length = 0;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                let pos = getMousePosition(e);
                e.preventDefault();
                // if(Math.abs(prevX - pos.x) + Math.abs(prevY - pos.y) > 2) {
                    points.push({x: pos.x, y: pos.y});
                
                    currX = pos.x;
                    currY = pos.y;
                    draw(points);
                // }
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