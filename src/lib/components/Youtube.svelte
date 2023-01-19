<script>
    let videos = [
        {
            title: "Set : Equal sets",
            src: "https://www.youtube.com/embed/jbBsClpZmPQ",
            width: "210",
            height: "150"
        },
        {
            title: "Set : Finite and Infinite sets",
            src: "https://www.youtube.com/embed/xitRVmUKQz8",
            width: "210",
            height: "150"
        },
        {
            title: "Set : The empty set",
            src: "https://www.youtube.com/embed/-VP7utgjA8I",
            width: "210",
            height: "150"
        },
        {
            title: "Set : Sets and their representation",
            src: "https://www.youtube.com/embed/kj1VeKqMlJc",
            width: "210",
            height: "150"
        },
        {
            title: "Set : Introduction",
            src: "https://www.youtube.com/embed/Ii1HysDxd5U",
            width: "210",
            height: "150"
        }
]
</script>
<h1><a href="https://www.youtube.com/@drmithilesh">Youtube Channel</a></h1>
<div class="videos">
    {#each videos as video}
        <div class="video">
            <iframe width={video.width} height={video.height} src={video.src} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <span class="title">{video.title}</span>
        </div>
    {/each}
</div>
<style>
    .videos {
        display: flex;
        flex-direction: row;
        gap: 1em;
        flex-wrap: nowrap;
        margin-bottom: 2em;
        background-color: rgba(110, 120, 150, 0.3);
        padding: 1em;
        border-radius: 10px;
        overflow-x: auto;
    }
    .videos::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
    .video {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        box-shadow: 1px 1px 3px gray;
        padding: 0.5em;
        background-color: white;
    }
    .title {
        font-weight: bold;
        padding-top: 0.5em;
        display: inline-block;
        width: 210px;
        color: black;
    }
</style>