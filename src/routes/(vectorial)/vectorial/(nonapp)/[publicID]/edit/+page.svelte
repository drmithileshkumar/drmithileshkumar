<script lang='ts'>
    //@ts-nocheck
    import EditPost from "$lib/vectorial/components/EditPost.svelte";
    export let data;
</script>
<svelte:head>
    <title>Edit post</title>
    <link rel="canonical" href="https://drmithileshkumar.com/vectorial/edit" />
    <meta name="description" content="Trending Post." />
</svelte:head>
<article>
    <EditPost post={data.post} />
</article>
