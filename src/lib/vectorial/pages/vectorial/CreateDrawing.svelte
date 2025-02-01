<script>
    // @ts-nocheck
    import Card, { Content, Actions } from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Textfield from '@smui/textfield';
    import { Textarea } from '@smui/textfield';
    import Listfield from "$lib/vectorial/ui/Listfield.svelte";
    import Chip, { Set, Text } from '@smui/chips';
    import Segment from "$lib/vectorial/ui/Segment.svelte";
    import SegmentedButton from "$lib/vectorial/ui/SegmentedButton.svelte";
    
    
    import { page } from "$app/stores";
    
    import { Group } from "$lib/vectorial/utils/common/g";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { createEventDispatcher } from "svelte";
    import {
        DRAWING,
        localGallery,
        elements,
        BBOX,
        drawingID,
        defs,
        appHistory,
    } from "./stores";

    //title, description, category, elements, permission
    let drawing = {
        drawingID: "",
        title: "New drawing",
        description: "New drawing",
        category: ["new"],
        elements: {
            Layers: [],
        },
        defs: {},
        viewBox: {
            x: 0,
            y: 0,
            width: 500,
            height: 500,
        },
        appHistory: [{}],
        permission: "public",
    };
    onMount(() => {
        // createLayer();
        // drawing.layers = $layers;
        // drawing.elements = $elements;
        // drawing = drawing;
    });

    const createLayer = () => {
        $elements = $elements;
    };
    let dispatch = createEventDispatcher();
    const placeholder = "nature, kids, kitchen, space, science, technology";
    const choices = ["private", "public"];
    const submit = async () => {
        // if (!$page.data || !$page.data.user) {
        //     alert("Sign in please");
        //     return;
        // }
        // const res = await fetch("/vectorial/api/vectorial", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(drawing),
        // });
        // if (!res.ok) {
        //     alert("Failed to upload");
        //     return;
        // }
        // const { id } = await res.json();
        let id = 'local' + 'Image' + Math.floor(100*Math.random())
        drawing.drawingID = id;
        $localGallery = [...$localGallery, id];
        window.localStorage.setItem(id, JSON.stringify(drawing))
        
        let newLayer = {
            id: "Layer-" + id + "-" + "0",
            tag: "g",
            name: "Layer",
            parent: "SVG",
            children: [],
            fill: "none",
            stroke: "none",
            strokewidth: "0",
            strokedasharray: "none",
            opacity: 1,
            tm: new DOMMatrix(),
            ctm: new DOMMatrix(),
            axis: new Point(),
            bbox: null,
            sbox: {
                tl: new Point(),
                tr: new Point(),
                bl: new Point(),
                br: new Point(),
            },
            isLocked: true,
            isVisible: true,
        };
        drawing.elements[newLayer.id] = newLayer;
        drawing.appHistory = [
            {
                id: "Layer-" + id + "-" + "0",
                change: {
                    children: [],
                },
            },
        ];
        drawing = drawing;

        drawing.elements.Layers = ["Layer-" + id + "-" + "0"];

        $DRAWING = drawing;
        $BBOX = drawing.viewBox;
        $drawingID = $DRAWING.drawinID;
        $elements = $DRAWING.elements;
        $defs = $DRAWING.defs;
        $appHistory = $DRAWING.appHistory;
        let updateStatus = await update();
        if (updateStatus === "done") {
            dispatch("drawingCreated", drawing);
            alert("Drawing created with id: " + id);
        }
    };
    const update = async () => {
        // const res = await fetch("/vectorial/api/vectorial", {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify($DRAWING), 
        // });
        // if (!res.ok) {
        //     goto("/vectorial/drawings");
        //     return "fail";
        // }
        window.localStorage.setItem($DRAWING.drawingID, JSON.stringify($DRAWING))
        return "done";
    };
    const cancel = () => {
        dispatch("cancel");
    };
</script>
<Card>
    <Content>
        <h6 style="margin:0;">New Drawing</h6>
        <Textfield label="Title" bind:value={drawing.title} style="width:100%;margin-bottom: 1em;"/>
        
        <Textfield label="Description" bind:value={drawing.description} style="margin-bottom: 1em; width: 100%; outline: none; border: none;"/>
        <Listfield
            name="Categories"
            bind:list={drawing.category}
            icon="category"
            {placeholder}
            
        />
        <Set chips={choices} let:chip choice bind:selected={drawing.permission} style="margin: 1em 0;">
            <Chip {chip}>
                <Text>{chip}</Text>
            </Chip>
        </Set>
    </Content>
    <Actions>
        <Button on:click={submit}>
            <Label>Ok</Label>
        </Button>
        <Button on:click={cancel}>
            <Label>Cancel</Label>
        </Button>
    </Actions>
</Card>

 
    
<style>

</style>
