<script lang='ts'>
    //@ts-nocheck
    import {Point} from '$lib/vectorial/utils/common/point';
    import {Polyline} from '$lib/vectorial/utils/common/polyline';
    import {ripple} from '$lib/vectorial/ui/ripple';
    import {svg, elements, objectCount, selectedId, currentLayer, activeElement, showVertices} from '$lib/vectorial/pages/vectorial/stores';
    export let inputElementId;
    export let  takingPoints = false;
    export let boundingBox;
    export let activeVertex;
    let newVertex;
    let controlModeActive = false;
    let newNodeParent;
    const createPolyline = () => {
         takingPoints = ! takingPoints;
        if( takingPoints) {
            let treeNode = {id: 'Polyline-' + $objectCount, name: 'Polyline'};
            let polyline = new Polyline({layer:'Layer-'+$currentLayer, group: 'Layer-'+$currentLayer, treeNode});
            $elements['Layer-'+$currentLayer].treeNode.elements.push(treeNode);
            
            $objectCount = $objectCount + 1;
            $elements[treeNode.id] = polyline; 
            $elements = $elements;
            
            controlModeActive = true;
            inputElementId =  treeNode.id;
            activatePointInputMode()
        }
        if(! takingPoints) {
            $svg.removeEventListener('click', takePoints);
            $svg.removeEventListener('contextmenu', finishTakingPoints);
            inputElementId = null;
        }
    }
    const activatePointInputMode = () => {
        $svg.addEventListener('click', takePoints)
        $svg.addEventListener('contextmenu', finishTakingPoints)
    }
    const takePoints = (evt) => {
        // console.log('taking points');
        
        function getMousePosition(evt) {
            
            var CTM = boundingBox.getScreenCTM().inverse();
            return {
                x: CTM.a*evt.clientX + CTM.c*evt.clientY + CTM.e,
                y: CTM.b*evt.clientX + CTM.d*evt.clientY + CTM.f
            };
        }
        let point = getMousePosition(evt);
        let newc = new Point(point.x, point.y), newp = new Point(point.x, point.y);
        
        $elements[inputElementId].controls.push({id:inputElementId + '-' + $elements[inputElementId].nv, point: newp});
        $elements[inputElementId].controlpoints.push({id:inputElementId + '-' + $elements[inputElementId].nv, point: newp.duplicate()});
        $elements[inputElementId].nv += 1;
        $elements[inputElementId].setPoints();
        $elements = $elements;
         
    }
    const finishTakingPoints = () => {
         takingPoints = false;
        $svg.removeEventListener('click', takePoints);
        $svg.removeEventListener('contextmenu', finishTakingPoints);
        inputElementId = null;
    }
    const controlMode = () => {
        //compute control positions
        if(!$activeElement) return;
        let transforms = $activeElement.transform.baseVal;
        let tm = transforms.consolidate().matrix;
        let id = $activeElement.getAttribute('id'), x, y;
        for(let i = 0; i < $elements[id].controls.length; i++) {
            
            x = $elements[id].controls[i].point.x;
            y = $elements[id].controls[i].point.y;
            $elements[id].controlpoints[i].point = new Point(
                tm.a * x + tm.c * y + tm.e, tm.b * x + tm.d * y + tm.f
            )

        }
        $elements[id].controlpoints = $elements[id].controlpoints;
        $elements = $elements;
        $showVertices = true;
    }
    const newNodeMode = () => {
        if($showVertices) {
            newVertex = !newVertex;
            if(newVertex) {
                $svg.addEventListener('click', selectParentNode);
                newVertex = true;
            }
        }
        
        if(!newVertex) {
            $svg.removeEventListener('click', insertNewNode);
        }
    }
    const selectParentNode = (evt) => {
        newNodeParent = evt.target;
        $svg.removeEventListener('click', selectParentNode);
        $svg.addEventListener('click', insertNewNode);
    }
    const insertNewNode = (evt) => {
        //take click position, check for stroke position, use newNodeParent to insert the new node
        function getMousePosition(evt) {
            
            var CTM = boundingBox.getScreenCTM().inverse();
            return {
                x: CTM.a*evt.clientX + CTM.c*evt.clientY + CTM.e,
                y: CTM.b*evt.clientX + CTM.d*evt.clientY + CTM.f
            };
        }
        let point = getMousePosition(evt);
        let svgpoint = $svg.createSVGPoint();
        let offset = {
            x: point.x,
            y: point.y
        };
        let transforms = $activeElement.transform.baseVal;
        let transform = transforms.getItem(0);
        offset.x -= transform.matrix.e;
        offset.y -= transform.matrix.f;
        svgpoint.x = offset.x;
        svgpoint.y = offset.y;
        let TM = transforms.consolidate().matrix;
        let x, y;
        // if($activeElement.isPointInStroke(svgpoint)) {
            let id = $activeElement.getAttribute('id');
            let parentid = newNodeParent.getAttribute('id');
            //create new control {id, c0, point, c1}
            $elements[id].controls.forEach(item => {
                if(item.id === parentid) {
                    x = item.point.x;
                    y = item.point.y;
                }
            })
            let oldp = new Point(x, y);
            let nn = new Point(offset.x, offset.y);
            let newControl = {
                id: id + '-' + $elements[id].nv,
                point: nn
            }
            let newControlPoint = {
                id: newControl.id,
                point: new Point(point.x, point.y),
            }
            $elements[id].nv += 1;
            let newControls = [];
            let newControlPoints = [];
            for(let i = 0; i < $elements[id].controls.length; i++) {
                newControls.push($elements[id].controls[i]);
                newControlPoints.push($elements[id].controlpoints[i]);
                if($elements[id].controls[i].id === parentid) {
                    newControls.push(newControl);
                    newControlPoints.push(newControlPoint);
                }
            }
            $elements[id].controls = newControls;
            $elements[id].controlpoints = newControlPoints;
            $elements[id].setPoints();
            $elements = $elements;
        // }
    }
    const deleteNode = () => {
        let nodeId = activeVertex.getAttribute('id');
        let id = $activeElement.getAttribute('id');
        let newControls = [];
        let newControlPoints = [];
        for(let i = 0; i < $elements[id].controls.length; i++) {
            
            if($elements[id].controls[i].id !== nodeId) {
                newControls.push($elements[id].controls[i]);
                newControlPoints.push($elements[id].controlpoints[i]);
            }
        }
        $elements[id].controls = newControls;
        $elements[id].controlpoints = newControlPoints;
        $elements[id].setD();
        $elements = $elements;
        activeVertex = null;
    }
    
    const joinPath = (actionType) => {
        if(actionType) $elements[$selectedId].close();
        else {
            $elements[$selectedId].open();
        }
        $elements = $elements;
    }
</script>
<style>
    .vbuttongroup {
        padding: 0.5em 1em;
        background: rgb(219, 219, 219);
        border-radius: 10px;
        display: flex;
        gap: 0.9em;
        width: 4em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.7em;
        color: rgb(48, 48, 48);
    }
    .vbuttongroup span {
        cursor: pointer;
    }
    .active {
        background: rgb(240, 240, 240);
        border-radius: 5px;
    }
</style>
<div class="vbuttongroup">
    <span class="material-symbols-outlined { takingPoints ? 'active':''}" use:ripple on:click={createPolyline}>
        <!-- svelte-ignore component-name-lowercase -->
        <svg width="100%" height="100%" viewBox="-527 -203 481 321" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><marker id="arrow" refX="0" refY="5" markerWidth="10" markerHeight="10" orient="auto-start-reverse"><path d="M 0,0 L 5,5 L 0,10 z" fill="white" stroke="black" stroke-width="1" opacity="1"></path></marker></defs><polyline layer="0" order="0" class="draggable" id="Polyline-1" points="-506.00,-180.00 -396.00,-21.00 -220.00,-177.00 -68.00,-4.00 " fill="rgba(0, 0, 0, 0)" stroke="rgba(0, 0, 0, 1)" stroke-width="20" stroke-dasharray="none" opacity="1" transform="translate(0 0) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></polyline><circle class="draggable" cx="0" cy="0" r="25" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-502 -178) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle><circle class="draggable" id="Circle-3" cx="0" cy="0" r="25" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-397 -26) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle><circle class="draggable" id="Circle-4" cx="0" cy="0" r="25" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-218 -177) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle><circle class="draggable" id="Circle-5" cx="0" cy="0" r="25" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-71 -7) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle></svg>
    </span>
    <span class:active={$showVertices} use:ripple on:click={controlMode} >
        <!-- svelte-ignore component-name-lowercase -->
        <svg width="100%" height="100%" viewBox="-450 -180 270 210" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path layer="0" order="0" class="draggable" id="Path-1" d="M -419.00,-160.00 C -225,-159 -223.30141532687065,-88.9451273687636 -323.00,-72.50 C -420,-56.5 -418,13.5 -222.00,15.00" fill="rgba(0, 0, 0, 0)" stroke="rgba(0, 0, 0, 1)" stroke-width="15" stroke-dasharray="none" opacity="1" transform="translate(0 0) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></path><polyline layer="0" order="1" class="draggable" id="Polyline-2" points="-415.00,-93.50 -201.00,-100.50 " fill="rgba(0, 0, 0, 0)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-15 23.5) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></polyline><circle class="draggable" id="Circle-3" cx="0" cy="0" r="20" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" transform="translate(-423 -70) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle><circle class="draggable" id="Circle-4" cx="0" cy="0" r="20" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" opacity="1" transform="translate(-218 -78) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle><circle class="draggable" id="Circle-5" cx="0" cy="0" r="25" fill="rgba(255, 255, 253, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-319 -74) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle></svg>
    </span>
    <span class:active={newVertex} use:ripple on:click={newNodeMode}>
        <!-- svelte-ignore component-name-lowercase -->
        <svg width="100%" height="100%" viewBox="-501 -203 311 204.81076049804688" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path layer="0" order="0" class="draggable" id="Path-1" d="M -501.00,0.00 C -432,11 -500.96993382341464,-137.80649858193033 -370.00,-135.00 C -230,-132 -319.8772850366779,13.928524881418637 -246.00,1.00" fill="rgba(0, 0, 0, 0)" stroke="rgba(0, 0, 0, 1)" stroke-width="20" stroke-dasharray="none" opacity="1" transform="translate(0 0) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></path><circle class="draggable" cx="0" cy="0" r="25" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-368 -134) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle><rect class="draggable" id="Rect-3" x="0" y="0" width="100" height="30" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-290 -166) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></rect><rect class="draggable" id="Rect-4" x="0" y="0" width="100" height="30" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-225 -203) rotate(90 0 0) scale(1 1) skewX(0) skewY(0)"></rect></svg>
    </span>
    <span use:ripple on:click={deleteNode}>
        <!-- svelte-ignore component-name-lowercase -->
        <svg width="100%" height="100%" viewBox="-501 -203 311 204.81076049804688" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path layer="0" order="0" class="draggable" id="Path-1" d="M -501.00,0.00 C -432,11 -500.96993382341464,-137.80649858193033 -370.00,-135.00 C -230,-132 -319.8772850366779,13.928524881418637 -246.00,1.00" fill="rgba(0, 0, 0, 0)" stroke="rgba(0, 0, 0, 1)" stroke-width="20" stroke-dasharray="none" opacity="1" transform="translate(0 0) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></path><circle class="draggable" cx="0" cy="0" r="25" fill="rgba(255, 255, 255, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="10" stroke-dasharray="none" opacity="1" transform="translate(-368 -134) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></circle><rect class="draggable" id="Rect-3" x="0" y="0" width="100" height="30" fill="rgba(0, 0, 0, 1)" stroke="rgba(0, 0, 0, 1)" stroke-width="1" stroke-dasharray="none" opacity="1" transform="translate(-290 -166) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"></rect></svg>
    </span>
    
    <!-- <strong use:ripple style="cursor:pointer" on:click={() => joinPath(true)}>Join</strong>
    <strong use:ripple style="cursor:pointer" on:click={() => joinPath(false)}>Open</strong> -->
</div>