---
title: COMARK
description: Markdown is no longer just text. It is the interface.
company: COMARK
---

:logo

# [COMARK]{style="opacity: 0.5"} :br MARKDOWN IS NO LONGER JUST TEXT. :br IT IS THE INTERFACE.

Most people still think Markdown is just a writing format.

It is not.  
It is how software explains itself now.

Docs, chats, changelogs, agents, dashboards, terminals.  
Modern interfaces are increasingly generated from text.

But most Markdown parsers were built for static pages.

![Comark renders components inside Markdown.](https://github.com/comarkdown/comark/raw/main/assets/banner.jpg){.hero-image}
They expect the whole document upfront.  
They break when content streams in.  
They treat components as an afterthought.

That is backwards.

We are building a new kind of Markdown parser.  
One that renders as content arrives.  
One that supports real components.  
One that works across Vue, React, Svelte, HTML, and ANSI terminals.

Fast.  
Streaming-ready.  
Framework-native.

Start with one command.


~~~bash
npm install comark
~~~


# COMPONENTS IN MARKDOWN

Markdown should not stop at paragraphs and code blocks.

It should render alerts.  
It should render charts.  
It should render cards, forms, diagrams, and live UI.

~~~comark
::alert{type="info"}
This is a Comark component!
::
~~~

Use the same content across frameworks.  
Bring your own components.  
Keep Markdown readable.

# BUILT FOR STREAMING

AI-generated content does not arrive all at once.

Comark parses content as it streams.  
Incomplete syntax is automatically closed.  
The output stays valid at every frame.

Perfect for:
- AI chat interfaces
- progressive documentation
- live previews
- terminals
- generated UIs

# EXTENSIBLE BY DEFAULT

Comark is designed to grow with your content.

Add plugins for:
- syntax highlighting
- math
- Mermaid diagrams
- tables of contents
- custom syntax

Markdown stays simple.  
Your interface does not have to.

# START WRITING

Add rich, interactive components to your Markdown today.

[GET STARTED](https://comark.dev/docs)  
[OPEN PLAYGROUND](https://comark.dev/playground)  
[GITHUB](https://github.com/comark-dev/comark)

---

::footer
COMARK

A FAST, STREAMING-READY MARKDOWN PARSER WITH COMPONENT SUPPORT.

[DOCUMENTATION](https://comark.dev/docs) [PLUGINS](https://comark.dev/plugins) [EXAMPLES](https://comark.dev/examples) [PLAYGROUND](https://comark.dev/playground)
::
