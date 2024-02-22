import { s as subscribe, b as set_store_value } from "../../../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../../../../../../chunks/ssr.js";
import { x as xml, H as Highlight, L as LineNumbers } from "../../../../../../../../chunks/xml.js";
import { g as githubDark, a as github, b as contentNav, c as contents } from "../../../../../../../../chunks/content4.js";
/* empty css                                                                */
import { p as page } from "../../../../../../../../chunks/stores.js";
import { C as Card } from "../../../../../../../../chunks/Card.js";
import { C as Content } from "../../../../../../../../chunks/ActionIcons.js";
import { D as DataTable, H as Head, R as Row, C as Cell, B as Body } from "../../../../../../../../chunks/Cell.js";
import "../../../../../../../../chunks/Subheader.js";
import "../../../../../../../../chunks/client.js";
import { d as darkMode, c as currentPath, n as navList } from "../../../../../../../../chunks/stores2.js";
/* empty css                                                                   */
import { P as Pathlist } from "../../../../../../../../chunks/Pathlist.js";
import { C as CourseNavigation } from "../../../../../../../../chunks/CourseNavigation.js";
const css = {
  code: "article.svelte-9tb2l5{display:flex;flex-direction:column;gap:0.5em}p.svelte-9tb2l5,li.svelte-9tb2l5{opacity:0.8}h4.svelte-9tb2l5{margin:0.5em 0}h6.svelte-9tb2l5{font-size:1em;margin:0.5em 0;color:rgb(240, 85, 0)}strong.svelte-9tb2l5{color:goldenrod;opacity:1}",
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
  set_store_value(currentPath, $currentPath = "The HyperText Transfer Protocol (HTTP)", $currentPath);
  set_store_value(darkMode, $darkMode = false, $darkMode);
  $$result.css.add(css);
  $$unsubscribe_darkMode();
  $$unsubscribe_currentPath();
  $$unsubscribe_navList();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-62rn87_START -->${$$result.title = `<title>Internet Technologies</title>`, ""}<link rel="canonical" href="https://drmithileshkumar.com/courses/internet/wwwhtml/fundamentals/http"><meta name="description" content="Courses Taught by Dr Mithilesh Kumar">${$darkMode ? `<!-- HTML_TAG_START -->${githubDark}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${github}<!-- HTML_TAG_END -->`}<!-- HEAD_svelte-62rn87_END -->`, ""} <article class="svelte-9tb2l5">${validate_component(Pathlist, "Pathlist").$$render(
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
  )} <h4 class="svelte-9tb2l5" data-svelte-h="svelte-17hcp0c">The HyperText Transfer Protocol (HTTP)</h4> ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<p class="svelte-9tb2l5" data-svelte-h="svelte-z57yvs">All Web communications transactions use the same protocol: the Hypertext Transfer Protocol (HTTP). The current version of HTTP is 1.1.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1500up4">HTTP consists of two phases: the request and the response. Each HTTP communication (request or response) between a browser and a Web server consists of two parts: a header and a body. The header contains information about the communication; the body contains the data of the communication if there is any.</p>`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-1ndjvzl">The Request Phase</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-1xhktkc">The general form of an HTTP request is as follows:</p> <ol data-svelte-h="svelte-1yewh56"><li class="svelte-9tb2l5">[HTTP method] [Domain part of the URL] [HTTP version]</li> <li class="svelte-9tb2l5">Header fields</li> <li class="svelte-9tb2l5">Blank line</li> <li class="svelte-9tb2l5">Message body</li></ol> <p class="svelte-9tb2l5" data-svelte-h="svelte-1phwkv2">The following is an example of the first line of an HTTP request:</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `GET https://mathril.com/ HTTP/1.1`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <h6 class="svelte-9tb2l5" data-svelte-h="svelte-ian47i">Various HTTP request methods</h6> ${validate_component(DataTable, "DataTable").$$render(
            $$result,
            {
              "table$aria-label": "HTTP request methods",
              style: "max-width: 100%;"
            },
            {},
            {
              default: () => {
                return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Method`;
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
                            return `GET`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Returns the contents of a specified document`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `HEAD`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Returns the header information for a specified document`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `POST`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Executes a specified document, using the enclosed data`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `PUT`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Replaces a specified document with the enclosed data`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `DELETE`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Deletes a specified document`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )} <h6 class="svelte-9tb2l5" data-svelte-h="svelte-a72gdr">Header field</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-bbuin3">Following the first line of an HTTP communication is any number of header fields, most of which are optional. The format of a header field is the field name followed by a colon and the value of the field. There are four categories of header fields:</p> <ul data-svelte-h="svelte-5vdbem"><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">General Header Fields</strong> <ul><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Date:</strong> The date and time at which the message was sent.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Cache-Control:</strong> Directives for caching mechanisms in both requests and responses.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Request Header Fields</strong> <ul><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Host:</strong> Specifies the domain name of the server and, optionally, the TCP port number.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">User-Agent:</strong> Contains a string that allows the network protocol peers to identify the application type, operating system, software vendor, or software version of the requesting software user agent.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Accept:</strong> Specifies media types that are acceptable for the response.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Accept-Language:</strong> Specifies the preferred language(s) for the response.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Authorization:</strong> Contains credentials for authenticating the client to the server.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Content-Type:</strong> Indicates the media type of the body sent to the server (used in POST and PUT requests).</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Response Header Fields</strong> <ul><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Server:</strong> Contains information about the software used by the origin server to handle the request.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">WWW-Authenticate:</strong> Indicates the authentication method that should be used to gain access to a resource behind a paywall.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Set-Cookie:</strong> Sends cookies from the server to the user agent.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Content-Encoding:</strong> The type of encoding used on the data.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Content-Length:</strong> The length of the response body in octets (8-bit bytes).</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Content-Type:</strong> Indicates the media type of the resource.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Location:</strong> Used in redirection, or when a new resource has been created. This header indicates the URL to redirect a page to.</li></ul></li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Entity Header Fields</strong> <ul><li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Content-Language:</strong> Describes the language(s) intended for the audience.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">Content-Disposition:</strong> Indicates if the content is expected to be displayed inline in the browser or as an attachment, that is to be downloaded and saved locally.</li> <li class="svelte-9tb2l5"><strong class="svelte-9tb2l5">ETag:</strong> An identifier for a specific version of a resource, allowing for changes to be tracked more efficiently.</li></ul></li></ul> <p class="svelte-9tb2l5" data-svelte-h="svelte-1s3x3fa">The header of a request must be followed by a blank line, which is used to separate the header from the body of the request. Requests that use the GET, HEAD, and DELETE methods do not have bodies. In these cases, the blank line signals the end of the request.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-zk262a">Here is an example of a POST request to <code>mathril.com/login</code> with username and password:</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `POST /login HTTP/1.1
Host: mathril.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 31

username=johndoe&password=12345`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
        default: () => {
          return `<h6 class="svelte-9tb2l5" data-svelte-h="svelte-diesnj">The Response Phase</h6> <p class="svelte-9tb2l5" data-svelte-h="svelte-ksa1bo">The general form of an HTTP response is as follows:</p> <ol data-svelte-h="svelte-vwp4rw"><li class="svelte-9tb2l5">Status line</li> <li class="svelte-9tb2l5">Response header fields</li> <li class="svelte-9tb2l5">Blank line</li> <li class="svelte-9tb2l5">Response body</li></ol> <p class="svelte-9tb2l5" data-svelte-h="svelte-703mal">The status line includes the HTTP version used, a three-digit status code for the response, and a short textual explanation of the status code. For example, most responses begin with the following:</p> ${validate_component(Highlight, "Highlight").$$render($$result, { language: xml, code: `HTTP/1.1  200  OK` }, {}, {
            default: ({ highlighted }) => {
              return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
            }
          })} <p class="svelte-9tb2l5" data-svelte-h="svelte-1jcdr4o">The status codes begin with 1, 2, 3, 4, or 5. The general meanings of the five categories specified by these first digits are shown in Table below</p> ${validate_component(DataTable, "DataTable").$$render(
            $$result,
            {
              "table$aria-label": "First digits of HTTP status codes",
              style: "max-width: 100%;"
            },
            {},
            {
              default: () => {
                return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `First Digit`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Category`;
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
                            return `1`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Informational`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `2`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Success`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `3`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Redirection`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `4`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Client error`;
                          }
                        })}`;
                      }
                    })} ${validate_component(Row, "Row").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `5`;
                          }
                        })} ${validate_component(Cell, "Cell").$$render($$result, {}, {}, {
                          default: () => {
                            return `Server error`;
                          }
                        })}`;
                      }
                    })}`;
                  }
                })}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-1bz7zaq">After the status line, the server sends a response header, which can contain several lines of information about the response, each in the form of a field. The only essential field of the header is <code>Content-type</code>. An example of a request header:</p> ${validate_component(Highlight, "Highlight").$$render(
            $$result,
            {
              language: xml,
              code: `HTTP/1.1 200 OK
Date: Sat, 25 July 2009 22:15:11 GMT
Server: Apache/2.2.3 (CentOS)
Last-modified: Tues, 18 May 2004 16:38:38 GMT
ETag: "1b48098-16c-3dab592dc9f80"
Accept-ranges: bytes
Content-length: 364
Connection: close
Content-type: text/html, charset=UTF-8`
            },
            {},
            {
              default: ({ highlighted }) => {
                return `${validate_component(LineNumbers, "LineNumbers").$$render($$result, { highlighted, wrapLines: true }, {}, {})}`;
              }
            }
          )} <p class="svelte-9tb2l5" data-svelte-h="svelte-1stz909">The response header must be followed by a blank line, as is the case for request headers. The response data follows the blank line. In the preceding example, the response body would be the HTML file, <code>respond.html</code>.</p> <p class="svelte-9tb2l5" data-svelte-h="svelte-1ut7wtq">The default operation of HTTP 1.1 is that the connection is kept open for a time so that the client can make several requests over a short span of time without needing to reestablish the communications connection with the server.</p>`;
        }
      })}`;
    }
  })}</article>`;
});
export {
  Page as default
};
