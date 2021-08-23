import{r as n,o as a,c as s,b as t,w as o,d as e,a as p}from"./app.d3da16a8.js";const l='{"title":"Horizontal Rule","description":"","frontmatter":{},"headers":[{"level":3,"title":"Configuration","slug":"configuration"}],"relativePath":"css-framework/components/hr.md","lastUpdated":1629439914665}',c={},i=e("h1",null,"Horizontal Rule",-1),r=e("p",null,[e("a",{href:"https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/horizontal-rule",target:"_blank",rel:"noopener noreferrer"},[e("code",null,"@sui/tailwind-plugins/horizontal-rule")])],-1),u=e("p",null,"A horizontal rule is used to separate elements by a thin line. Includes top/bottom padding and a line colour. Clearly the most complicated element in the framework 🤯 .",-1),k=e("pre",null,[e("code",null,'<hr class="hr">\n')],-1),d=p('<h3 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Configure the <code>@sui/tailwind-plugins/horizontal-rule</code> plugin using <code>theme</code> options.</p><div class="language-js"><pre><code>theme<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">hr</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            marginTop<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;margin.8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            marginBottom<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;margin.8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            backgroundColor<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;backgroundColor.gray.400&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div>',3);c.render=function(e,p,l,c,g,h){const m=n("code-preview");return a(),s("div",null,[i,r,u,t(m,{heading:"Horizontal rule"},{default:o((()=>[k])),_:1}),d])};export{l as __pageData,c as default};
