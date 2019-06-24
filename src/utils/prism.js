import { css } from '@emotion/core'

const prism = theme => css`
  p > code,
  li > code {
    color: ${theme.colors.code_text};
    background: ${theme.colors.code_bg};
    font-family: Ubuntu, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    padding: 0.4em 0.5em;
    margin: 0.5em 0;
    overflow: auto;
    // border-radius: 0.3em;
    tab-size: 4;
    hyphens: none;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${theme.colors.code_text};
    background: none;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    tab-size: 5;
    hyphens: none;
    font-size: 0.9rem;
  }
  pre[class*='language-'] {
    padding: 2em 2em;
    margin-bottom: 1.5rem;
    overflow: auto;
  }
  pre[class*='language-'] {
    background: ${theme.colors.code_bg};
  }
  p > code[class*='language-'],
  li > code[class*='language-'] {
    border-radius: 0.3em;
    background: rgba(52, 152, 219, 0.2);
    color: #2e3246;
    bottom: 2px;
    position: relative;
  }
  .token.operator {
    color: #bc78d7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }
  .token.punctuation {
    color: #56b6c2;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #f92672;
  }
  .token.boolean,
  .token.number {
    color: #ae81ff;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #7cc379;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }
  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #e6db74;
  }
  .token.keyword {
    color: #66d9ef;
  }
  .token.regex,
  .token.important {
    color: #fd971f;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .gatsby-highlight {
    position: relative;
    overflow: auto;
  }
  .gatsby-highlight[data-language]::before {
    position: absolute;
    top: 0;
    right: 1rem;
    padding: 2px 10px;
    font-size: 0.7rem;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    border-radius: 0 0 5px 5px;
    color: ${theme.colors.code_bg};
    background: var(--text-color);
  }
  .gatsby-code-title {
    background: ${theme.colors.code_bg};
    line-height: 2em;
    padding: 1em 2em;
    border-bottom: 1px solid var(--gray4);
  }

  .gatsby-highlight[data-language='javascript']::before {
    content: 'js';
    background: #f7df1e;
  }
  .gatsby-highlight[data-language='css']::before {
    content: 'css';
    background: #ff9800;
  }
  .gatsby-highlight[data-language='scss']::before {
    content: 'scss';
    background: #ff9800;
  }
  .gatsby-highlight[data-language='bash']::before {
    content: 'sh';
  }
  .gatsby-highlight[data-language='json']::before {
    content: 'json';
    background: #8bc34a;
  }
  .gatsby-highlight[data-language='diff']::before {
    content: 'diff';
    background: #e6ffed;
  }
  .gatsby-highlight[data-language='markdown']::before {
    content: 'md';
    background: #ffffff;
  }
  .gatsby-highlight[data-language='graphql']::before {
    content: 'GraphQL';
    background: #e10098;
    color: #ffffff;
  }
  .gatsby-highlight[data-language='html']::before {
    content: 'HTML';
    background: #ee651d;
    color: #ffffff;
  }
  .gatsby-highlight[data-language='bash']::before {
    content: 'Bash';
    background: #2a3539;
    color: #ffffff;
  }
  .gatsby-highlight[data-language='shell']::before {
    content: 'Shell';
    background: #2a3539;
    color: #ffffff;
  }
`

export default prism
