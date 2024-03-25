<script lang='ts'>
    //@ts-nocheck
    import {page} from '$app/stores';
    import { typeset } from "$lib/shared/typeset";
    import Card, { Content, Actions } from "@smui/card";
    import { currentPath } from "$lib/stores";
    import { darkMode, navList } from "$lib/stores"
    import { contents, contentNav } from "$lib/pages/courses/mathematics2/content";
    import Pathlist from "$lib/components/Pathlist.svelte";
	import CourseNavigation from "$lib/components/CourseNavigation.svelte";
    $navList = contents;
    $darkMode = false;
    $currentPath = "Assignment 1";
</script>
<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
    p, li {
        opacity: 0.8;
    }
    h2, h3, h4, h5 {
        margin: 0.5em 0;
    }
    h5 {
        font-size: 1.1em;
    }
    h6 {
        font-size: 1em;
        margin: 0.5em 0;
        color: rgba(0, 150, 200, 1);
    }
    strong {
        color: rgb(159, 116, 7);
        opacity: 1;
    }
    a {
        cursor: pointer;
    }
    .question {
        cursor: pointer;
        padding: 0.3em;
    }
    .image {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ol li::marker {
        font-size: 1.2em;
        color: red;
        font-weight: bold;
    }
    ol li {
        padding: 0.5em 0;
    }
</style>
<svelte:head>
    <title>Mathematics II</title>
    <link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/assignment" />
    <meta name="description" content="Courses Taught by Dr Mithilesh Kumar" />
</svelte:head>
<article use:typeset>
    <Pathlist origin ={$page.url.origin} pathname={$page.url.pathname} />
    <CourseNavigation {contentNav} currentUrl={$page.url.pathname} />
    <h4>
        Assignment 1
    </h4>
    
    <Card>
        <Content>
            <ol>
                <li>A fair six-sided die is rolled. What is the probability of rolling a 3?</li>
                <li>Two fair coins are flipped. What is the probability of getting exactly one head?</li>
                <li>A bag contains 4 red balls and 6 blue balls. If one ball is drawn at random, what is the probability of getting a blue ball?</li>
                <li>A deck of cards is shuffled and one card is drawn. What is the probability of drawing a heart?</li>
                <li>A spinner is divided into 8 equal sections numbered 1 through 8. What is the probability of spinning a number greater than 5?</li>
                <li>A family has three children. What is the probability that they are all boys?</li>
                <li>If two dice are rolled, what is the probability that the sum of the numbers rolled is 7?</li>
                <li>A box contains 10 marbles: 4 red, 3 green, and 3 blue. If one marble is drawn at random, what is the probability of drawing a green marble?</li>
                <li>An urn contains 5 white balls and 3 black balls. If two balls are drawn without replacement, what is the probability that both are white?</li>
                <li>If a fair coin is flipped three times, what is the probability of getting exactly two heads?</li>
                <li>In a lottery, there are 50 tickets, and only 5 of them are winning tickets. If you buy one ticket, what is the probability of winning?</li>
                <li>A bag contains 8 red balls and 5 green balls. If two balls are drawn with replacement, what is the probability that both are green?</li>
                <li>A spinner has three equal sections colored red, blue, and green. If it is spun twice, what is the probability of getting red on the first spin and blue on the second spin?</li>
                <li>If you randomly choose a letter from the word "PROBABILITY", what is the probability that it is a vowel?</li>
                <li>A committee of 5 people is to be formed from a group of 10 men and 8 women. What is the probability that the committee consists of 3 men and 2 women?</li>
                <li>A box contains 6 red balls and 4 blue balls. If three balls are drawn without replacement, what is the probability that all three are blue?</li>
                <li>In a game, a fair six-sided die is rolled. If you win when you roll a 5 or a 6, what is the probability of winning?</li>
                <li>An experiment consists of spinning a spinner numbered 1 through 4 and then flipping a coin. What is the probability of spinning a 3 and flipping a head?</li>
                <li>If you roll a fair six-sided die and flip a fair coin, what is the probability of rolling a 3 and flipping tails?</li>
                <li>In a class, 60% of students like pizza and 40% like burgers. What is the probability that a randomly selected student likes both pizza and burgers?</li>
                <li>A bag contains 5 red marbles and 3 blue marbles. If two marbles are drawn with replacement, what is the probability that both are red?</li>
                <li>A box contains 5 green balls, 4 yellow balls, and 3 red balls. If two balls are drawn without replacement, what is the probability that both are red?</li>
                <li>A box contains 7 red balls and 5 black balls. If two balls are drawn with replacement, what is the probability that both are black?</li>
                <li>In a game, a fair six-sided die is rolled twice. What is the probability of rolling a 4 on the first roll and a 2 on the second roll?</li>
                <li>A jar contains 30 jelly beans: 12 red, 10 blue, and 8 green. If one jelly bean is drawn at random, what is the probability of drawing a blue or green jelly bean?</li>
                <li>A box contains 3 red balls, 4 blue balls, and 5 green balls. If two balls are drawn without replacement, what is the probability that both are blue?</li>
                <li>A box contains 10 marbles: 6 red and 4 blue. If three marbles are drawn without replacement, what is the probability that all three are red?</li>
                <li>An experiment consists of flipping a fair coin twice. What is the probability of getting heads on both flips?</li>
                <li>A box contains 5 red balls, 3 green balls, and 2 blue balls. If two balls are drawn without replacement, what is the probability that both are green?</li>
                <li>In a group of 50 people, 20 are women and 30 are men. If two people are randomly selected, what is the probability that both are men?</li>
                <li>A deck of cards is shuffled and one card is drawn. What is the probability of drawing a face card (jack, queen, or king)?</li>
                <li>A bag contains 8 white marbles and 4 black marbles. If two marbles are drawn without replacement, what is the probability that both are white?</li>
                <li>An experiment consists of rolling a fair six-sided die and flipping a fair coin. What is the probability of rolling a 3 and flipping tails?</li>
                <li>A box contains 7 red balls and 5 blue balls. If two balls are drawn without replacement, what is the probability that both are red?</li>
                <li>In a group of 40 students, 25 study math and 20 study science. What is the probability that a randomly selected student studies both math and science?</li>
                <li>A jar contains 40 marbles: 15 red, 10 blue, and 15 green. If one marble is drawn at random, what is the probability of drawing a red or blue marble?</li>
                <li>A box contains 6 red balls and 4 blue balls. If two balls are drawn without replacement, what is the probability that the first ball drawn is blue and the second ball drawn is red?</li>
                <li>An experiment consists of rolling two fair six-sided dice. What is the probability of rolling doubles?</li>
                <li>A box contains 9 green balls and 6 yellow balls. If two balls are drawn without replacement, what is the probability that both are yellow?</li>
                <li>In a group of 30 people, 15 are left-handed and 20 are women. If two people are randomly selected, what is the probability that both are left-handed women?</li>
                <li>A bag contains 10 red balls and 5 blue balls. If three balls are drawn without replacement, what is the probability that all three are blue?</li>
                <li>An experiment consists of flipping a fair coin three times. What is the probability of getting at least two heads?</li>
                <li>A box contains 8 red balls, 6 green balls, and 4 blue balls. If two balls are drawn without replacement, what is the probability that both are blue?</li>
                <li>In a group of 50 students, 30 are left-handed and 20 are female. What is the probability that a randomly selected student is both left-handed and female?</li>

            </ol>
        </Content>
    </Card>
    
</article>