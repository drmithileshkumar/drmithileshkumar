<script lang='ts'>
    //@ts-nocheck
    import Card, {Content, Actions} from '@smui/card'
    import Button, {Icon, Label} from '@smui/button'
</script>
<Card>
    <Content>
        <div style="display:flex;align-items:center;justify-content:center;gap:1em;">
            <div class="stat">
                <span class="number">12</span>
                <span class="name">Classes</span>
            </div>
            <div class="stat">
                <span class="number">150</span>
                <span class="name">Chapters</span>
            </div>
            <div class="stat">
                <span class="number">600+</span>
                <span class="name">Problem Apps</span>
            </div>
        </div>
        
    </Content>
</Card>
<style>
    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em;
        gap: 1em;
    }
    .number {
        display: inline-block;
        font-size: 3em;
        color:goldenrod;
        line-height: 1;
    }
    .name {
        display: inline-block;
        font-size: 0.9em;
        font-weight: 300;
        line-height: 0;
    }
</style>