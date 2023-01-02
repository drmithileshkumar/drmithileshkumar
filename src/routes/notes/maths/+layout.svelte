<script>
    // @ts-nocheck
    
        import Select from "$lib/ui/Select.svelte";
        import {chapters, sections, selectedChapter, selectedSection} from '$lib/pages/notes/maths/stores';
        import { page } from '$app/stores'
        import { goto } from "$app/navigation";
        const makeSmallLetter = (str) => {
            if(str.length <= 0) return str;
            return str[0].toLowerCase() + str.slice(1);
        }
        const chapterSelected = (event) => {
            $selectedSection = sections[$selectedChapter][0];
        }
        const sectionSelected = (event) => {
            goto(`/notes/maths/${encodeURIComponent($selectedChapter)}/${encodeURIComponent($selectedSection)}`);
            // console.log($page.url.pathname.split('/').map(item => decodeURIComponent(item)))
        }
    </script> 
    <style>
        nav {
            display: grid;
            grid-template-columns: 1fr 1fr;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin:auto;
            margin-top: 0.5em;
            max-width: 600px;
        }
        .maths {
            max-width: 600px;
            margin: auto;
            font-family: 'Georgia', serif;
            line-height: 1.5;
            word-spacing: 0.5ex;
        }
    </style>
    <svelte:head>
        <!-- <script defer src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js"></script> -->
    </svelte:head>
    <nav>
        <Select options={chapters} bind:value={$selectedChapter} label="Chapter" on:selected={chapterSelected}/>
        <Select options={sections[$selectedChapter]} bind:value={$selectedSection} label="Section" on:selected={sectionSelected}/>
    </nav>
    <div class="maths">
        <slot />
    </div>
    