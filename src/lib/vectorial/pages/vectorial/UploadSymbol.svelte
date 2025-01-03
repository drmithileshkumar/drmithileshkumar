<script>
    // @ts-nocheck
    
        import Listfield from '$lib/vectorial/ui/Listfield.svelte';
        import Segment from '$lib/vectorial/ui/Segment.svelte';
        import SegmentedButton from '$lib/vectorial/ui/SegmentedButton.svelte';
        import Textarea from '$lib/vectorial/ui/Textarea.svelte';
        import Textfield from '$lib/vectorial/ui/Textfield.svelte';
        import Uploader from '$lib/vectorial/image/Uploader.svelte';
        import {page} from '$app/stores';
        import Button from '$lib/vectorial/ui/Button.svelte';
        import Label from '$lib/vectorial/ui/Label.svelte';
        import Actions from '$lib/vectorial/ui/Actions.svelte';
        import { goto } from '$app/navigation';
        // import { onMount } from 'svelte';
        import { createEventDispatcher, onMount } from 'svelte';
        import {symbol, DRAWING, elements, defs, BBOX} from './stores';
        //title, description, category, image, permission
        // export let image;
        // export let viewBox;
        let dispatch = createEventDispatcher();
        let title, description, category, permission = 'private';
        const placeholder = "nature, kids, kitchen, space, science, technology";
        const choices = ['private', 'public'];
        onMount(() => {
            $symbol = {
                title: $DRAWING.title,
                description: $DRAWING.description,
                category: $DRAWING.category,
                permission: $DRAWING.permission,
                elements: $elements,
                defs: $defs,
                viewBox: $BBOX
            }
        })
        
        const submit = async () => {
            if(!$page.data || !$page.data.user) {alert('Sign in please'); return;}
            $symbol.title = title;
            $symbol.description = description;
            $symbol.category = category;
            $symbol.permission = permission;
            const res = await fetch('/vectorial/api/vectorial/symbol', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify($symbol)
            })
            if(!res.ok) {
                alert('Failed to upload')
                return
            }
            const {id} = await res.json();
            dispatch('symbolSaved', $symbol)
            alert('Symbol uploaded with id: ' + id);
        }
        const cancel = () => {
            dispatch('cancel');
        }
    </script>
    <style>
        .newSymbol {
            width: 100%;
        }
    </style>
    <article class="newSymbol">
        <h1>New Symbol</h1>
        <Textfield label="Title" bind:value={title} />
        <br>
        <Textarea label="Description" bind:value={description} />
        <br>
        <Listfield name="Categories" bind:list={category} icon="category" {placeholder} />
        <br>
        <SegmentedButton singleSelect label="Permission" segments={choices} let:segment bind:selected={permission}>
            <Segment segment={segment} title={segment} />
        </SegmentedButton>
        <br>
        <Actions>
            <Button on:click={submit}>
                <Label>Submit</Label>
            </Button>
            <Button on:click={cancel}>
                <Label>Cancel</Label>
            </Button>
        </Actions>
        
    </article>