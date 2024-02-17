import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../../../../chunks/ssr.js";
import { g as githubDark, a as github, c as contentNav, b as contents } from "../../../../../../../../chunks/content3.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
/* empty css                                                                   */
import { W as WebPractice } from "../../../../../../../../chunks/WebPractice.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-swxyc0{display:flex;flex-direction:column;gap:0.5em}p.svelte-swxyc0,li.svelte-swxyc0{opacity:0.8}h4.svelte-swxyc0{margin:0.5em 0}h6.svelte-swxyc0{font-size:1em;margin:0.5em 0;color:rgb(74, 155, 139)}strong.svelte-swxyc0{color:goldenrod;opacity:1}a.svelte-swxyc0{text-decoration:none;cursor:pointer}.question.svelte-swxyc0{cursor:pointer;padding:0.3em}",
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
  let pathComponents = $page.url.pathname.split("/");
  pathComponents.map((u, index) => {
    let path = $page.url.origin;
    for (let i = 0; i <= index; i++) {
      path += pathComponents[i] + "/";
    }
    return path;
  });
  set_store_value(navList, $navList = contents, $navList);
  set_store_value(currentPath, $currentPath = "Forms", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  let htmlContent = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <form action="" method="get">
            <!---form controls like input, select, button go here -->
        </form>
    </body> 
</html>`;
  let htmlContent1 = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <form id="myForm" action="">
            <label for="username">
                Username: <input type="text" id="username" name="username" />    
            </label>
            <br/>
            <br/>
            <label for="password">
                Password: <input type="password" id="password" name="password" />    
            </label>
            <br/>
            <br/>
            <label for="email">
                Email: <input type="email" id="email" name="email" />    
            </label>
            <br/>
            <br/>
            <label for="telephone">
                Telephone: <input type="tel" id="telephone" name="telephone" />    
            </label>
            <br/>
            <br/>
            <label for="page">
                Website: <input type="url" id="page" name="homepage" />    
            </label>
            <br/>
            <br/>
            <label for="house">
                House: <input type="number" id="house" name="house" />    
            </label>
            <br/>
            <br/>
            <label for="date">
                Current date: <input type="date" id="date" name="date" />    
            </label>
            <br/>
            <br/>
            <label for="month">
                Last month: <input type="month" id="month" name="month" />    
            </label>
            <br/>
            <br/>
            <label for="week">
                Current Week: <input type="week" id="week" name="week" />    
            </label>
            <br/>
            <br/>
            <label for="color">
                Favourite Color: <input type="color" id="color" name="color" />    
            </label>
            <br/>
            <br/>
            <label for="file">
                Photo: <input type="file" accept="image/*" id="file" name="photo" />    
            </label>
            <br/>
            <br/>
            <label for="laptop">
                Laptop <input type="checkbox" id="laptop" name="laptop" value="Laptop" />    
            </label>
            <label for="mobile">
                Mobile <input type="checkbox" id="mobile" name="mobile" value='Mobile' />    
            </label>
            <br/>
            <br/>
            <label for="male">
                Male <input type="radio" id="male" name="gender" value="Male" />    
            </label>
            <label for="female">
                Female <input type="radio" id="female" name="gender" value="Female" />    
            </label>
            <br/>
            <br/>
            <input type="reset" id="reset" value="Reset" />
            <input type="button" id="button" onclick="console.log(document.getElementById('myForm').elements[0])" value="Alert" />
            <input type="submit" id="submit" value="submit" />    
        </form>
    </body> 
</html>`;
  let htmlContentSelect = `<!DOCTYPE html> 
<!-- File name and document purpose --> 
<html lang = "en">   
    <head>     
        <title> A title for the document </title>
        <meta charset = "utf-8" />     
        <!--include external resources here like adsense, javascript, styles-->
    </head>   
    <body>   
        <form action="" method="get">
            <!--Simple select menu -->
            <select name="simpleMenu">
                <option>Apple</option>
                <option>Samsung</option>
                <option>Mi</option>
                <option>OnePlus</option>
            </select>
            <!--Preselected item -->
            <select name="preSelected">
                <option>Apple</option>
                <option selected>Samsung</option>
                <option>Mi</option>
                <option>OnePlus</option>
            </select>
            <!--with size -->
            <select name="menuSize" size="3">
                <option>Apple</option>
                <option>Samsung</option>
                <option>Mi</option>
                <option>OnePlus</option>
            </select>
            <!--Multiple select-->
            <select multiple name="multipleValue">
                <option>Apple</option>
                <option>Samsung</option>
                <option selected>Mi</option>
                <option>OnePlus</option>
                <option>Nokia</option>
                <option>Motorola</option>
                <option>Vivo</option>
            </select>
        </form>
    </body> 
</html>
`;
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-wez8y7_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/html/forms"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-wez8y7_END -->`, ""} <article class="svelte-swxyc0">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-swxyc0" data-svelte-h="svelte-193uojl">Forms</h4> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      style: "background-color: rgba(0, 100, 100, 0.1"
    },
    {},
    {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h6 class="svelte-swxyc0" data-svelte-h="svelte-zdr1se">Topics</h6> <ol data-svelte-h="svelte-1kml81n"><li class="svelte-swxyc0"><a href="#basicForm" class="svelte-swxyc0">The <code>form</code> Element</a></li> <li class="svelte-swxyc0"><a href="#inputForm" class="svelte-swxyc0">The <code>input</code> Element</a></li> <li class="svelte-swxyc0"><a href="#selectForm" class="svelte-swxyc0">The <code>select</code> Element</a></li> <li class="svelte-swxyc0"><a href="#textareaForm" class="svelte-swxyc0">The <code>textarea</code> Element</a></li> <li class="svelte-swxyc0"><a href="#buttonForm" class="svelte-swxyc0">The Action Buttons</a></li> <li class="svelte-swxyc0"><a href="#completeForm" class="svelte-swxyc0">A Complete Form</a></li></ol> <p class="svelte-swxyc0" data-svelte-h="svelte-cobgds">For a better understanding of form submission, read <a href="/courses/internet/wwwhtml/fundamentals/http" class="svelte-swxyc0">HTTP protocol</a>.</p>`;
          }
        })}`;
      }
    }
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-swxyc0" data-svelte-h="svelte-rtnb51">A <code>form</code> is a container for taking input from users. There are various components that take inputs like number, text, files, options, buttons etc. These components are called input boxes (single line or multiple lines), checkboxes, radio buttons, menus etc. All of these components are inline elements. Each component has an associate value. The collection of these values is called <strong class="svelte-swxyc0">form data</strong>. Every form whose data is to be processed on the server requires a <strong class="svelte-swxyc0">submit</strong> button. When the user clicks the <em>submit</em> button, the form data is encoded and sent to the Web server.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="basicForm" class="svelte-swxyc0" data-svelte-h="svelte-hgo5ca">The <code>form</code> Element</h6> <p class="svelte-swxyc0" data-svelte-h="svelte-13kw9dr"><code>form</code> element is a block level element. A required attribute of the <code>form</code> element is <code>action</code> which specifies the URL of the application on the Web server that is to be called when the user clicks the <em>Submit</em> button.</p> <p class="svelte-swxyc0">The <code data-svelte-h="svelte-dhn5xp">method</code> attribute specifies which technique <code data-svelte-h="svelte-1mc2yku">get</code> or <code data-svelte-h="svelte-1xjt0ei">post</code>, will be used to pass the form data to the server. The default is <code data-svelte-h="svelte-1mc2yku">get</code>. If no <code data-svelte-h="svelte-dhn5xp">method</code> attribute is given in the <code>${escape("<form>")}</code> tag, <code data-svelte-h="svelte-1mc2yku">get</code> will be used. The alternative technique is <code data-svelte-h="svelte-1xjt0ei">post</code>. In both techniques, the form data is coded into a text string when the user clicks the <em data-svelte-h="svelte-1ildrzu">Submit</em> button. This text string is often called the <strong class="svelte-swxyc0" data-svelte-h="svelte-11hq5ah">query string</strong>.</p> <p class="svelte-swxyc0" data-svelte-h="svelte-1wzzxs8">The query string has an assignment statement for each control that has a data value, with the name of the control as its left side and its value as its right side. These assignment statements are separated by ampersands (&amp;).</p> <p class="svelte-swxyc0" data-svelte-h="svelte-7qccme">When the <code>get</code> method is used, the browser attaches the query string to the URL of the HTTP request, so the form data is transmitted to the server together with the URL. The browser inserts a question mark at the end of the actual URL just before the first character of the query string so that the server can easily find the beginning of the query string. The <code>get</code> method can also be used to pass parameters to the server when forms are not involved. (This cannot be done with <code>post</code>.) One last advantage of <code>get</code> is that a site bookmark can include specific form values, which makes it more specific than one with only the URL. One disadvantage of the <code>get</code> method is that some servers place a limit on the length of the URL string and truncate any characters past the limit. So, if the form has more than a few controls, <code>get</code> is not a good choice. Because the form values are displayed by the browser, <code>get</code> should not be used if sensitive information such as passwords or credit card numbers is included in the form data.</p> <p class="svelte-swxyc0" data-svelte-h="svelte-v3ld5b">When the <code>post</code> method is used, the query string is passed by some other method to the form-processing program. There is no length limitation for the query string with the <code>post</code> method, so, obviously, it is the better choice when there are more than a few controls in the form. There are also some security concerns with <code>get</code> that are not a problem with <code>post</code>.</p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="inputForm" class="svelte-swxyc0" data-svelte-h="svelte-mjgx7u">The <code>input</code> Element</h6> <p class="svelte-swxyc0" data-svelte-h="svelte-brxuqw">The <code>input</code> element is the most versatile input mechanism. It has an attribute called <code>type</code> that can take many values like text, number, date etc shown in the table below. Except <code>reset</code> and <code>submit</code> input types, all types require another attribute <code>name</code> that acts as a <em>variable</em>. These names are used on the server-side code. In the client-side, the elements are identified by their ids. Hence, each input element has <code>id, name</code> and <code>value</code> attributes.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%;" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `type`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `values`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Description`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `text`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a string, like name, username`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `useful for single line text`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `password`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a string`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `the typed letters are displayed as • or *.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `email`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a valid email`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `browser may validate email address`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `tel`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `phone number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `use it with <code data-svelte-h="svelte-12qjrs1">placeholder</code> to show an example, <code data-svelte-h="svelte-13zptt4">pattern</code> for validation.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `url`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a url`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `browser may validate a url automatically.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `a number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a number`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `range`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `range of numbers`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `shows a slider, use it with attributes <code data-svelte-h="svelte-vngjza">min</code> and <code data-svelte-h="svelte-wq6pps">max</code> to set the limits.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select a time without time zone.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `date`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `date`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a date input. A date picker may be shown by the browser.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `datetime-local`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `local date time`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `input date and time without time zone.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `month`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `month`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select a month and year`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `week`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `week`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select a week and year`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `color`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `color`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `input color. A color picker may be shown by the browser.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `image`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `image`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `use image in the submit button, use with attributes <code data-svelte-h="svelte-1fkgjes">src</code> to locate the image, <code data-svelte-h="svelte-1stdfwe">width</code> and <code data-svelte-h="svelte-xu0kcf">height</code> for dimensions.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `file`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `file`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `shows a button to browse and select a file input.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `checkbox`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `checkbox`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select zero or more options of a limited number of choices. When <code data-svelte-h="svelte-1x67wg7">name</code> attribute is same, then query string has multiple entries with same variable.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `radio`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `radio`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `select only one of a limited number of choices, <code data-svelte-h="svelte-1x67wg7">name</code> attributes are same for related options.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `search`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `search`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `behaves like a regular text field`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `button`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `button`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `used with attributes <code data-svelte-h="svelte-1kgo0yb">onclick</code> that takes a method/function and <code data-svelte-h="svelte-18vs4ol">value</code> as a text to label the button.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `reset`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `reset`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `reset all form values to their default values.`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `submit`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `submit`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `button for submitting form`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContent1,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 id="selectForm" class="svelte-swxyc0" data-svelte-h="svelte-2vve02">The <code>select</code> Element</h6> <p class="svelte-swxyc0" data-svelte-h="svelte-1ojbhra">A menu is created using a <code>select</code> element.</p> ${validate_component(DataTable, "DataTable").$$render($$result, { style: "width:100%" }, {}, {
            default: () => {
              return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Attribute`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Value`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Description`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })} ${validate_component(Body, "Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1x67wg7">name</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a string (usually one word)`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `variable for the value of selected item`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1p1mfe0">multiple</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1p1mfe0">multiple</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `allows more than one item to be selected`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `<code data-svelte-h="svelte-1416n7d">size</code>`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `a number`;
                        }
                      })} ${validate_component(Cell, "Cell").$$render($$result, { style: "white-space:normal;" }, {}, {
                        default: () => {
                          return `specify the number of menu items that initially are 
                            to be displayed for the user, default value is 1`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} <p class="svelte-swxyc0" data-svelte-h="svelte-1a84bk8">Items in the menu are specified with <code>option</code> element, similar to <code>li</code> in case of lists. The content (the text) in the <code>option</code> tag is the value of that <em>option</em>. This means that tags are not allowed in the text to <code>option</code>. An attribute <code>selected</code> to an <code>option</code> implies that the option is pre-selected.</p> <p class="remark svelte-swxyc0" data-svelte-h="svelte-j6f37t">Use <code>ctrl</code> to select more than one item in case of <code>multiple</code></p>`;
        }
      })}`;
    }
  })} ${validate_component(WebPractice, "WebPractice").$$render(
    $$result,
    {
      htmlContent: htmlContentSelect,
      cssContent: "",
      jsContent: ""
    },
    {},
    {}
  )} <h4 class="svelte-swxyc0" data-svelte-h="svelte-1yto96c">Exercise</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-swxyc0" data-svelte-h="svelte-140swak">Create a user login page with input fields for username (email), password and a button for login. Create a link for forgot password and another button for sign up.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-swxyc0" data-svelte-h="svelte-o34h5a">Create a form for flight booking with fields for destination, date of journey, checkbox for round trip, date for return journey and button to find available flights.</div>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="question svelte-swxyc0" data-svelte-h="svelte-1qgtck6">Create a form for LPG connection with input fields for name, aadhar card, address, email, phone and input field to upload passport size photo.</div>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
