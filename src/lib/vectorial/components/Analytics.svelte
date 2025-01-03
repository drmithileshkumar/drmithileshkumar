<script lang='ts'>
    //@ts-nocheck
    import { page } from "$app/stores";

    $: {
        if (typeof gtag !== "undefined") {
            gtag("config", "G-KP8TEF4KK1", {
                page_title: document.title,
                page_path: $page.url.pathname,
            });
        }
    }
</script>

<svelte:head>
    <!-- Google tag (gtag.js) -->
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KP8TEF4KK1"
    ></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "G-KP8TEF4KK1");
    </script>
</svelte:head>
