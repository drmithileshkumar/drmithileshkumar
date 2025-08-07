<script>
    //@ts-nocheck
    import Drawing from "$lib/vectorial/pages/vectorial/Drawing.svelte";
    import Card, { Content, Actions } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import { goto } from "$app/navigation";
    import {
        DRAWING,
        localGallery,
        BBOX,
        drawingID,
        elements,
        defs,
        appHistory,
        objectCount,
        currentLayer,
        drawingSkip
    } from "$lib/vectorial/pages/vectorial/stores";
    import CreateDrawing from "$lib/vectorial/pages/vectorial/CreateDrawing.svelte";
    import { Path } from "$lib/vectorial/utils/common/path.js";
    import { Point } from "$lib/vectorial/utils/common/point";
    import { Line } from "$lib/vectorial/utils/common/line";
    import { Circle } from "$lib/vectorial/utils/common/circle";
    import { Ellipse } from "$lib/vectorial/utils/common/ellipse";
    import { Rectangle } from "$lib/vectorial/utils/common/rectangle";
    import { Regular } from "$lib/vectorial/utils/common/regular";
    import { Text } from "$lib/vectorial/utils/common/text";
    import { Latex } from "$lib/vectorial/utils/common/latex";
    import { Group } from "$lib/vectorial/utils/common/g";
    import { LinearGradient } from "$lib/vectorial/utils/common/linearGradient";
    import { RadialGradient } from "$lib/vectorial/utils/common/radialGradient";
    import { Marker } from "$lib/vectorial/utils/common/marker";
    import { Image } from "$lib/vectorial/utils/common/image";
    import { invalidate } from "$app/navigation";
    import { onMount } from 'svelte';
    import { pageLoadState } from '$lib/vectorial/stores';
    import { page } from "$app/stores";
    import { browser } from "$app/environment";

    import { currentPath } from "$lib/vectorial/stores";
    $currentPath = "Drawings";

    // export let data;
    let drawings = [];
    let isLoaded = false;
    onMount(() => {
        // $pageLoadState = true;
        const newDrawings = [];
        for(let i = 0; i < $localGallery.length; i++) {
            const newDrawing = window.localStorage.getItem($localGallery[i])
            if(newDrawing) {
                // drawings = [...drawings, JSON.parse(newDrawing)]
                newDrawings.push(JSON.parse(newDrawing));
            }
        }
        // drawings = drawings;
        drawings = newDrawings;
        isLoaded = true;
    })
    const deleteGallery = (e) => {
        let id = e.detail.drawingID;
        for(let i = 0; i < drawings.length; i++) {
            if(drawings[i].drawingID == id) {
                console.log('Deleting...')
                drawings.splice(i, 1);
                drawings = drawings;
                break;
            }
        }
        drawings = drawings;
    }
    const updateGallery = (e) => {
        drawings = [...drawings, e.detail.drawing]
    }
    // $: console.log('drawings...', drawings)
    let files,
        svgInput,
        importedImage = "",
        svgString, skip = 0;
    let isCreating = false,
        showPreview = false,
        elementIdMap = {},
        parseDrawing, svgJson;
    const create = async () => {
        isCreating = true;
    };
    const start = () => {
        isCreating = false;
        drawings = [...drawings, $DRAWING];
        alert("Loading app...");
        goto("/vectorial/app");
    };
    function convertColorToRGBA(color) {
        if (!browser || color === "none" || color === "NA") {
            // console.log(color);
            return color;
        }
        // Create a temporary div element
        const div = document.createElement("div");

        // Set the color of the div element
        div.style.color = color;

        // Append the div element to the body (this is necessary for getComputedStyle to work)
        document.body.appendChild(div);

        // Get the computed style of the div element
        const computedColor = getComputedStyle(div).color;

        // Remove the div element from the body
        document.body.removeChild(div);

        // If the color is already in rgb format (not rgba), convert it to rgba
        if (computedColor.startsWith("rgb(")) {
            return computedColor.replace("rgb(", "rgba(").replace(")", ", 1)");
        }

        return computedColor;
    }

    async function getBase64(image) {
        if (image.type === "image/svg+xml") {
            // Read SVG file as text
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
                // Call the uploadFunction with the SVG content and other parameters
                importedImage = reader.result;
            };
        }
    }
    function isCollinear(p1, p2, p3) {
        // If any of the points are 'NA', they are not collinear
        if (p1 === "NA" || p2 === "NA" || p3 === "NA") {
            return false;
        }

        // Calculate the area of a triangle. If it's zero, the points are collinear
        const area =
            p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y);
        return area === 0;
    }
    function parseCommand(commandString) {
        const command = commandString[0];
        const numbers = commandString
            .slice(1)
            .trim()
            .split(/[\s,]+/)
            .map(Number);
        let result = { c: command };

        switch (command.toUpperCase()) {
            case "M":
            case "L":
            case "T":
                result.v = { x: numbers[0], y: numbers[1] };
                break;
            case "H":
                result.v = { x: numbers[0] };
                break;
            case "V":
                result.v = { y: numbers[0] };
                break;
            case "C":
                result.c0 = { x: numbers[0], y: numbers[1] };
                result.c1 = { x: numbers[2], y: numbers[3] };
                result.v = { x: numbers[4], y: numbers[5] };
                break;
            case "S":
            case "Q":
                result.c0 = { x: numbers[0], y: numbers[1] };
                result.v = { x: numbers[2], y: numbers[3] };
                break;
            case "A":
                result.r = numbers[0];
                result.ry = numbers[1];
                result.xrot = numbers[2];
                result.laf = numbers[3];
                result.sf = numbers[4];
                result.v = { x: numbers[5], y: numbers[6] };
                break;
        }

        return result;
    }
    function convertPathData(subpaths) {
        let output = [];
        let nv = 0;
        for (let i = 0; i < subpaths.length; i++) {
            let newSubpath = [];
            for (let j = 0; j < subpaths[i].length; j++) {
                let newCommand = {
                    id: nv,
                    v: new Point(subpaths[i][j].v.x, subpaths[i][j].v.y),
                    c: subpaths[i][j].c,
                    t: 'sharp',
                    tin: 'NA',
                    tout: 'NA'
                }
                if(subpaths[i].length > j + 1) {
                    switch(subpaths[i][j + 1].c) {
                        case 'Q':
                        case 'S':
                        case 'C': {
                            newCommand.tout = new Point(subpaths[i][j + 1].c0.x, subpaths[i][j + 1].c0.y);
                            break;
                        }
                        case 'A': {
                            newCommand.tout = new Point(subpaths[i][j + 1].v.x, subpaths[i][j].v.y)
                            break;
                        }
                    }
                }
                switch(newCommand.c) {
                    case 'M': {
                        // console.log(subpaths[i][subpaths[i].length -1])
                        if(subpaths[i][subpaths[i].length -1].v.x === subpaths[i][j].v.x && subpaths[i][subpaths[i].length -1].v.y === subpaths[i][j].v.y) {
                            newCommand.tin = subpaths[i][subpaths[i].length -1].c1 && subpaths[i][subpaths[i].length -1].c1 !== 'NA' ? new Point(subpaths[i][subpaths[i].length -1].c1.x, subpaths[i][subpaths[i].length -1].c1.y) : 'NA';
                        }
                        break;
                    }
                    case 'C': {
                        newCommand.tin = new Point(subpaths[i][j].c1.x, subpaths[i][j].c1.y);
                        break;
                    }
                    case 'Q': 
                    case 'S': {
                        newCommand.c = 'C';
                        newCommand.tin = new Point(subpaths[i][j].c0.x, subpaths[i][j].c0.y);
                        break;
                    }
                    case 'A': {
                        newCommand.tin = new Point(subpaths[i][j].v.x, subpaths[i][j].v.y);
                        newCommand.r = subpaths[i][j].r;
                        newCommand.ry = subpaths[i][j].ry;
                        newCommand.sf = subpaths[i][j].sf;
                        newCommand.laf = subpaths[i][j].laf;
                        newCommand.xrot = subpaths[i][i].xrot;
                        break;
                    }
                    case 'H':
                    case 'V': {
                        newCommand.c = 'L';
                        break;
                    }
                }
                if(j === subpaths[i].length - 1) {
                    if(subpaths[i][0].v.x === subpaths[i][j].v.x && subpaths[i][0].v.y === subpaths[i][j].v.y) {
                        newCommand.tout = subpaths[i][0].tout;
                        // console.log('closed subpath...', newCommand.tout, subpaths[i][0].tout);
                    }
                }
                if(!newCommand.tout) newCommand.tout = 'NA';
                newSubpath.push(newCommand);
                nv++;
            }
            output.push(newSubpath);
        }
        return {output, nv};
    }

    function parsePathD(d) {
        const commands = d.match(/([a-zA-Z])([^a-zA-Z]*)/g);
        let subpaths = [];
        let currentSubpath = [];
        let currentMCommand = null;
        for (let command of commands) {
            if (command[0].toUpperCase() === "M") {
                if (currentSubpath.length > 0) {
                    subpaths.push(currentSubpath);
                    currentSubpath = [];
                }
                currentMCommand = parseCommand(command);
                currentSubpath.push(currentMCommand);
            } else if (command[0].toUpperCase() === "Z") {
                // Replace 'Z' with a copy of the last command
                let copiedCommand = {
                    ...currentSubpath[currentSubpath.length - 1],
                };
                // Change the vertex position of this additional command to be equal to the vertex of the 'M' command
                if (currentMCommand && currentMCommand.v) {
                    copiedCommand.v = { ...currentMCommand.v };
                }
                currentSubpath.push(copiedCommand);
            } else {
                currentSubpath.push(parseCommand(command));
            }
        }
        subpaths.push(currentSubpath); // Push the last subpath
        return convertPathData(subpaths);
    }
    function circlePath(cx, cy, r) {
        let v0 = new Point(cx + r, cy);
        let v1 = new Point(cx, cy + r);
        let v2 = new Point(cx - r, cy);
        let v3 = new Point(cx, cy - r);
        let v4 = new Point(cx + r, cy);
        let d = 'M ' + v0.x + ', ' + v0.y + ' ' + 'A ' + r + ' ' + r + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v1.x + ', ' + v1.y + ' ' + 'A ' + r + ' ' + r + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v2.x + ', ' + v2.y + ' ' + 'A ' + r + ' ' + r + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v3.x + ', ' + v3.y + ' ' + 'A ' + r + ' ' + r + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v4.x + ', ' + v4.y + ' Z';
        return d;
    }
    function linePath(x1, y1, x2, y2) {
        return 'M ' + x1 + ', ' + y1 + ' L ' + x2 + ', ' + y2;
    }
    function rectPath(x, y, width, height) {
        return 'M ' + x + ', ' + y + " L " + (x + width) + ', ' + y + ' L ' + (x + width) + ', ' + (y + height) + ' L ' + x + ', ' + (y + height) + ' L ' + x + ', ' + y + ' Z';
    }
    function ellipsePath(cx, cy, rx, ry) {
        let v0 = new Point(cx + rx, cy);
        let v1 = new Point(cx, cy + ry);
        let v2 = new Point(cx - rx, cy);
        let v3 = new Point(cx, cy - ry);
        let v4 = new Point(cx + rx, cy);
        let d = 'M ' + v0.x + ', ' + v0.y + ' ' + 'A ' + rx + ' ' + ry + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v1.x + ', ' + v1.y + ' ' + 'A ' + rx + ' ' + ry + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v2.x + ', ' + v2.y + ' ' + 'A ' + rx + ' ' + ry + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v3.x + ', ' + v3.y + ' ' + 'A ' + rx + ' ' + ry + ' ' + 0 + ' ' + 1 + ' ' + 0 + ' ' + v4.x + ', ' + v4.y + ' Z';
        return d;
    }
    function polylineToPathD(polylinePoints) {
        const points = polylinePoints.trim().split(/\s+|,/).map(Number);
        let d = `M${points[0]},${points[1]}`;

        for (let i = 2; i < points.length; i += 2) {
            d += ` L${points[i]},${points[i + 1]}`;
        }

        return d;
    }
    function polygonToPathD(polygonPoints) {
        const points = polygonPoints.trim().split(/\s+|,/).map(Number);
        let d = `M${points[0]},${points[1]}`;

        for (let i = 2; i < points.length; i += 2) {
            d += ` L${points[i]},${points[i + 1]}`;
        }
        d += ` L${points[0]},${points[1]} Z`;
        return d;
    }
    function svgToJson(svgString) {
        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgString, "image/svg+xml");

        // Helper functions to convert transform commands into matrices
        function toRadians(angle) {
            return angle * (Math.PI / 180);
        }

        function createTranslateMatrix(dx, dy) {
            return `matrix(1, 0, 0, 1, ${dx}, ${dy})`;
        }

        function createRotateMatrix(angle, cx = 0, cy = 0) {
            const rad = toRadians(angle);
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            return `matrix(${cos}, ${-sin}, ${sin}, ${cos}, ${
                -cx * cos + cy * sin + cx
            }, ${-cx * sin - cy * cos + cy})`;
        }

        function createScaleMatrix(sx, sy) {
            return `matrix(${sx}, 0, 0, ${sy}, 0, 0)`;
        }

        function createSkewXMatrix(angle) {
            return `matrix(1, 0, ${Math.tan(toRadians(angle))}, 1, 0, 0)`;
        }

        function createSkewYMatrix(angle) {
            return `matrix(1, ${Math.tan(toRadians(angle))}, 0, 1, 0, 0)`;
        }

        function parseTransform(transformString) {
            if (transformString.includes("matrix")) return transformString;
            const multiplyMatrices = (a, b) => [
                a[0] * b[0] + a[2] * b[1],
                a[1] * b[0] + a[3] * b[1],
                a[0] * b[2] + a[2] * b[3],
                a[1] * b[2] + a[3] * b[3],
                a[0] * b[4] + a[2] * b[5] + a[4],
                a[1] * b[4] + a[3] * b[5] + a[5],
            ];

            const matrices = transformString
                .replace(/\s+/g, "")
                .split(")")
                .reduce((acc, command) => {
                    if (command.startsWith("translate")) {
                        const [dx, dy = 0] = command.slice(10, -1).split(",");
                        acc.push([1, 0, 0, 1, dx, dy]);
                    } else if (command.startsWith("rotate")) {
                        const [angle, cx = 0, cy = 0] = command
                            .slice(7, -1)
                            .split(",");
                        const matrix = createRotateMatrix(angle, cx, cy);
                        acc.push(matrix.slice(7, -1).split(",").map(Number));
                    } else if (command.startsWith("scale")) {
                        const [sx, sy = sx] = command.slice(6, -1).split(",");
                        acc.push([sx, 0, 0, sy, 0, 0]);
                    } else if (command.startsWith("skewX")) {
                        const angle = command.slice(6, -1);
                        const matrix = createSkewXMatrix(angle);
                        acc.push(matrix.slice(7, -1).split(",").map(Number));
                    } else if (command.startsWith("skewY")) {
                        const angle = command.slice(6, -1);
                        const matrix = createSkewYMatrix(angle);
                        acc.push(matrix.slice(7, -1).split(",").map(Number));
                    }
                    return acc;
                }, []);

            const finalMatrix = matrices.reduce(
                multiplyMatrices,
                [1, 0, 0, 1, 0, 0]
            );
            return `matrix(${finalMatrix.join(", ")})`;
        }

        function elementToJson(element) {
            let obj = {
                tagName: element.tagName,
                attributes: {},
                children: [],
            };
            // if(element.tagName === 'text') console.log(element)
            // Add attributes
            if (element.attributes.length > 0) {
                for (let i = 0; i < element.attributes.length; i++) {
                    const attribute = element.attributes[i];
                    if (attribute.name === "transform") {
                        // Parse transform attribute
                        obj.attributes[attribute.name] = parseTransform(
                            attribute.value
                        );
                    } else {
                        if (attribute.name === "style") {
                            // Parse style attribute
                            // console.log(attribute.value)
                            const styleProperties = attribute.value
                                .split(";")
                                .reduce((acc, property) => {
                                    const [name, value] = property
                                        .split(":")
                                        .map((str) => str.trim());
                                    if (name && value) {
                                        acc[name] = value;
                                    }
                                    return acc;
                                }, {});
                            Object.assign(obj.attributes, styleProperties);
                        } else if(element.tagName === 'image' && attribute.name === 'xlink:href') {
                            obj.attributes['href'] = attribute.value;
                        } else {
                            obj.attributes[attribute.name] = attribute.value;
                        }
                    }
                }
            }
            // Special handling for text elements
            if (element.tagName === "text") {
                obj.attributes.content = element.textContent;
                ["font-size", "font-weight", "font-family"].forEach((attr) => {
                    if (element.style[attr]) {
                        obj.attributes[
                            attr.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
                        ] = element.style[attr];
                    }
                });
            }
            
            // Add children
            for (let i = 0; i < element.children.length; i++) {
                const child = element.children[i];
                obj.children.push(elementToJson(child));
            }

            // Parse path data
            if (element.tagName === "path") {
                let {output, nv} = parsePathD(element.getAttribute("d"))
                // console.log(output)
                obj.pathData = output;
                obj.nv = nv;
            }

            return obj;
        }
        svgJson = elementToJson(svgDocument.documentElement);
        return svgJson;
    }
    const submit = async (drawing) => {
        //id creation
        let id = 'local' + 'Image' + Math.floor(100*Math.random())
        drawing.drawingID = id;
        $localGallery = [...$localGallery, id];
        window.localStorage.setItem(id, JSON.stringify(drawing))
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
        return id;
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
        // return "done";
        window.localStorage.setItem($DRAWING.drawingID, JSON.stringify($DRAWING))
    };
    const setAttributes = (jsonElement, targetElement) => {
        let attributes = Object.keys(jsonElement.attributes);
        for (let i = 0; i < attributes.length; i++) {
            if (attributes[i] === "id") {
                //save it id map
                elementIdMap[jsonElement.attributes.id] = targetElement.id;
            } else if (attributes[i] === "stroke" || attributes[i] === "fill") {
                //convert to rgba
                // console.log(targetElement.id, jsonElement.attributes[attributes[i]])
                if (!jsonElement.attributes[attributes[i]].includes("url")) {
                    // console.log('in...', targetElement.id, jsonElement.attributes[attributes[i]])
                    targetElement[attributes[i]] = convertColorToRGBA(
                        jsonElement.attributes[attributes[i]]
                    );
                } else {
                    targetElement[attributes[i]] =
                        jsonElement.attributes[attributes[i]];
                }
            } else if (attributes[i] === "stroke-width") {
                targetElement.strokewidth =
                    jsonElement.attributes["stroke-width"];
            } else if (attributes[i] === "stroke-dasharray") {
                targetElement.strokedasharray =
                    jsonElement.attributes["stroke-dasharray"];
            } else if (attributes[i] === "marker-start") {
                targetElement.markerStart =
                    jsonElement.attributes["marker-start"];
            } else if (attributes[i] === "marker-mid") {
                targetElement.markerMid =
                    jsonElement.attributes["marker-mid"];
            } else if (attributes[i] === "marker-end") {
                targetElement.markerEnd =
                    jsonElement.attributes["marker-end"];
            } else if (attributes[i] === "transform") {
                let entries = jsonElement.attributes[attributes[i]]
                    .split("(")[1]
                    .split(")")[0]
                    .split(",")
                    .map((mi) => parseFloat(mi));
                targetElement.tm = new DOMMatrix(entries);
                // console.log(targetElement.tag, entries, jsonElement.attributes[attributes[i]])
            } else {
                targetElement[attributes[i]] =
                    jsonElement.attributes[attributes[i]];
            }
        }
    };
    // let spd = true;
    const setPathData = (pathData, targetElement) => {
        //needs fixing...
        let subpath = 0;
        // if (targetElement.id === "Path-Testing-7") console.log(pathData);

        let subpaths = pathData.length;
        targetElement.edges = [];
        targetElement.uiEdges = [];
        targetElement.edges = pathData;
        targetElement.uiEdges = pathData;
        // if (targetElement.id === "Path-Testing-7")
        //     console.log(targetElement.edges[0]);
        // spd = false;
        for (let subpath = 0; subpath < subpaths; subpath++) {
            for (let i = 0; i < pathData[subpath].length; i++) {
                // console.log(targetElement.id, i);
                targetElement.edges[subpath][i].v = new Point(
                    targetElement.edges[subpath][i].v.x,
                    targetElement.edges[subpath][i].v.y
                );
                if (
                    targetElement.edges[subpath][i].tin &&
                    targetElement.edges[subpath][i].tin !== "NA"
                ) {
                    targetElement.edges[subpath][i].tin = new Point(
                        targetElement.edges[subpath][i].tin.x,
                        targetElement.edges[subpath][i].tin.y
                    );
                }
                if (
                    targetElement.edges[subpath][i].tout &&
                    targetElement.edges[subpath][i].tout !== "NA"
                ) {
                    targetElement.edges[subpath][i].tout = new Point(
                        targetElement.edges[subpath][i].tout.x,
                        targetElement.edges[subpath][i].tout.y
                    );
                }
                targetElement.uiEdges[subpath][i].v = new Point(
                    targetElement.uiEdges[subpath][i].v.x,
                    targetElement.uiEdges[subpath][i].v.y
                );
                if (
                    targetElement.uiEdges[subpath][i].tin &&
                    targetElement.uiEdges[subpath][i].tin !== "NA"
                ) {
                    targetElement.uiEdges[subpath][i].tin = new Point(
                        targetElement.uiEdges[subpath][i].tin.x,
                        targetElement.uiEdges[subpath][i].tin.y
                    );
                }
                if (
                    targetElement.uiEdges[subpath][i].tout &&
                    targetElement.uiEdges[subpath][i].tout !== "NA"
                ) {
                    targetElement.uiEdges[subpath][i].tout = new Point(
                        targetElement.uiEdges[subpath][i].tout.x,
                        targetElement.uiEdges[subpath][i].tout.y
                    );
                }
            }
        }
    };
    const createLine = (elem, parent, layer, useElem = null) => {
        let line = new Line({
            id: "Line-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        if(useElem) setAttributes(useElem, line);
        setAttributes(elem, line);
        $elements[line.id] = line;
        $elements[parent].children.push(line.id);
        $objectCount = $objectCount + 1;
    };
    const createRect = (elem, parent, layer, useElem = null) => {
        let rect = new Rectangle({
            id: "Rect-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        if(useElem) setAttributes(useElem, rect);
        setAttributes(elem, rect);
        $elements[rect.id] = rect;
        $elements[parent].children.push(rect.id);
        $objectCount = $objectCount + 1;
    };
    const createCircle = (elem, parent, layer, useElem = null) => {
        let circle = new Circle({
            id: "Circle-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        if(useElem) setAttributes(useElem, circle);
        setAttributes(elem, circle);
        $elements[circle.id] = circle;
        $elements[parent].children.push(circle.id);
        $objectCount = $objectCount + 1;
    };
    const createEllipse = (elem, parent, layer, useElem = null) => {
        let ellipse = new Ellipse({
            id: "Ellipse-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        if(useElem) setAttributes(useElem, ellipse);
        setAttributes(elem, ellipse);
        $elements[ellipse.id] = ellipse;
        $elements[parent].children.push(ellipse.id);
        $objectCount = $objectCount + 1;
    };
    const createPolyline = (elem, parent, layer, useElem = null) => {
        let polyline = new Path({
            id: "Path-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        let d = polylineToPathD(elem.attributes.points);
        if(useElem) setAttributes(useElem, polyline);
        setAttributes(elem, polyline);
        polyline.tag = 'path';
        polyline.d = d;
        let {output, nv} = parsePathD(d)
        let commands = output;
        polyline.nv = nv;
        
        setPathData(commands, polyline);
        $elements[polyline.id] = polyline;
        $elements[parent].children.push(polyline.id);
        $objectCount = $objectCount + 1;
    };
    const createPolygon = (elem, parent, layer, useElem = null) => {
        let polygon = new Path({
            id: "Path-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        let d = polylineToPathD(elem.attributes.points);
        if(useElem) setAttributes(useElem, polygon);
        setAttributes(elem, polygon);
        polygon.tag = 'path';
        polygon.d = d;
        polygon.isClosed = true;
        let {output, nv} = parsePathD(d)
        let commands = output;
        polygon.nv = nv;
        setPathData(commands, polygon);
        $elements[polygon.id] = polygon;
        $elements[parent].children.push(polygon.id);
        $objectCount = $objectCount + 1;
    };
    const createText = (elem, parent, layer, useElem = null) => {
        let text = new Text({
            id: "Text-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        if(useElem) setAttributes(useElem, text);
        setAttributes(elem, text);
        // console.log(elem, text)
        $elements[text.id] = text;
        $elements[parent].children.push(text.id);
        $objectCount = $objectCount + 1;
    };
    const createPath = (elem, parent, layer, useElem = null) => {
        let path = new Path({
            id: "Path-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        path.fill = "NA";
        path.stroke = "NA";
        if(useElem) setAttributes(useElem, path);
        setAttributes(elem, path);
        //handle pathData
        setPathData(elem.pathData, path);
        path.nv = elem.nv;
        if (path.d.includes("Z")) path.isClosed = true;
        $elements[path.id] = path;
        $elements[parent].children.push(path.id);
        $objectCount = $objectCount + 1;
    };
    const createGroup = (elem, parent, layer, useElem = null) => {
        let group = new Group({
            id: "Group-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        group.fill = "NA";
        group.stroke = "NA";
        if(useElem) setAttributes(useElem, group);
        setAttributes(elem, group);
        $elements[group.id] = group;
        $elements[parent].children.push(group.id);
        $objectCount = $objectCount + 1;
        for (let i = 0; i < elem.children.length; i++) {
            elementsToDrawing(elem.children[i], group.id, layer, null);
        }
    };
    const createImage = (elem, parent, layer, useElem = null) => {
        let image = new Image({
            id: "Image-" + $drawingID + "-" + $objectCount,
            parent: parent,
            layer: layer,
        });
        if(useElem) setAttributes(useElem, image);
        setAttributes(elem, image);
        $elements[image.id] = image;
        $elements[parent].children.push(image.id);
        $objectCount = $objectCount + 1;
    };
    const createUse = (elem, parent, layer) => {
        //find href or xlink:href element in svgJson
        //get id of the referenced element
        // need to fix the attributes from use
        // console.log(elem);
        let refId = elem.attributes['href'] ? elem.attributes['href'].split('#')[1] : elem.attributes['xlink:href'].split('#')[1];
        for (let i = 0; i < svgJson.children.length; i++) {
            for (let j = 0; j < svgJson.children[i].children.length; j++) {
                if(svgJson.children[i].children[j].attributes.id === refId) {
                    elementsToDrawing(svgJson.children[i].children[j], parent, layer, elem);

                    break;
                }
            }
        }
        //set only those attributes from use that are not on the element referenced
    }
    const createLinearGradient = (elem, parent, layer) => {
        //id, tag, name, start, end, colors:[{offset, stopColor}]
        let lg = new LinearGradient({
            id: "LinearGradient-" + $drawingID + "-" + $objectCount,
        });
        lg.colors = [];
        // read attributes
        let attr = Object.keys(elem.attributes);
        for (let k = 0; k < attr.length; k++) {
            if (attr[k] === "x1" || attr[k] === "y1") {
                lg.start = new Point(
                    (elem.attributes.x1 / $BBOX.width) * 100 || 0,
                    (elem.attributes.y1 / $BBOX.height) * 100 || 0
                );
            } else if (attr[k] === "x2" || attr[k] === "y2") {
                lg.end = new Point(
                    (elem.attributes.x2 / $BBOX.width) * 100 || 0,
                    (elem.attributes.y2 / $BBOX.height) * 100 || 0
                );
            } else if (attr[k] === "id") {
                elementIdMap[elem.attributes.id] = lg.id;
            } else {
                lg[attr[k]] = elem.attributes[attr[k]];
            }
        }
        for (let i = 0; i < elem.children.length; i++) {
            if (elem.children[i].tagName === "stop") {
                lg.colors.push({
                    offset: elem.children[i].attributes["offset"],
                    stopColor: convertColorToRGBA(
                        elem.children[i].attributes["stop-color"]
                    ),
                });
            }
        }
        $defs[lg.id] = lg;
        //find the element at which it was applied
        // $elements[$selectedId]['fill'] = `url(#${lg.id})`;
        // $elements[$selectedId]['filltype'] = 'linear';

        $elements = $elements;
        $objectCount++;
    };
    const createRadialGradient = (elem, parent, layer) => {
        //id, tag, name, start, end, colors:[{offset, stopColor}]
        let rg = new RadialGradient({
            id: "RadialGradient-" + $drawingID + "-" + $objectCount,
        });
        rg.colors = [];
        // read attributes
        let attr = Object.keys(elem.attributes);
        for (let k = 0; k < attr.length; k++) {
            if (attr[k] === "cx" || attr[k] === "cy") {
                rg.center = new Point(
                    (elem.attributes.cx / $BBOX.width) * 100 || 0,
                    (elem.attributes.cy / $BBOX.height) * 100 || 0
                );
            } else if (attr[k] === "fx" || attr[k] === "fy") {
                rg.focus = new Point(
                    (elem.attributes.fx / $BBOX.width) * 100 || 0,
                    (elem.attributes.fy / $BBOX.height) * 100 || 0
                );
            } else if (attr[k] === "id") {
                elementIdMap[elem.attributes.id] = rg.id;
            } else {
                rg[attr[k]] = elem.attributes[attr[k]];
            }
        }
        for (let i = 0; i < elem.children.length; i++) {
            if (elem.children[i].tagName === "stop") {
                rg.colors.push({
                    offset: elem.children[i].attributes["offset"],
                    stopColor: convertColorToRGBA(
                        elem.children[i].attributes["stop-color"]
                    ),
                });
            }
        }
        $defs[rg.id] = rg;
        //find the element at which it was applied
        // $elements[$selectedId]['fill'] = `url(#${rg.id})`;
        // $elements[$selectedId]['filltype'] = 'linear';

        $elements = $elements;
        $objectCount++;
    };
    const createMarker = (elem, parent, layer) => {
        let mrk = new Marker({id: 'Marker-' + $drawingID + '-' + $objectCount})
        setAttributes(elem, mrk);
        if(elem.children.length > 0) {
            // console.log(elem.children)
            if(elem.children[0].tagName === 'path') {
                let markerPath = new Path({id: 'Marker' + $drawingID + '-' + $objectCount});
                setAttributes(elem.children[0], markerPath);
                if(!elem.children[0].attributes.fill) {
                    if(elem.children[0].attributes.d.includes('Z') || elem.children[0].attributes.d.includes('z'))
                        markerPath.fill = 'rgba(0, 0, 0, 1)'
                    else markerPath.fill = 'rgba(0, 0, 0, 0)'
                }
                if(!elem.children[0].attributes.stroke) {
                    markerPath.stroke = 'rgba(0, 0, 0, 0)'
                }
                mrk.path = markerPath;
            }
            // convert other shapes like rect, circle, polygon, polyline, ellipse, line to path
            if(elem.children[0].tagName === 'circle') {
                let d = circlePath(Number(elem.children[0].attributes.cx), Number(elem.children[0].attributes.cy), Number(elem.children[0].attributes.r));
                let markerPath = new Path({id: 'Marker' + $drawingID + '-' + $objectCount});
                setAttributes(elem.children[0], markerPath);
                if(!elem.children[0].attributes.fill) {
                    markerPath.fill = 'rgba(0, 0, 0, 1)'
                }
                if(!elem.children[0].attributes.stroke) {
                    markerPath.stroke = 'rgba(0, 0, 0, 0)'
                }
                markerPath.d = d;
                mrk.path = markerPath;
            }
            if(elem.children[0].tagName === 'rect') {
                let d = rectPath(Number(elem.children[0].attributes.x), Number(elem.children[0].attributes.y), Number(elem.children[0].attributes.width), Number(elem.children[0].attributes.height));
                let markerPath = new Path({id: 'Marker' + $drawingID + '-' + $objectCount});
                setAttributes(elem.children[0], markerPath);
                if(!elem.children[0].attributes.fill) {
                    markerPath.fill = 'rgba(0, 0, 0, 1)'
                }
                if(!elem.children[0].attributes.stroke) {
                    markerPath.stroke = 'rgba(0, 0, 0, 0)'
                }
                markerPath.d = d;
                mrk.path = markerPath;
            }
            if(elem.children[0].tagName === 'ellipse') {
                let d = ellipsePath(Number(elem.children[0].attributes.cx), Number(elem.children[0].attributes.cy), Number(elem.children[0].attributes.rx), Number(elem.children[0].attributes.ry));
                let markerPath = new Path({id: 'Marker' + $drawingID + '-' + $objectCount});
                setAttributes(elem.children[0], markerPath);
                if(!elem.children[0].attributes.fill) {
                    markerPath.fill = 'rgba(0, 0, 0, 1)'
                }
                if(!elem.children[0].attributes.stroke) {
                    markerPath.stroke = 'rgba(0, 0, 0, 0)'
                }
                markerPath.d = d;
                mrk.path = markerPath;
            }
            if(elem.children[0].tagName === 'line') {
                let d = linePath(Number(elem.children[0].attributes.x1), Number(elem.children[0].attributes.y1), Number(elem.children[0].attributes.x2), Number(elem.children[0].attributes.y2));
                let markerPath = new Path({id: 'Marker' + $drawingID + '-' + $objectCount});
                setAttributes(elem.children[0], markerPath);
                if(!elem.children[0].attributes.fill) {
                    markerPath.fill = 'rgba(0, 0, 0, 0)'
                }
                if(!elem.children[0].attributes.stroke) {
                    markerPath.stroke = 'rgba(0, 0, 0, 1)'
                }
                markerPath.d = d;
                mrk.path = markerPath;
            }
            if(elem.children[0].tagName === 'polyline') {
                let d = polylineToPathD(elem.children[0].attributes.points);
                let markerPath = new Path({id: 'Marker' + $drawingID + '-' + $objectCount});
                setAttributes(elem.children[0], markerPath);
                if(!elem.children[0].attributes.fill) {
                    markerPath.fill = 'rgba(0, 0, 0, 0)'
                }
                if(!elem.children[0].attributes.stroke) {
                    markerPath.stroke = 'rgba(0, 0, 0, 1)'
                }
                markerPath.d = d;
                mrk.path = markerPath;
            }
            if(elem.children[0].tagName === 'polygon') {
                let d = polygonToPathD(elem.children[0].attributes.points);
                let markerPath = new Path({id: 'Marker' + $drawingID + '-' + $objectCount});
                setAttributes(elem.children[0], markerPath);
                if(!elem.children[0].attributes.fill) {
                    markerPath.fill = 'rgba(0, 0, 0, 1)'
                }
                if(!elem.children[0].attributes.stroke) {
                    markerPath.stroke = 'rgba(0, 0, 0, 0)'
                }
                markerPath.d = d;
                mrk.path = markerPath;
            }
        }
        $defs[mrk.id] = mrk;
        $objectCount = $objectCount + 1;
    };
    const defsToDrawing = (elem, parent, layer) => {
        switch (elem.tagName) {
            case "linearGradient": {
                createLinearGradient(elem, parent, layer);
                break;
            }
            case "radialGradient": {
                createRadialGradient(elem, parent, layer);
                break;
            }
            case "marker": {
                createMarker(elem, parent, layer);
                break;
            }
        }
    };

    const elementsToDrawing = (elem, parent, layer, useElem = null) => {
        switch (elem.tagName) {
            case "g": {
                createGroup(elem, parent, layer, useElem);
                break;
            }
            case "path": {
                createPath(elem, parent, layer, useElem);
                break;
            }
            case "circle": {
                createCircle(elem, parent, layer, useElem);
                break;
            }
            case "rect": {
                createRect(elem, parent, layer, useElem);
                break;
            }
            case "text": {
                createText(elem, parent, layer, useElem);
                break;
            }
            case "ellipse": {
                createEllipse(elem, parent, layer, useElem);
                break;
            }
            case "polyline": {
                createPolyline(elem, parent, layer, useElem);
                break;
            }
            case "polygon": {
                createPolygon(elem, parent, layer, useElem);
                break;
            }
            case "line": {
                createLine(elem, parent, layer, useElem);
                break;
            }
            case "image": {
                createImage(elem, parent, layer, useElem);
                break;
            }
            case 'use': {
                createUse(elem, parent, layer);
                break;
            }
        }
    };
    const jsonToDrawing = async (svgJson) => {
        // $drawingID = "Testing";

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
        //get drawing id
        $drawingID = await submit(drawing);
        // $drawingID = "Testing";
        drawing.drawingID = $drawingID;
        //------------------
        $defs = {};
        $elements = {};
        $appHistory = [{}];
        if (svgJson.tagName === "svg") {
            if (svgJson.attributes.viewBox) {
                let vb = svgJson.attributes.viewBox?.split(" ");
                drawing.viewBox = {
                    x: vb[0],
                    y: vb[1],
                    width: vb[2],
                    height: vb[3],
                };
            }

            $BBOX = drawing.viewBox;
            //create layer here
            let newLayer = {
                id: "Layer-" + $drawingID + "-" + "0",
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
            $elements["Layers"] = [];
            $elements.Layers.push(newLayer.id);
            $elements[newLayer.id] = newLayer;
            $elements = $elements;
        }
        for (let i = 0; i < svgJson.children.length; i++) {
            if (svgJson.children[i].tagName === "defs") {
                //handle defs
                for (let j = 0; j < svgJson.children[i].children.length; j++) {
                    // console.log(svgJson.children[i].children[j])
                    defsToDrawing(
                        svgJson.children[i].children[j],
                        "Layer-" + $drawingID + "-" + "0",
                        "Layer-" + $drawingID + "-" + "0"
                    );
                }
            } else {
                elementsToDrawing(
                    svgJson.children[i],
                    "Layer-" + $drawingID + "-" + "0",
                    "Layer-" + $drawingID + "-" + "0",
                    null
                );
            }
        }
        //correct url ids
        // console.log(svgJson)
        let elementIds = Object.keys($elements);
        //rename urls to new ids
        // console.log(elementIdMap);
        for (let i = 0; i < elementIds.length; i++) {
            
            // console.log(typeof $elements[elementIds[i]] === Object, elementIds[i])
            // console.log(element)
            if(elementIds[i] !== 'Layers') {
                let attributes = Object.keys($elements[elementIds[i]]);
                for(let j = 0; j < attributes.length; j++) {
                    // console.log(elementIds[i], attributes[j], $elements[elementIds[i]][attributes[j]])
                    if(String($elements[elementIds[i]][attributes[j]]).includes('url')) {
                        let oldIdparts = $elements[elementIds[i]][attributes[j]]
                            .split("(")[1]
                            .split(")")[0]
                            .split("#");
                        let oldId = oldIdparts[oldIdparts.length - 1];
                        $elements[elementIds[i]][attributes[j]] = `url(#${elementIdMap[oldId]})`;
                    }
                }
            }
            // if (
            //     elementIds[i] !== "Layers" &&
            //     $elements[elementIds[i]].fill &&
            //     $elements[elementIds[i]].fill !== "NA" &&
            //     $elements[elementIds[i]].fill !== "none" &&
            //     $elements[elementIds[i]]?.fill.includes("url")
            // ) {
            //     let oldIdparts = $elements[elementIds[i]]["fill"]
            //         .split("(")[1]
            //         .split(")")[0]
            //         .split("#");
            //     let oldId = oldIdparts[oldIdparts.length - 1];
            //     $elements[elementIds[i]][
            //         "fill"
            //     ] = `url(#${elementIdMap[oldId]})`;
            // }
            // if (
            //     elementIds[i] !== "Layers" &&
            //     $elements[elementIds[i]].stroke &&
            //     $elements[elementIds[i]].stroke !== "NA" &&
            //     $elements[elementIds[i]].stroke !== "none" &&
            //     $elements[elementIds[i]].stroke.includes("url")
            // ) {
            //     let oldIdparts = $elements[elementIds[i]]["stroke"]
            //         .split("(")[1]
            //         .split(")")[0]
            //         .split("#");
            //     let oldId = oldIdparts[oldIdparts.length - 1];
            //     $elements[elementIds[i]][
            //         "stroke"
            //     ] = `url(#${elementIdMap[oldId]})`;
            // }

            // for(let j = 0; j < attributes.length; j++) {
            //     if(['stroke', 'fill', 'filter', 'mask'].indexOf(attributes[j]) !== -1 && $elements[elementIds[i]][attributes[j]].includes('url')) {
            //         let oldIdparts = $elements[elementIds[i]][attributes[j]].split('(')[1].split(')')[0].split('#');
            //         let oldId = oldIdparts[oldIdparts.length - 1];
            //         $elements[elementIds[i]][attributes[j]] = `url(#${elementIdMap[oldId]})`
            //         console.log(oldId, elementIds[i], attributes[j], $elements[elementIds[i]][attributes[j]])
            //     }
            // }
        }
        drawing.defs = $defs;
        drawing.elements = $elements;
        parseDrawing = drawing;
        $DRAWING = drawing;
        await update();
        drawings = [...drawings, $DRAWING];
        // start();
        // showPreview = true;
    };
    const editFile = () => {
        const reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = (event) => {
            svgString = event.target.result;
            const svgJson = svgToJson(svgString);
            // console.log(svgString, JSON.stringify(svgJson, null, 2));
            jsonToDrawing(svgJson);
        };
    };
    const loadNext = async () => {
        // $drawingSkip = $drawingSkip + 10;
        // const res = await fetch(`/vectorial/api/${$page.params.user}/drawings?skip=${$drawingSkip}`);
        // if(!res.ok) {}
        // else {
        //     let drawings = await res.json();
        //     drawings = [...drawings, ...drawings];
        // }
    }
</script>

<svelte:head>
    <title>Vectorial</title>
    <link rel="canonical" href="https://drmithileshkumar.com/vectorial/drawings" />
    <meta name="description" content="Create SVG graphics" />
</svelte:head>
<input
    bind:files
    type="file"
    accept="image/svg+xml"
    style="display:none"
    bind:this={svgInput}
    on:change={() => getBase64(files[0])}
/>
<article class="container">
    <Card>
        <Content>
            <h1 class="mdc-typography--headline6" style="margin: 0;">
                Your drawings appear here.
            </h1>
            {#if files}
                <img width="300px" src={importedImage} alt="Imported file" />
            {/if}
            {#if isLoaded && showPreview}
                <Drawing
                    drawing={parseDrawing}
                    on:deleted={() => (drawings = drawings)}
                />
            {/if}
        </Content>
        <Actions>
            <Button on:click={create}>
                <Label>Create New Drawing</Label>
            </Button>
            <Button on:click={() => svgInput.click()}>Import SVG</Button>
            {#if files}
                <Button on:click={editFile}>Edit file</Button>
            {/if}
        </Actions>
    </Card>
    {#if isCreating}
        <CreateDrawing
            on:drawingCreated={start}
            on:cancel={() => (isCreating = false)}
        />
    {/if}
    <section class="drawinglist">
        {#if drawings}
            {#each drawings as drawing}
                <Drawing
                    {drawing}
                    on:deleted={deleteGallery}
                    on:duplicated={updateGallery}
                />
            {/each}
        {/if}
    </section>
    <!-- <Button on:click={loadNext}>Load next 10 drawings</Button> -->
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    .drawinglist {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        align-items: center;
        justify-content: space-evenly;
        flex: 1;
    }
</style>
