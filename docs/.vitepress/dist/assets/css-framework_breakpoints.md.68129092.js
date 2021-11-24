import{r as n,o as s,c as a,e as t,w as e,a as p,b as o,d as r}from"./app.0a68d308.js";const i='{"title":"Breakpoints","description":"","frontmatter":{},"headers":[{"level":2,"title":"Desktop-first and single-breakpoint","slug":"desktop-first-and-single-breakpoint"},{"level":2,"title":"Configuration","slug":"configuration"}],"relativePath":"css-framework/breakpoints.md","lastUpdated":1629709167966}',l={},c=p('<h1>Breakpoints</h1><p>Our breakpoints are largely modelled after Tailwind&#39;s <a href="https://tailwindcss.com/docs/breakpoints" target="_blank" rel="noopener noreferrer">breakpoints</a>, and are mobile-first. Namely, we&#39;ve added a <code>xs</code> breakpoint for even more control.</p><div class="language-js"><pre><code>screens<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;xs&#39;</span><span class="token operator">:</span> <span class="token string">&#39;520px&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// =&gt; @media (min-width: 520px) { ... }</span>\n    <span class="token string">&#39;sm&#39;</span><span class="token operator">:</span> <span class="token string">&#39;640px&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// =&gt; @media (min-width: 640px) { ... }</span>\n    <span class="token string">&#39;md&#39;</span><span class="token operator">:</span> <span class="token string">&#39;768px&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// =&gt; @media (min-width: 768px) { ... }</span>\n    <span class="token string">&#39;lg&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1024px&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// =&gt; @media (min-width: 1024px) { ... }</span>\n    <span class="token string">&#39;xl&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1280px&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// =&gt; @media (min-width: 1280px) { ... }</span>\n    <span class="token string">&#39;2xl&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1536px&#39;</span><span class="token punctuation">,</span> <span class="token comment">// =&gt; @media (min-width: 1536px) { ... }</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',3),u=o("pre",null,[o("code",null,'<div class="bg-purple-500 xs:bg-red-500 sm:bg-yellow-500 md:bg-primary-500 lg:bg-teriary-500 xl:bg-orange-500 2xl:bg-green-500">\n    ...\n</div>\n')],-1),k=o("h2",{id:"desktop-first-and-single-breakpoint"},[o("a",{class:"header-anchor",href:"#desktop-first-and-single-breakpoint","aria-hidden":"true"},"#"),r(" Desktop-first and single-breakpoint")],-1),d=o("p",null,"We include some additional utilities for breakpoints:",-1),g=o("pre",null,[o("code",null,'<div class="bg-purple-500 to-xs:bg-red-500 to-sm:bg-yellow-500 to-md:bg-primary-500 to-lg:bg-teriary-500 to-xl:bg-orange-500 to-2xl:bg-green-500">\n    ...\n</div>\n')],-1),m=o("pre",null,[o("code",null,'<div class="bg-purple-500 md-only:bg-green-500">\n    ...\n</div>\n')],-1),b=p('<h2 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>You can customise the breakpoints your project uses by configuring the <code>@sgroup/tailwind-base</code> preset.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n   presets<span class="token operator">:</span> <span class="token punctuation">[</span>\n       <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sgroup/tailwind-base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n           screens<span class="token operator">:</span> <span class="token punctuation">{</span>\n               <span class="token comment">// Custom breakpoints for your project</span>\n               xs<span class="token operator">:</span> <span class="token number">480</span><span class="token punctuation">,</span> sm<span class="token operator">:</span> <span class="token number">640</span><span class="token punctuation">,</span> md<span class="token operator">:</span> <span class="token number">768</span><span class="token punctuation">,</span> lg<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>\n           <span class="token punctuation">}</span><span class="token punctuation">,</span>\n       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div>',3);l.render=function(p,o,r,i,l,f){const h=n("code-preview");return s(),a("div",null,[c,t(h,{"body-id":"breakpoint-example",heading:"Breakpoints - Mobile-first"},{default:e((()=>[u])),_:1}),k,d,t(h,{"body-id":"breakpoint-example",heading:"Breakpoints - Desktop-first"},{default:e((()=>[g])),_:1}),t(h,{"body-id":"breakpoint-example",heading:"Breakpoints - md-only"},{default:e((()=>[m])),_:1}),b])};export{i as __pageData,l as default};
