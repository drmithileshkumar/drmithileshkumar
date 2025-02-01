<script>

</script>
<style>
    .paper {
        display: grid;
        grid-template-rows: auto auto auto;
        margin-bottom: 1em;
        color: currentColor;
    }
    .authors {
        color: currentColor;
        text-decoration: none;
        font-weight: 300;
        font-size: 0.9em;
        opacity: 0.8;
    }
    .title {
        font-weight: 500;
        font-size: 1.1em;
    }
    .venue {
        color: currentColor;
        font-size: 0.8em;
        opacity: 0.9;
    }
    .status {
        color: currentColor;
        font-size: 0.8em;
        opacity: 0.9;
    }
</style>
<div class="paper">
    <div class="authors">
        <slot name="authors" />
    </div>
    <div class="title">
        <slot name="title" />
    </div>
    <div class="venue">
        <slot name="venue" />
    </div>
    <div class="status">
        <slot name="status" />
    </div>
</div>