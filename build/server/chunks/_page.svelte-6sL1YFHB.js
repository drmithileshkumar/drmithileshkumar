import { a as subscribe, e as set_store_value } from './utils-TYqgk8Fj.js';
import { c as create_ssr_component, v as validate_component } from './ssr-HSn4Y_Gl.js';
import { x as xml$1 } from './xml-5zmk9_qe.js';
import { g as githubDark$1, a as github$1, c as contentNav, b as contents } from './content4-c6jVnu0x.js';
import { p as page } from './stores-J1hWMOsb.js';
import { C as Card } from './Card-w5WL3--T.js';
import { C as Content } from './ActionIcons-o14w9cnK.js';
import { N as NavList } from './NavList-dME8fp5s.js';
import { d as darkMode, c as currentPath, n as navList } from './stores2-MGSbm_Vc.js';
import { P as Pathlist } from './Pathlist-Rliv_14E.js';
import { C as CourseNavigation } from './CourseNavigation-NZQ5ttW5.js';
import { H as Highlight$1, L as LineNumbers$1 } from './LineNumbers-OqX36GRB.js';
import './client-_MkdHwD5.js';
import './exports-mq_1S73-.js';
import './classAdderBuilder-_WD_ZDF6.js';
import './Item-20QUQFRc.js';
import './Ripple-IoYaH5-z.js';
import './Subheader-nJdHlnFA.js';
import './Graphic-XmKV_FS_.js';
import './IconButton-EupF56OB.js';
import './index2-z1g76_ny.js';
import './_commonjsHelpers-YxXKG0rd.js';

const css$1 = {
  code: "article.svelte-tm9bxc.svelte-tm9bxc{display:flex;flex-direction:column;gap:0.5em}li.svelte-tm9bxc.svelte-tm9bxc{opacity:0.8}h4.svelte-tm9bxc.svelte-tm9bxc,h5.svelte-tm9bxc.svelte-tm9bxc{margin:0.5em 0}h5.svelte-tm9bxc.svelte-tm9bxc{font-size:1.7em}ol.svelte-tm9bxc li.svelte-tm9bxc::marker{font-size:1.2em;color:red;font-weight:bold}ol.svelte-tm9bxc li.svelte-tm9bxc{padding:0.5em 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  let $currentPath, $$unsubscribe_currentPath;
  let $navList, $$unsubscribe_navList;
  let $page, $$unsubscribe_page;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$unsubscribe_currentPath = subscribe(currentPath, (value) => $currentPath = value);
  $$unsubscribe_navList = subscribe(navList, (value) => $navList = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Practice Problems", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1idnyi_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/javascript/practice"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark$1}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-1idnyi_END -->`, ""} <article class="svelte-tm9bxc">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-tm9bxc" data-svelte-h="svelte-1cd8yhl">Practice Problems</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h5 class="svelte-tm9bxc" data-svelte-h="svelte-vrhswa">Contents</h5> ${validate_component(NavList, "NavList").$$render(
            $$result,
            {
              name: $navList[0].topics[2].name,
              url: $navList[0].topics[2].url,
              topics: $navList[0].topics[2].topics,
              expanded: false
            },
            {},
            {}
          )}`;
        }
      })}`;
    }
  })} <h5 class="svelte-tm9bxc" data-svelte-h="svelte-1sgnce7">Variables</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-tm9bxc" data-svelte-h="svelte-2tv7fa"><li class="svelte-tm9bxc">Describe the three parts of javascript.</li> <li class="svelte-tm9bxc">Describe two ways to include javascript inside html.</li> <li class="svelte-tm9bxc">When should we include javascript at the end of the body tag?</li> <li class="svelte-tm9bxc">Which of the following are not a valid identifier?
                    <ul><li class="svelte-tm9bxc">sum</li> <li class="svelte-tm9bxc">1sum</li> <li class="svelte-tm9bxc">$sum</li> <li class="svelte-tm9bxc">_sum</li> <li class="svelte-tm9bxc">43</li> <li class="svelte-tm9bxc">total sum</li></ul></li> <li class="svelte-tm9bxc">What are three ways in which a variable can be declared in javascript?</li> <li class="svelte-tm9bxc">What are values of a boolean variable?</li> <li class="svelte-tm9bxc">Show three ways to write a string in javascript.</li> <li class="svelte-tm9bxc">Show two ways to create an array in javascript.</li> <li class="svelte-tm9bxc">Create a javascript object to represent a mobile phone which is described by keys <code>name, brand, year, os</code> and <code>price</code>. Use appropriate values for the keys.</li></ol>`;
        }
      })}`;
    }
  })}  <h5 class="svelte-tm9bxc" data-svelte-h="svelte-1id0inj">Expressions</h5> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-tm9bxc"><li class="svelte-tm9bxc" data-svelte-h="svelte-3dhf6n">Write the javascript expression for the following: 
                    <ul><li class="svelte-tm9bxc">sum of 12 and 13</li> <li class="svelte-tm9bxc">difference of 13 and 12</li> <li class="svelte-tm9bxc">product of 12 and 13</li> <li class="svelte-tm9bxc">divide 12 by 13</li> <li class="svelte-tm9bxc">calculate 12<sup>13</sup></li></ul></li> <li class="svelte-tm9bxc" data-svelte-h="svelte-jvj2d0">Calculate the value of the following expressions:
                    <ul><li class="svelte-tm9bxc">5/2 - 1</li> <li class="svelte-tm9bxc">2 - 1.49</li> <li class="svelte-tm9bxc">2 / 2 - 1</li> <li class="svelte-tm9bxc">6 * 3 / 2 + 2</li></ul></li> <li class="svelte-tm9bxc" data-svelte-h="svelte-1fx7138">What is the value of the following Boolean expressions?
                    <ul><li class="svelte-tm9bxc">2 &lt; 4</li> <li class="svelte-tm9bxc">2 &gt;= 2</li> <li class="svelte-tm9bxc">(2 &lt; 2) || (2 == 2)</li> <li class="svelte-tm9bxc">(2 &lt; 2) &amp;&amp; (2 == 2)</li> <li class="svelte-tm9bxc">0 == &#39;0&#39;</li> <li class="svelte-tm9bxc">0 === &#39;0&#39;</li> <li class="svelte-tm9bxc">0 != &#39;0&#39;</li> <li class="svelte-tm9bxc">0 !== &#39;0&#39;</li></ul></li> <li class="svelte-tm9bxc" data-svelte-h="svelte-1t5q14u"><ul><li class="svelte-tm9bxc">If <code>str1 = &#39;Client&#39;</code> and <code>st2 = &#39;Side&#39;</code>, what is the value of <code>str1 + str2</code> ?</li> <li class="svelte-tm9bxc">Consider a variable <code>let sum = 12</code> and a string <code>let str = &quot;The sum is 12&quot;</code>. Write the string using string literal that uses <code>str</code> as a variable inside the string literal.</li> <li class="svelte-tm9bxc">What is the length of the string <code>&quot;Hello World!&quot;</code> ?</li></ul></li> <li class="svelte-tm9bxc" data-svelte-h="svelte-1t5q14u"><ul><li class="svelte-tm9bxc">If <code>str1 = &#39;Client&#39;</code> and <code>st2 = &#39;Side&#39;</code>, what is the value of <code>str1 + str2</code> ?</li> <li class="svelte-tm9bxc">Consider a variable <code>let sum = 12</code> and a string <code>let str = &quot;The sum is 12&quot;</code>. Write the string using string literal that uses <code>str</code> as a variable inside the string literal.</li> <li class="svelte-tm9bxc">What is the length of the string <code>&quot;Hello World!&quot;</code> ?</li></ul></li> <li class="svelte-tm9bxc" data-svelte-h="svelte-10mngll"><ul><li class="svelte-tm9bxc">Write an array that contains first 10 prime numbers</li> <li class="svelte-tm9bxc">Increase the 5th number on the array by 1</li> <li class="svelte-tm9bxc">Remove the last element of the array</li> <li class="svelte-tm9bxc">Add a new prime larger than any prime (in the given array) to the above array.</li></ul></li> <li class="svelte-tm9bxc" data-svelte-h="svelte-88fywi">Given arrays <code>let arr1 = [1, 2]</code> and <code>let arr2 = [4, 7]</code>. Write a javascript code outputs <code>[1, 2, 4, 7]</code>.</li> <li class="svelte-tm9bxc">What is the output of the following code?
                ${validate_component(Highlight$1, "Highlight").$$render(
            $$result,
            {
              language: xml$1,
              code: `let myPhone = {
    name: 'iPhone',
    company: 'Apple',
    date: '2023',
    price: 100000,
    color: 'blue'
}
let { name, company } = myPhone;
console.log(name, company);
console.log(Object.keys(myPhone))`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers$1, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}</li></ol>`;
        }
      })}`;
    }
  })} <h4 class="svelte-tm9bxc" data-svelte-h="svelte-1gx9gmk">Conditional Statements</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-tm9bxc" data-svelte-h="svelte-pmvxc2"><li class="svelte-tm9bxc">Write a JavaScript program that checks if a number is even or odd using if-else statements.</li> <li class="svelte-tm9bxc">Create a function that determines whether a given year is a leap year using if-else statements.</li> <li class="svelte-tm9bxc">Implement a JavaScript function that calculates the grade of a student based on their score using if-else statements.</li> <li class="svelte-tm9bxc">Write a program that determines the type of a triangle (equilateral, isosceles, or scalene) based on the lengths of its sides using if-else statements.</li> <li class="svelte-tm9bxc">Develop a JavaScript function that converts a numerical grade into a letter grade (A, B, C, D, F) using if-else statements.</li> <li class="svelte-tm9bxc">Implement a switch statement in JavaScript to determine the name of the day based on its number representation (1 for Monday, 2 for Tuesday, etc.).</li> <li class="svelte-tm9bxc">Write a program that categorizes a given month into seasons (spring, summer, autumn, winter) using switch statements.</li> <li class="svelte-tm9bxc">Create a function that determines the discount percentage based on the total purchase amount using a switch statement (e.g., 0-100: no discount, 101-500: 10% discount, etc.).</li> <li class="svelte-tm9bxc">Write a JavaScript program that converts a given month number into its corresponding name (e.g., 1 for January) using a switch statement.</li> <li class="svelte-tm9bxc">Implement a function that calculates the area of a shape (circle, square, triangle) based on user input and using a switch statement to determine the shape type.</li></ol>`;
        }
      })}`;
    }
  })} <h4 class="svelte-tm9bxc" data-svelte-h="svelte-q1ltn7">Loops</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-tm9bxc" data-svelte-h="svelte-1xibm3o"><li class="svelte-tm9bxc">Write a JavaScript program that prints numbers from 1 to 10 using a for loop.</li> <li class="svelte-tm9bxc">Create a function that calculates the factorial of a given number using a for loop.</li> <li class="svelte-tm9bxc">Implement a JavaScript function to find the sum of all numbers between 1 and 100 using a while loop.</li> <li class="svelte-tm9bxc">Write a program that prints the multiplication table of a given number using a for loop.</li> <li class="svelte-tm9bxc">Develop a function that checks if a given number is prime using a for loop.</li> <li class="svelte-tm9bxc">Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.</li> <li class="svelte-tm9bxc">Implement a function to find the largest element in an array using a for loop.</li> <li class="svelte-tm9bxc">Write a program that counts the number of vowels in a given string using a for loop.</li> <li class="svelte-tm9bxc">Create a JavaScript function that calculates the sum of digits of a given number using a while loop.</li> <li class="svelte-tm9bxc">Implement a program that checks if a given string is a palindrome using a for loop.</li></ol>`;
        }
      })}`;
    }
  })} <h4 class="svelte-tm9bxc" data-svelte-h="svelte-aeduhh">Functions</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<ol class="svelte-tm9bxc" data-svelte-h="svelte-1iffvxa"><li class="svelte-tm9bxc">Write a JavaScript function to calculate the area of a rectangle given its length and width.</li> <li class="svelte-tm9bxc">Create a function that takes an array of numbers as input and returns the sum of all the numbers.</li> <li class="svelte-tm9bxc">Implement a function that checks if a given number is a palindrome (reads the same forwards and backwards).</li> <li class="svelte-tm9bxc">Write a JavaScript function to find the maximum and minimum elements in an array of numbers.</li> <li class="svelte-tm9bxc">Develop a function that takes a string as input and returns the reverse of the string.</li> <li class="svelte-tm9bxc">Create a JavaScript program that generates the Fibonacci sequence up to a certain limit using a while loop.</li> <li class="svelte-tm9bxc">Implement a function that takes two numbers as input and returns the greatest common divisor (GCD).</li> <li class="svelte-tm9bxc">Write a JavaScript function to output the reverse of a string.</li> <li class="svelte-tm9bxc">Create a function that takes an array of integers and returns a new array with only the unique values.</li> <li class="svelte-tm9bxc">Develop a function that takes a sentence as input and returns the number of words in the sentence.</li></ol>`;
        }
      })}`;
    }
  })}</article>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6sL1YFHB.js.map
