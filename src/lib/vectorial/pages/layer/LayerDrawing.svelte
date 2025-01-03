<script lang='ts'>
    //@ts-nocheck
    import {BBOX, canvasBackground} from '$lib/vectorial/pages/vectorial/stores';
</script>
<svg width="100%" height="100%" viewBox="{parseFloat($BBOX.x)} {parseFloat($BBOX.y)} {parseFloat($BBOX.width)} {parseFloat($BBOX.height)}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <slot />
</svg>
