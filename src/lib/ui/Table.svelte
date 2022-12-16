<script>

</script>
<style>
    table {
        width: auto;
        border-collapse: collapse;
    }
    thead {
        position: sticky;
        top: 0;
    }
</style>
<table>
    <thead>
        <slot name="head" />
    </thead>
    <tbody>
        <slot name="tbody" />
    </tbody>
</table>