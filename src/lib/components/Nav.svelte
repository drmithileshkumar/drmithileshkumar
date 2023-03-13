<script>
    import LogoSvg from '$lib/components/LogoSvg.svelte';
    
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
        background-color: white;
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
    .name {
        color: black;
        /* font-variant: all-petite-caps;
        letter-spacing: 0.1em;
        font-weight: 500;
        text-shadow: 1px 1px 3px rgb(245, 241, 241); */
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
    .links a {
        border: 0.5px solid;
        padding: 0.3em 0.5em;
    }
    .links {
        display: flex;

    }
</style>
<nav bind:clientWidth={W}>
    <a class="logo" href="/">
        <!-- <img width="2em" src="/webtarlogo.PNG" alt=""> -->
        <span class="logoimage">
            <LogoSvg />
        </span>
        
        <span class="name">Dr Mithilesh Kumar</span>
    </a>
    <div class="pages">
        <!-- <a class="link" style="font-size:{fs}px;" href="/elements">Elements</a> -->
        <!-- <a class="link" style="font-size:{fs}px;" href="/features">Features</a> -->
        <!-- <a class="link" href="/projects">Projects</a> -->
    </div>
    <div class="links">
        <a href='/notes'>
            Notes
        </a>
        <a href='/practice'>
            Practice
        </a>
        <a href='/iit'>
            IIT
        </a>
    </div>
    <!-- <button class="iconButton" on:click={switchTheme}><span class='material-icons'>{lightTheme ? 'light_mode' : 'dark_mode'}</span></button> -->
</nav>