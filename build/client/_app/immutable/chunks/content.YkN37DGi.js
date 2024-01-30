const e=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}
/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#ffffff}.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_{color:#d73a49}.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_{color:#6f42c1}.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id{color:#005cc5}.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string{color:#032f62}.hljs-built_in,
.hljs-symbol{color:#e36209}.hljs-comment,
.hljs-code,
.hljs-formula{color:#6a737d}.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:bold}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:bold}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`,s=e,t=`<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}
/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_{color:#ff7b72}.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_{color:#d2a8ff}.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id{color:#79c0ff}.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string{color:#a5d6ff}.hljs-built_in,
.hljs-symbol{color:#ffa657}.hljs-comment,
.hljs-code,
.hljs-formula{color:#8b949e}.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:bold}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:bold}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}</style>`,r=t,n=[{name:"INTERNET TECHNOLOGIES",url:"/courses/internet",topics:[{name:"WWW, HTML, XHTML",url:"/courses/internet/wwwhtml",topics:[{name:"Fundamentals of Internet",url:"/courses/internet/wwwhtml/fundamentals",topics:[{name:"Introduction",url:"/courses/internet/wwwhtml/fundamentals/intro"},{name:"The World Wide web",url:"/courses/internet/wwwhtml/fundamentals/www"},{name:"Web browsers",url:"/courses/internet/wwwhtml/fundamentals/browsers"},{name:"Web Servers",url:"/courses/internet/wwwhtml/fundamentals/servers"},{name:"Uniform Resource Locators",url:"/courses/internet/wwwhtml/fundamentals/url"},{name:"Multipurpose Internet Mail Extensions",url:"/courses/internet/wwwhtml/fundamentals/mime"},{name:"The Hypertext Transfer Protocol",url:"/courses/internet/wwwhtml/fundamentals/http"},{name:"Security",url:"/courses/internet/wwwhtml/fundamentals/security"}]},{name:"HTML/XHTML",url:"/courses/internet/wwwhtml/html",topics:[{name:"Origins",url:"/courses/internet/wwwhtml/html/origins"},{name:"Basic Syntax",url:"/courses/internet/wwwhtml/html/syntax"},{name:"HTML Document Structure",url:"/courses/internet/wwwhtml/html/structure"},{name:"Text Markup",url:"/courses/internet/wwwhtml/html/text"},{name:"Images",url:"/courses/internet/wwwhtml/html/images"},{name:"Hypertext Links",url:"/courses/internet/wwwhtml/html/links"},{name:"Tables",url:"/courses/internet/wwwhtml/html/tables"},{name:"Forms",url:"/courses/internet/wwwhtml/html/forms"},{name:"The audio Element",url:"/courses/internet/wwwhtml/html/audio"},{name:"The video Element",url:"/courses/internet/wwwhtml/html/video"},{name:"Organization Elements",url:"/courses/internet/wwwhtml/html/organization"},{name:"The time Element",url:"/courses/internet/wwwhtml/html/time"},{name:"HTML vs XHTML",url:"/courses/internet/wwwhtml/html/xhtml"}]}]},{name:"CSS",url:"/courses/internet/css",topics:[{name:"Levels of Style Sheets",url:"/courses/internet/css/levels"},{name:"Style Specification Formats",url:"/courses/internet/css/formats"},{name:"Selector Forms",url:"/courses/internet/css/selector"},{name:"Property-Value Forms",url:"/courses/internet/css/property"},{name:"Font Properties",url:"/courses/internet/css/font"},{name:"List Properties",url:"/courses/internet/css/list"},{name:"Allignment of text",url:"/courses/internet/css/text"},{name:"Color",url:"/courses/internet/css/color"},{name:"The Box model",url:"/courses/internet/css/box"},{name:"Background Images",url:"/courses/internet/css/background"},{name:"The <span> and <div> tags",url:"/courses/internet/css/tags"},{name:"Conflict Resolution",url:"/courses/internet/css/conflict"}]},{name:"JAVASCRIPT",url:"/courses/internet/javascript",topics:[{name:"Basics",url:"/courses/internet/javascript/basics",topics:[{name:"Overview",url:"/courses/internet/javascript/basics/overview"},{name:"Object Orientation",url:"/courses/internet/javascript/basics/objectorientation"},{name:"General Syntactic Characteristics",url:"/courses/internet/javascript/basics/syntactic"},{name:"Primitives, Operations, and Expressions",url:"/courses/internet/javascript/basics/primitives"},{name:"Screen Output and Keyboard Input",url:"/courses/internet/javascript/basics/io"},{name:"Control Statements",url:"/courses/internet/javascript/basics/control"},{name:"Object Creation and Modification",url:"/courses/internet/javascript/basics/object"},{name:"Arrays",url:"/courses/internet/javascript/basics/arrays"},{name:"Functions",url:"/courses/internet/javascript/basics/functions"},{name:"Constructors",url:"/courses/internet/javascript/basics/constructor"},{name:"Regular Expressions",url:"/courses/internet/javascript/basics/regex"},{name:"Errors in Scripts",url:"/courses/internet/javascript/basics/error"}]},{name:"JavaScript and HTML Documents",url:"/courses/internet/javascript/html",topics:[{name:"The JavaScript Execution Environment",url:"/courses/internet/javascript/html/jee"},{name:"The Document Object Model",url:"/courses/internet/javascript/html/dom"},{name:"Element Access in JavaScript",url:"/courses/internet/javascript/html/element"},{name:"Events and Event Handling",url:"/courses/internet/javascript/html/events"},{name:"Handling Events from Body Elements",url:"/courses/internet/javascript/html/body"},{name:"Handling Events from Button Elements",url:"/courses/internet/javascript/html/button"},{name:"Handling Events from Text Box and Password Elements",url:"/courses/internet/javascript/html/textbox"},{name:"The DOM 2 Event Model",url:"/courses/internet/javascript/html/dom2"},{name:"The canvas Element",url:"/courses/internet/javascript/html/canvas"},{name:"The navigator Object",url:"/courses/internet/javascript/html/navigator"},{name:"DOM Tree Traversal and Modification",url:"/courses/internet/javascript/html/tree"}]},{name:"Dynamic Documents with JavaScript",url:"/courses/internet/javascript/dynamic",topics:[{name:"Introduction",url:"/courses/internet/javascript/dynamic/intro"},{name:"Positioning Elements",url:"/courses/internet/javascript/dynamic/position"},{name:"Moving Elements",url:"/courses/internet/javascript/dynamic/move"},{name:"Element Visibility",url:"/courses/internet/javascript/dynamic/visibility"},{name:"Changing Colors and fonts",url:"/courses/internet/javascript/dynamic/colors"},{name:"Dynamic Content",url:"/courses/internet/javascript/dynamic/content"},{name:"Stacking Elements",url:"/courses/internet/javascript/dynamic/stack"},{name:"Locating the Mouse Cursor",url:"/courses/internet/javascript/dynamic/cursor"},{name:"Reating to a Mouse",url:"/courses/internet/javascript/dynamic/mouse"},{name:"Slow Movement of Elements",url:"/courses/internet/javascript/dynamic/slow"},{name:"Dragging and Dropping Elements",url:"/courses/internet/javascript/dynamic/drag"}]},{name:"Asynchronous JavaScript",url:"/courses/internet/javascript/asynchronous",topics:[{name:"Callbacks",url:"/courses/internet/javascript/asynchronous/callbacks"},{name:"Promises",url:"/courses/internet/javascript/asynchronous/promises"},{name:"async and await",url:"/courses/internet/javascript/asynchronous/async"}]},{name:"HTTP",url:"/courses/internet/javascript/http",topics:[{name:"Overview",url:"/courses/internet/javascript/http/overview"},{name:"HTTP Messages",url:"/courses/internet/javascript/http/messages"},{name:"A typical HTTP session",url:"/courses/internet/javascript/http/session"}]},{name:"Fetch API",url:"/courses/internet/javascript/fetchapi",topics:[{name:"Overview",url:"/courses/internet/javascript/fetchapi/overview"},{name:"Using the Fetch API",url:"/courses/internet/javascript/fetchapi/usages"},{name:"fetch()",url:"/courses/internet/javascript/fetchapi/fetch"},{name:"Headers",url:"/courses/internet/javascript/fetchapi/headers"},{name:"Request",url:"/courses/internet/javascript/fetchapi/request"},{name:"Response",url:"/courses/internet/javascript/fetchapi/response"}]}]},{name:"XML",url:"/courses/internet/xml",topics:[{name:"Introduction",url:"/courses/internet/xml/intro"},{name:"Uses of XML",url:"/courses/internet/xml/uses"},{name:"The syntax of XML",url:"/courses/internet/xml/syntax"},{name:"XML Document Structure",url:"/courses/internet/xml/documents"},{name:"Namespaces",url:"/courses/internet/xml/namespaces"},{name:"XML Schemas",url:"/courses/internet/xml/schemas"},{name:"Displaying raw XML documents",url:"/courses/internet/xml/raw"},{name:"Displaying XML documents with CSS",url:"/courses/internet/xml/css"},{name:"XSLT style sheets",url:"/courses/internet/xml/xslt"},{name:"XML Processors",url:"/courses/internet/xml/processors"},{name:"Web services",url:"/courses/internet/xml/web"}]},{name:"NODE JS",url:"/courses/internet/nodejs",topics:[{name:"Introduction to Node.js",url:"/courses/internet/nodejs/intro"},{name:"Installation",url:"/courses/internet/nodejs/installation"},{name:"A Node.js application",url:"/courses/internet/nodejs/application"},{name:"Fundamentals of Node.js",url:"/courses/internet/nodejs/fundamentals"},{name:"Difference between Node.js and browser",url:"/courses/internet/nodejs/difference"},{name:"Anatomy of an HTTP Transaction",url:"/courses/internet/nodejs/http"}]}]}];export{r as a,n as c,s as g};
