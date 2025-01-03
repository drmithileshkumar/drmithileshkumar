<script lang="ts">
  //@ts-nocheck
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
    Actions,
    ActionButtons,
    ActionIcons,
  } from "@smui/card";
  import { currentPath } from "$lib/mathril/stores";
  $currentPath = "About";
  let title = "About Mathril | Online Math Practice Platform for All Ages";
  let description =
    "Mathril is an online mathematics practice platform designed for learners of all ages following the Indian education system. Enhance your understanding, accuracy, and speed with our extensive collection of template-based math problems.";
  let keywords =
    "Mathril, online math practice, Indian education system, mathematics, all ages, math problems, practice problems, understanding, accuracy, speed";
  let canonical = "https://drmithileshkumar.com/mathril/about";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <link rel="canonical" href={canonical} />
</svelte:head>

<main class="mdc-typography--body1">
  <!-- <Card>
    <Content>
      <div class="slide1">
        <img width="70px" src="favicon.png" alt="mathril.com">
        <div class="frame">
          <div class="title">MATHRIL.COM</div>
          <div class="subtitle">Unlimited Math Practice</div>
        </div>
      </div>
    </Content>
  </Card> -->
  <Card>
    <Content>
      <div class="slide">
        <img class="rounded" src="/mathril/about/questionStudent.png" alt="Question">
        <div class="frame">
          <div class="title">Why Do Students Struggle in Mathematics?</div>
          <p>In exams, students often either get the wrong answers or don't attempt many problems.</p>
        </div>
        
      </div>
    </Content>
  </Card>
  <Card>
    <Content>
      <div class="slide">
        <img class="rounded" src="/mathril/about/shakyFoundation.png" alt="Question">
        <div class="frame">
          <div class="title">Unsolidified Basic Concepts</div>
          <p>Many students miss essential concepts in earlier classes, leading to a shaky foundation. Without solid basics, progressing in math becomes a challenge.</p>
        </div>
        
      </div>
    </Content>
  </Card>
  <Card>
    <Content>
      <div class="slide">
        <img class="rounded" src="/mathril/about/book.png" alt="book">
        <div class="frame">
          <div class="title">Limitations Of Textbooks and Traditional Teaching</div>
          <p>Textbooks and traditional teaching methods have their limits - a finite set of problems doesn't always ensure comfort and clarity in every concept.</p>
        </div>
      </div>
    </Content>
  </Card>
  <Card>
    <Content>
      <div class="slide">
        <img class="rounded" src="/mathril/about/idea.png" alt="Idea">
        <div class="frame">
          <div class="title">How Can We Address This Issue?</div>
          <p>To overcome these challenges in learning mathematics, what could be a viable solution?</p>
        </div>
      </div>
    </Content>
  </Card>
  <Card>
    <Content>
      <div class="slide">
        <img class="rounded" src="/mathril/about/fountain.png" alt="Question">
        <div class="frame">
          <div class="title">Unlimited Practice for Mastery</div>
          <p>The key is an unlimited supply of problems at the same level of difficulty. Students should only move to the next topic after gaining complete comfort and understanding of a concept.</p>
        </div>
      </div>
    </Content>
  </Card>
  <Card>
    <Content>
      <div class="slide">
        <video class="video" width="100%" height="100%" autoplay preload loop muted playsinline>
          <source src="/mathril/landing/practice.mov" type="video/mp4">
              Your browser does not support the video type.
      </video>
        <div class="frame">
          <div class="title">Problem Apps</div>
          <p>Each 'Problem App' presents a question with 4 options, only one correct. After an attempt, a similar but new problem loads. For example, in addition problems, the numbers change each time. A timer tracks the time taken for each problem.</p>
        </div>
      </div>
    </Content>
  </Card>
  <Card>
    <Content>
      <h1 class="mdc-typography--headline4">Welcome to Mathril</h1>

      <p>
        The best way to solve most problems is to think mathematically. But
        thinking mathematically is exhausting. It's like lifting heavy weight.
        Mathril provides problem templates in mathematics. You practice on them
        daily. Slowly, the neurons in your brain become trained to think
        mathematically with ease. The problem templates are designed to be not
        too difficult. If you can solve easy problems fast enough, difficult
        problems can be taken care of with ease.
      </p>
      <p>
        The website is organized into classes that mirrors what is taught in
        schools starting at age 5. So class 1 corresponds to students of age
        around 5. As class number increases, problems become a little harder and
        cover more topics. The best way to use the templates is to start at
        class you feel ease with, then practice daily even on problems you can
        solve easily. The goal is not to test whether you can solve a problem,
        but to solve them fast.
      </p>
    </Content>
  </Card>
  <Card>
    <Content>
      <h1 class="mdc-typography--headline4">About the founder</h1>
      <p>
        Dr Mithilesh Kumar is a researcher and educationist with many publications in reputed conferences and journels. He has done research in post-quantum cryptography and advanced algorithms. He has keen interest in education, in particular mathematics.
      </p>
      <div class="centered">
        <img width="200" height="200" src="mithileshkumar.png" alt="" />
        <p style="font-weight: 600;">
          <a href="https://drmithileshkumar.com">Dr Mithilesh Kumar</a>, Founder
        </p>
      </div>
      <p>
        He has done <strong>PhD</strong> in computer science from University of Bergen, Norway and has double masters in Computer Science [<strong>Gold Medalist</strong>] from CMI, Chennai and masters (integrated) in Physics from <strong>IIT Kanpur</strong>. He secured <strong>AIR 971</strong> in IIT-JEE. To learn more, visit <a href="https://drmithileshkumar.com">drmithileshkumar.com</a>
      </p>
    </Content>
  </Card>
</main>

<style>
  main {
    display: flex;
    gap: 0.5em;
    flex-direction: column;
  }
  .centered {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
  .centered img {
    border-radius: 50%;
  }
  /* .slide1 {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
  .title {
    font-size: 2em;
    margin: 0.5em 0;
    line-height: 1.4;
  }
  /* .subtitle {
    font-size: 1.2em;
    margin: 0.5em 0;
  } */
  .slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.5em;
    flex-wrap: wrap;
  }
  .rounded {
    max-width: 40%;
    border-radius: 50%;
  }
  .frame {
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
  }
  .video {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid teal; */
        border-radius: 12px;
        background: #252228;
        overflow: hidden;
        box-shadow: 0 0 3px currentColor;
    }
</style>
