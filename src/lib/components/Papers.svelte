<script>
    import Paper from './Paper.svelte';
    let W;
    $: classType = W <= 700 ? 'flex': 'grid'
</script>
<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .flex {
        display: flex;
        flex-direction: column;
    }
    p {
        margin: 0.2em;
    }
</style>
<div class="papers {classType}" bind:clientWidth="{W}">
    <Paper>
        <p slot="authors">
            Akash Kumar, Mithilesh Kumar
        </p>
        <p slot="title">
            Deletion to Induced Matching
        </p>
        <p slot="venue">
            CoRR abs/2008.09660 (2020)
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Kanav Gupta, Mithilesh Kumar, Håvard Raddum
        </p>
        <p slot="title">
            Obtuse Lattice Bases
        </p>
        <p slot="venue">
            CoRR abs/2009.00384 (2020)
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum
        </p>
        <p slot="title">
            Graphs and Self-dual additive codes over GF(4)
        </p>
        <p slot="venue">
            WCC, 2019
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar, Srimathi Varadarajan, Håvard Raddum
        </p>
        <p slot="title">
            Reducing Lattice Enumeration Search Trees
        </p>
        <p slot="venue">
            Infocommunications Journal, 2019
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar
        </p>
        <p slot="title">
            2-CLUB is NP-hard for distance to 2-club cluster graphs
        </p>
        <p slot="venue">
            CoRR abs/1903.05425 (2019)
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar
        </p>
        <p slot="title">
            Faster Lattice Enumeration
        </p>
        <p slot="venue">
            CoRR abs/1912.01781 (2019)
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>
        <p slot="title">
            Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>
        <p slot="venue">
            SIAM J. Discret. Math. 33(3): 1743-1771 (2019)
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>
        <p slot="title">
            Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>
        <p slot="venue">
            STACS 2018: 29:1-29:15
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Eduard Eiben, Mithilesh Kumar, Amer E. Mouawad, Fahad Panolan, Sebastian Siebertz
        </p>
        <p slot="title">
            Lossy Kernels for Connected Dominating Set on Sparse Graphs
        </p>
        <p slot="venue">
            CoRR abs/1706.09339 (2017)
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </p>
        <p slot="title">
            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Bipartite Tournaments
        </p>
        <p slot="venue">
            FSTTCS 2016: 24:1-24:15
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </p>
        <p slot="title">
            A 2lk Kernel for l-Component Order Connectivity
        </p>
        <p slot="venue">
            IPEC 2016: 20:1-20:14
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </p>
        <p slot="title">
            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
        </p>
        <p slot="venue">
            STACS 2016: 49:1-49:13
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </p>
        <p slot="title">
            A 2ℓk Kernel for ℓ-Component Order Connectivity
        </p>
        <p slot="venue">
            CoRR abs/1610.04711 (2016)
        </p>
    </Paper>
    <Paper>
        <p slot="authors">
            Mithilesh Kumar, Daniel Lokshtanov
        </p>
        <p slot="title">
            Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
        </p>
        <p slot="venue">
            CoRR abs/1510.07676 (2015)
        </p>
    </Paper>
</div>