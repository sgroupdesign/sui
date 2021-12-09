import{r as n,o as a,c as s,e as t,w as e,b as o,d as p,a as l}from"./app.0a68d308.js";const c='{"title":"Alerts","description":"","frontmatter":{},"headers":[{"level":3,"title":"Configuration","slug":"configuration"}],"relativePath":"css-framework/components/alerts.md","lastUpdated":1629709763197}',r={},i=o("h1",null,"Alerts",-1),u=o("p",null,[o("a",{href:"https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-plugins/src/alert",target:"_blank",rel:"noopener noreferrer"},[o("code",null,"@sgroup/tailwind-plugins/alert")])],-1),k=o("p",null,"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",-1),d=o("div",{class:"tip custom-block"},[o("p",{class:"custom-block-title"},"TIP"),o("p",null,[p("Be sure to check out our "),o("a",{href:"/js-framework/components/alert.html"},"Alert Component"),p(" for more interactivity.")])],-1),m=o("pre",null,[o("code",null,'<div class="alert alert-primary" role="alert">\n    A simple primary alert—check it out!\n</div>\n\n<div class="alert alert-secondary" role="alert">\n    A simple secondary alert—check it out!\n</div>\n\n<div class="alert alert-emerald" role="alert">\n    A simple success alert—check it out!\n</div>\n\n<div class="alert alert-red" role="alert">\n    A simple danger alert—check it out!\n</div>\n\n<div class="alert alert-orange" role="alert">\n    A simple warning alert—check it out!\n</div>\n\n<div class="alert alert-blue" role="alert">\n    A simple info alert—check it out!\n</div>\n')],-1),h=l('<h3 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Configure the <code>@sgroup/tailwind-plugins/alert</code> plugin using <code>theme</code> options.</p><div class="language-js"><pre><code>theme<span class="token operator">:</span> <span class="token punctuation">{</span>\n    extend<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function-variable function">alert</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                <span class="token comment">// Styles for all alerts e.g. `.alert`.</span>\n                <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    marginBottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n                <span class="token comment">// Override or extend any themed alerts. Provide _any_ CSS property.</span>\n                primary<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    color<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;textColor.white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n                <span class="token comment">// Add new named items, like `.alert-success`.</span>\n                success<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    backgroundColor<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;colors.green.300&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    color<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;textColor.white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div>',3);r.render=function(o,p,l,c,r,g){const f=n("code-preview");return a(),s("div",null,[i,u,k,d,t(f,{heading:"Theme options"},{default:e((()=>[m])),_:1}),h])};export{c as __pageData,r as default};