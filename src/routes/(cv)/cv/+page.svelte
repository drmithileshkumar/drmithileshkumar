<script>
    import Papers from "$lib/components/Papers.svelte";
    
    </script>
    <style>
        article {
            display: grid;
            grid-template-columns: 0.25fr 0.75fr;
            grid-template-areas:
            "header header"
            "aside main"
            "papers papers";
            padding: 1em;
            width: 1200px;
            margin: auto;
            background: white;
            font-family: 'Roboto', sans-serif;
        }
        header {
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
        }
        .main {
            grid-area: main;
            padding: 1em;
            padding-top: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .papers {
            grid-area: papers;
        }
        .profile {
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
        }
        .name {
            font-size: 3em;
            color: rgb(0, 147, 220);
            text-shadow: 1px 1px 2px #888;
            font-weight: 300;
        }
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
        .about, .contact {
            background-color: rgba(136, 136, 136, 0.212);
            padding: 1em;
        }
        .dates {
            font-weight: 500;
        }
        .degree {
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
        }
        td {
            padding-right: 2em;
            padding-bottom: 1em;
        }
        .symbol {
            padding-right: 0.5em;
        }
        .contactable td {
            padding-bottom: 0;
            padding-right: 0;
            font-size: 0.9em;
            letter-spacing: 0.02em;
        }
    </style>
    <article>
        <header>
            <div class="profile">
                <img width="100%" src="/profilephoto.jpeg" alt="mithileshkumar">
            </div>
            <div class="details">
                <div class="name">Dr Mithilesh Kumar</div>
                <div class="intro">Ex-IITian, Gold Medalist, Scientist, Teacher, Web developer</div>
            </div>
        </header>
        <aside>
            <section class="about">
                <h2>Profile (<a href="https://scholar.google.com/citations?user=VuXFVHEAAAAJ&hl=en">Google Scholar</a>)</h2>
                <p style="font-weight: 400;line-height: 1.45;font-size: 0.9em;">Hello, I'm Mithilesh Kumar. I'm passionate about anything related to Quantum Mechanics. Currently, I'm working actively in quantum machine learning, quantum entanglement and quantum error correction. I have done research in quantum-safe cryptography (Post-Doc). My PhD involved studying parameterized algorithms. Prior to that I have masters in two fields, computer science (CMI) and physics (IIT Kanpur). In addition, I have founded two websites Mathril (Mathematics) and Vectorial (Graphics).</p>
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
                                    <div class="degree">Web development</div>
                                    <div class="institute">Self-taught</div>
                                    <div class="description">created websites mathril.com and vectorial.app</div>
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
        <section class="papers">
            <h2>Publications (Citations 101 H-index 4)</h2>
            <Papers />
        </section>
    </article>