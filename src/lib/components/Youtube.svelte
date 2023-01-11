<script>
    let videos = [
        {
            title: "Set : Introduction",
            src: "https://www.youtube.com/embed/Ii1HysDxd5U",
            width: "420",
            height: "300"
        }
]
</script>
<h1><a href="https://www.youtube.com/@drmithilesh">Youtube Channel</a></h1>
<div class="videos">
    {#each videos as video}
        <iframe width={video.width} height={video.height} src={video.src} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    {/each}
</div>
<style>
    .videos {
        display: flex;
        flex-direction: row;
        gap: 1em;
        flex-wrap: wrap;
        margin-bottom: 2em;
    }
</style>