import{r as e,o as a,c as t,b as n,w as o,a as s,d as i,e as d}from"./app.3ae3239b.js";const r='{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[{"level":3,"title":"Configuration","slug":"configuration"}],"relativePath":"framework/components/breadcrumb.md","lastUpdated":1629002363053}',l={},c=s('<h1>Breadcrumb</h1><p><a href="https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/breadcrumb" target="_blank" rel="noopener noreferrer"><code>@sui/tailwind-plugins/breadcrumb</code></a></p><p>Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as <code>aria-label=&quot;breadcrumb&quot;</code> to describe the type of navigation provided in the <code>&lt;nav&gt;</code> element, as well as applying an <code>aria-current=&quot;page&quot;</code> to the last item of the set to indicate that it represents the current page.</p><p>The dividers are automatically created in the content of the <code>::before</code> pseudo-element of <code>li</code> tags.</p>',4),p=i("pre",null,[i("code",null,'<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a class="link" href="#">Home</a></li>\n        <li class="breadcrumb-item"><a class="link" href="#">Articles</a></li>\n        <li class="breadcrumb-item active" aria-current="page">Article Title</li>\n    </ol>\n</nav>\n')],-1),u=i("p",null,[d("Long breadcrumb items can also automatically collapse into ellipsis "),i("code",null,"..."),d(".")],-1),b=i("pre",null,[i("code",null,'<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a class="link" href="#">Home</a></li>\n        <li class="breadcrumb-item"><a class="link" href="#">This is a particularly long page title to demonstrate</a></li>\n        <li class="breadcrumb-item active" aria-current="page">Article Title</li>\n    </ol>\n</nav>\n')],-1),m=i("p",null,"Additionally, breadcrumbs will automatically collapse on mobile.",-1),h=i("pre",null,[i("code",null,'<nav aria-label="breadcrumb">\n    <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a class="link" href="#">These</a></li>\n        <li class="breadcrumb-item"><a class="link" href="#">Links</a></li>\n        <li class="breadcrumb-item"><a class="link" href="#">Will</a></li>\n        <li class="breadcrumb-item"><a class="link" href="#">Totally</a></li>\n        <li class="breadcrumb-item"><a class="link" href="#">Collapse</a></li>\n        <li class="breadcrumb-item active" aria-current="page">On mobile</li>\n    </ol>\n</nav>\n')],-1),g=s('<h3 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Configure the <code>@sui/tailwind-plugins/breadcrumb</code> plugin.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n   plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n       <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sui/tailwind-plugins/breadcrumb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n           delimiter<span class="token operator">:</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span>\n       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h4 id="available-options"><a class="header-anchor" href="#available-options" aria-hidden="true">#</a> Available options</h4><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>delimiter</code></td><td><code>String</code></td><td><code>/</code></td><td>What string to use to separate breadcrumbs.</td></tr><tr><td><code>delimiterColor</code></td><td><code>String</code></td><td><code>textColor.gray.500</code></td><td>The dot-notation theme option for the delimiter colour.</td></tr><tr><td><code>itemPadding</code></td><td><code>String</code></td><td><code>padding.2</code></td><td>The dot-notation theme option for the padding between items.</td></tr><tr><td><code>maxWidth</code></td><td><code>String</code></td><td><code>maxWidth.xs</code></td><td>The dot-notation theme option for max width for an item.</td></tr><tr><td><code>textOverflow</code></td><td><code>String</code></td><td><code>ellipsis</code></td><td>The <code>text-overflow</code> CSS property when truncated.</td></tr><tr><td><code>truncateBreakpoint</code></td><td><code>Breakpoint</code></td><td><code>sm</code></td><td>The breakpoint at which items that are too long are truncated.</td></tr><tr><td><code>collapseBreakpoint</code></td><td><code>Breakpoint</code></td><td><code>xs</code></td><td>The breakpoint at which items are hidden (apart from the first and last items).</td></tr></tbody></table>',5);l.render=function(s,i,d,r,l,f){const k=e("code-preview");return a(),t("div",null,[c,n(k,{heading:"Breadcrumbs"},{default:o((()=>[p])),_:1}),u,n(k,{heading:"Collapse"},{default:o((()=>[b])),_:1}),m,n(k,{heading:"Responsiveness"},{default:o((()=>[h])),_:1}),g])};export{r as __pageData,l as default};
