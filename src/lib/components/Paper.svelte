<script>

</script>
<style>
    .paper {
        display: grid;
        grid-template-rows: auto auto auto;
        margin-bottom: 2em;
    }
    .authors {
        color: #7d848a;
        text-decoration: none;
        font-weight: 300;
        font-size: 0.9em;
    }
    .title {
        font-weight: 700;
        font-size: 1.1em;
    }
    .venue {
        color: #7d848a;
        font-size: 0.8em;
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
</div>