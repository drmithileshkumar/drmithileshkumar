import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { c as currentPath, d as darkMode, n as navList } from './stores2-MGSbm_Vc.js';
import { c as contentNav, a as contents } from './content3-ysJ_4DbC.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './index2-z1g76_ny.js';

const css = {
  code: "article.svelte-13cxe06.svelte-13cxe06{display:flex;flex-direction:column;gap:0.5em}li.svelte-13cxe06.svelte-13cxe06{opacity:0.8}h4.svelte-13cxe06.svelte-13cxe06{margin:0.5em 0}ol.svelte-13cxe06 li.svelte-13cxe06::marker{font-size:1.2em;color:red;font-weight:bold}ol.svelte-13cxe06 li.svelte-13cxe06{padding:0.5em 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPath, $$unsubscribe_currentPath;
  let $darkMode, $$unsubscribe_darkMode;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  set_store_value(currentPath, $currentPath = "Assignment 1", $currentPath);
  $$result.css.add(css);
  $$unsubscribe_currentPath();
  $$unsubscribe_darkMode();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-s6dmjx_START -->${$$result.title = `<title>Mathematics II</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/mathematics2/probabilitytheory/assignment"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar"><!-- HEAD_svelte-s6dmjx_END -->`, ""} <article class="svelte-13cxe06">${validate_component(Pathlist, "Pathlist").$$render(
    $$result,
    {
      origin: $page.url.origin,
      pathname: $page.url.pathname
    },
    {},
    {}
  )} ${validate_component(CourseNavigation, "CourseNavigation").$$render(
    $$result,
    {
      contentNav,
      currentUrl: $page.url.pathname
    },
    {},
    {}
  )} <h4 class="svelte-13cxe06" data-svelte-h="svelte-1wo8z9c">Assignment 1</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-13cxe06" data-svelte-h="svelte-cvrnl7"><li class="svelte-13cxe06">A fair six-sided die is rolled. What is the probability of rolling a 3?</li> <li class="svelte-13cxe06">Two fair coins are flipped. What is the probability of getting exactly one head?</li> <li class="svelte-13cxe06">A bag contains 4 red balls and 6 blue balls. If one ball is drawn at random, what is the probability of getting a blue ball?</li> <li class="svelte-13cxe06">A deck of cards is shuffled and one card is drawn. What is the probability of drawing a heart?</li> <li class="svelte-13cxe06">A spinner is divided into 8 equal sections numbered 1 through 8. What is the probability of spinning a number greater than 5?</li> <li class="svelte-13cxe06">A family has three children. What is the probability that they are all boys?</li> <li class="svelte-13cxe06">If two dice are rolled, what is the probability that the sum of the numbers rolled is 7?</li> <li class="svelte-13cxe06">A box contains 10 marbles: 4 red, 3 green, and 3 blue. If one marble is drawn at random, what is the probability of drawing a green marble?</li> <li class="svelte-13cxe06">An urn contains 5 white balls and 3 black balls. If two balls are drawn without replacement, what is the probability that both are white?</li> <li class="svelte-13cxe06">If a fair coin is flipped three times, what is the probability of getting exactly two heads?</li> <li class="svelte-13cxe06">In a lottery, there are 50 tickets, and only 5 of them are winning tickets. If you buy one ticket, what is the probability of winning?</li> <li class="svelte-13cxe06">A bag contains 8 red balls and 5 green balls. If two balls are drawn with replacement, what is the probability that both are green?</li> <li class="svelte-13cxe06">A spinner has three equal sections colored red, blue, and green. If it is spun twice, what is the probability of getting red on the first spin and blue on the second spin?</li> <li class="svelte-13cxe06">If you randomly choose a letter from the word &quot;PROBABILITY&quot;, what is the probability that it is a vowel?</li> <li class="svelte-13cxe06">A committee of 5 people is to be formed from a group of 10 men and 8 women. What is the probability that the committee consists of 3 men and 2 women?</li> <li class="svelte-13cxe06">A box contains 6 red balls and 4 blue balls. If three balls are drawn without replacement, what is the probability that all three are blue?</li> <li class="svelte-13cxe06">In a game, a fair six-sided die is rolled. If you win when you roll a 5 or a 6, what is the probability of winning?</li> <li class="svelte-13cxe06">An experiment consists of spinning a spinner numbered 1 through 4 and then flipping a coin. What is the probability of spinning a 3 and flipping a head?</li> <li class="svelte-13cxe06">If you roll a fair six-sided die and flip a fair coin, what is the probability of rolling a 3 and flipping tails?</li> <li class="svelte-13cxe06">In a class, 60% of students like pizza and 40% like burgers. What is the probability that a randomly selected student likes both pizza and burgers?</li> <li class="svelte-13cxe06">A bag contains 5 red marbles and 3 blue marbles. If two marbles are drawn with replacement, what is the probability that both are red?</li> <li class="svelte-13cxe06">A box contains 5 green balls, 4 yellow balls, and 3 red balls. If two balls are drawn without replacement, what is the probability that both are red?</li> <li class="svelte-13cxe06">A box contains 7 red balls and 5 black balls. If two balls are drawn with replacement, what is the probability that both are black?</li> <li class="svelte-13cxe06">In a game, a fair six-sided die is rolled twice. What is the probability of rolling a 4 on the first roll and a 2 on the second roll?</li> <li class="svelte-13cxe06">A jar contains 30 jelly beans: 12 red, 10 blue, and 8 green. If one jelly bean is drawn at random, what is the probability of drawing a blue or green jelly bean?</li> <li class="svelte-13cxe06">A box contains 3 red balls, 4 blue balls, and 5 green balls. If two balls are drawn without replacement, what is the probability that both are blue?</li> <li class="svelte-13cxe06">A box contains 10 marbles: 6 red and 4 blue. If three marbles are drawn without replacement, what is the probability that all three are red?</li> <li class="svelte-13cxe06">An experiment consists of flipping a fair coin twice. What is the probability of getting heads on both flips?</li> <li class="svelte-13cxe06">A box contains 5 red balls, 3 green balls, and 2 blue balls. If two balls are drawn without replacement, what is the probability that both are green?</li> <li class="svelte-13cxe06">In a group of 50 people, 20 are women and 30 are men. If two people are randomly selected, what is the probability that both are men?</li> <li class="svelte-13cxe06">A deck of cards is shuffled and one card is drawn. What is the probability of drawing a face card (jack, queen, or king)?</li> <li class="svelte-13cxe06">A bag contains 8 white marbles and 4 black marbles. If two marbles are drawn without replacement, what is the probability that both are white?</li> <li class="svelte-13cxe06">An experiment consists of rolling a fair six-sided die and flipping a fair coin. What is the probability of rolling a 3 and flipping tails?</li> <li class="svelte-13cxe06">A box contains 7 red balls and 5 blue balls. If two balls are drawn without replacement, what is the probability that both are red?</li> <li class="svelte-13cxe06">In a group of 40 students, 25 study math and 20 study science. What is the probability that a randomly selected student studies both math and science?</li> <li class="svelte-13cxe06">A jar contains 40 marbles: 15 red, 10 blue, and 15 green. If one marble is drawn at random, what is the probability of drawing a red or blue marble?</li> <li class="svelte-13cxe06">A box contains 6 red balls and 4 blue balls. If two balls are drawn without replacement, what is the probability that the first ball drawn is blue and the second ball drawn is red?</li> <li class="svelte-13cxe06">An experiment consists of rolling two fair six-sided dice. What is the probability of rolling doubles?</li> <li class="svelte-13cxe06">A box contains 9 green balls and 6 yellow balls. If two balls are drawn without replacement, what is the probability that both are yellow?</li> <li class="svelte-13cxe06">In a group of 30 people, 15 are left-handed and 20 are women. If two people are randomly selected, what is the probability that both are left-handed women?</li> <li class="svelte-13cxe06">A bag contains 10 red balls and 5 blue balls. If three balls are drawn without replacement, what is the probability that all three are blue?</li> <li class="svelte-13cxe06">An experiment consists of flipping a fair coin three times. What is the probability of getting at least two heads?</li> <li class="svelte-13cxe06">A box contains 8 red balls, 6 green balls, and 4 blue balls. If two balls are drawn without replacement, what is the probability that both are blue?</li> <li class="svelte-13cxe06">In a group of 50 students, 30 are left-handed and 20 are female. What is the probability that a randomly selected student is both left-handed and female?</li></ol>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-OZTpsmlj.js.map
