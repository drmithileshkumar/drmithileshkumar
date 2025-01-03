<script lang='ts'>
	//@ts-nocheck
	import LayerDrawing from "$lib/vectorial/pages/layer/LayerDrawing.svelte";
	import LayerText from "$lib/vectorial/pages/layer/LayerText.svelte";
	import LayerPath from "$lib/vectorial/pages/layer/LayerPath.svelte";
	import {selectedId, onSVG} from './stores';
	import {selectedElements, elements, canvasBackground} from './stores';
    import LayerElement from "$lib/vectorial/pages/layer/LayerElement.svelte";
	export let id;
	const getIndex = (id) => {
		if(!$selectedElements) $selectedElements = [];
		let index = -1;
		for(let i = 0; i < $selectedElements.length; i++) {
			if($selectedElements[i] === id) {
				index = i;
				return index;
			}
		}
		return index;
	}
	const getInd = (a, arr) => {
        if (!arr || arr.length === 0) return -1;
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
            if (a === arr[i]) index = i;
        }
        return index;
    };
	const toggleSelection = () => {
		$onSVG = false;
		$selectedId = id;
		let index = getIndex(id);

		if(index !== -1) {
			$selectedElements.splice(index, 1);
			$selectedId = null;
		} else {
			$selectedElements = [...$selectedElements, id];
		}
		$selectedElements = $selectedElements;
	}
	const toggleLock = () => {
		$elements[id].isLocked = !$elements[id].isLocked;
	}
	const movePosition = (dir) => {
		$selectedId = id;
        if($elements[$selectedId].parent.includes('SVG')) {
            //rearrange the Layers
            let layerIndex = $elements.Layers.indexOf($selectedId);
            switch(dir) {
                case 'up': {
                    if(layerIndex === $elements.Layers.length - 1) return;
                    let temp = $elements.Layers[layerIndex + 1];
                    $elements.Layers[layerIndex + 1] = $elements.Layers[layerIndex];
                    $elements.Layers[layerIndex] = temp;
                    $elements = $elements;
                    break;
                }
                case 'down': {
                    if(layerIndex === 0) return;
                    let temp = $elements.Layers[layerIndex - 1];
                    $elements.Layers[layerIndex - 1] = $elements.Layers[layerIndex];
                    $elements.Layers[layerIndex] = temp;
                    $elements = $elements;
                    break;
                }
            }
            return;
        }
		
        let parent = $elements[$selectedId].parent;
        let children = $elements[parent].children;
        let index = getInd($selectedId, children);
        switch (dir) {
            case "up": {
                if (index === children.length - 1) return;
                let temp = children[index + 1];
                children[index + 1] = children[index];
                children[index] = temp;
                $elements[parent].children = children;
                $elements = $elements;
                break;
            }
            case "down": {
                if (index === 0) return;
                let temp = children[index - 1];
                children[index - 1] = children[index];
                children[index] = temp;
                $elements[parent].children = children;
                $elements = $elements;
                break;
            }
        }
    };
</script>
<div class="element">
	
	<span class="rect" on:click={toggleSelection} style="background: {$canvasBackground};">
		<LayerDrawing>
			<LayerElement {id} />
		</LayerDrawing>
	</span>
	
		<!-- <span on:click={toggleSelection}>{id.split("-")[0] + id.split("-")[2]}</span> -->
	
	<span class="{$selectedElements?.indexOf(id) > -1 || $selectedId === id ? 'strong':''}" contenteditable="true" bind:textContent={$elements[id].name}></span>
	<span class="actions">
		<span class="material-icons action" on:click={() => movePosition("down")}>arrow_downward</span>
		<span class="material-icons action" on:click={() => movePosition("up")}>arrow_upward</span>
		<span on:click={toggleLock} class="material-icons action">{$elements[id].isLocked ? 'lock' : 'lock_open'}</span>
		<!-- <span on:click={toggleLock} class="material-icons action">{$elements[id].isLocked ? 'visibility' : 'visibility_off'}</span> -->
	</span>
	
</div>

<!-- <span style="background-image: url(/tutorial/icons/{type}.svg)">{id}</span> -->

<style>
	.element {
		align-items: center;
		justify-content: space-between;
		display: flex;
		/* grid-template-columns: 50px 1fr 32px; */
		/* display: flex;
		flex-direction: row; */
		align-items: center;
	}
	.strong {
		font-weight: bold;
		color: red;
	}
	span {
		padding: 0 0 0 0.5em;
		cursor: pointer;
	}
	.rect {
		display: inline-flex;
		width: 50px;
		align-items: center;
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
	.action {
		font-size: 1.5em;
		padding:0;
	}
</style>