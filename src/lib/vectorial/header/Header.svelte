<script>
    // @ts-nocheck
        import { clickOutside } from '$lib/vectorial/utils/clickOutside';
        import Button from '$lib/vectorial/ui/Button.svelte';
        import { goto } from '$app/navigation'
        import { page } from '$app/stores';
        // import logo from './webdutcolored.svg';
        import Link from '$lib/vectorial/ui/Link.svelte';
        import Login from '$lib/vectorial/components/Login.svelte';
        import Label from '$lib/vectorial/ui/Label.svelte';
        import SegmentedButton from '$lib/vectorial/ui/SegmentedButton.svelte';
        import Segment from '$lib/vectorial/ui/Segment.svelte';
        import {profileImage, showSettings} from '$lib/vectorial/stores';
        import { onMount } from 'svelte';
        let pages = ['vectorial', 'icon', 'iitmaths', 'iitphysics', 'quiz', 'english', 'blob', 'wallpaper', 'health', 'chemist', 'notes', 'quantum', 'web',  'colorn', 'clock']
        // let pages = ['news', 'web', 'health', 'notes', 'quiz', 'school', 'quantum', 'fashion', 'jewelry', 'events', 'wallpaper']
        let W;
        let authMode = ['Log in', 'Sign up'];
        let showProducts = false, isSignup = null;
        $: currentHome = $page.url.pathname.split('/').slice(0, -1).join('/');
        function logout() {
            document.cookie = 'jwt=; Max-Age=0; Path=/;'
            $page.data.user = null
            goto('/')
        }
        let profile;
        onMount(async () => {
            // if(!$page.data.user) return
            // const res = await fetch(`/vectorial/api/profile`);
            
            // if(!res.ok) {
            //     alert('Failed to load image');
            //     return
            // }
            
            // let imageData = await res.blob();
            
            // // console.log(imageData)
            // let reader = new FileReader();
            // reader.readAsDataURL(imageData);
            // reader.onload = e => {
            //     profile = e.target.result;
            //     profileImage.set(profile);
            // }
        })
        // $:console.log($showSettings);
    </script>
    <div class="header-background"></div>
    <header bind:clientWidth={W}>
        <nav class="left">
            <a class="siteName" href="/">
                <!-- <img width="auto" height="2em" class="logo" src={logo} alt="webdut" /> -->
                Vectorial
            </a>
            <!-- <button class="menu" on:click={() => showProducts = true}>
                <img src="/logos/Applications.svg" alt="apps">
            </button>
            <a class="siteName" href="/"><img width="auto" height="2em" class="logo" src={logo} alt="webdut" /></a>
            <a class="currentHome" href="{currentHome}">{decodeURIComponent(currentHome)}</a>
            {#if showProducts}
            <ul style="z-index: 100;" class="menusurface" use:clickOutside on:outclick={() => showProducts = false}>
                {#each pages as page}
                    <li>
                        <Link href="/{page}" logo={`/logos/${page}.svg`}>
                            <Label style="font-size: 0.8em;">{page}</Label>
                        </Link>
    
                    </li>
                {/each}
            </ul>
            {/if} -->
        </nav>
        <nav class="right">
            <a class="menu settings" href={$page.data.user ? `/vectorial/${$page.data.user.publicID}` : '/login'}>
                {#if $page.data.user}
                    <img class="profile" src={$profileImage} alt="">
                {:else}
                    <span class="login" style="font-size: 1em;margin-right:0.5em; color: white;">Sign In/Up</span>
                {/if}
                <span class="material-icons" style="color: white;">settings</span>
            </a>
            <!-- {#if $showSettings}
                <div class="settingscontent menusurface" use:clickOutside on:outclick={() => $showSettings = false}>
                    
                    {#if $page.data.user && !(isSignup === 'Sign up')}
                        <div class="signed">
                            
                            <span style="cursor:pointer;" on:click={() => goto(`/${$page.data.user.publicID}`)}>{$page.data.user.name}</span>
                            <Button class="logout" on:click={(e) => (e.preventDefault(), logout())}>Log out</Button>
                        </div>
                        
                    {:else}
                        <div class="toggle">
                            <SegmentedButton segments={authMode} let:segment singleSelect bind:selected={isSignup}>
                                <Segment title={segment} segment={segment}>{segment}</Segment>
                            </SegmentedButton> 
                            
                        </div>
                        
                        {#if isSignup === 'Sign up'}
                            <Login />
                        {:else if isSignup === 'Log in'}
                            <Login isLogin />
                        {/if}
                    {/if}
                </div>
            {/if} -->
        </nav>
    </header>
    
    <style>
        /* .currentHome {
            text-decoration: none;
            font-variant: small-caps;
            font-size: 0.8em;
        } */
        .header-background {
            height: 3em;
        }
        header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: black;

            /* backdrop-filter: blur(10px); */
            position: fixed;
            top: 0;
            height: 3em;
            width: 100%;
            padding-right: 1em;
            z-index: 50;
            /* box-shadow: 0 1px 3px black; */
        }
    
        .profile {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            background: rgb(255, 255, 255);
            margin-right: 0.5em;
        }
        /* .toggle {
            display: flex;
            flex-direction: row;
            gap: 0.5em;
            align-items: center;
            justify-content: center;
        } */
        .menu {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: black;
        }
        .menu span {
            font-size: 1.5em;
        }
        /* .menusurface {
            background-color: white;
            padding: 1em;
            box-shadow: 0 0 10px rgb(189, 189, 189);
        } */
        /* .logo {
            width: 100px;
            height: auto;
        } */
        img {
            height: 2em;
            cursor: pointer;
        }
        header .siteName {
            text-decoration: none;
            margin-left: 0.5em;
            font-size: 2em;
            display: flex;
            background: linear-gradient(to right, rgb(2 176 245), rgb(200 255 8), rgb(207 166 35), rgb(241 7 7));
            background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
        nav {
            display: flex;
            flex-direction: row;
            position: relative;
            align-items: center;
        }
        /* nav span {
            cursor: pointer;
        } */
        /* nav ul {
            display: flex;
            flex-direction: row;
            gap: 1em;
            flex-wrap: wrap;
            position: absolute;
            left: 0em;
            top: 1.5em;
            
            width: 100vw;
        }
        
        li {
            margin-left: 0.5em;
            list-style: none;
        } */
        a:hover {
            font-weight: 500;
        }
        .login {
            font-family: monospace;
            cursor: pointer;
        }
        /* .settingscontent {
            position: absolute;
            
            right: 0;
            top: 2.3em;
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 0.3em;
            flex: 1;
        } */
    
        /* .signed {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5em;
            margin-left: 0.5em;
            flex-direction: column;
        } */
    </style>
    