<script lang='ts'>
    // @ts-nocheck
    import {ripple} from '$lib/ui/ripple';
    import Card, {Content, Actions} from '@smui/card';
    </script>
    <style>
        .vectorial {
            margin-top: 1em;
            padding: 0.5em;
            width: 100%;
            /* display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between; */
            background: white;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* box-shadow: 0 0 5px #888; */

        }
        .vectorial:hover {
            box-shadow: 0 0 0px #888;
        }
        .vectorial section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        section a {
            text-decoration: none;
            font-size: 1em;
            margin-top: 0;
            color: white;
            text-shadow: 1px 2px 1px rgb(77, 77, 77);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
            background: rgb(0, 150, 200);
            /* border: 1px solid rgba(0, 150, 220, 0.1); */
            padding: 1em 2em;
            border-radius: 10px;
            box-shadow: 1px 2px 2px 0px #891010;
        }
        .title {
            font-size: 4em;
            margin-bottom: 0;
            margin-top: 1em;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: 9px 3px 5px rgba(81, 81, 81, 0.445);
            color: rgb(7 68 75);
        }
        .subtitle {
            font-size: 1.5em;
            color: rgb(212, 163, 13);
            margin-top: 0;
            margin-bottom: 0em;
        }
        

        figure {
            width: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            position: relative;
            z-index: 0;
            justify-content: center;
        }

    </style>
    <article class="vectorial">
        <section style="z-index: 1">
            <h1 class="title">Vectorial</h1>
            <p class="subtitle">
                Create Vector Graphics.
            </p>
            <p style="color:black;">
                in <strong>browser</strong>!
            </p>
            <a use:ripple href="https://vectorial.app">Get Started</a>
            <!-- <Link href={'/vectorial'} style="font-size: 1.2em;">Get started</Link> -->
        </section>
        <figure>
            <!-- <img width="100%" style="opacity: 0.1;" src="/webdutcolored.svg" alt="webdut"> -->
            <!-- <svg class="background" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                
                <defs>
                    <radialGradient id="radialGradient" gradientTransform="">
                        <stop offset="0%" stop-color="rgba(255, 218, 0, 0.3)" />
                        <stop offset="100%" stop-color="rgba(255, 209, 0, 0.3)" />
                    </radialGradient>
                </defs>
                
                <path id="path" fill="url('#radialGradient')" d="M 23.07 -19.17 C 15.24 -27.80 -3.68 -30.61 -14.28 -26.38 C -24.89 -22.15 -32.93 -9.30 -29.94 1.97 C -26.94 13.25 -10.30 27.04 0.67 29.99 C 11.63 32.95 20.40 26.59 24.88 16.76 C 29.37 6.92 30.91 -10.55 23.07 -19.17 Z" />
                
            </svg> -->
            <!-- <img src="/webdutcharacterHI.svg" width="45%" alt="webdut"> -->
            <img src="/vectorial/vectorialhome.svg" width="95%" alt="vectorialhome">
            
            
        </figure>
    </article>