<script lang='ts'>
    //@ts-nocheck
    import {svg, BBOX} from './stores';
    export let pngScale = 1;
    let pngUrl;
    const downloadPNG = () => {
        let svgData = $svg.outerHTML;
        var svgBlob = new Blob([svgData], {
            type: "image/svg+xml;charset=utf-8",
        });
        let svgUrl = URL.createObjectURL(svgBlob);
        let img = new Image();
        img.src = svgUrl;
        img.decode().then(() => {
            const canvas = document.createElement("canvas");
            canvas.width = pngScale * $BBOX.width;
            canvas.height = pngScale * $BBOX.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            pngUrl = canvas.toDataURL("image/png", 1.0);
        }).catch((encodingError => console.log('Encoding error')))
        // img.onload = () => {
        //     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        //     pngUrl = canvas.toDataURL("image/png", 1.0);
        // };
    };
    downloadPNG();
</script>
{#if pngUrl}
    <img width="200px" src={pngUrl} alt="preview">
    <a href={pngUrl} download="MyDrawing.png">Download</a>
{/if}