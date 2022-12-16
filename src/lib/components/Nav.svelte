<script>
    import LogoSvg from '$lib/components/LogoSvg.svelte';
    // import {goto} from '$app/environment'
    let lightTheme = true;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/${lightTheme ? 'light' : 'dark'}.css`;
		document.head
			.querySelector('link[href="/dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}
    let W;
    $: fs = W < 400? W/30: 16;
</script>
<style>
    nav {
        position: sticky;
        top: 0;
        height: 4.5em;
        /* background: radial-gradient(circle at left, transparent 0, rgba(0, 0, 255, 0.1), rgba(255, 0, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 128, 0, 0.1) 100%); */
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 100;
        gap: 1em;
        padding: 0 0.5em;
        max-width: 1200px;
        margin: auto;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        text-align: center;
    }
    /* .logo img {
        width: 2em;
    } */
    .logo span {
        color: white;
        font-variant: all-petite-caps;
        font-size: 1.5em;
        letter-spacing: 0.1em;
        font-weight: 500;
        text-shadow: 2px 2px 3px black;
    }
    .pages {
        display: flex;
        gap: 1em;
    }
    .logoimage {
        border-radius: 50%;
        overflow: hidden;
    }
    /* .link {
        font-variant: all-petite-caps;
        font-size: 1.5em;
    } */
</style>
<nav bind:clientWidth={W}>
    <a class="logo" href="/">
        <!-- <img width="2em" src="/webtarlogo.PNG" alt=""> -->
        <span class="logoimage">
            <LogoSvg />
        </span>
        
        <span>Dr Mithilesh Kumar</span>
    </a>
    <div class="pages">
        <!-- <a class="link" style="font-size:{fs}px;" href="/elements">Elements</a> -->
        <!-- <a class="link" style="font-size:{fs}px;" href="/features">Features</a> -->
        <!-- <a class="link" href="/projects">Projects</a> -->
    </div>
    <a href='/questions'>
        IIT Questions
    </a>
    <!-- <button class="iconButton" on:click={switchTheme}><span class='material-icons'>{lightTheme ? 'light_mode' : 'dark_mode'}</span></button> -->
</nav>