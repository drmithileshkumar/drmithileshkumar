<script lang="ts">
	// @ts-nocheck
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import xml from 'svelte-highlight/languages/xml';
	import css from 'svelte-highlight/languages/css';
	import github from 'svelte-highlight/styles/github';
	import githubDark from 'svelte-highlight/styles/github-dark';

	import WebPractice from '$lib/pages/courses/internet/WebPractice.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Card, { Content, Actions } from '@smui/card';
	import DataTable, { Body, Head, Row, Cell } from '@smui/data-table';
	import Button, { Label } from '@smui/button';
	import Ripple from '@smui/ripple';
	import NavList from '$lib/components/NavList.svelte';
	import { currentPath } from '$lib/stores';
	import { darkMode, navList } from '$lib/stores';
	import { contents, contentNav } from '$lib/pages/research/content';
	import { typeset } from '$lib/shared/typeset';
	import Pathlist from '$lib/components/Pathlist.svelte';
	import CourseNavigation from '$lib/components/CourseNavigation.svelte';

	import Paper from '$lib/components/Paper.svelte';
	import P from '$lib/presentation/P.svelte';

	$navList = contents;
	$currentPath = 'Tournament';
	// $darkMode = false;

	let figure, W, H, tournament, n, vertices = [], edges, fvs = new Set(), neighbors = [];
	onMount(() => {
        vertices = []
		n = 7; // Number of vertices
        for(let i = 0; i < n; i++) {
            vertices = [...vertices, i];
            neighbors[i] = {in: [], out: []};
        }
		neighbors = generateTournament(n);
		// fvs = findFeedbackVertexSet(n, edges);
        // fvs = fvSet({V: vertices, E: edges}, []);
		drawTournament(n, neighbors, fvs);
	});

	function generateTournament(n) {
		let edges = [];
		for (let i = 0; i < n; i++) {
            //acyclic tournament
            let inFVS = false;
            if(i != n-1 && Math.random() < 0.3) {//mark vertices in fvs
                inFVS = true;
                fvs.add(i);
                //make [i, i+1] wrong
                if(i == n - 1) {
                    neighbors[i].out.push(0);
                    neighbors[0].in.push(i);
                } else {
                    neighbors[i].in.push(i + 1);
                    neighbors[i + 1].out.push(i);
                }
            }
            let start = inFVS ? i + 2 : i + 1;
            
            for(let j = start; j < n; j++) {
                if(inFVS) {
                    if (Math.random() < 0.5) {//wrong direction
                        neighbors[i].in.push(j);
                        neighbors[j].out.push(i);
                    } else {//right direction
                        neighbors[i].out.push(j);
                        neighbors[j].in.push(i);
                    }
                } else {//right direction
                    neighbors[i].out.push(j);
                    neighbors[j].in.push(i);
                }
            }
            
			// for (let j = i + 1; j < n; j++) {
			// 	if (Math.random() < 0.5) {
			// 		edges.push([i, j]); // i → j
            //         neighbors[i] = [...neighbors[i], j]
			// 	} else {
			// 		edges.push([j, i]); // j → i
            //         neighbors[j] = [...neighbors[j], i]
			// 	}
			// }
		}
		return neighbors;
	}
    function isTriangle(i,j,k) {
        let ij = neighbors[i].indexOf(j) != -1;
        let jk = neighbors[j].indexOf(k) != -1;
        let ki = neighbors[k].indexOf(i) != -1
        if( (ij && jk && ki) || (!ij && !jk && !ki) ) return true;
        else return false;
    }
    function removeVertex(G, u) {
        if(Object.keys(G).length == 0) return {}
        if(G.V.length == 0 || G.V.indexOf(u) == -1) return {
            V: G.V, E: G.E
        }
        let V = G.V.filter(v => v != u);
        let E = G.E.filter(e => e.indexOf(u) == -1)
        console.log(G, V,E)
        return {V, E}
    }
    // function fvSet(G, S) {
    //     if(Object.keys(G).length == 0) return S
    //     if(G.V.length == 0) return S;
    //     for(let i = 0; i < G.V.length - 2; i++) {
    //         for(let j = i + 1; j < G.V.length - 1; j++) {
    //             for(let k = j + 1; k < G.V.length; k++) {
    //                 if(isTriangle(i, j, k)) {
    //                     let Gi = removeVertex(G, i);
    //                     let Gj = removeVertex(G, j);
    //                     let Gk = removeVertex(G, k);
    //                     let Si = fvSet(Gi, S);
    //                     let Sj = fvSet(Gj, S);
    //                     let Sk = fvSet(Gk, S);
    //                     Si = [...Si, i];
    //                     Sj = [...Sj, j];
    //                     Sk = [...Sk, k];
    //                     let li = Si.length;
    //                     let lj = Sj.length;
    //                     let lk = Sk.length;
    //                     let min = Math.min(li, lj, lk);
    //                     return min == li ? Si : min == lj ? Sj : Sk;
    //                 }
    //             }
    //         }
    //     }
    // }
	// 2. Function to compute a Feedback Vertex Set (greedy heuristic)
	function findFeedbackVertexSet(n, edges) {
		let inDegree = Array(n).fill(0);
		let outDegree = Array(n).fill(0);

		// Count in-degrees and out-degrees
		edges.forEach(([u, v]) => {
			outDegree[u]++;
			inDegree[v]++;

		});

		let remaining = new Set([...Array(n).keys()]); // All vertices
		let fvs = new Set();

		while (remaining.size > 0) {
			// Find the vertex with the highest total degree
			let maxV = [...remaining].reduce((a, b) =>
				inDegree[a] + outDegree[a] > inDegree[b] + outDegree[b] ? a : b
			);

			fvs.add(maxV); // Add to FVS
			remaining.delete(maxV); // Remove from graph

			// Remove all edges connected to maxV
			edges = edges.filter(([u, v]) => u !== maxV && v !== maxV);
		}
		console.log(fvs);
		return fvs;
	}

	// 3. Function to draw the tournament with highlighted FVS
	function drawTournament(n, edges, fvs) {
		// const svg = document.getElementById("tournament-svg");
		tournament.innerHTML = ''; // Clear previous content

		// const width = W ;
		// const height = H ;
        const svgRect = tournament.getBoundingClientRect();
        const width = svgRect.width;
        const height = svgRect.height;

		const centerX = width / 2,
			centerY = height / 2;
		const radius = Math.min(width, height) * 0.35;

		// Compute positions of nodes in a circular layout
		let positions = Array.from({ length: n }, (_, i) => ({
			x: centerX + radius * Math.cos((2 * Math.PI * i) / n),
			y: centerY + radius * Math.sin((2 * Math.PI * i) / n)
		}));

		// Define arrow marker
		const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
		const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
		marker.setAttribute('id', 'arrow');
		marker.setAttribute('viewBox', '0 0 10 10');
		marker.setAttribute('refX', '10');
		marker.setAttribute('refY', '5');
		marker.setAttribute('markerWidth', '6');
		marker.setAttribute('markerHeight', '6');
		marker.setAttribute('orient', 'auto-start-reverse');
		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
		path.setAttribute('fill', 'currentColor');
		marker.appendChild(path);
		defs.appendChild(marker);
		tournament.appendChild(defs);

		// Draw edges
        let from, to;
        for(let i = 0; i < n; i++) {
            from = i;
            let ni = neighbors[i].out.length;
            for(let j = 0; j < ni; j++) {
                to = neighbors[i].out[j]
                const { x: x1, y: y1 } = positions[from];
                const { x: x2, y: y2 } = positions[to];
                const dx = x2 - x1,
                    dy = y2 - y1;
                const len = Math.sqrt(dx * dx + dy * dy);
                const offsetX = (dx / len) * 18,
                    offsetY = (dy / len) * 18;

                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('class', 'edge');
                line.setAttribute('x1', x1 + offsetX);
                line.setAttribute('y1', y1 + offsetY);
                line.setAttribute('x2', x2 - offsetX);
                line.setAttribute('y2', y2 - offsetY);
                line.setAttribute('marker-end', 'url(#arrow)');
                line.setAttribute('stroke', 'currentColor');
                tournament.appendChild(line);
            }
            
        }

		// edges.forEach(([from, to]) => {
			
		// });

		// Draw nodes
		positions.forEach(({ x, y }, i) => {
			const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			circle.setAttribute('class', `node ${fvs.has(i) ? 'fvs' : ''}`);
			circle.setAttribute('cx', x);
			circle.setAttribute('cy', y);
			circle.setAttribute('r', 15);
			circle.setAttribute('fill', `${fvs.has(i) ? 'tomato' : 'white'}`);
			circle.setAttribute('stroke', 'currentColor');
			tournament.appendChild(circle);

			const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			text.setAttribute('x', x);
			text.setAttribute('y', y + 5);
			text.setAttribute('text-anchor', 'middle');
			text.setAttribute('dy', '5');
			text.setAttribute('fill', 'currentColor');
			text.textContent = i;
			tournament.appendChild(text);
		});
	}
</script>

<svelte:head>
	<title>Tournaments</title>
	<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/css/layout" />
	<meta name="abstract" content="Courses Taught by Dr Mithilesh Kumar" />
	{#if $darkMode}
		{@html githubDark}
	{:else}
		{@html github}
	{/if}
</svelte:head>
<article use:typeset>
	<Pathlist origin={$page.url.origin} pathname={$page.url.pathname} />
	<CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
	<h4>Tournament</h4>
	<Paper>
		<span slot="authors"> Mithilesh Kumar, Daniel Lokshtanov </span>
		<span slot="title">
			Faster Exact and Parameterized Algorithm for Feedback Vertex Set in Tournaments
		</span>
		<span slot="venue">
			<a href="https://doi.org/10.4230/LIPIcs.STACS.2016.49">STACS 2016: 49:1-49:13</a>,
			<a href="https://doi.org/10.48550/arXiv.1510.07676">CoRR abs/1510.07676 (2015)</a>
		</span>
	</Paper>
	<Card style="background-color: rgba(0, 100, 100, 0.1">
		<Content>
			<h6>Topics</h6>
			<ol>
				<li><a href="#introduction">Introduction</a></li>
				<li><a href="#previous">Previous Work</a></li>
				<li><a href="#contributions">Contributions</a></li>
				<li><a href="#methods">Methodology</a></li>
				<li><a href="#significance">Significance</a></li>
				<li><a href="#conclusion">Conclusion</a></li>
			</ol>
		</Content>
	</Card>
	<!-- <Card>
        <Content>
            <h6 id="abstract">Abstract</h6>
            <ul>
                <li>
                    A <em>tournament</em> is a directed graph {`\\(T\\)`} such that every pair of vertices are connected by an arc.
                </li>
                <li>
                    A <em>feedback vertex set</em> is a set {`\\(S\\)`} of vertices in {`\\(T\\)`} such that {`\\(T-S\\)`} is acyclic.
                </li>
                <li>
                    In this article we consider the Feedback Vertex Set problem in tournaments.
                </li>
                <li>
                    Here input is a tournament {`\\(T\\)`} and integer {`\\(k\\)`}, and the task is to determine whether {`\\(T\\)`} has a feedback vertex set of size at most {`\\(k\\)`}.
                </li>
                <li>
                    We give a new algorithm for Feedback Vertex Set in Tournaments. The running time of our algorithm is upper bounded by {`\\(O(1.618^k + n^{O(1)})\\)`} and by {`\\(O(1.46^n)\\)`}.
                </li>
                <li>
                    Thus our algorithm simultaneously improves over the fastest known parameterized algorithm for the problem by Dom et al. running in time {`\\(O(2^kk^{O(1)} + n^{O(1)})\\)`}, and the fastest known exact exponential time algorithm by Gaspers and Mnich with running time {`\\(O(1.674^n)\\)`}.
                </li>
                <li>
                    On the way to prove our main result we prove a new partitioning theorem for undirected graphs.
                </li>
                <li>
                    In particular we show that the vertices of any undirected {`\\(m\\)`}-edge graph of maximum degree {`\\(d\\)`} can be colored white or black in such a way that for each of the two colors, the number of edges with both endpoints of that color is between {`\\(\\frac{m}{4}-\\frac{d}{2}\\)`} and {`\\(\\frac{m}{4}+\\frac{d}{2}\\)`}.
                </li>
            </ul>
        </Content>
    </Card> -->
	<Card>
		<Content>
			<h6 id="introduction">Introduction</h6>
			<figure
				bind:this={figure}
				bind:clientWidth={W}
                bind:clientHeight={H}
				style="position:relative; display:flex; align-item:center; justify-content: center;max-width: auto; height: 300px;"
			>
				<svg
					bind:this={tournament}
					id="tournament"
					width="100%"
                    height="100%"
					style="position:relative;"
				></svg>
			</figure>
			<ul>
				<li>
					<strong>Tournaments:</strong> A directed graph where every pair of vertices is connected by
					a single directed edge.
				</li>
				<li>
					<strong>Feedback Vertex Set (FVS):</strong> A set of vertices whose removal results in an acyclic
					graph.
				</li>
				<li>
					<strong>Problem Statement:</strong> Given a tournament {`\\( T \\)`} and an integer {`\\( k \\)`},
					determine if there exists a feedback vertex set of size at most {`\\( k \\)`}.
				</li>
			</ul>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="previous">Previous Work</h6>
			<ul>
				<li>
					<strong>Parameterized Algorithms:</strong> Dom et al. developed an algorithm with a
					running time of {`\\( O(2^k \\cdot k^{O(1)} + n^{O(1)}) \\)`}.
				</li>
				<li>
					<strong>Exact Exponential Time Algorithms:</strong> Gaspers and Mnich proposed an
					algorithm with a running time of {`\\( O(1.674^n) \\)`}.
				</li>
			</ul>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="contributions">Contributions</h6>
			<ul>
				<li>
					<strong>New Algorithm:</strong> Improved running times:
					<ul>
						<li><strong>Parameterized Running Time:</strong> {`\\( O(1.618^k + n^{O(1)}) \\)`}</li>
						<li><strong>Exact Exponential Running Time:</strong> {`\\( O(1.46^n) \\)`}</li>
					</ul>
				</li>
				<li>
					<strong>Partitioning Theorem:</strong> A novel theorem for undirected graphs states that
					vertices can be colored in two colors such that each color class has between {`\\( m/4 - d/2 \\)`}
					and {`\\( m/4 + d/2 \\)`} edges.
				</li>
			</ul>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="methods">Methodology</h6>
			<ul>
				<li><strong>Kernelization:</strong> Reduce the tournament size to {`\\( O(k^3) \\)`}.</li>
				<li>
					<strong>Set Selection:</strong> Identify a set {`\\( M \\)`} of vertices, disjoint from the
					solution {`\\( S \\)`}, that is evenly distributed in the topological ordering of {`\\( T - S \\)`}.
				</li>
				<li>
					<strong>Topological Ordering:</strong> Utilize {`\\( M \\)`} to infer a preliminary topological
					ordering of {`\\( T - S \\)`}, assigning tentative positions to vertices.
				</li>
				<li>
					<strong>Branching:</strong> Eventually the problem reduces to <em>hitting</em> a set of
					<em>conflicting</em> edges. The case when conflicting edges are disjoint are resolved using
					the new partition theorem. The case when conflict degree of a vertex is at least 2 leads to
					the bottleneck recurrence relation \[T(k) \leq T(k-1) + T(k-2)\] whose solution is \(1.618^k\).
				</li>
			</ul>
		</Content>
	</Card>
    <h5>High-level Outline</h5>
    <Card>
        <Content>
            <h6 id="observation">Some Observations</h6>
            <div class="media">
                <img src="/Research/TFVS/Topological.png" width="300px" alt="Topological sort of an acyclic tournament">
            </div>
            <ul>
                <li>A tournament is <em>acyclic</em> iff it does not contain any triangle.
                    <ul>
                        <li>
                            Pick a triangle and branch in 3 ways for the choice of the vertex to be deleted.
                        </li>
                        <li>
                            Runs in {`\\(3^k\\cdot n^{O(1)}\\)`}
                        </li>
                    </ul>
                </li>
                <li>An acyclic tournament has unique topological ordering of vertices.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="observation">Topological structure</h6>
            <div class="media">
                <img src="/Research/TFVS/TopologicalStructure.png" width="300px" alt="Topological structure">
            </div>
            <ul>
                <li>Let \(H\) be a solution of size at most \(k\)</li>
                <li>In the topological order of \(T-H\), guess a uniformly spaced set of vertices \(M\). Notice \(M\) is not deleted by the algorithm as it is not part of \(H\).</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="observation">Induced Order</h6>
            <div class="media">
                <img src="/Research/TFVS/InducedOrder.png" width="300px" alt="Induced order">
            </div>
            
            <ul>
                <li>Subgraph \(T[M]\) must be acyclic, otherwise wrong guess of \(M\): start over again.</li>
                <li>If a vertex in \(V-M\) forms a triangle with two vertices in \(M\), then it must be deleted, i.e. it belongs to \(H\).</li>
                <li>For each vertex in \(V-M\), there is a <em>unique place</em> in order of \(M\) such that every vertex in the first part is <em>in-neighbor</em> and every vertex in the second part is <em>out-neighbor</em>.</li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="observation">Partition into subtournaments</h6>
            <div class="media">
                <img src="/Research/TFVS/Subtournaments.png" width="300px" alt="Subtournaments">
            </div>
            
            <ul>
                <li>In between two vertices of \(M\), the placed vertices form subtournaments \(T_i\).</li>
                <li>The edges moving backwards form cycles, hence at least one of their endpoints must be deleted.</li>
                <li>Subtournaments \(T_i\) are small, so backward edges can be hit by brute force.</li>
                <li>The main concern is backward edges across vertices in different subtournaments. 
                    <ul>
                        <li>Make all such edges undirected and remove every other edge.</li>
                        <li>For vertices of degree at least 2, use branching leading to recurrence \[T(k)\leq T(k-1) + T(k-2)\]</li>
                        <li>For vertices of degree one, we can not use branching as it will lead to running time \(2^k\). For this, we need to use the partition theorem that allows branching on only half of the edges i.e. running time of {`\\(2^{\\frac{k}{2}}\\)`}</li>
                    </ul>
                </li>
            </ul>
        </Content>
    </Card>
    <Card>
        <Content>
            <h6 id="observation">Balanced Edge Partition theorem</h6>
            <div class="media">
                <img src="/Research/TFVS/BalancedPartition.png" width="300px" alt="Balanced Partition theorem">
            </div>
            
            <strong>Theorem</strong><br>
            <p>
                Given an undirected, multigraph \(G\) without self-loops and isolated vertices of maximum degree at most \(d\) and edges \(m\), there exists a partition \((A,B)\) of \(V(G)\) such that 
            </p>
            <ul>
                <li>{`\\(|E_A - \\frac{m}{4}|\\leq \\frac{d}{2}\\)`} and {`\\(|E_B - \\frac{m}{4}|\\leq \\frac{d}{2}\\)`}</li>
                <li>{`\\(|E_{AB} - \\frac{m}{2}|\\leq d\\)`}</li>
            </ul>
            <strong>Proof:</strong>(<em>sketch</em>)
            <p>We start with the following local search algorithm:</p>
            <ul>
                <li>At each step, the algorithm maintains a partition \((A,B)\) of \(V(G)\). Let \(m_A, m_B\) be the number of edges in \(A, B\) respectively.  </li>
                <li>As long as there exists a vertex \(v\in A\) (\(v\in B\)) such that moving it to other part decreases the measure \[\mu = |x| + |y|\] where {`\\(x = m_A - m/4\\)`} and {`\\(y = m_B - m/4\\)`}, the algorithm changes the partition to \(A\setminus v, B \cup v\) (or \(A\cup v, B\setminus v\)).</li>
                <li> The algorithm terminates if no vertex can be moved.</li> 
                <li>Since \(\mu\leq m\) and in each step, it decreases by at least one, above algorithm terminates in polynomial time.</li>
            </ul>
            <p>It remains to show that \(|x|\leq d/2\) and \(|y|\leq d/2\). For any vertex \(v\), let \(a_v, b_v\) denote the degrees in \(A,B\) respectively. Let \(\delta_A^v, \delta_B^v\) denote the change in measure \(\mu\) when \(v\) moves \(A\to B, B\to A\) respectively. At the end of the algorithm any move will make \(\delta_A^v\geq 0, \delta_B^v\geq 0\). Every choice other than \(|x|\leq d/2\) and \(|y|\leq d/2\), leads to a contradiction of the above conditions. </p>
        </Content>
    </Card>
	<Card>
		<Content>
			<h6 id="significance">Significance</h6>
			<ul>
				<li>
					<strong>Efficiency:</strong> Outperforms previous algorithms in both parameterized and exact
					exponential time contexts. The parameterized algorithm remains to be the best even now.
				</li>
				<li>
					<strong>Theoretical Impact:</strong> The partitioning theorem may have broader applications
					in graph theory and algorithm design.
				</li>
			</ul>
		</Content>
	</Card>
	<Card>
		<Content>
			<h6 id="conclusion">Conclusion</h6>
			<p>
				This work advances the study of the Feedback Vertex Set problem in tournaments by providing
				a more efficient algorithm and introducing a useful graph partitioning theorem.
			</p>
		</Content>
	</Card>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
        max-width: 750px;
        width: 90%;
        margin: auto;
	}
	p,
	li {
		opacity: 0.8;
	}
	h4 {
		margin: 0.5em 0;
	}
	h6 {
		font-size: 1em;
		margin: 0.5em 0;
		color: rgb(74, 155, 139);
	}
	strong {
		color: goldenrod;
		opacity: 1;
	}
	a {
		cursor: pointer;
		text-decoration: none;
	}
	#svg {
		background-color: white;
	}
	.node {
		fill: lightblue;
		stroke: black;
		stroke-width: 2px;
	}
	.edge {
		stroke: black;
		stroke-width: 1.5px;
		marker-end: url(#arrow);
	}
    .media {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
