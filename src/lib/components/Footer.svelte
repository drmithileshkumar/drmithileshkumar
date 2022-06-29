<script>
    let lightTheme = true;
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink = document.head.querySelector<HTMLLinkElement>('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `/${lightTheme ? 'light' : 'dark'}.css`;
		document.head
			.querySelector<HTMLLinkElement>('link[href="/dark.css"]')
			?.insertAdjacentElement('afterend', themeLink);
	}
</script>
<style>
    nav {
        height: 2.5em;
        /* background: radial-gradient(circle at left, transparent 0, rgba(0, 0, 255, 0.1), rgba(255, 0, 0, 0.1), rgba(255, 255, 0, 0.1), rgba(0, 128, 0, 0.1) 100%); */
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em;
    }
    .branding {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .logo {
        width: 20px;
        height: 20px;
    }
    .label {
        font-size: 0.3em;
        color: white;
    }
    .copyright {
        font-variant: small-caps;
        font-size: 0.8em;
    }
    .contactrights {
        display: flex;
        flex-direction: column;
    }
</style>
<nav>
    <div class="contactrights">
        <span class="contact">Email at drmithileshkumar@outlook.com</span>
        <span class="copyright">All rights reserved. &#169; drmithileshkumar.com</span>
    </div>
    
    <a class="branding" href="https://webdut.com/web">
        <img class="logo" src="webdutIcon.png" alt='' />
        <span class="label">webdut.com</span>
    </a>
</nav>