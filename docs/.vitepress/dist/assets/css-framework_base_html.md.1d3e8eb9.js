import{o as n,c as a,a as s}from"./app.d3da16a8.js";const t='{"title":"HTML","description":"","frontmatter":{},"headers":[{"level":2,"title":"[v-cloak]","slug":"v-cloak"},{"level":2,"title":"Font rendering","slug":"font-rendering"},{"level":3,"title":"Configuration","slug":"configuration"}],"relativePath":"css-framework/base/html.md","lastUpdated":1629439914663}',e={},o=[s('<h1>HTML</h1><p><a href="https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/base" target="_blank" rel="noopener noreferrer"><code>@sui/tailwind-plugins/base</code></a></p><p>We provide an extremely minimal, yet opinionated base (on top of Tailwind&#39;s <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">preflight</a>).</p><h2 id="v-cloak"><a class="header-anchor" href="#v-cloak" aria-hidden="true">#</a> <code>[v-cloak]</code></h2><p>For Vue-based projects, any element with this attribute will be hidden until Vue is mounted. See <a href="https://v3.vuejs.org/api/directives.html#v-cloak" target="_blank" rel="noopener noreferrer">v-cloak</a>.</p><h2 id="font-rendering"><a class="header-anchor" href="#font-rendering" aria-hidden="true">#</a> Font rendering</h2><p>As a &quot;fix&quot; for rendering fonts across multiple browsers and OS&#39;s, we employ a browser fix:</p><div class="language-scss"><pre><code><span class="token property">webkit-font-smoothing</span><span class="token punctuation">:</span> <span class="token string">&#39;antialiased&#39;</span><span class="token punctuation">;</span>\n<span class="token property">moz-osx-font-smoothing</span><span class="token punctuation">:</span> <span class="token string">&#39;grayscale&#39;</span><span class="token punctuation">;</span>\n<span class="token property">moz-font-feature-settings</span><span class="token punctuation">:</span> <span class="token string">&quot;liga&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;kern&quot;</span><span class="token punctuation">;</span>\n<span class="token property">text-rendering</span><span class="token punctuation">:</span> <span class="token string">&#39;optimizelegibility&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Configure the <code>@sui/tailwind-plugins/base</code> plugin with options.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n   plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n       <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sui/tailwind-plugins/base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n           fontRenderingFix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div>',11)];e.render=function(s,t,e,p,i,r){return n(),a("div",null,o)};export{t as __pageData,e as default};