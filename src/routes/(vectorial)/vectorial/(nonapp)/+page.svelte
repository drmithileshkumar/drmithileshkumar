<script>
    //@ts-nocheck
    import Card, { Content, Actions } from "@smui/card";
    import Button, { Label } from "@smui/button";
    import { ripple } from "$lib/vectorial/ui/ripple";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { currentPath, pageLoadState } from "$lib/vectorial/stores";
    import {onMount} from 'svelte';
    $currentPath = "Vectorial";
    let W;
    $: sectionClass = W <= 500 ? "flex" : "grid";
    onMount(() => {
        $pageLoadState = true;
    })
    const gotoSubscription = () => {
        if (!$page.data.user) {
            alert("Please sign in or sign up...");
            return;
        }
        console.log("going to ", `/subscription`);
        goto(`/subscription`);
    };
</script>

<svelte:head>
    <title>Vectorial.app | Online SVG Editor with Latex Support</title>
    <meta
        name="description"
        content="Welcome to Vectorial.app, a unique online SVG editor with Latex support. Create stunning vector graphics for your research papers easily and efficiently."
    />
    <meta
        name="keywords"
        content="Vectorial.app, Online SVG Editor, Latex Support in SVG, Vector Graphics Software, Web-based SVG Editor, Research Paper Graphics Tool, Academic Illustration Software"
    />

    <link rel="canonical" href="https://drmithileshkumar.com/vectorial" />
</svelte:head>
<article class="container">
    <Card>
        <Content>
            <h1 class="decorated" on:click={gotoSubscription}>Vectorial</h1>
        </Content>
        <Actions style="justify-content:center;">
            <Button on:click={() => goto('/auth')}>Let's Draw</Button>
        </Actions>
    </Card>
    <Card>
        <Content>
            
            <h1 class="mdc-typography--headline4">Finally an editor for Researchers</h1>
            <h2 class="mdc-typography--subtitle2">With LateX support</h2>
            <figure>
                <img src="/vectorial/latex/calculus.svg" alt="calculus">
                <img src="/vectorial/latex/subsets.svg" alt="subsets">
                <img src="/vectorial/latex/qubit.svg" alt="qubit">
                <img src="/vectorial/latex/teleportation.svg" alt="teleportation">
            </figure>
            
        </Content>
    </Card>
    <Card>
        <Content>
            <section class="slide slide2">
                <h1 class="mdc-typography--headline4">Create icons</h1>
                <figure>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-292.2640686035156 -355.2071228027344 300 300"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <radialGradient
                                id="WebdutTeam4radialGradient-3"
                                cx="55.013%"
                                cy="82.394%"
                                fx="54.418%"
                                fy="56.203%"
                                r="87.751%"
                                fr="0%"
                                ><stop
                                    offset="0%"
                                    stop-color="rgba(255, 0, 0, 1)"
                                /><stop
                                    offset="100%"
                                    stop-color="rgba(108, 0, 0, 1)"
                                /></radialGradient
                            >
                        </defs>
                        <g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    id="Path-2"
                                    d="M -175.8673095703125,-255.17462158203125 C -199.35194951002396,-255.12689587969962 -220.0673095703125,-278.7746215820313 -245.8673095703125,-267.17462158203125 C -271.6673095703125,-255.57462158203126 -287.4673095703125,-217.77462158203124 -282.8673095703125,-181.17462158203125 C -278.2673095703125,-144.57462158203126 -245.6673095703125,-100.77462158203124 -222.8673095703125,-84.17462158203125 C -200.0673095703125,-67.57462158203126 -190.4673095703125,-98.17462158203125 -168.8673095703125,-98.17462158203125 C -147.2673095703125,-98.17462158203125 -134.02141388544956,-80.26562070139103 -114.8673095703125,-84.17462158203125 C -95.2673095703125,-88.17462158203125 -73.6673095703125,-139.37462158203124 -72.8673095703125,-170.17462158203125 A 42.31903238891253 42.31903238891253 0 0 1 -79.8673095703125,-253.17462158203125 C -128.6673095703125,-300.37462158203124 -154.90340492739986,-255.21722462279598 -175.8673095703125,-255.17462158203125 ZM -176.8673095703125,-273.17462158203125 C -182.4673095703125,-288.97462158203126 -185.0673095703125,-305.7746215820313 -174.8673095703125,-325.17462158203125 C -164.6673095703125,-344.5746215820312 -142.6673095703125,-351.5746215820312 -132.8673095703125,-355.17462158203125 C -130.8673095703125,-345.5746215820312 -124.52370415472677,-325.00129648827414 -133.8673095703125,-305.17462158203125 C -142.0673095703125,-287.7746215820313 -160.6673095703125,-277.97462158203126 -176.8673095703125,-273.17462158203125 Z"
                                    fill="url(#WebdutTeam4radialGradient-3)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 36 12)"
                                />
                            </g>
                        </g>
                    </svg>
                </figure>
            </section>
        </Content>
    </Card>
    <Card>
        <Content>
            <section class="slide slide3">
                <h1 class="mdc-typography--headline4">Create illustrations</h1>
                <figure>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-500.8546142578125 -407.96795654296875 800 700"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <linearGradient
                                id="WebdutTeam18R91linearGradient-3"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                                ><stop
                                    offset="0%"
                                    stop-color="rgba(0, 0, 0, 1)"
                                /><stop
                                    offset="100%"
                                    stop-color="rgba(205, 129, 73, 1)"
                                /></linearGradient
                            >
                            <radialGradient
                                id="WebdutTeam18R91radialGradient-5"
                                cx="50%"
                                cy="50%"
                                fx="50%"
                                fy="50%"
                                r="50%"
                                fr="0%"
                                ><stop
                                    offset="0%"
                                    stop-color="rgba(255, 0, 0, 0.662)"
                                /><stop
                                    offset="100%"
                                    stop-color="rgba(234, 143, 0, 1)"
                                /></radialGradient
                            >
                            <radialGradient
                                id="WebdutTeam18R91radialGradient-12"
                                cx="50%"
                                cy="50%"
                                fx="50%"
                                fy="50%"
                                r="50%"
                                fr="0%"
                                ><stop
                                    offset="0%"
                                    stop-color="rgba(0, 145, 88, 1)"
                                /><stop
                                    offset="100%"
                                    stop-color="rgba(50, 32, 40, 0.602)"
                                /></radialGradient
                            ></defs
                        ><g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    id="WebdutTeam18R91Path-11"
                                    d="M -455.9921875,239 C -422.7921875,176.6 -332.7921875,152.2 -205.9921875,133 C -79.19218749999999,113.8 81.59782998362815,129.57163317601157 202.0078125,169 C 304.0078125,202.4 373.8078125,226.4 409.0078125,285 C 444.2078125,343.6 397.2078125,402 333.0078125,425 C 215.4105548405161,467.12985866305496 -124.9921875,445.4 -227.9921875,420 C -389.865273367482,380.0817827084074 -486.2698842541553,295.9074782367256 -455.9921875,239 Z"
                                    fill="url(#WebdutTeam18R91radialGradient-12)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.8035746994605322 -0.055775951140066095 0.055775951140066095 0.8035746994605322 -112.799504772089 -96.29344970196527)"
                                />

                                <circle
                                    id="WebdutTeam18R91Circle-4"
                                    cx="0"
                                    cy="0"
                                    r="100"
                                    fill="url(#WebdutTeam18R91radialGradient-5)"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 175 -306)"
                                />

                                <path
                                    id="WebdutTeam18R91Path-2"
                                    d="M 8.360753676470608,361.4117647058824 C 36.2739604035839,360.6911129268228 95.83134191176467,351.7647058823529 117.83134191176467,342.8235294117647 C 150.97568610269477,329.3531007566273 150.65475929245852,312.7702716310479 133.65487132352942,299.05882352941177 C 123.25487132352939,290.6705882352942 100.92545955882352,283.4588235294118 62.30193014705881,275.00000000000006 C 68.96075367647057,231.04705882352945 69.75273965848046,176.12372732457544 59.71369485294116,148.1764705882353 C 50.33481105241843,122.06700713321794 7.407812500000002,114.2 -8.9921875,111 C -14.839246323529451,109.36470588235292 -14.262775735294085,102.1058823529412 -12.69806985294116,92.8235294117647 C 0.7136948529412166,85.98823529411763 15.758489879210288,65.54014845913444 12.0078125,51 C 7.143842023409178,32.14397862570409 -13.592187499999998,24 -29.9921875,24 C -46.392187500000006,24 -67.12821702340918,32.14397862570409 -71.9921875,51 C -75.74286487921029,65.54014845913444 -60.69806985294122,85.98823529411763 -47.28630514705884,92.8235294117647 C -45.721599264705915,102.1058823529412 -45.14512867647055,109.36470588235292 -52.9921875,111 C -69.3921875,114.2 -110.31918605241843,122.06700713321794 -119.69806985294116,148.1764705882353 C -129.73711465848046,176.12372732457544 -128.94512867647057,231.04705882352945 -122.28630514705881,275.00000000000006 C -160.90983455882352,283.4588235294118 -183.2392463235294,290.6705882352942 -193.63924632352942,299.05882352941177 C -210.63913429245852,312.7702716310479 -210.96006110269477,329.3531007566273 -177.81571691176467,342.8235294117647 C -155.81571691176467,351.7647058823529 -96.2583354035839,360.6911129268228 -68.34512867647061,361.4117647058824 C -40.07454269435298,362.1416431566904 -19.909832305647022,362.1416431566904 8.360753676470608,361.4117647058824 Z"
                                    fill="url(#WebdutTeam18R91linearGradient-3)"
                                    fill-rule="evenodd"
                                    stroke="rgba(255, 255, 255, 1)"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 -110 -192)"
                                />

                                <path
                                    id="WebdutTeam18R91Path-9"
                                    d="M -184.9921875,-251 C -191.5921875,-250.6 -207.3921875,-259.4 -216.9921875,-250 C -243.1921875,-261.2 -234.7921875,-297.8 -258.9921875,-315 C -274.9921875,-294 -278.9921875,-256 -268.9921875,-235 C -282.3921875,-234 -324.5921875,-245 -337.9921875,-238 C -332.3921875,-226.2 -329.9921875,-193.6 -309.9921875,-179 C -289.9921875,-164.4 -263.3921875,-163.8 -247.9921875,-166 C -249.1921875,-173.2 -249.7921875,-189.8 -250.9921875,-197 C -233.3921875,-177.2 -177.5921875,-164.8 -155.9921875,-167 C -164.9921875,-178.6 -210.9921875,-214.4 -209.9921875,-233 C -202.7921875,-238.2 -188.1921875,-245.8 -184.9921875,-251 Z"
                                    fill="url(#WebdutTeam18R91linearGradient-3)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.18640265141378076 0 0 0.18640265141378076 -205.98954759285627 -215.28316480465907)"
                                />

                                <path
                                    id="WebdutTeam18R91Path-8"
                                    d="M -184.9921875,-251 C -191.5921875,-250.6 -207.3921875,-259.4 -216.9921875,-250 C -243.1921875,-261.2 -234.7921875,-297.8 -258.9921875,-315 C -274.9921875,-294 -278.9921875,-256 -268.9921875,-235 C -282.3921875,-234 -324.5921875,-245 -337.9921875,-238 C -332.3921875,-226.2 -329.9921875,-193.6 -309.9921875,-179 C -289.9921875,-164.4 -263.3921875,-163.8 -247.9921875,-166 C -249.1921875,-173.2 -249.7921875,-189.8 -250.9921875,-197 C -233.3921875,-177.2 -177.5921875,-164.8 -155.9921875,-167 C -164.9921875,-178.6 -210.9921875,-214.4 -209.9921875,-233 C -202.7921875,-238.2 -188.1921875,-245.8 -184.9921875,-251 Z"
                                    fill="url(#WebdutTeam18R91linearGradient-3)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.18640265141378035 0 0 0.18640265141378035 -265.9895475928564 -227.28316480465918)"
                                />

                                <path
                                    id="WebdutTeam18R91Path-9"
                                    d="M -184.9921875,-251 C -191.5921875,-250.6 -207.3921875,-259.4 -216.9921875,-250 C -243.1921875,-261.2 -234.7921875,-297.8 -258.9921875,-315 C -274.9921875,-294 -278.9921875,-256 -268.9921875,-235 C -282.3921875,-234 -324.5921875,-245 -337.9921875,-238 C -332.3921875,-226.2 -329.9921875,-193.6 -309.9921875,-179 C -289.9921875,-164.4 -263.3921875,-163.8 -247.9921875,-166 C -249.1921875,-173.2 -249.7921875,-189.8 -250.9921875,-197 C -233.3921875,-177.2 -177.5921875,-164.8 -155.9921875,-167 C -164.9921875,-178.6 -210.9921875,-214.4 -209.9921875,-233 C -202.7921875,-238.2 -188.1921875,-245.8 -184.9921875,-251 Z"
                                    fill="url(#WebdutTeam18R91linearGradient-3)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.18640265141378076 0 0 0.18640265141378076 -205.98954759285627 -215.28316480465907)"
                                />

                                <path
                                    id="WebdutTeam18R91Path-10"
                                    d="M -184.9921875,-251 C -191.5921875,-250.6 -207.3921875,-259.4 -216.9921875,-250 C -243.1921875,-261.2 -234.7921875,-297.8 -258.9921875,-315 C -274.9921875,-294 -278.9921875,-256 -268.9921875,-235 C -282.3921875,-234 -324.5921875,-245 -337.9921875,-238 C -332.3921875,-226.2 -329.9921875,-193.6 -309.9921875,-179 C -289.9921875,-164.4 -263.3921875,-163.8 -247.9921875,-166 C -249.1921875,-173.2 -249.7921875,-189.8 -250.9921875,-197 C -233.3921875,-177.2 -177.5921875,-164.8 -155.9921875,-167 C -164.9921875,-178.6 -210.9921875,-214.4 -209.9921875,-233 C -202.7921875,-238.2 -188.1921875,-245.8 -184.9921875,-251 Z"
                                    fill="url(#WebdutTeam18R91linearGradient-3)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.1730649899615472 0 0 0.1730649899615472 -244.4975729632311 -177.48452816211264)"
                                />
                            </g></g
                        ></svg
                    >
                </figure>
            </section>
        </Content>
    </Card>

    <!-- <section class="slide slide4">
        <h1>Create diagrams</h1>
    </section>
    <section class="slide slide5">
        <h1>Powerful Pen tool</h1>
    </section> -->
    <Card>
        <Content>
            <section class="slide slide6">
                <h1 class="mdc-typography--headline4">Gradients</h1>
                <figure>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-312.7233581542969 -257.5409240722656 500 400"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <radialGradient
                                id="WebdutTeam15R59radialGradient-7"
                                cx="25.251%"
                                cy="50.846%"
                                fx="13.942%"
                                fy="35.965%"
                                r="73.465%"
                                fr="0%"
                            >
                                <stop
                                    offset="0%"
                                    stop-color="rgba(0, 150, 220, 0)"
                                />
                                <stop
                                    offset="100%"
                                    stop-color="rgba(255, 255, 255, 1)"
                                />
                            </radialGradient>
                            <filter
                                id="WebdutTeam15R59shadow-4"
                                x="-32%"
                                y="-24%"
                                width="1000%"
                                height="988%"
                            >
                                <feDropShadow
                                    dx="4"
                                    dy="5"
                                    stdDeviation="10"
                                    flood-color="rgba(0, 0, 0, 1)"
                                    flood-opacity="1"
                                />
                            </filter>
                        </defs>
                        <g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    id="WebdutTeam15R59Path-2"
                                    d="M -216,-88 C -211.4,-139.8 -183.6,-190 -125,-206 C -66.4,-222 18.599999999999994,-203.6 77,-168 C 135.4,-132.4 170.6,-74.6 167,-28 C 163.4,18.6 122,48.8 59,65 C -4,81.2 -93,83.6 -148,53 C -203,22.4 -220.6,-36.199999999999996 -216,-88 Z"
                                    fill="url(#WebdutTeam15R59radialGradient-7)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 125, 255, 0.073)"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="url(#WebdutTeam15R59shadow-4)"
                                    mask="none"
                                    transform="matrix(1 0 0 1 -38 10)"
                                />
                            </g>
                        </g>
                    </svg>
                </figure>
            </section>
        </Content>
    </Card>
    <Card>
        <Content>
            <section class="slide slide7">
                <h1 class="mdc-typography--headline4">Drop shadows</h1>
                <figure>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-545.5999145507812 -637.722900390625 900 796"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <radialGradient
                                id="WebdutTeamR3radialGradient-6"
                                cx="77.632%"
                                cy="13.346%"
                                fx="100%"
                                fy="0%"
                                r="23.465%"
                                fr="100%"
                            >
                                <stop
                                    offset="0%"
                                    stop-color="rgba(255, 169, 82, 1)"
                                />
                                <stop
                                    offset="100%"
                                    stop-color="rgba(255, 0, 0, 1)"
                                />
                            </radialGradient>
                            <filter
                                id="WebdutTeamR3shadow-4"
                                x="0%"
                                y="0%"
                                width="1000%"
                                height="1000%"
                            >
                                <feDropShadow
                                    dx="125"
                                    dy="220"
                                    stdDeviation="2.804"
                                    flood-color="rgba(0, 0, 0, 0.209)"
                                    flood-opacity="1"
                                />
                            </filter>
                        </defs>
                        <g>
                            <g
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    d="M -332,87.5 A 72.20461527319596 72.20461527319596 0 1 1 -310,-51.5 C -239,-160.9 -152.60000000000002,21.299999999999997 -100,-117.5 C -64.96896370542808,-209.93931250354711 75.4,-238.9 158,-210.5 C 82.80000000000001,-101.5 175.2,-32.5 272,-40.5 C 56.60000000000001,90.5 -35.39999999999999,-128.5 -121,54.5 A 99.32282766114979 99.32282766114979 0 0 0 -223,205.5 C -333.4,235.7 -237.60000000000002,85.30000000000001 -332,87.5 Z"
                                    fill="url(#WebdutTeamR3radialGradient-6)"
                                    fill-rule="evenodd"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="url(#WebdutTeamR3shadow-4)"
                                    mask="none"
                                    transform="matrix(1 0 0 1 -71 -332)"
                                />
                            </g>
                        </g>
                    </svg>
                </figure>
            </section>
        </Content>
    </Card>
    <Card>
        <Content>
            <h1 class="decorated mdc-typography--headline4">Text mask</h1>
            <figure>
                <svg width="100%" height="100%" viewBox="-150.14004516601562 -25.043426513671875 800 450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <mask id='TextMask-MithileshKumar4R19-6'>
                                        
                            <circle 
                                cx='400'
                                cy='225'
                                r='50'
                                fill='white'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                transform='matrix(1 0 0 1 0 0)'
                            />
                                            
                            <text  
                                x='400'
                                y='225'
                                font-size='20px'
                                font-weight='600'
                                font-family='Roboto, sans-serif'
                                transform='matrix(1 0 0 1 -46.7294921875 7.80633544921875)'
                            >BALANCE
                            </text>
                                            
                        </mask>
                    </defs>
                    <g>
                        <g  
                            class='draggable'
                            id='Layer-MithileshKumar4R19-0'
                            fill='none'
                            stroke='none'
                            stroke-width='0'
                            stroke-dasharray='none'
                            opacity='1'
                            mask='undefined'
                            filter='undefined'
                            transform='matrix(1 0 0 1 0 0)'
                        >
                                            
                            <path  
                                id='Path-MithileshKumar4R19-2'
                                d='M 150,200 A 50 50 0 0 1 250,200 A 50 50 0 1 0 350,200 A 100 100 0 0 1 150,200 Z'
                                fill='rgba(0, 0, 0, 1)'
                                fill-rule='evenodd'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                stroke-linecap='butt'
                                stroke-linejoin='miter'
                                stroke-miterlimit='4'
                                opacity='1'
                                filter='none'
                                mask='none'
                                marker-start='none'
                                marker-mid='none'
                                marker-end='none'
                                transform='matrix(1 0 0 1 0 0)'
                            />
                                                
                            <path  
                                id='Path-MithileshKumar4R19-3'
                                d='M 150,200 A 50 50 0 0 1 250,200 A 50 50 0 1 0 350,200 A 100 100 0 0 1 150,200 Z'
                                fill='rgba(255, 255, 255, 1)'
                                fill-rule='evenodd'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='1'
                                stroke-dasharray='none'
                                stroke-linecap='butt'
                                stroke-linejoin='miter'
                                stroke-miterlimit='4'
                                opacity='1'
                                filter='none'
                                mask='none'
                                marker-start='none'
                                marker-mid='none'
                                marker-end='none'
                                transform='matrix(-1 0 0 -1 499.71990966796875 399.91314697265625)'
                            />
                                                
                            <g  
                                class='draggable'
                                id='Group-MithileshKumar4R19-6'
                                fill='rgba(0, 0, 0, 0)'
                                stroke='rgba(0, 0, 0, 1)'
                                stroke-width='0'
                                stroke-dasharray='none'
                                opacity='1'
                                mask='url(#TextMask-MithileshKumar4R19-6)'
                                filter='none'
                                transform='matrix(1 0 0 1 -147.9110107421875 -24.8153076171875)'
                            >
                                                
                                <circle  
                                    id='Circle-MithileshKumar4R19-4'
                                    cx='400'
                                    cy='225'
                                    r='50'
                                    fill='rgba(255, 0, 0, 0.986)'
                                    stroke='rgba(0, 0, 0, 1)'
                                    stroke-width='1'
                                    stroke-dasharray='none'
                                    opacity='1'
                                    filter='none'
                                    mask='none'
                                    transform='matrix(1 0 0 1 0 0)'
                                />
                                                    
                                <text  
                                    id='Text-MithileshKumar4R19-5'
                                    x='400'
                                    y='225'
                                    font-size='20px'
                                    font-weight='600'
                                    font-family='Roboto, sans-serif'
                                    fill='rgba(0, 0, 0, 1)'
                                    stroke='undefined'
                                    stroke-width='undefined'
                                    stroke-dasharray='undefined'
                                    opacity='1'
                                    filter='none'
                                    mask='undefined'
                                    transform='matrix(1 0 0 1 -46.7294921875 7.80633544921875)'
                                >
                                    BALANCE
                                </text>
                            </g>
                        </g>
                    </g>
                </svg>
            </figure>
        </Content>
    </Card>
    <Card>
        <Content>
            <section class="slide slide8">
                <h1 class="mdc-typography--headline4">Specular and diffuse lighting</h1>
                <figure>
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-138 -137 250 250"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <filter
                                id="WebdutTeam16R33specularLighting-3"
                                x="0%"
                                y="0%"
                                width="200%"
                                height="200%"
                            >
                                <feSpecularLighting
                                    result="spotlight"
                                    specularExponent="30"
                                    specularConstant="1"
                                    lighting-color="rgba(255, 255, 255, 1)"
                                    surfaceScale="1"
                                >
                                    <fePointLight x="-50" y="-50" z="100" />
                                </feSpecularLighting>
                                <feComposite
                                    in="SourceGraphic"
                                    in2="spotlight"
                                    operator="arithmetic"
                                    k1="0"
                                    k2="1"
                                    k3="1"
                                    k4="0"
                                />
                            </filter>

                            <filter
                                id="WebdutTeam16R33shadow-4"
                                x="0%"
                                y="0%"
                                width="200%"
                                height="200%"
                            >
                                <feDropShadow
                                    dx="10"
                                    dy="10"
                                    stdDeviation="5"
                                    flood-color="rgba(0, 0, 0, 0.2)"
                                    flood-opacity="1"
                                />
                            </filter>
                        </defs>
                        <g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="none"
                                filter="none"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <circle
                                    id="WebdutTeam16R33Circle-2"
                                    cx="0"
                                    cy="0"
                                    r="100"
                                    fill="rgba(0, 0, 0, 1)"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter=" url(#WebdutTeam16R33specularLighting-3) url(#WebdutTeam16R33shadow-4)"
                                    mask="none"
                                    transform="matrix(1 0 0 1 -13 -12)"
                                />
                            </g>
                        </g>
                    </svg>

                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-138 -137 250 250"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <filter
                                id="WebdutTeam17R76diffuseLighting-3"
                                x="0%"
                                y="0%"
                                width="200%"
                                height="200%"
                            >
                                <feDiffuseLighting
                                    result="spotlight"
                                    specularExponent="undefined"
                                    specularConstant="undefined"
                                    lighting-color="rgba(255, 255, 255, 1)"
                                    surfaceScale="1"
                                >
                                    <fePointLight x="-50" y="-50" z="100" />
                                </feDiffuseLighting>
                                <feComposite
                                    in="SourceGraphic"
                                    in2="spotlight"
                                    operator="arithmetic"
                                    k1="1"
                                    k2="0"
                                    k3="0"
                                    k4="0"
                                />
                            </filter>
                        </defs><g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                mask="undefined"
                                filter="undefined"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <circle
                                    id="WebdutTeam17R76Circle-2"
                                    cx="-13"
                                    cy="-12"
                                    r="100"
                                    fill="rgba(216, 105, 20, 1)"
                                    stroke="rgba(0, 0, 0, 1)"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter=" url(#WebdutTeam17R76diffuseLighting-3)"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
                            </g></g
                        >
                    </svg>
                </figure>
            </section>
        </Content>
    </Card>

    <!-- <section class="snippet {sectionClass}" bind:clientWidth={W}>
        <section>
            <h1 class="title">Learn how to create art with Vectorial</h1>
            <Link href="/learn">
                <Label>Learn</Label>
            </Link>
        </section>
        <figure>
            
            <svg class="background" width="100%" height="100%" viewBox="-695.2640686035156 -613.2071228027344 1106 816" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <radialGradient id="WebdutTeam4radialGradient-3" cx="55.013%" cy="82.394%" r="87.751%" fx="54.418%" fy="56.203%" fr="0%">
                        <stop offset="0%" stop-color="rgba(255, 0, 0, 1)"></stop>
                        <stop offset="100%" stop-color="rgba(108, 0, 0, 1)"></stop>
                    </radialGradient>
                    <filter id="WebdutTeam4diffuseLighting-4" x="0%" y="0%" width="1000%" height="1000%" class="s-eE0bW0P9tQLz">
                        <feDiffuseLighting result="spotlight" diffuseexponent="4.247" diffuseConstant="1.151" lighting-color="rgba(255, 0, 0, 1)" surfaceScale="1.509" class="s-eE0bW0P9tQLz"><fePointLight x="-79.353" y="-88.876" z="100" class="s-eE0bW0P9tQLz"></fePointLight></feDiffuseLighting><feComposite in="SourceGraphic" in2="spotlight" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" class="s-eE0bW0P9tQLz"></feComposite>
                    </filter>
                </defs>
                <g>
                    <g id="Layer-0" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)" class="s-QQIalB0-gg3s">     
                        <path id="Path-2" d="M -175.8673095703125,-255.17462158203125 C -199.35194951002396,-255.12689587969962 -220.0673095703125,-278.7746215820313 -245.8673095703125,-267.17462158203125 C -271.6673095703125,-255.57462158203126 -287.4673095703125,-217.77462158203124 -282.8673095703125,-181.17462158203125 C -278.2673095703125,-144.57462158203126 -245.6673095703125,-100.77462158203124 -222.8673095703125,-84.17462158203125 C -200.0673095703125,-67.57462158203126 -190.4673095703125,-98.17462158203125 -168.8673095703125,-98.17462158203125 C -147.2673095703125,-98.17462158203125 -134.02141388544956,-80.26562070139103 -114.8673095703125,-84.17462158203125 C -95.2673095703125,-88.17462158203125 -73.6673095703125,-139.37462158203124 -72.8673095703125,-170.17462158203125 A 42.31903238891253 42.31903238891253 0 0 1 -79.8673095703125,-253.17462158203125 C -128.6673095703125,-300.37462158203124 -154.90340492739986,-255.21722462279598 -175.8673095703125,-255.17462158203125 ZM -176.8673095703125,-273.17462158203125 C -182.4673095703125,-288.97462158203126 -185.0673095703125,-305.7746215820313 -174.8673095703125,-325.17462158203125 C -164.6673095703125,-344.5746215820312 -142.6673095703125,-351.5746215820312 -132.8673095703125,-355.17462158203125 C -130.8673095703125,-345.5746215820312 -124.52370415472677,-325.00129648827414 -133.8673095703125,-305.17462158203125 C -142.0673095703125,-287.7746215820313 -160.6673095703125,-277.97462158203126 -176.8673095703125,-273.17462158203125 Z" fill="url(#WebdutTeam4radialGradient-3)" fill-rule="evenodd" stroke="rgba(0, 0, 0, 1)" stroke-width="0" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" opacity="1" filter=" url(#WebdutTeam4diffuseLighting-4)" mask="none" transform="matrix(1 0 0 1 36 12)" class="s-DdtlPq9YV1zx"></path>
        
                    </g>
                </g>
            </svg>
            
        </figure>
    </section> -->
</article>

<style>
    article {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    section {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    /* .snippet {
        margin-top: 1em;
        padding: 0.5em;
        width: 100%;
        background: rgb(255, 255, 255);
        border-radius: 10px;
    }
    .title {
        font-size: 2.5em;
        margin-bottom: 0;
        margin-top: 0;
        font-weight: 300;
    }
    .subtitle {
        color: #888;
    }
    
    .grid {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: space-between;
    }
    
    .flex {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    figure {
        width: min(400px, 90vw);
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: row;
        position: relative;
        z-index: 0;
        height: 300px;
    }
    .background {
        position: absolute;
    } */
    .decorated {
        display: flex;
        align-items: center;
        justify-content: center;

        background: linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(200 255 8),
            rgb(207 166 35),
            rgb(241 7 7)
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }

    /* .slide1 .subscription {
        margin-top: 1em;
        text-decoration: none;
        font-size: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(20, 141, 202);
        padding: 0.5em 1em;
        border: 0.5px solid;
        border-radius: 1em;
        overflow: hidden;
        cursor: pointer;
    } */
    .slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1, h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        /* font-size: 5vw; */
        background: linear-gradient(
            to right,
            rgb(2 176 245),
            rgb(200 255 8),
            rgb(207 166 35),
            rgb(241 7 7)
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .slide8 figure {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 10px;
    }
    figure {
        display:flex;
        flex-wrap:wrap;
        gap:0.5em;
        justify-content: center;
    }
    figure img {
        max-width: 300px;
        background: white;
    }
</style>
