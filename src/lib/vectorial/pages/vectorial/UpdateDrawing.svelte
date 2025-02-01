<script lang='ts'>
    // @ts-nocheck
        import Card, {Content, Actions} from '@smui/card';
        import Listfield from '$lib/vectorial/ui/Listfield.svelte';
        import SegmentedButton, {Segment} from '@smui/segmented-button';
        import Textfield from '@smui/textfield';
        import Button, {Label} from '@smui/button';
        import { goto } from '$app/navigation';
        import { createEventDispatcher } from 'svelte';
        import { page } from '$app/stores';
        import {DRAWING, localGallery} from './stores';
        
        //title, description, category, elements, permission
        export let sourceApp;
        let dispatch = createEventDispatcher();
        const placeholder = "nature, kids, kitchen, space, science, technology";
        const choices = ['private', 'public'];
        const update = async () => {
            if(sourceApp === 'Colorn') {
                dispatch('updated', $DRAWING);
                
                return;
            }
            if(!$localGallery.includes($DRAWING.drawingID)) {
                $localGallery = [...$localGallery, $DRAWING.drawingID];
            }
            window.localStorage.setItem($DRAWING.drawingID, JSON.stringify($DRAWING));
            // const res = await fetch('/vectorial/api/vectorial', {
            //     method: "PUT",
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify($DRAWING)
            // })
            // if(!res.ok) {
            //     alert('Failed to update')
            //     return
            // }
            // goto(`/vectorial/${$page.data.user.publicID}/drawings`);
            goto(`/vectorial/drawings`)
        }
        const cancel = () => {
            dispatch('cancel');
        }
    </script>
    <style>
        .newDrawing {
            width: 100%;
        }
    </style>
    <article class="newDrawing">
        <Card>
            <Content>
                <h1 class="mdc-typography--headline6" style="margin:0 0 1em 0;">Update Drawing</h1>
                <Textfield variant="filled" style="width:100%;margin-bottom:1em;" label="Title" bind:value={$DRAWING.title} />
                <Textfield textarea style="width:100%;margin-bottom:1em;" label="Description" bind:value={$DRAWING.description} />
                <Listfield name="Categories" style="margin-bottom:1em;" bind:list={$DRAWING.category} icon="category" {placeholder} />
                <SegmentedButton singleSelect label="Permission" segments={choices} let:segment bind:selected={$DRAWING.permission}>
                    <Segment segment={segment}>{segment}</Segment>
                </SegmentedButton>
            </Content>
            <Actions>
                <Button on:click={update}>
                    <Label>Update</Label>
                </Button>
                <Button on:click={cancel}>
                    <Label>Cancel</Label>
                </Button>
            </Actions>
        </Card>
        
        
        <Actions>
            
        </Actions>
        
    </article>