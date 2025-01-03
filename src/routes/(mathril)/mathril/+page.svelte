<script lang='ts'>
    //@ts-nocheck
    import Card, {
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
        ActionButtons,
        ActionIcons,} from '@smui/card';
    import Button, { Label } from '@smui/button';
    import Chip, { Set, Text } from '@smui/chips';
    
    
    import {onMount, onDestroy} from 'svelte';
    import { ripple } from "$lib/ui/ripple";
    import { goto } from "$app/navigation";
    
    
    import { classes, chapters, topics } from "$lib/mathril/pages/practice/stores";
    
    
    import ControlPanel from '$lib/mathril/pages/landing/ControlPanel.svelte';
    import Video from '$lib/mathril/pages/landing/Video.svelte';
    import Theway from '$lib/mathril/pages/landing/Theway.svelte';
    
    import { currentPath } from "$lib/stores.js";
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import IconButton, { Icon } from '@smui/icon-button';
    
    let panel1Open = false;
    let panel2Open = false;
    let panel3Open = false;
    let panel4Open = false;
    let panel5Open = false;
    
    
    $currentPath = "Mathril";
    
    let W;
    import Performance from "$lib/mathril/utils/practiceproblem/Performance.svelte";
    import Timer from "$lib/mathril/utils/practiceproblem/Timer.svelte";
    import Problem from '$lib/mathril/pages/landing/Problem.svelte';
    import NewWay from '$lib/mathril/pages/landing/NewWay.svelte';
    import Challenge from '$lib/mathril/pages/landing/Challenge.svelte';
    import Stats from '$lib/mathril/pages/landing/Stats.svelte';
    
    const taglines = ['TRAIN YOUR BRAIN', 'Geniuses are not born, they are made.', 'They thought your kid has not got it.', 'Practice! Practice! Practice!'];
    let currentTagline = taglines[0];
    let tagTimer, tagIndex = 0;
    
    
    onDestroy(() => clearInterval(tagTimer));
    
    const selecteChapter = (i) => {
        goto(`/mathril/class${i}`);
    };
   
    let keywords = "Indian National Mathematics Olympiad (INMO), Joint Entrance Examination (JEE), National Eligibility cum Entrance Test (NEET), Common Admission Test (CAT), Graduate Aptitude Test in Engineering (GATE), Indian Statistical Service Examination (ISS), Staff Selection Commission (SSC) Combined Graduate Level (CGL) Examination, Railway Recruitment Board (RRB) exams (e.g., RRB NTPC, RRB JE), State Public Service Commission (PSC) exams (vary by state), Shapes, Patterns, Counting, Time, Addition, Subtraction, Lines, Multiplication, Division, Fractions, Weight, Perimeter, LCM, Length, Volume, Angles, Area, Numbers, Basic Geometry, Elementary Shapes, Integers, Decimals, Data handling, Mensuration, Algebra, Ratio and Proportion, Symmetry, Practical Geometry, Fraction and Decimals, Simple Equations, Lines and Angles, Triangle, Comparing Quantities, Rational Numbers, Perimeter and Area, Algebraic Expressions, Exponents and Powers, Solids, Linear Equations, Quadrilaterals, Squares and Square Roots, Cube and Cube Roots, Powers, Direct and Indirect Proportions, Factorization, Graph, Playing with numbers, Number systems, Polynomials, Coordinate Geometry, Linear Equations in Two Variables, Triangles, Areas of Parallelograms and Triangles, Circles, Heron Formula, Surface areas and volumes, Statistics, Probability, Real Numbers, Quadratic Equations, Arithmetic Progressions, Trigonometry, Areas related to Circles, Sets, Relations and functions 11, Trigonometric functions, Principle of mathematical induction, Complex numbers, Quadratic equations, Linear inequalities, Permutations and combinations, Binomial theorem, Sequences and series, Straight lines, Circle, Ellipse, Parabola, Hyperbola, Indroduction to 3D geometry, Limits, Derivatives, Mathematical reasoning, Relations and functions 12, Inverse trigonometric functions, Matrices, Determinants, Continuity, Differentiability, Application of derivatives, Indefinite Integrals, Definite Integrals, Application of integrals, Differential equations, Vector algebra, Three dimensional geometry, Linear programming";
    let title = "Mathril: Unlimited Math Practice for All Ages | Improve Your Skills";
    let description = "A Gym for Brain. Mathematics starting at Class 1 to Class 12. Relevant to CBSE, state board, IIT, NIT, Olympiad, GATE, JAM. Best of revolutionary problem template idea, students can practice and improve their skill on any topic.";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://drmithileshkumar.com" />
    <meta name="description" content={description} />
    <meta name="keywords" content="{keywords}">
</svelte:head>
<article class="container">
    <Video />
    <Card>
        <Content style="display:flex;align-items:end;height:180px;">
            <div class="missQuestion">
                <h1 class="mdc-typography--headline4" style="text-align:center;margin:1em 0">Never <strong style="color:tomato;">miss</strong> a question in exam</h1>
                <div class="student">
                    <img class='studentImg' width="300px" src="/mathril/landing/student.png" alt="student" />
                </div>
            </div>
        </Content>
    </Card>


    <Theway />
    
    <Card>
        <Content>
            <NewWay />
        </Content>
        <Actions style="justify-content:center">
            <Button on:click={() => goto('/mathril')}>Start Now</Button>
        </Actions>
    </Card>
    <ControlPanel />
    <Stats />
    <Card>
        <Media style="height:200px; position:relative;">
            <svg class="SVG Vectorial svelte-10rmvey" width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g class="Vectorial" transform="translate(0 0) scale(1)"><defs><linearGradient id="LinearGradient-VectorialApp-0" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="objectBoundingBox" spreadMethod="pad"><stop offset="0%" stop-color="rgba(0, 0, 0, 0)"></stop><stop offset="100%" stop-color="currentcolor"></stop></linearGradient></defs><g id="Layer-VectorialApp70R1-0" class="draggable" fill="none" stroke="none" stroke-width="0" stroke-dasharray="none" vector-effect="none" opacity="1" filter="none" mask="none" transform="matrix(1 0 0 1 0 0)">      <path id="Path-VectorialApp70R1-2" class="draggable" d="M 60.33,494.34 C 52.87,476.38 48.24,440.24 52.37,403.21 C 55.19,377.96 47.75,344.00 59.75,310.09 C 74.61,268.05 175.66,257.41 191.66,227.01 C 192.53,207.47 168.46,196.21 168.66,177.34 C 157.80,164.34 141.19,138.67 158.99,99.67 C 168.79999496936816,80.74371707607162 169.533307935795,32.110359760810184 257.999992311001,21.677062342254487 C 277.79999172091505,21.210390603232675 301.19999102354075,19.810375386167344 331.99999010562925,67.67706097134766 C 347.7333026250212,79.14374764133245 353.5999894618991,88.21031231253411 353.99998944997816,138.34368484188064 C 361.5999892234805,154.1437331991275 353.7333024462073,162.21038334934758 353.33330245812823,166.6770580209178 C 353.06663986841914,169.27705794343177 354.9333390315372,175.0770577705784 351.9999895095828,185.01037046282386 C 350.9999895393851,187.94370777774733 353.27716738581375,197.9791028182854 350.3333635826896,200.34380506444563 C 342.2000508368,206.87714227208076 340.4666646579902,198.21040669052587 337.9999899268153,197.67705709704592 C 337.79998993277576,202.6770569480343 339.19998989105255,216.34374355245404 336.99998995661764,222.67705635198786 C 340.7999898433688,228.4770561791344 348.866737649836,238.54374289084248 355.3333023985236,253.01036843626594 C 362.2249693684289,256.5020339816203 378.67499024048476,260.81867814008365 392.45832418029534,267.8020092307923 C 406.2416581201059,274.78534032150094 420.34167601043947,284.3520026340484 424.24997209757646,287.9270238898092 C 458.77167773972855,319.5049362854434 462.5332381685603,365.0104261335606 445.33323868116025,495.67710925110856M 191.66665078202922,227.50528039022447 C 193.26665073434552,233.93860539380893 195.09999418556708,242.60520669802406 200.9999940097334,254.33853154365625 C 206.8999938338997,266.0718563892884 218.19999349713345,275.53853091184703 222.49999336898347,280.83853075389476 C 230.19999313950558,284.6385306406459 241.96661876539534,299.37184318984026 261.6666181782896,301.838530128046 C 277.0666421333956,297.30516844674446 327.26665284435,279.03851860050804 336.66667697826995,223.17184546077715 C 336.93333956797903,217.8051830230599 337.7333273371063,201.70519570990814 337.9999899268154,196.3385332721909 C 338.39998991489443,191.13853342716297 338.73330289324224,181.03853372816644 338.6666769186653,170.33853404705127 C 338.59676957454377,159.11155291007267 333.2480957864351,153.92003092416638 322.9999903738501,141.50522191806965 C 322.2016618453961,136.6260525993689 320.2083476958171,128.8093993899405 320.34172171527973,117.10937532456589 C 320.45096003067385,107.52661757218209 313.8534170197795,97.75446085460877 309.66667778293254,99.0051926670911 C 295.83284597124947,103.13786311934322 286.59999145865464,98.33853619281838 281.4999916106465,98.83853617791722 C 277.0499917432668,101.17184909666038 269.699991962314,106.17187946522594 261.2499922141436,107.17187943542362 C 256.39999235868487,107.5052107243177 247.94999261051439,109.20520457013832 236.9999929368498,108.83853587989402 C 226.0499932631852,108.47186718964973 217.20298034250283,103.93216286751303 209.1666807780659,105.33853598420215 C 203.83336794872977,106.27187946224572 200.39999402761478,111.67184878373597 198.99999406933804,118.17184859002087 C 197.5999941110613,124.67184839630578 201.09999400675318,131.03854132179794 199.49999405443688,137.17187854135398 C 197.8999941021206,143.30521576091002 198.13336811860296,139.53857768957084 191.6666812996065,150.171908671501 C 188.09530189990534,156.0444149922822 190.5999943196775,165.90519677683125 190.49999432265773,170.33853404705127 C 190.19999433159842,177.73853382651407 191.76665077904906,207.27184593463403 191.66665078202928,212.67184577370148 C 191.55937357869996,218.4648147534836 179.13330764969265,198.671846190934 177.33330770333683,196.67184625053864M 223.66668034593224,238.83853200559224 C 232.20005411505537,220.43853255395487 240.3555450015601,218.23850210194286 246.5555448167857,214.5051587073458 C 247.15554479890432,217.70515861197836 232.06658854286107,220.9719370790739 238.66658834616575,231.83856273178571 C 246.63327512045873,231.40518872126376 252.66671610275756,238.0385320294341 258.5000533312543,237.33853205029573 C 264.3333905597511,236.63853207115736 262.633335678776,235.1719061383037 267.83333552380395,233.6719061830072 C 273.0333353688319,232.17190622771068 273.0576219251337,233.11934137684028 276.4999917596581,231.5051276831291 C 282.3999488592164,228.73848958198758 283.76661104345385,217.75379010220297 276.83333525558305,216.33859371129887 C 270.0949574128766,214.96317921816288 272.03336591621144,214.53850221221145 267.6666790346301,215.83850217346844 C 267.63342708249604,205.6385024774521 263.199992156029,184.7052206306094 266.4999920576813,173.83853394274314 C 267.1999920368197,171.33853401724895 268.3999920010569,164.27184721613384 271.99999189376854,160.67184732342218 C 275.5999917864802,157.07184743071053 280.13330463965815,156.87188405776368 285.83330446978493,154.50522153063946 C 291.5333042999117,152.13855900351524 292.57752149460407,148.90541137384022 300.49999104440235,148.83853468780114 C 308.399990808964,148.77184767806983 319.9666774759686,154.8385345089872 322.66667739550235,160.83853433017327 C 318.8666775087512,160.50519693776374 311.09999072849774,157.03851613287577 304.9999909102919,157.1718474277303 C 298.89999109208605,157.30517872258486 295.79999118447324,159.03852217678656 293.4999912530186,159.50519086405063 C 291.19999132156397,159.9718595513147 284.29999152719995,161.37186561310688 281.9999915957453,161.83853430037095 C 279.96665425399976,164.63853421692446 269.19995535612236,169.7052210776442 267.1666180143768,172.5052209941977M 278.9999916851523,175.8385338831385 C 280.99999162554764,173.93853393976292 284.4999915212395,168.53853410069544 288.99999138712906,166.33853416626056 C 293.4999912530186,164.13853423182567 296.8999911516907,163.93853423778614 301.4999910146,164.83853421096404 C 306.09999087750936,165.73853418414194 309.8999907642605,169.6385340679129 311.99999070167564,170.8385340321501 C 310.3333159466589,172.57185917580549 308.66661677758043,177.77183460677165 303.66661692659204,179.50515975042703 C 298.66661707560365,181.2384848940824 291.93331649502164,180.23848492388473 286.9999914467337,179.50515975042703 C 282.06666639844576,178.77183457696933 280.5999916374686,176.5718590565962 278.9999916851523,175.8385338831385 ZM 290.3333043356745,166.1719081946639 C 288.6333043863384,168.3719081290988 288.98947312883496,173.89230795955578 291.49999131262325,175.17187740886578 C 296.6666171352083,177.8052208362454 300.4666780571139,175.53853389207922 302.16667800644996,173.3385339576443 C 303.86667795578603,171.1385340232094 303.16667797664763,166.13853417222097 300.66667805115344,164.83853421096399 C 298.16667812565925,163.538534249707 292.03330428501056,163.971908260229 290.3333043356745,166.1719081946639 ZM 243.37774339781964,178.73333207567538 C 241.53774345265592,177.2933321185907 237.25776392526137,172.70664524356582 232.17776407665718,170.8666452984021 C 227.097764228053,169.02664535323837 221.6577643901776,167.00001943707403 215.97776455945478,168.20001940131124 C 210.29776472873198,169.40001936554845 200.88442150341209,174.60001921057636 201.77776498264774,176.20001916289266 C 210.68445172892655,176.3333626647781 212.48439064012794,179.64001906037265 217.64439048634796,180.20001904368337 C 222.80439033256798,180.7600190269941 226.96445124374475,179.56001906275688 232.2444510863885,179.0000190794462 C 237.52445092903224,178.4400190961355 241.01774346815313,179.05333206613864 243.37774339781964,178.73333207567538 ZM 216.97776452965246,169.1333323617776 C 213.71107761528856,172.09333227356274 215.89018509098392,173.08607629580393 216.24442104564844,174.99998868107824 C 216.82370041117085,178.1297950646712 222.84445136653028,177.9600191104406 225.44445128904425,177.00001913905083 C 228.04445121155823,176.04001916766106 228.80439015375404,172.70670627872025 227.24439020024568,170.86670633355652 C 225.6843902467373,169.0267063883928 219.03159775200072,167.2723195630791 216.97776452965246,169.1333323617776 ZM 229.86668016115783,258.4666426877188 C 239.8933058389036,255.37332979162545 244.31999271869682,250.20007799267538 249.99999254941963,249.00007802843817 C 255.67999238014244,247.80007806420096 257.79999231696155,251.42667951861978 261.5999922037127,251.13332991798728 C 265.39999209046385,250.8399803173548 265.90661805192775,249.0533299799761 268.9999919831755,248.86664297382106 C 274.76945999099075,248.51845205561162 287.45336545665964,251.00001693367906 291.7333653291057,252.20001689791627 C 288.7733654173206,252.68001688361116 281.63999160647415,254.3867038444667 275.5999917864802,255.26670381824067 C 269.5599919664862,256.14670379201465 266.07999207019833,258.173329708179 260.19999224543596,257.9333297153315 C 254.3199924206736,257.69332972248407 252.26667949358583,256.8933297463259 246.86667965451835,256.7333297510943 C 241.46667981545087,256.5733297558627 232.4666800836718,257.98670373717823 229.86668016115783,258.4667037228731 C 229.06668018499968,259.54670369068657 235.6000173926348,262.4000043869017 237.86667992273925,264.53332951863615 C 240.1333424528437,266.6666546503706 244.26846824130394,266.0596176882647 251.1999619960796,267.1332989235729 C 257.99996179342384,268.186611880463 257.1466488305733,267.89335993607756 264.8666486004994,267.13335995872734 C 272.58664837042545,266.3733599813771 274.4399918210509,267.6799554014219 279.79999166131046,263.99995551109447 C 285.15999150157,260.319955620767 289.95999135851883,254.5867038385062 291.9999912977221,252.06670391360808M 192.1110986040702,165.22223933868884 C 193.71109855638647,163.15557273361364 193.1777652389477,156.48892661068055 202.11109830604696,155.55559330516272 C 211.0444313731462,154.62225999964488 224.54067049568744,160.04017240437253 235.4444306459696,161.00001046061476 C 241.51692119526552,161.53456069329158 246.77776364154326,164.68890602125003 247.77776361174094,167.22223927908416 C 248.77776358193861,169.7555725369183 247.1110969649425,172.3555928044837 239.77776385015952,171.8889261517248 C 232.44443073537653,171.4222594989659 217.2444311883718,166.55557263228573 211.11109803782605,164.8889060152896 C 207.31109815107487,164.95557267996944 201.2444113201575,159.15557285282287 192.1110986040702,165.22223933868884 Z" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0.66668701171875 -0.66668701171875)"></path>          <path id="Path-VectorialApp70R1-3" class="draggable" d="M 202.99999395012875,258.8385314095458 C 187.76668141583562,304.9051560132159 210.7333067079393,430.4385262954674 246.83330563207548,475.838524942442 C 288.76661737064666,426.6719004311591 335.23336403270486,291.1719044693738 336.49998997151886,223.33853246752824" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path>          <path id="Path-VectorialApp70R1-4" class="draggable" d="M 195.99999415874495,234.17178409779717 C 182.59999455809606,257.3717834063833 116.40005756616421,292.9719044157295 107.66668380300152,330.83852926377864 C 113.9666836152469,333.23852919225305 122.19999635815631,345.771902842167 134.49999599158775,346.83852878694154 C 132.033309053382,357.2385284769974 119.29999644458303,372.4385280240021 115.49999655783185,378.8385278332672 C 135.8333394577104,425.6719004609614 211.49993266165455,478.8386469233439 243.83330572148245,499.0052722988941 C 286.9333044370024,484.1718987175256 364.23330213328296,415.00527480228914 385.9999884963039,378.8385278332672 C 381.9999886155132,372.23852802996254 377.9999887347225,352.43852862004854 375.9999887943271,345.83852881674386 C 381.59998862743413,342.43852891807177 397.73330113490516,338.90521603509137 403.9999879598621,328.8385293233833 C 400.0666750888027,310.17184286797516 374.26667585770264,280.8385307538948 370.3333019514888,256.1718444773005M 205.3333679040263,257.8385314393481 C 204.8666809062159,297.1052172808284 216.7999935388567,323.57184246862397 244.9999926984312,372.1718410202312 C 303.59999095201516,341.2384679186801 328.0666772345699,297.1052172808284 337.9999899268154,222.8385324824294" fill="rgba(0, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="2" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 -2 0.66668701171875)"></path>          <path id="Path-VectorialApp70R1-5" class="draggable" d="M 299.99999105930357,231.6770560837669 C 294.19999123215706,223.7437433319168 283.13333506782845,212.27708717950918 269.99999195337324,213.0104306635132" fill="rgba(255, 0, 0, 0)" fill-rule="evenodd" stroke="currentcolor" stroke-width="1" stroke-dasharray="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" vector-effect="none" opacity="1" filter="none" mask="none" marker-start="none" marker-mid="none" marker-end="none" transform="matrix(1 0 0 1 0 0)"></path>    </g></g></svg>
            
        </Media>
        <Content>
            
            <h1 class="mdc-typography--headline6" style="margin:0em 0 0 0; text-align:center; font-weight:300;">Master mathematics with Complete Workout for</h1>
            <div style="display:flex;align-items:center;justify-content:center;">
                <Set chips={['All ages', 'All grades', 'All chapters']} let:chip nonInteractive>
                    <Chip {chip}>
                        <Text>{chip}</Text>
                    </Chip>
                </Set>
            </div>
        </Content>
        <Actions style="justify-content:center">
            <Button on:click={() => goto('/mathril')}>Start your journey now</Button>
        </Actions>
    </Card>
    <Card>
        <Content>
            <h1 class="mdc-typography--headline4" style="text-align:center; margin:1em 0 1em 0;">Select Workout Class</h1>
            <section class="classes">
                {#each classes as myclass, i}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class="myclass"
                        use:ripple
                        on:click={() => selecteChapter(i + 1)}
                    >
                        <span>
                            <svg width="100" height="100" viewBox="-50 -50 100 100">
                                <circle cx='0' cy='0' r='44' stroke='currentColor' stroke-width='2' fill='none' />
                                {#each [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12] as j}
                                    <text text-anchor="middle" x={35 * Math.cos(Math.PI/6 * j - Math.PI/2)} y={35 * Math.sin(Math.PI/6 * j - Math.PI/2)} fill="rgba(0, 175, 255, 1)" font-size="14" transform="translate(0 4)">{j}</text>
                                {/each}
                                <!-- <line x1='0' y1='0' x2='0' y2='-40' stroke="white" stroke-width="2" fill="none" /> -->
                                <line x1='0' y1='0' x2='{25 * Math.cos(Math.PI/6 * (i + 1) - Math.PI/2)}' y2='{25 * Math.sin(Math.PI/6 * (i + 1) - Math.PI/2)}' stroke-linecap="round" stroke="red" stroke-width="4" fill="none" />
                            </svg>
                        </span>
                        <!-- <span>{i + 1}</span> -->
                    </div>
                {/each}
            </section>
        </Content>
    </Card>
    <Accordion>
        <Panel bind:open={panel1Open}>
            <Header>
                What is Mathril?
                <IconButton slot="icon" toggle pressed={panel1Open}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                </IconButton>
            </Header>
            <Content>
                <p style="font-weight: 300;">Mathril is a platform for learning and practicing mathematics for students of Class 1 to Class 12 where practice problems are <strong style="color:green;">generated automatically</strong> for repeated practice, i.e. each problem is an app. The content is based on CBSE syllabus. It is suitable for preparing for various mathematics-based competitive examinations.</p>
            </Content>
        </Panel>
        <Panel bind:open={panel2Open}>
            <Header>
                Another <strong style="color:tomato;">burden</strong> on students?
                <IconButton slot="icon" toggle pressed={panel2Open}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                </IconButton>
            </Header>
            <Content>
                <p style="font-weight: 300;"><strong style="color:tomato;">Absolutely not!</strong> Mathril application is built to only generate problems within the prescribed syllabus by NCERT, which forms the basis of most of the examinations. So the student can follow regular school, tuition or coaching and use Mathril chapter-wise. If you need further assistance, please contact us using your preferred method ( shown below or to the side of the page).</p>
            </Content>
        </Panel>
        <Panel bind:open={panel3Open}>
            <Header>
                Why should I use Mathril?
                <IconButton slot="icon" toggle pressed={panel3Open}>
                    <Icon class="material-icons" on>expand_less</Icon>
                    <Icon class="material-icons">expand_more</Icon>
                </IconButton>
            </Header>
            <Content>
                <div style="font-weight: 300;">
                    <h5 class="mdc-typography--headline6" style="color:goldenrod; margin:0.5em 0;">Access to all classes</h5> 
                    <p>With one subscription, you get access to all classes providing freedom in adjusting according to your preferred level of practice. Mathril's web-based application is accessible on any device.</p>
                </div>
                <div style="font-weight: 300;">
                    <h5 class="mdc-typography--headline6" style="color:goldenrod; margin:0.5em 0;">Multiple-choice questions</h5> 
                    <p>Most competitive examinations ask multiple-choice questions. Practicing in this format improves performance in these examinations.</p>
                </div>
                <div style="font-weight: 300;">
                    <h5 class="mdc-typography--headline6" style="color:goldenrod; margin:0.5em 0;">Unlimited practice</h5> 
                    <p>The problems are automatically generated and you get unlimited number of problems to practice.</p>
                </div>
            </Content>
        </Panel>
    </Accordion>
    
</article>

<style>
    article {
        display:flex;
        flex-direction:column;
        gap:0.5em;
    }
    .classes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: auto;
        gap: 1em;
        padding: 0.5em;
        align-items: center;
        justify-content: center;
        /* background: radial-gradient(rgb(35 100 120), black); */
    }
    .myclass {
        width: 100px;
        height: 100px;
        /* border: 1px solid rgba(0, 175, 255, 1); */
        padding: 0.3em 0.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .missQuestion {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items:end;
        overflow-x:hidden;
        height: 300px;
        width: 100%;
    }
    .student {
        position: relative;
        /* border-radius: 10%; */
        margin: 0.5em;
        /* overflow-x:hidden; */
    }
    .studentImg {
        position: absolute;
        bottom:0;
        border-radius: 10%;
    }
    
    
</style>
