<script lang='ts'>
    //@ts-nocheck
    import EditComment from "$lib/vectorial/components/EditComment.svelte";
    export let data;
</script>
<svelte:head>
    <title>Edit comment</title>
    <link rel="canonical" href="https://drmithileshkumar.com/vectorial/edit/comment" />
    <meta name="description" content="Trending Comment." />
</svelte:head>
<article>
    <EditComment comment={data.comment} />
</article>
