<script>
    import Papers from "$lib/components/Papers.svelte";
    
    </script>
    <style>
        article {
            /* display: grid;
            grid-template-columns: 0.25fr 0.75fr;
            grid-template-areas:
            "header header"
            "aside main"
            "academic academic";
            padding: 1em;
            width: 1200px;
            margin: auto;
            background: white;
            font-family: 'Roboto', sans-serif; */
            max-width: 600px;
            margin: auto;
        }
        /* header {
            grid-area: header;
            display: grid;
            grid-template-columns: 200px 0.7fr;
            grid-template-areas: 
                "profile details";
            align-items: center;
            background: linear-gradient(45deg, white, rgba(41, 170, 230, 0.2), rgb(41, 170, 230));
            height: 200px;
        }
        aside {
            grid-area: aside;
            display: flex;
            gap: 1em;
            flex-direction: column;
            margin-top: 1em;
        } */
        /* .main {
            grid-area: main;
            padding: 1em;
            padding-top: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .academic {
            grid-area: academic;
        } */
        /* .profile {
            grid-area: profile;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .details {
            grid-area: details;
            display: flex;
            flex-direction: column;
            padding-left: 0.5em;
        } */
        /* .name {
            font-size: 3em;
            color: rgb(0, 147, 220);
            text-shadow: 1px 1px 2px #888;
            font-weight: 300;
        } */
        .intro {
            font-weight: 300;
            /* font-variant: small-caps; */
            /* letter-spacing: 0.5px; */
            color: black;
            /* text-shadow: 1px 1px 2px #888; */
        }
        h2, .symbol {
            color: rgb(0, 147, 220);
        }
        /* .about, .contact {
            background-color: rgba(136, 136, 136, 0.212);
            padding: 1em;
        }
        .dates {
            font-weight: 500;
        } */
        /* .degree {
            font-weight: 600;
        }
        .awardname {
            font-weight: 500;
        }
        .institute {
            font-weight: 400;
            font-size: 0.9em;
        }
        .description, .awarddescription {
            font-weight: 300;
            font-size: 0.8em;
        } */
        /* td {
            padding-right: 2em;
            padding-bottom: 1em;
        } */
        /* .symbol {
            padding-right: 0.5em;
        }
        .contactable td {
            padding-bottom: 0;
            padding-right: 0;
            font-size: 0.9em;
            letter-spacing: 0.02em;
        }
        ul li {
            margin-bottom: 0.5em;
        } */
        .title {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
        }
        .author {
            font-size: 3em;
        }
        .work tr, .education tr, .achievements tr {
            display: grid;
            grid-template-columns: 0.25fr 0.75fr;
        }
        .publications tr {
            font-size: 0.8em;
        }
        .date {
            max-width: 200px;
            display: flex;
            margin: auto;
            margin-top: 2em;
            margin-bottom: 2em;
            border-top: 1px solid;
            align-items: center;
            justify-content: center;
        }
        strong {
            font-weight: 600;
        }
    </style>
    <!-- <article>
        <header>
            <div class="profile">
                <img width="100%" src="/profilephoto.jpeg" alt="mithileshkumar">
            </div>
            <div class="details">
                <div class="name">Dr Mithilesh Kumar</div>
                <div class="intro">Open quantum systems</div>
            </div>
        </header>
        <aside>
            <section class="about">
                <h2>Profile (<a href="https://scholar.google.com/citations?user=VuXFVHEAAAAJ&hl=en">Google Scholar</a>)</h2>
                <p style="font-weight: 400;line-height: 1.45;font-size: 0.9em;">Hello, I'm Mithilesh Kumar. I'm passionate about anything related to Quantum Mechanics. Currently, I'm working actively in open quantum systems, quantum machine learning, quantum entanglement and quantum error correction.</p>
            </section>
            <div class="contact">
                <h2>Contact</h2>
                <table class="contactable" style="font-size: 0.9em">
                    <tr>
                        <td><span class="material-icons">home</span></td>
                        <td>Bangalore</td>
                    </tr>
                    <tr>
                        <td style="padding-right:0"><span class="material-icons">phone</span></td>
                        <td>8797081308</td>
                    </tr>
                    <tr>
                        <td style="padding-right:0"><span class="material-icons">email</span></td>
                        <td>info@drmithileshkumar.com</td>
                    </tr>
                    <tr>
                        <td style="padding-right:0"><span class="material-icons">link</span></td>
                        <td>www.drmithileshkumar.com</td>
                    </tr>
                </table>
            </div>
        </aside>
        <div class="main">
            <section>
                <section class="work">
                    <h2>Work</h2>
                    <table>
                        <tr>
                            <td class="dates">
                                2024 - 2024
                            </td>
                            <td>
                                <div class="edu">
                                    <div class="degree">Assistant Professor</div>
                                    <div class="institute">Dayananda Sagar University</div>
                                    <div class="description">Computer Applications</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="dates">
                                2020 - Present
                            </td>
                            <td>
                                <div class="edu">
                                    <div class="degree">Founder</div>
                                    <div class="institute">Self-employed</div>
                                    <div class="description">created <a href="https://drmithileshkumar.com/mathril">Mathril</a> and <a href="https://drmithileshkumar.com/vectorial">Vectorial</a></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="dates">
                                2017 - 2020
                            </td>
                            <td>
                                <div class="edu">
                                    <div class="degree">Post Doc Research</div>
                                    <div class="institute">Simula-UiB, Bergen, Norway</div>
                                    <div class="description">Quantum-safe cryptography</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </section>
                <section class="education">
                    <h2>Education</h2>
                    <table>
                        <tr>
                            <td class="dates">
                                2014 - 2017
                            </td>
                            <td>
                                <div class="edu">
                                    <div class="degree">PhD</div>
                                    <div class="institute">University of Bergen, Norway</div>
                                    <div class="description">Parameterized algorithms</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="dates">
                                2011 - 2013
                            </td>
                            <td>
                                <div class="edu">
                                    <div class="degree">Masters in Computer Science</div>
                                    <div class="institute">Chennai Mathematical Institute, Chennai</div>
                                    <div class="description">Theoretical Computer Science</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="dates">
                                2004 - 2010
                            </td>
                            <td>
                                <div class="edu">
                                    <div class="degree">Masters in Physics</div>
                                    <div class="institute">IIT Kanpur, Kanpur</div>
                                    <div class="description">MSc(I) Physics</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </section>
            </section>
            
            <section class="achievements">
                <h2>Achievements</h2>
                <table>
                    <tr>
                        <td class="symbol" style="color: goldenrod">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">Gold Medalist</div>
                                <div class="awarddescription">Academic excellence in masters degree in computer science, Chennai Mathematical Institute, Chennai</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="symbol">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">Merit-cum-means Scholarship</div>
                                <div class="awarddescription">Academic performance in IIT Kanpur</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="symbol" style="color: silver">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">Finalist in Carrom Competition</div>
                                <div class="awarddescription">Every year between 2004-2009 in Sports Event, IIT Kanpur</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="symbol">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">AIR 971</div>
                                <div class="awarddescription">IIT JEE Entrance Exam</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="symbol" style="color: silver">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">2nd Position Board X</div>
                                <div class="awarddescription">Class X result 94% (ranked 2nd in all Steel Plant Schools, Bokaro</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="symbol" style="color: goldenrod">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">Gold Medalist</div>
                                <div class="awarddescription">1st position in Class IX-X, BISSC 8B, Bokaro</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="symbol" style="color: goldenrod">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">Silver Medalist</div>
                                <div class="awarddescription">1st position in Class VII-VIII, BISSC 8B, Bokaro</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="symbol" style="color: goldenrod">
                            <span class="material-icons">military_tech</span>
                        </td>
                        <td>
                            <div class="award">
                                <div class="awardname">1st Rank</div>
                                <div class="awarddescription">Intercity English Essay Competition, Bokaro</div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>
        </div>
        <section class="academic">
            <section class="courses">
                <h2>Courses taught</h2>
                <ul>
                    <li>
                        <strong>Web development</strong>: HTML, CSS, JavaScript
                    </li>
                    <li>
                        <strong>Mathematics I</strong>: Logic, Sets, Combinatorics
                    </li>
                    <li>
                        <strong>Mathematics II</strong>: Probability and statistics
                    </li>
                    <li>
                        <strong>Discrete mathematical structures</strong>: Logic, Sets, Combinatorics
                    </li>
                    <li>
                        <strong>Quantum computing</strong>: Quantum algorithms
                    </li>
                </ul>
            </section>
            <section class="papers">
                <h2 style="margin-bottom: 0;">Research (Citations 104 H-index 4)</h2>
                <Papers />
            </section>
        </section>
    </article> -->
    <article>
        <section class="title">
            <section class="author">
                Mithilesh Kumar
            </section>
            <section class="email">
                admin@drmithileshkumar.com
            </section>
            <section class="page">
                drmithileshkumar.com
            </section>
            <section class="phone">
                +91 8797081308
            </section>
            <section class="location">
                Bangalore
            </section>
        </section>
        <section class="body">
            <section class="interests">
                <h2>Research Interests</h2>
                <p>Quantum Computing and Quantum Information, Algorithms, Discrete Mathematics</p>
            </section>
            <section class="work">
                <h2>Work Experience</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Jan 2024-Nov 2024</td>
                            <td>Assistant Professor, Department of Computer Applications, Dayananda Sagar University, Bangalore</td>
                        </tr>
                        <tr>
                            <td>Jul 2020-Dec 2023</td>
                            <td>Founder, Mathril, Vectorial</td>
                        </tr>
                        <tr>
                            <td>Jun 2017-Jun 2020</td>
                            <td>Post-doc research, Simula-UiB, Post-quantum cryptography (Advisor: Dr Havard Raddum)</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section class="education">
                <h2>Education</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Mar 2014-May 2017</td>
                            <td>Ph.D. Parameterized Algorithms, University of Bergen, Norway, (Advisors: Prof Daniel Lokshtanov, Prof Saket Saurabh)</td>
                        </tr>
                        <tr>
                            <td>Jul 2013-Feb 2014</td>
                            <td>Ph.D. Graph theory, Chennai Mathematical Institute, Chennai</td>
                        </tr>
                        <tr>
                            <td>Jul 2011-Jun 2013</td>
                            <td>M.Sc. Computer Science, Chennai Mathematical Institute, Chennai</td>
                        </tr>
                        <tr>
                            <td>Jul 2004-Dec 2009</td>
                            <td>M.Sc. Physics, IIT Kanpur</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section class="achievements">
                <h2>Achievements</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>2013</td>
                            <td>Gold medal for Academic Excellence (M.Sc.), Chennai Mathematical Institute</td>
                        </tr>
                        <tr>
                            <td>2004-2009</td>
                            <td>Merit-cub-means scholarship for academic performance (M.Sc.), IIT Kanpur</td>
                        </tr>
                        <tr>
                            <td>2004</td>
                            <td>IIT JEE All India Rank 971</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section class="publications">
                <h2>Publications</h2>
                <section class="ids">
                    <span>Google Scholar</span>
                    <span>Citations: 104</span>
                    <span>h-index: 4</span>
                </section>
                <section class="journals">
                    <h3>Journal Articles</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>J1.</td>
                                <td>Eiben, E., <strong>Kumar, Mithilesh</strong>, Mouawad, A. E., Panolan, F. & Siebertz, S. Lossy Kernels for Connected Dominating Set on Sparse Graphs. SIAM Journal on Discrete Mathematics 33,1743–1771 (2019).</td>
                            </tr>
                            <tr>
                                <td>J2.</td>
                                <td><strong>Kumar, Mithilesh</strong>, Varadarajan, S. & Raddum, H. Reducing Lattice Enumeration Search
                                    Trees. Infocommunications Journal XI, 8–16. issn: 2061-2079 (2019).</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section class="conferences">
                    <h3>Peer-reviewed Conference Proceedings</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>C1.</td>
                                <td><strong>Kumar, Mithilesh</strong>, Varadarajan, S. & Raddum, H. Graphs and Self-dual additive codes over
                                    GF(4) in 11th International Workshop on Coding and Cryptography (2019). https://www.lebesgue.fr/en/content/sem2019-WCC.</td>
                            </tr>
                            <tr>
                                <td>C2.</td>
                                <td><strong>Kumar, Mithilesh</strong> & Lokshtanov, D. A 2lk Kernel for l-Component Order Connectivity in
                                    11th International Symposium on Parameterized and Exact Computation (IPEC 2016) 63 (2017),
                                    20:1-20:14. isbn: 978-3-95977-023-1.</td>
                            </tr>
                            <tr>
                                <td>C3.</td>
                                <td><strong>Kumar, Mithilesh</strong> & Lokshtanov, D. Faster Exact and Parameterized Algorithm for Feedback
                                    Vertex Set in Bipartite Tournaments in 36th IARCS Annual Conference on Foundations of Soft-
                                    ware Technology and Theoretical Computer Science (FSTTCS 2016) 65 (2016), 24:1–24:15.isbn: 978-3-95977-027-9.</td>
                            </tr>
                            <tr>
                                <td>C4.</td>
                                <td><strong>Kumar, Mithilesh</strong> & Lokshtanov, D. Faster Exact and Parameterized Algorithm for Feedback
                                    Vertex Set in Tournaments in 33rd Symposium on Theoretical Aspects of Computer Science
                                    (STACS 2016) 47 (2016), 49:1–49:13. isbn: 978-3-95977-001-9.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section class="submitted">
                    <h3>Submitted</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>JS1.</td>
                                <td><strong>Kumar, Mithilesh</strong>. Local Operations in Multiparty Quantum Systems ArXiv[Preprint]. Nov 2024. https://arxiv.org/abs/2411.10710. <em>Submitted to Quantum Science and Technology</em></td>
                            </tr>
                            <tr>
                                <td>JS2.</td>
                                <td><strong>Kumar, Mithilesh</strong>. On properties of Schmidt Decomposition ArXiv[Preprint]. Nov 2024. https://arxiv.org/abs/2411.05703. <em>Submitted to Quantum Science and Technology</em></td>
                            </tr>
                            <tr>
                                <td>JS3.</td>
                                <td><strong>Kumar, Mithilesh</strong>. Schmidt Decomposition of Multipartite states ArXiv[Preprint]. Nov 2024. https://arxiv.org/abs/2411.02473. <em>Submitted to Quantum Science and Technology</em></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section class="preprints">
                    <h3>Preprints</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>P1.</td>
                                <td>Gupta, K., <strong>Kumar, Mithilesh</strong> & Raddum, H. Obtuse Lattice Bases ArXiv[Preprint]. Sep 2020.
                                    https://arxiv.org/abs/2009.00384.</td>
                            </tr>
                            <tr>
                                <td>P2.</td>
                                <td>Kumar, A. & <strong>Kumar, Mithilesh</strong>. Deletion to Induced Matching ArXiv[Preprint]. Aug 2020.
                                    https://arxiv.org/abs/2008.09660.</td>
                            </tr>
                            <tr>
                                <td>P3.</td>
                                <td><strong>Kumar, Mithilesh</strong>. 2-CLUB is NP-hard for distance to 2-club cluster graphs ArXiv[Preprint].
                                    Mar 2019. https://arxiv.org/abs/1903.05425.</td>
                            </tr>
                            <tr>
                                <td>P4.</td>
                                <td><strong>Kumar, Mithilesh</strong>. A guide to Quantum Channels Researchgate[Preprint]. Dec 2024. http://dx.doi.org/10.13140/RG.2.2.30460.45446.</td>
                            </tr>
                            <tr>
                                <td>P5.</td>
                                <td><strong>Kumar, Mithilesh</strong>. Faster Lattice Enumeration ArXiv[Preprint]. Dec 2019. https://arxiv.org/abs/1912.01781.</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
            <section class="teaching">
                <h2>Teaching</h2>
                <section class="institute">
                    <h3>Dayananda Sagar University</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Jul 2024-Nov 2024</td>
                                <td>Instructor, Discrete Mathematical Structures (CODE 23CA2303)</td>
                            </tr>
                            <tr>
                                <td>Jul 2024-Nov 2024</td>
                                <td>Instructor, Mathematics I (CODE 24CA1101)</td>
                            </tr>
                            <tr>
                                <td>Feb 2024-Jun 2024</td>
                                <td>Instructor, Mathematics II (CODE 22CA1201)</td>
                            </tr>
                            <tr>
                                <td>Feb 2024-Jun 2024</td>
                                <td>Instructor, Internet Technologies (CODE 22CA2402)</td>
                            </tr>
                            <tr>
                                <td>Feb 2024-Jun 2024</td>
                                <td>Instructor, Internet Technologies Lab (CODE 22CA2405)</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
            <section class="software">
                <h2>Tools & Software</h2>
                <ul>
                    <li>Web editor: Developed online platform for practicing HTML, CSS, JavaScript for the course Internet Technologies</li>
                    <li>Mathril: Developed Mathematics practice platform for school students where problems are automatically generated</li>
                    <li>Vectorial: Developed SVG drawing tool with LaTex Support for researchers</li>
                </ul>
            </section>
            <section class="hobby">
                <h2>Hobbies & Extra-curricular</h2>
                <ul>
                    <li>Mathematics problem solving</li>
                    <li>Carrom (Finalist in IIT Kanpur and CMI every year)</li>
                    <li>Cricket (Member of my school team)</li>
                </ul>
            </section>
            <section class="references"></section>
        </section>
        <section class="date">Last updated: Feb 1, 2025</section>
    </article>