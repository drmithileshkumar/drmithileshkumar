<script lang="ts">
    //@ts-nocheck
    import Paper, { Title, Subtitle } from '@smui/paper';
    import List, { Item, Graphic, Separator, Text } from '@smui/list';
    import MenuSurface from '@smui/menu-surface';
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import IconButton, { Icon } from '@smui/icon-button';
    import { Svg } from '@smui/common';
    let clicked = 'nothing yet';
</script>
<style>
    article {
        width: 100%;
        /* padding-top: 1em; */
        margin-bottom: 1em;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* gap: 0.5em; */
        overflow:scroll;
    }
</style>
<article>
    <!-- <MenuSurface static> -->
    <Paper>
        <List dense>
            <Item on:SMUI:action={() => (clicked = 'close')}>
                <Graphic class="material-icons">close</Graphic>
                <Text>Close file</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'crop')}>
                <Graphic class="material-icons">crop</Graphic>
                <Text>Crop file</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'download')}>
                <Graphic class="material-icons">share</Graphic>
                <Text>Open drawing in browser</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'copy to clipboard')}>
                <Graphic class="material-icons">polyline</Graphic>
                <Text>Copy SVG to clipboard</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'png')}>
                <Graphic class="material-icons">image</Graphic>
                <Text>Download png</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'save')}>
                <Graphic class="material-icons">save</Graphic>
                <Text>Save document</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'copydata')}>
                <Graphic class="material-icons">copy_all</Graphic>
                <Text>Copy all for another document</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'paste')}>
                <Graphic class="material-icons">content_paste</Graphic>
                <Text>Paste from another document</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'duplicate')}>
                <Graphic class="material-icons">content_copy</Graphic>
                <Text>Duplicate selection</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'ncopies')}>
                <Graphic>
                    <Icon component={Svg} viewBox="1.24 -1.64 24 24">
                        <g>
                            <g
                            >
                                <g
                                    transform="matrix(1 0 0 1 1.1600000000000001 -0.11999999999999922)"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="12"
                                        height="15"
                                        rx="1"
                                        ry="1"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-dasharray="none"
                                        opacity="1"
                                        filter="none"
                                        transform="matrix(1 0 0 1 5.840000000000002 2.6400000000000006)"
                                    />
            
                                    <path
                                        d="M 4.3199999999999985,15.360312500000003 V 1.3203125000000018 H 16.72"
                                        
                                        fill-rule="evenodd"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-miterlimit="4"
                                        opacity="1"
                                        filter="none"
                                        transform="matrix(1 0 0 1 0 0)"
                                    />
            
                                    <text
                                        x="12"
                                        y="12"
                                        font-size="12px"
                                        font-weight="400"
                                        
                                        stroke="currentColor"
                                        opacity="1"
                                        filter="none"
                                        transform="matrix(1 0 0 1 -2.3999999999999986 4.520000000000003)"
                                        >N
                                    </text></g>
                                </g>
                            </g>
                    
                    </Icon>
                </Graphic>
                <Text>Make N copies</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'delete')}>
                <Graphic class="material-icons">delete</Graphic>
                <Text>Delete selected element</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'up')}>
                <Graphic class="material-icons">arrow_upward</Graphic>
                <Text>Move element up in view</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'down')}>
                <Graphic class="material-icons">arrow_downward</Graphic>
                <Text>Move element down in view</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'group')}>
                <Graphic class="material-icons">group_add</Graphic>
                <Text>Make group</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'ungroup')}>
                <Graphic class="material-icons">group_remove</Graphic>
                <Text>Ungroup</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'undo')}>
                <Graphic class="material-icons">undo</Graphic>
                <Text>Undo</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'redo')}>
                <Graphic class="material-icons">redo</Graphic>
                <Text>Redo</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'pan')}>
                <Graphic class="material-icons">pan_tool_alt</Graphic>
                <Text>Pan mode</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'zoom_in')}>
                <Graphic class="material-icons">zoom_in</Graphic>
                <Text>Zoom in</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'zoom_out')}>
                <Graphic class="material-icons">zoom_out</Graphic>
                <Text>Zoom out</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'reset')}>
                <Graphic>RESET</Graphic>
                <Text>Reset pan and zoom</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'appearance')}>
                <Graphic class="material-icons">tune</Graphic>
                <Text>Styles</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'dimensions')}>
                <Graphic class="material-icons">picture_in_picture</Graphic>
                <Text>Size, position, transforms</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'filters')}>
                <Graphic class="material-icons">blur_on</Graphic>
                <Text>Filters</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'markers')}>
                <Graphic class="material-icons">arrow_right_alt</Graphic>
                <Text>Markers</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'masks')}>
                <Graphic class="material-icons">masks</Graphic>
                <Text>Masks</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'image')}>
                <Graphic class="material-icons">add_a_photo</Graphic>
                <Text>Import image</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'layers')}>
                <Graphic class="material-icons">layers</Graphic>
                <Text>Layers and elements</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'shapes')}>
                <Graphic class="material-icons">interests</Graphic>
                <Text>Shapes</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'text')}>
                <Graphic class="material-icons">text_fields</Graphic>
                <Text>Text</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'latex')}>
                <Graphic class="material-icons">functions</Graphic>
                <Text>LateX</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'plot')}>
                <Graphic class="material-icons">show_chart</Graphic>
                <Text>Plot Function</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'select')}>
                <Graphic class="material-symbols-outlined">select</Graphic>
                <Text>Selection mode</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'lasso')}>
                <Graphic class="material-symbols-outlined">laps</Graphic>
                <Text>Lasso tool mode</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'transformMode')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-480 -290 420 420">
                        <rect
                        x="0"
                        y="0"
                        width="280"
                        height="280"
                        fill='none'
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-dasharray="30"
                        opacity="1"
                        transform="translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="rgba(0, 200, 0, 1)"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-260 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-400 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-260 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-120 -200) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-120 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-120 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-260 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-400 80) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                        <circle
                            cx="0"
                            cy="0"
                            r="30"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-dasharray="none"
                            opacity="1"
                            transform="translate(-400 -60) rotate(0 0 0) scale(1 1) skewX(0) skewY(0)"
                        />
                    </Icon>
                </Graphic>
                <Text>Transform mode</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'takeControls')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-3 -3 28 28">
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
                                    id="WebdutTeam11Path-3"
                                    d="M 3.1338541666666693,5.93385416666667 C 1.973854166666671,0.9205208333333323 9.620076814156045,0.23057705676274987 10.400520833333328,2.9338541666666664 C 11.32052083333333,6.120520833333336 5.844016685781757,8.578143017167394 3.9338541666666735,12.267187500000006 A 7.64264540285394 7.64264540285394 0 0 0 18.000520833333336,18.200520833333336 L 22.400520833333335,23.000520833333326"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
            
                                <rect
                                    id="WebdutTeam11Rect-4"
                                    x="2"
                                    y="2"
                                    width="3"
                                    height="3"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="rgba(255, 255, 255, 1)"
                                    stroke-width="0.8"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 2.8000000000000043 17.33333333333333)"
                                />
            
                                <path
                                    id="WebdutTeam11Path-2"
                                    d="M 15.267187499999995,4.067187499999999 L 5.800520833333334,14.93385416666667 L 5.133854166666662,19.80052083333333 L 10.867187500000004,18.533854166666664 L 20.000520833333336,7.933854166666666 L 15.267187499999995,4.067187499999999 Z"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 2.1999999999999957 -0.7333333333333343)"
                                />
                            </g></g
                        >
                    </Icon>
                </Graphic>
                <Text>Pen tool</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'controlMode')}>
                <Graphic>
                    <Icon component={Svg} viewBox="0.26 0.12 24 24">
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
                                            id="WebdutTeam10R6Path-2"
                                            d="M 19.459860642751064,19.918799893061315 L 12.059860642751058,4.318799893061318 L 5.059860642751058,19.918799893061315 L 12.193193976084391,14.78546655972799 L 19.459860642751064,19.918799893061315 Z"
                                            fill="rgba(0, 0, 0, 0)"
                                            fill-rule="evenodd"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-dasharray="none"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-miterlimit="4"
                                            opacity="1"
                                            filter="none"
                                            mask="none"
                                            transform="matrix(0.7071067811865475 -0.7071067811865475 0.7071067811865475 0.7071067811865475 -6.178455766675752 10.951878228288258)"
                                        />
                                    </g>
                                </g>
                    </Icon>
                </Graphic>
                <Text>Node tool</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'addNode')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-3 -3 28 28">
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
                                <g
                                    class="draggable"
                                    id="WebdutTeam11R72Group-6"
                                    fill="rgba(0, 0, 0, 0)"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    mask="none"
                                    filter="none"
                                    transform="matrix(0.7472173892180144 -0.6645796966882265 0.6645796966882265 0.7472173892180144 -8.363097037473725 8.385031670314431)"
                                >
                                    <path
                                        id="WebdutTeam11R72Path-2"
                                        d="M 12.93385416666666,17.633854166666662 L 3.400520833333342,20.033854166666675 L 12.73385416666667,2.967187499999998 L 22.0671875,20.033854166666675 L 12.93385416666666,17.633854166666662 Z"
                                        fill="rgba(0, 0, 0, 0)"
                                        fill-rule="evenodd"
                                        stroke="currentColor"
                                        stroke-width="1"
                                        stroke-dasharray="none"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="4"
                                        opacity="1"
                                        filter="none"
                                        mask="none"
                                        transform="matrix(1 0 0 1 -0.7333333333333343 0.93333333333333)"
                                    />
            
                                    <path
                                        id="WebdutTeam11R72Path-3"
                                        d="M 11.867187500000004,10.1671875 V 16.433854166666666"
                                        fill="rgba(0, 0, 0, 0)"
                                        fill-rule="evenodd"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-dasharray="none"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="4"
                                        opacity="1"
                                        filter="none"
                                        mask="none"
                                        transform="matrix(1 0 0 1 0.13333333333333286 0.06666666666666998)"
                                    />
            
                                    <path
                                        id="WebdutTeam11R72Path-4"
                                        d="M 8.73385416666667,13.367187499999996 H 15.267187500000002"
                                        fill="rgba(0, 0, 0, 0)"
                                        fill-rule="evenodd"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-dasharray="none"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="4"
                                        opacity="1"
                                        filter="none"
                                        mask="none"
                                        transform="matrix(1 0 0 1 0 0)"
                                    />
                                </g>
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Add Node to path</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'deleteNode')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-3 -3 28 28">
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
                                <g
                                    class="draggable"
                                    id="WebdutTeam11R72Group-6"
                                    fill="rgba(0, 0, 0, 0)"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    mask="none"
                                    filter="none"
                                    transform="matrix(0.7472173892180144 -0.6645796966882265 0.6645796966882265 0.7472173892180144 -8.363097037473725 8.385031670314431)"
                                >
                                    <path
                                        id="WebdutTeam11R72Path-2"
                                        d="M 12.93385416666666,17.633854166666662 L 3.400520833333342,20.033854166666675 L 12.73385416666667,2.967187499999998 L 22.0671875,20.033854166666675 L 12.93385416666666,17.633854166666662 Z"
                                        fill="rgba(0, 0, 0, 0)"
                                        fill-rule="evenodd"
                                        stroke="currentColor"
                                        stroke-width="1"
                                        stroke-dasharray="none"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="4"
                                        opacity="1"
                                        filter="none"
                                        mask="none"
                                        transform="matrix(1 0 0 1 -0.7333333333333343 0.93333333333333)"
                                    />
            
                                    <path
                                        id="WebdutTeam11R72Path-4"
                                        d="M 8.73385416666667,13.367187499999996 H 15.267187500000002"
                                        fill="rgba(0, 0, 0, 0)"
                                        fill-rule="evenodd"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-dasharray="none"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="4"
                                        opacity="1"
                                        filter="none"
                                        mask="none"
                                        transform="matrix(1 0 0 1 0 0)"
                                    />
                                </g>
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Delete node from path</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'cutPath')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-0.33 -0.18 24 24">
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
                                    id="WebdutTeam12R97Path-2"
                                    d="M 15.880520833333346,22.113854166666663 C 18.200753231856158,22.782509081120217 18.884440653306775,19.765990451846793 18.200520833333353,18.10052083333333 C 17.509998787146433,16.613788193538664 15.213854166666682,15.647187500000001 13.187187500000018,16.67385416666667 C 12.09385416666668,15.220520833333335 13.573854166666678,14.020520833333327 12.560520833333342,11.887187499999992 C 12.867187500000007,9.953854166666662 13.857575861545074,8.011164525678346 14.29385416666667,5.900520833333337 C 14.787187500000003,3.513854166666672 14.880520833333344,1.9671874999999992 14.467187500000009,1.4338541666666664 L 11.627187500000005,10.700520833333327 L 8.707187500000003,1.4338541666666664 C 8.293854166666668,1.9671874999999992 8.467187500000007,3.513854166666672 8.96052083333334,5.900520833333337 C 9.396799138454936,8.011164525678346 10.387187500000003,9.953854166666662 10.693854166666668,11.887187499999992 C 9.680520833333333,14.020520833333327 11.16052083333333,15.220520833333335 10.067187499999992,16.67385416666667 C 8.040520833333328,15.647187500000001 5.744376212853578,16.613788193538664 5.133854166666662,18.10052083333333 C 4.449934346693238,19.765990451846793 5.133621768143858,22.782509081120217 7.45385416666667,22.113854166666663 C 9.387095553446656,21.556724046891407 8.587187499999997,18.687187499999997 11.680520833333333,16.540520833333336 C 14.587187500000015,18.687187499999997 13.94727944655336,21.556724046891407 15.880520833333346,22.113854166666663 ZM 8.720312499999999,17.420312499999998 C 8.21853278240216,17.217989265081606 6.512312499999999,17.6683125 6.120312500000001,18.7803125 C 5.8562488994771815,19.529390876993308 6.216312499999999,21.132312499999998 6.760312499999998,21.260312499999998 C 7.255283404924026,21.376776242335065 7.777065168233633,20.309377017742236 8.240312500000005,19.6203125 C 8.69703091573706,18.940959520925386 9.682713855149428,17.808363568297136 8.720312499999999,17.420312499999998 ZM 14.560312499999998,17.5003125 C 15.040312499999999,17.2843125 16.8323125,17.828312500000003 17.2803125,18.5803125 C 17.7283125,19.3323125 17.3203125,21.0443125 16.8403125,21.2603125 C 16.3603125,21.476312500000002 15.6083125,20.332312499999997 15.1603125,19.580312499999998 C 14.7123125,18.8283125 14.080312499999998,17.7163125 14.560312499999998,17.5003125 Z"
                                    fill="currentColor"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="0.1"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.7071067811865475 -0.7071067811865475 0.7071067811865475 0.7071067811865475 -4.941773979306938 11.712364556921019)"
                                />
    
                                <path
                                    id="WebdutTeam12R97Path-3"
                                    d="M 4.0003125,21.8603125 C 6.440312499999997,18.604312500000002 3.9071722033058283,15.899931588895987 3.8003125000000004,12.420312500000001 C 3.6723124999999994,8.252312500000004 8.656312500000002,3.844312499999999 13.2803125,3.8203125 C 16.463606236693334,3.803790214169412 17.328312499999996,6.9723125 20.360312499999996,4.9003125"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="2 1"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Split a path at a point</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'clopenPath')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-3 -3 28 28">
                        <g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                transform="matrix(1 0 0 1 0 0)"
                                >
                                <path
                                    id="WebdutTeam6Path-2"
                                    d="M 3.119999999999999,9.8003125 L 7.4,4.600312500000001 L 15.44,3.9203124999999996 L 20.68,9.240312500000002 L 19.92,17.8003125 L 11.360000000000001,20.480312500000004"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
    
                                <path
                                    id="WebdutTeam6Path-3"
                                    d="M 11.040000000000004,21.2803125 L 1.8399999999999999,9.0003125"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="rgba(255, 0, 0, 1)"
                                    stroke-width="2"
                                    stroke-dasharray="2"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    transform="matrix(1 0 0 1 -0.0799999999999983 -0.11999999999999744)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Close or open a path</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'reversePath')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-0.44 -0.16 24 24">
                        <g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    id="WebdutTeam10Path-2"
                                    d="M 20.799999999999997,11.840000000000002 H 7.24"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
    
                                <polygon
                                    id="WebdutTeam10Regular-3"
                                    points="16.00,12.00 10.00,15.46 10.00,8.54 "
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="rgba(255, 0, 0, 1)"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    transform="matrix(-1 0 0 1 18.319999809265138 -0.16000000000000014)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Reverse sequence of vertices on a path</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'combinePath')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-3 -3 28 28">
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
                                    id="WebdutTeam13R10Circle-2"
                                    d="M 10,0 A 10 10 0 0 1 0,10 A 10 10 0 0 1 -10,0 A 10 10 0 0 1 0,-10 A 10 10 0 0 1 10,0 ZM 1.066666603088379,-2.2666664123535156 A 4 4 0 0 1 -2.933333396911621,1.7333335876464844 A 4 4 0 0 1 -6.933333396911621,-2.2666664123535156 A 4 4 0 0 1 -2.933333396911621,-6.266666412353516 A 4 4 0 0 1 1.066666603088379,-2.2666664123535156 ZM 4.933333396911621,4.266667366027832 A 2 2 0 0 1 2.933333396911621,6.266667366027832 A 2 2 0 0 1 0.9333333969116211,4.266667366027832 A 2 2 0 0 1 2.933333396911621,2.266667366027832 A 2 2 0 0 1 4.933333396911621,4.266667366027832 Z"
                                    fill="rgba(0, 0, 0, 0.3)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 11.73333333333333 12.06666666666667)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Combine and create multipath</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'connectPath')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-3 -3 28 28">
                        <g>
                            <g
                                class="draggable"
                                id="Layer-0"
                                fill="none"
                                stroke="none"
                                stroke-width="0"
                                stroke-dasharray="none"
                                opacity="1"
                                transform="matrix(1 0 0 1 0 0)"
                            >
                                <path
                                    id="WebdutTeam10Path-2"
                                    d="M 3.3599999999999977,8.12 L 10.359999999999998,3.08 L 19.959999999999994,10.360000000000001"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
    
                                <path
                                    id="WebdutTeam10Path-3"
                                    d="M 11.640000000000002,12.44 V 19.4 H 19.399999999999995"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
    
                                <path
                                    id="WebdutTeam10Path-4"
                                    d="M 10.760000000000003,12.960000000000003 L 20.839999999999996,10.28"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-dasharray="1"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Connect two paths</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'mirrorPath')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-3 -0.3 28 28">
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
                                    id="WebdutTeam11Path-2"
                                    d="M 20.733854166666678,22.2671875 C 19.813854166666673,21.653854166666665 15.702791141396766,19.656722613704506 15.80052083333334,16.8671875 C 15.886156486204012,14.422857062298602 19.7569414296675,12.56687286954565 19.533854166666675,9.800520833333334 C 19.265294836756325,6.470300904378643 12.840520833333336,4.200520833333332 11.867187500000004,3.2671874999999986 C 10.89385416666667,4.200520833333332 4.469080163243681,6.470300904378643 4.200520833333332,9.800520833333334 C 3.977433570332506,12.56687286954565 7.848218513795994,14.422857062298602 7.933854166666666,16.8671875 C 8.031583858603241,19.656722613704506 3.920520833333333,21.653854166666665 3.0005208333333293,22.2671875"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
    
                                <path
                                    id="WebdutTeam11Path-3"
                                    d="M 11.73385416666667,0.6671875000000007 V 22.733854166666667"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="2"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Add and edit vertices in mirror mode</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'convertPath')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-345 -368.5 700 700">
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
                                    id="WebdutTeam13R65Circle-2"
                                    d="M 271.5,0 A 271.5 271.5 0 0 1 0,271.5 A 271.5 271.5 0 0 1 -271.5,0 A 271.5 271.5 0 0 1 0,-271.5 A 271.5 271.5 0 0 1 271.5,0 Z"
                                    fill="rgba(0, 0, 0, 0.3)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="20"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 5 -19)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-3"
                                    x="-541"
                                    y="-451.5"
                                    width="50"
                                    height="50"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(6.123233995736766e-17 1 -1 6.123233995736766e-17 -149.99999999999994 497)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-4"
                                    x="-541"
                                    y="-451.5"
                                    width="50"
                                    height="50"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(-1 1.2246467991473532e-16 -1.2246467991473532e-16 -1 -510.0000000000001 -173.9999999999999)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-5"
                                    x="-541"
                                    y="-451.5"
                                    width="50"
                                    height="50"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(-1.8369701987210297e-16 -1 1 -1.8369701987210297e-16 159.9999999999999 -536.0000000000001)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-6"
                                    x="-541"
                                    y="-451.5"
                                    width="50"
                                    height="50"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 -2.4492935982947064e-16 2.4492935982947064e-16 1 521.0000000000001 136.9999999999999)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Convert shape to path</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'distributeOnCircle')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-299 -315.5 400 400">
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
                                    id="WebdutTeam13R65Circle-18"
                                    cx="0"
                                    cy="0"
                                    r="271.5"
                                    fill="rgba(0, 0, 0, 0)"
                                    stroke="rgba(0, 0, 0, 0.3)"
                                    stroke-width="10"
                                    stroke-dasharray="10"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.5819521178637204 0 0 0.5819521178637204 -98.49999999999991 -111.49999999999991)"
                                />
    
                                <path
                                    id="WebdutTeam13R65Path-2"
                                    d="M -101,-207.5 L -100,-268.5 L -66,-159.5 L -8.40202641655759,-140.9501767125175 L 49.92143807182174,-158.84915685309412 L -43.237144395601796,-92.83038291218963 L -43.08032203044261,-32.31924417177636 L -8.03443863497671,17.618577737387938 L -99.6096089436045,-50.579576071537254 L -157.11066097518238,-31.731458919483842 L -193.77457835939822,17.030792485095475 L -157.21256366826685,-91.13675847971784 L -192.9069905778174,-139.9991201962223 L -250.6124210774468,-159.80021336938927 L -136.4406829925269,-158.45328253655518 L -101,-207.5 Z"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />
    
                                <circle
                                    id="WebdutTeam13R65Circle-19"
                                    cx="0"
                                    cy="0"
                                    r="271.5"
                                    fill="rgba(0, 0, 0, 0)"
                                    stroke="rgba(0, 0, 0, 0.3)"
                                    stroke-width="10"
                                    stroke-dasharray="10"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.36648250460405174 0 0 0.36648250460405174 -100.99999999999996 -108.99999999999996)"
                                />
    
                                <circle
                                    id="WebdutTeam13R65Circle-20"
                                    cx="0"
                                    cy="0"
                                    r="271.5"
                                    fill="rgba(0, 0, 0, 0)"
                                    stroke="rgba(0, 0, 0, 0.3)"
                                    stroke-width="10"
                                    stroke-dasharray="10"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(0.220994475138122 0 0 0.220994475138122 -102.49999999999987 -109.49999999999987)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-3"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 433 174)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-4"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 430 392)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-5"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 374 350)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-6"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 337 299)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-7"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 395 282)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-8"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 488 349)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-9"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 466 282)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-10"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 374 412)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-11"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 490 410)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-12"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 521 298)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-13"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 430 234)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-14"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 281 282)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-15"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 339 457)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-16"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 526 458)"
                                />
    
                                <rect
                                    id="WebdutTeam13R65Rect-17"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 583 283)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Distribute vertices on circle</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = 'selectOnCircle')}>
                <Graphic>
                    <Icon component={Svg} viewBox="-299 -315.5 400 400">
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
                                    id="WebdutTeam13R65Path-2"
                                    d="M -101,-207.5 L -100,-268.5 L -66,-159.5 L -8.40202641655759,-140.9501767125175 L 49.92143807182174,-158.84915685309412 L -43.237144395601796,-92.83038291218963 L -43.08032203044261,-32.31924417177636 L -8.03443863497671,17.618577737387938 L -99.6096089436045,-50.579576071537254 L -157.11066097518238,-31.731458919483842 L -193.77457835939822,17.030792485095475 L -157.21256366826685,-91.13675847971784 L -192.9069905778174,-139.9991201962223 L -250.6124210774468,-159.80021336938927 L -136.4406829925269,-158.45328253655518 L -101,-207.5 Z"
                                    fill="rgba(0, 0, 0, 0)"
                                    fill-rule="evenodd"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    stroke-dasharray="none"
                                    stroke-linecap="butt"
                                    stroke-linejoin="miter"
                                    stroke-miterlimit="4"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 0 0)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-3"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 433 174)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-14"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 281 282)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-15"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 339 457)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-16"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 526 458)"
                                />

                                <rect
                                    id="WebdutTeam13R65Rect-17"
                                    x="-541"
                                    y="-451.5"
                                    width="20"
                                    height="20"
                                    rx="0"
                                    ry="0"
                                    fill="rgba(255, 0, 0, 1)"
                                    stroke="currentColor"
                                    stroke-width="0"
                                    stroke-dasharray="none"
                                    opacity="1"
                                    filter="none"
                                    mask="none"
                                    transform="matrix(1 0 0 1 583 283)"
                                />
                            </g>
                        </g>
                    </Icon>
                </Graphic>
                <Text>Select vertices on circle</Text>
            </Item>
            <!-- <div class="infoButton">
                {#if showMirrorMode}
                    <div class="infoPanel">
                        <h3 style="padding-top:0">Mirror mode</h3>
                        <p>Create and edit path in mirror mode.</p>
                        <h4>Method: Create Path</h4>
                        <ol>
                            <li>Click on this button to set mirror mode.</li>
                            <li>Start creating path using pen tool above.</li>
                            <li>
                                The first vertex is taken as a reference point. The
                                mirror passes through this point vertically.
                            </li>
                            <li>For each new node, its mirror is added to the path.</li>
                        </ol>
                        <h4>Method: Edit path in mirror mode</h4>
                        <ol>
                            <li>Select the path and set node mode on.</li>
                            <li>Click on this button set mirror mode on.</li>
                            <li>Click on a vertex to set it as the reference point.</li>
                            <li>
                                Mirror of a vertex is a vertex at the same node count
                                distance from the reference vertex.
                            </li>
                            <li>
                                Move any vertex or its control point. The mirror vertex
                                or control point will respond accordingly.
                            </li>
                        </ol>
                    </div>
                {/if}
            </div> -->
            <!-- <div class="infoButton">
                {#if showCircleMode}
                    <div class="infoPanel">
                        <h3 style="padding-top:0">Spread vertices on a circle</h3>
                        <p>Spread vertices of a path on a circle.</p>
                        <h4>Method</h4>
                        <ol>
                            <li>Select a path and activate node mode.</li>
                            <li>Click on this button to select vertices</li>
                            <li>Order of selection of vertices is important.</li>
                            <li>To exit, click on this button again.</li>
                        </ol>
                    </div>
                {/if}
            </div> -->
                <!-- <div class="infoButton">
                    {#if showTakeVerticesMode}
                        <div class="infoPanel">
                            <h3 style="padding-top:0">Select Vertices on a circle</h3>
                            <p>Select vertices on a circle.</p>
                            <h4>Method</h4>
                            <ol>
                                <li>Click on vertices to include in the list.</li>
                                <li>To exit, click on this button again.</li>
                            </ol>
                        </div>
                    {/if}
                </div> -->
        </List>
    </Paper>
    <!-- </MenuSurface> -->
</article>