<script>
    // @ts-nocheck
        import { clickOutside } from '$lib/mathril/utils/clickOutside';
        import Button from '$lib/mathril/ui/Button.svelte';
        import {writeMode} from '$lib/mathril/canvas/stores';
        import { goto } from '$app/navigation'
        import { page } from '$app/stores';

        import Link from '$lib/mathril/ui/Link.svelte';
        import Login from '$lib/mathril/components/Login.svelte';
        import Label from '$lib/mathril/ui/Label.svelte';
        import SegmentedButton from '$lib/mathril/ui/SegmentedButton.svelte';
        import Segment from '$lib/mathril/ui/Segment.svelte';
        import {profileImage, showSettings} from '$lib/mathril/stores';
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
            if(!$page.data.user) return
            const res = await fetch(`/mathril/api/profile`);
            
            if(!res.ok) {
                alert('Failed to load image');
                return
            }
            
            let imageData = await res.blob();
            
            // console.log(imageData)
            let reader = new FileReader();
            reader.readAsDataURL(imageData);
            reader.onload = e => {
                profile = e.target.result;
                profileImage.set(profile);
            }
        })
        
        // $:console.log($showSettings);
    </script>
    <!-- <div class="header-background"></div> -->
    <header bind:clientWidth={W}>
        <nav class="left">
            <a class="siteName" href="/mathril">
                <!-- <img width="auto" height="2em" class="logo" src={'/favicon.svg'} alt="mathril" /> -->
                <svg width="2em" height="2em" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient id='LinearGradient-VectorialApp19R21-3' x1="0%" y1="0%" x2="100%" y2="0%" >
                            <stop offset="0%" stop-color="rgba(255, 0, 0, 1)"/>
                            <stop offset="100%" stop-color="rgba(0, 175, 255, 1)"/>
                        </linearGradient>
                    </defs>
                    <g>
                        <g  
                            class='draggable'
                            id='Layer-VectorialApp19R21-0'
                            fill='none'
                            stroke='none'
                            stroke-width='0'
                            stroke-dasharray='none'
                            opacity='1'
                            mask='none'
                            filter='none'
                            transform='matrix(1 0 0 1 0 0)'
                        >
                                        
                            <rect  
                                id='Rect-VectorialApp19R21-2'
                                x='200'
                                y='200'
                                width='350'
                                height='25'
                                rx='0'
                                ry='0'
                                fill='url(#LinearGradient-VectorialApp19R21-3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='0'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -176 -175)'
                            >
                                <animate 
                                    id="Line1"
                                    attributeName="width"
                                    begin="0;Circle5.end"
                                    values="0;350"
                                    keyTimes="0;1"
                                    dur="1s"
                                    
                                ></animate>
                            </rect>
                                        
                            <rect  
                                id='Rect-VectorialApp19R21-4'
                                x='200'
                                y='200'
                                width='350'
                                height='25'
                                rx='0'
                                ry='0'
                                fill='url(#LinearGradient-VectorialApp19R21-3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='0'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -175 -125)'
                            >
                                <animate 
                                    id="Line2"
                                    attributeName="width"
                                    begin="Line1.end"
                                    values="0;350"
                                    keyTimes="0;1"
                                    dur="1s"
                                    
                                ></animate>
                                <animate 
                                    attributeName="opacity"
                                    begin="Circle5.end"
                                    values="0;0;1"
                                    keyTimes="0;1;1"
                                    dur="1s"
                                ></animate>
                            </rect>
                                        
                            <rect  
                                id='Rect-VectorialApp19R21-5'
                                x='200'
                                y='200'
                                width='275'
                                height='25'
                                rx='0'
                                ry='0'
                                fill='url(#LinearGradient-VectorialApp19R21-3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='0'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -175 -75)'
                            >
                                <animate 
                                    id="Line3"
                                    attributeName="width"
                                    values="0;275"
                                    keyTimes="0;1"
                                    begin="Line2.end"
                                    dur="1s"
                                ></animate>
                                <animate 
                                    attributeName="opacity"
                                    begin="Circle5.end"
                                    values="0;0;1"
                                    keyTimes="0;1;1"
                                    dur="2s"
                                ></animate>
                            </rect>
                                        
                            <rect  
                                id='Rect-VectorialApp19R21-6'
                                x='200'
                                y='200'
                                width='200'
                                height='25'
                                rx='0'
                                ry='0'
                                fill='url(#LinearGradient-VectorialApp19R21-3)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='0'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -175 -25)'
                            >
                                <animate 
                                    id="Line4"
                                    attributeName="width"
                                    values="0;200"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="Line3.end"
                                    
                                ></animate>
                                <animate 
                                    attributeName="opacity"
                                    begin="Circle5.end"
                                    values="0;0;1"
                                    keyTimes="0;1;1"
                                    dur="3s"
                                ></animate>
                            </rect>
                                        
                            <circle  
                                id='Circle-VectorialApp19R21-7'
                                cx='200'
                                cy='200'
                                r='40'
                                fill='rgba(255, 255, 255, 0.3)'
                                stroke='rgba(0, 175, 0, 1)'
                                stroke-width='5'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -100 75)'
                            >
                                <animate 
                                    id="Circle1"
                                    attributeName="r"
                                    values="0;40"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="Line4.end"
                                    
                                ></animate>
                                <animate 
                                    attributeName="opacity"
                                    begin="Circle5.end"
                                    values="0;0;1"
                                    keyTimes="0;1;1"
                                    dur="4s"
                                ></animate>
                            </circle>
                                        
                            
                                        
                            <circle  
                                id='Circle-VectorialApp19R21-9'
                                cx='200'
                                cy='200'
                                r='25'
                                fill='rgba(255, 255, 255, 0)'
                                stroke='rgba(0, 175, 255, 1)'
                                stroke-width='10'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 100.5 75)'
                                >
                                    <animate 
                                        id="Circle2"
                                        attributeName="r"
                                        values="0;25"
                                        keyTimes="0;1"
                                        dur="1s"
                                        begin="Circle1.end"
                                        
                                    ></animate>
                                    <animate 
                                        attributeName="opacity"
                                        begin="Circle5.end"
                                        values="0;0;1"
                                        keyTimes="0;1;1"
                                        dur="5s"
                                    ></animate>
                                </circle>
                            <circle  
                                id='Circle-VectorialApp19R21-11'
                                cx='200'
                                cy='200'
                                r='25'
                                fill='rgba(255, 255, 255, 0)'
                                stroke='rgba(0, 175, 255, 1)'
                                stroke-width='10'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -100 159)'
                            >
                                <animate 
                                    id="Circle3"
                                    attributeName="r"
                                    values="0;25"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="Circle2.end"
                                    
                                ></animate>
                                <animate 
                                    attributeName="opacity"
                                    begin="Circle5.end"
                                    values="0;0;1"
                                    keyTimes="0;1;1"
                                    dur="6s"
                                ></animate>
                            </circle>            
                            <circle  
                                id='Circle-VectorialApp19R21-10'
                                cx='200'
                                cy='200'
                                r='25'
                                fill='rgba(255, 255, 255, 0)'
                                stroke='rgba(0, 175, 255, 1)'
                                stroke-width='10'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 100.5 159)'
                            >
                                <animate 
                                    id="Circle4"
                                    attributeName="r"
                                    values="0;25"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="Circle3.end"
                                    
                                ></animate>
                                <animate 
                                    attributeName="opacity"
                                    begin="Circle5.end"
                                    values="0;0;1"
                                    keyTimes="0;1;1"
                                    dur="7s"
                                ></animate>
                            </circle>
                            <circle  
                                id='Circle-VectorialApp19R21-8'
                                cx='200'
                                cy='200'
                                r='30'
                                fill='rgba(0, 175, 0, 1)'
                                stroke='rgba(0, 175, 0, 1)'
                                stroke-width='5'
                                stroke-dasharray='none'
                                opacity='1'
                                filter='none'
                                mask='none'
                                transform='matrix(1 0 0 1 -100 75)'
                                >
                                    <animate 
                                        id="Circle5"
                                        attributeName="r"
                                        values="0;30"
                                        keyTimes="0;1"
                                        dur="1s"
                                        begin="Circle4.end"
                                        
                                    ></animate>
                                    <animate 
                                        attributeName="opacity"
                                        begin="Circle5.end"
                                        values="0;0;1"
                                        keyTimes="0;1;1"
                                        dur="8s"
                                    ></animate>
                            </circle>    
                            
                        </g>
                    </g>
                </svg>
                <span>Mathril</span>
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
            <!-- <a href="/python">Python</a> -->
            <a href="/mathril/quiz">Quiz</a>
            <a href="/mathril/questions">Questions</a>
            <a class="menu settings" href={$page.data.user ? `/mathril/${$page.data.user.publicID}` : '/mathril/login'}>
                {#if $page.data.user}
                    <img class="profile" src={$profileImage} alt="">
                {:else}
                    <span class="material-icons" style="margin-left:0.5em;color: green;">login</span>
                {/if}
                
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
        /* .writeMode {
            background: var(--c
        } */
        /* .currentHome {
            text-decoration: none;
            font-variant: small-caps;
            font-size: 0.8em;
        } */
        /* .header-background {
            height: 3em;
        } */
        header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: transparent;

            backdrop-filter: blur(10px);
            position: fixed;
            top: 0;
            height: 3em;
            width: 100%;
            padding-right: 1em;
            z-index: 50;
            box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
            /* box-shadow: 0 1px 3px black; */
        }
    
        .profile {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            background: rgb(255, 255, 255);
            margin-left: 0.5em;
        }
        /* .toggle {
            display: flex;
            flex-direction: row;
            gap: 0.5em;
            align-items: center;
            justify-content: center;
        } */
        /* .menu {
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
        } */
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
            height: 1.3em;
            cursor: pointer;
        }
        header .siteName {
            display: flex;
            align-items: center;
            margin-left: 0.5em;
            
        }
        header .siteName span {
            text-decoration: none;
            
            font-size: 1.2em;
            display: flex;
            align-items: center;
            background: linear-gradient(to right, rgb(2 176 245), rgb(0, 106, 255), rgb(241 7 7));
            background-clip: text;
            background: -webkit-linear-gradient(
                to right,
                rgb(2 176 245),
                rgb(0, 106, 255),
                rgb(241 7 7)
            );
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
        nav {
            display: flex;
            flex-direction: row;
            position: relative;
            align-items: center;
        }
        .right {
            gap: 0.5em;
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
        /* .login {
            font-family: monospace;
            cursor: pointer;
        } */
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
    