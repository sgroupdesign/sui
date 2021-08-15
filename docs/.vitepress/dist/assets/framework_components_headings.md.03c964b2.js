import{r as n,o as s,c as a,b as e,w as t,a as o,d as p,e as l}from"./app.3ae3239b.js";const i='{"title":"Headings","description":"","frontmatter":{},"headers":[{"level":3,"title":"Configuration","slug":"configuration"}],"relativePath":"framework/components/headings.md","lastUpdated":1629002363057}',c={},h=o('<h1>Headings</h1><p><a href="https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/headings" target="_blank" rel="noopener noreferrer"><code>@sui/tailwind-plugins/headings</code></a></p><p><code>.h1</code> through <code>.h6</code> classes are available, and should be used when styling headings. This helps keep things consistent across the site. Here&#39;s the defaults we apply to headings, which includes setting the:</p><ul><li>Font family</li><li>Font weight</li><li>Leading (line height)</li><li>Font size</li></ul><p>We <strong>deliberately</strong> keep this lean as in practice setting things like margin, colour and others should be done with utility classes.</p>',5),r=p("pre",null,[p("code",null,'<h1 class="h1">h1. Framework heading</h1>\n<h2 class="h2">h2. Framework heading</h2>\n<h3 class="h3">h3. Framework heading</h3>\n<h4 class="h4">h4. Framework heading</h4>\n<h5 class="h5">h5. Framework heading</h5>\n<h6 class="h6">h6. Framework heading</h6>\n')],-1),u=p("p",null,"These classes also work on any other element for convenience.",-1),d=p("pre",null,[p("code",null,'<p class="h1">h1. Framework heading</p>\n<span class="h2">h2. Framework heading</span>\n<div class="h3">h3. Framework heading</div>\n<strong class="h4">h4. Framework heading</strong>\n<label class="h5 block">h5. Framework heading</label>\n<legend class="h6">h6. Framework heading</legend>\n')],-1),g=p("p",null,[l("When you want to add things like colour and different styles, you should use utility classes. While you might think "),p("em",null,"every"),l(),p("code",null,".h1"),l(" should be white, this is almost never the case.")],-1),k=p("pre",null,[p("code",null,'<h2 class="h2 text-blue-500">A blue heading</h2>\n<h2 class="h2 font-bold">A strong heading</h2>\n')],-1),m=o('<h3 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Configure the <code>@sui/tailwind-plugins/headings</code> plugin using <code>theme</code> options.</p><div class="language-js"><pre><code>theme<span class="token operator">:</span> <span class="token punctuation">{</span>\n    extend<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function-variable function">heading</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                <span class="token comment">// Styles for all heading e.g. `.h1, .h2, .h3...`.</span>\n                <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    fontWeight<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;fontWeight.bold&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n                <span class="token comment">// Set the `.h1` font size</span>\n                <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    fontSize<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;fontSize.5xl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    textTransform<span class="token operator">:</span> <span class="token string">&#39;uppercase&#39;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div>',3);c.render=function(o,p,l,i,c,f){const _=n("code-preview");return s(),a("div",null,[h,e(_,{heading:"Headings"},{default:t((()=>[r])),_:1}),u,e(_,{heading:"Works on any element"},{default:t((()=>[d])),_:1}),g,e(_,{heading:"Works on any element"},{default:t((()=>[k])),_:1}),m])};export{i as __pageData,c as default};
