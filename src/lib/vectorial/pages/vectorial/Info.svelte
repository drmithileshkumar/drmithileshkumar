<script>
    import {ripple} from '$lib/vectorial/ui/ripple';
</script>
<style>
    .hbuttongroup {
        padding: 0.5em 1em;
        background: rgb(219, 219, 219);
        border-radius: 10px;
        display: flex;
        gap: 0.9em;
        align-items: center;
        justify-content: center;
        font-size: 0.7em;
        color: rgb(48, 48, 48);
    }
    .hbuttongroup span {
        cursor: pointer;
    }
</style>
<div class="hbuttongroup">
    <span class="material-icons" use:ripple>info</span>
</div>