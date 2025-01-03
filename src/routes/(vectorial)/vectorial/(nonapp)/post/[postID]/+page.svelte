<script lang='ts'>
    //@ts-nocheck
    import FullPost from '$lib/vectorial/components/FullPost.svelte';
    import { currentPath } from "$lib/vectorial/stores.js";
    $currentPath = 'Post';
    export let data;
    let profile = ''
</script>
<svelte:head>
    <title>{data.post.title}</title>
    <link rel="canonical" href="https://drmithileshkumar.com/vectorial/post/${data.post.url}" />
    <meta name="description" content="drmithileshkumar.com/vectorial" />
</svelte:head>
<FullPost post={data.post} {profile} />