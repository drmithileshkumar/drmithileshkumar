<script>
// @ts-nocheck

    import {Point} from '$lib/vectorial/utils/common/point';
    import {Group} from '$lib/vectorial/utils/common/g';
    import {Circle} from '$lib/vectorial/utils/common/circle';
    import {Ellipse} from '$lib/vectorial/utils/common/ellipse';
    import {Rectangle} from '$lib/vectorial/utils/common/rectangle';
    import {Regular} from '$lib/vectorial/utils/common/regular';
    import {Text} from '$lib/vectorial/utils/common/text';
    import {Latex} from '$lib/vectorial/utils/common/latex';
    import {Polyline} from '$lib/vectorial/utils/common/polyline';
    import {Path} from '$lib/vectorial/utils/common/path';
    import {Image} from '$lib/vectorial/utils/common/image';
    import {Shadow} from '$lib/vectorial/utils/common/shadow';
    import {TextMask} from '$lib/vectorial/utils/common/textMask';
    import {LinearGradient} from '$lib/vectorial/utils/common/linearGradient';
    import {RadialGradient} from '$lib/vectorial/utils/common/radialGradient';
    import {Marker} from '$lib/vectorial/utils/common/marker';
    import Symbol from '$lib/vectorial/pages/vectorial/Symbol.svelte';
    import {ripple} from '$lib/vectorial/ui/ripple';
    import {symbols, objectCount, currentLayer, elements, defs, DRAWING} from './stores';
    const hydrateElement = (id, symbol) => {
            
        let elem;
        switch(symbol.elements[id].tag) {
            case 'g': {
                elem = new Group(symbol.elements[id]);
                break;
            }
            case 'path': {
                elem = new Path(symbol.elements[id]);
                break;
            }
            case 'polyline': {
                elem = new Polyline(symbol.elements[id]);
                break;
            }
            case 'line': {
                elem = new Line(symbol.elements[id]);
                break;
            }
            case 'rect': {
                elem = new Rectangle(symbol.elements[id]);
                break;
            }
            case 'circle': {
                elem = new Circle(symbol.elements[id]);
                break;
            }
            case 'ellipse': {
                elem = new Ellipse(symbol.elements[id]);
                break;
            }
            case 'text': {
                elem = new Text(symbol.elements[id]);
                break;
            }
            case 'image': {
                elem = new Image(symbol.elements[id]);
                break;
            }
            case 'latex': {
                elem = new Latex(symbol.elements[id]);
                break;
            }
        }
        elem.hydrate();
        symbol.elements[id] = elem;
        
        symbol.elements = symbol.elements;
    }
    const hydrateDef = (id, symbol) => {
        let elem;
        switch(symbol.defs[id].tag) {
            case 'shadow': {
                elem = new Shadow(symbol.defs[id]);
                break;
            }
            case 'textMask': {
                elem = new TextMask(symbol.defs[id]);
                break;
            }
            case 'linearGradient': {
                elem = new LinearGradient(symbol.defs[id]);
                break;
            }
            case 'radialGradient': {
                elem = new RadialGradient(symbol.defs[id]);
                break;
            }
            case 'marker': {
                elem = new Marker(symbol.defs[id]);
                break;
            }
        }
        elem.hydrate();
        symbol.defs[id] = elem;
        
        symbol.defs = symbol.defs;
    }
    const hydrateElements = (symbol) => {
        //create transformList
        let elementList = Object.keys(symbol.elements).filter(elemId => elemId !== 'Layers')
        elementList.forEach(id => {if(symbol.elements[id]) hydrateElement(id, symbol)});
        symbol.elements = symbol.elements;
        Object.keys(symbol.defs).forEach(def => {
            hydrateDef(def, symbol);
        })
        symbol = symbol;
    }
    const duplicateElement = (id, targetParent, targetId, symbol) => {
        
        let newCopy = symbol.elements[id].duplicate();
        newCopy.id = targetId;
        newCopy.parent = targetParent;
        $elements[newCopy.id] = newCopy;
        $elements[targetParent].children.push(targetId);
        
        //update pointList, relations, pointOnPathList
        
        $elements = $elements;
        $objectCount = $objectCount + 1;
    }
    const duplicateGroup = (id, targetParent, targetId, symbol) => {
        let newCopy = symbol.elements[id].duplicate();
        newCopy.id = targetId;
        newCopy.parent = targetParent;
        $elements[newCopy.id] = newCopy;
        $elements[targetParent].children.push(targetId);
        $elements[targetId].children = [];

        $objectCount = $objectCount + 1;
        $elements = $elements;

        
        for(let i = 0; i < symbol.elements[id].children.length; i++)
        {
            let parts = symbol.elements[id].children[i].split('-');
            let firstHalf = parts[0];
            for(j = 1; j < parts.length - 1; j++) {
                firstHalf += '-' + parts[j];
            }
            let child = symbol.elements[id].children[i];
            let newChild = firstHalf + '-' + $objectCount;
            // $elements[targetId].children.push(newChild);
            if(parts[0] === 'Group' || parts[0] === 'Layer') {
                duplicateGroup(child, targetId, newChild, symbol);
                
            } else {
                duplicateElement(child, targetId, newChild, symbol);
                
            }
        }
        
        
    }
    const duplicate = (symbol) => {
        let elementType;
        for(let i = 0; i < symbol.elements.Layers.length; i++) {
            elementType = symbol.elements.Layers[i].split('-')[0];
            if(elementType === 'Layer') elementType = 'Group';
            
            let parts = symbol.elements.Layers[i].split('-');
            let firstHalf = parts[0];
            for(i = 1; i < parts.length - 1; i++) {
                firstHalf += '-' + parts[i];
            }
            let newChild = firstHalf + '-' + $objectCount;
            if(elementType === 'Group') {
                duplicateGroup(symbol.elements.Layers[i], 'Layer-' + $DRAWING.drawingID + '-' + '0', newChild, symbol)
            } else {
                duplicateElement(symbol.elements.Layers[i], 'Layer-' + $DRAWING.drawingID + '-' + '0', newChild, symbol);
            }
        }
        let newDef, defCopy;
        Object.keys(symbol.defs).forEach(def => {
            //duplicate gradients, filters into $defs
            // newDef = def.split('-')[0] + '-' + $objectCount;
            defCopy = symbol.defs[def].duplicate();
            // defCopy.id = newDef;
            $defs[def] = defCopy;
            // $objectCount += 1;
        });
        
    }
    const insertSymbol = (symbol) => {
        
        //hydrate symbol first
        hydrateElements(symbol);
        //  merge $elements, $defs
        // merging can be implemented via duplication

        duplicate(symbol);//duplicates the elements and defs
        // let path = new Path(symbol.image);
        
        // path.id = 'Path-' + $objectCount, 
        // path.layer = $currentLayer, 
        // path.order = $layers[$currentLayer].length;
        
        // $layers[$currentLayer].push('Path-' + $objectCount);
        // path.hydrate(symbol.image);
        // $layers = $layers;
        // $objectCount = $objectCount + 1;
        // $elements[path.id] = path; 
        // $elements = $elements;
    }
</script>
<style>
    .appearance {
        position: absolute;
        z-index: 10;
        top: 5em;
        right: 1.5em;
        padding: 0.5em 1em;
        background: rgb(219, 219, 219);
        border-radius: 10px;
        display: flex;
        gap: 0.9em;
        align-items: center;
        justify-content: start;
        font-size: 0.7em;
        color: rgb(48, 48, 48);
        width: 300px;
        box-shadow: 0 0 3px black;
    }
</style>

<div class="appearance">
    <ul>
        {#each $symbols as symbol}
            <li use:ripple on:click={() => insertSymbol(symbol)} style="cursor:pointer;display:flex;flex-direction:row; align-items:center; gap: 1em;">
                <span style="display:flex;width: 2em; flex-direction:row; align-items:center">
                    <Symbol {symbol} />
                </span>
                <span>{symbol.title}</span>
                
            </li>
        {/each}
    </ul>
</div>