import{o as a,c as n,a as s}from"./app.0a68d308.js";const t='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic example","slug":"basic-example"},{"level":2,"title":"Further reading","slug":"further-reading"}],"relativePath":"js-framework/components/modal.md","lastUpdated":1629684871287}',p={},e=[s('<h1>Modal</h1><p>We use the <a href="https://headlessui.dev/vue/modal" target="_blank" rel="noopener noreferrer">@headlessui/vue</a> modal components.</p><h2 id="basic-example"><a class="header-anchor" href="#basic-example" aria-hidden="true">#</a> Basic example</h2><p>Dialogs are built using the <code>Dialog</code>, <code>DialogOverlay</code>, <code>DialogTitle</code> and <code>DialogDescription</code> components.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Ensure you change the <code>components</code> definition to include <code>Hui</code> as a prefix, as some component names conflict with native HTML element names and will not work.</p></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hui-dialog</span> <span class="token attr-name">:open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setIsOpen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hui-dialog-overlay</span> <span class="token punctuation">/&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hui-dialog-title</span><span class="token punctuation">&gt;</span></span>Deactivate account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hui-dialog-title</span><span class="token punctuation">&gt;</span></span>\n        \n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hui-dialog-description</span><span class="token punctuation">&gt;</span></span>\n            This will permanently deactivate your account\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hui-dialog-description</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Are you sure you want to deactivate your account? All of your data will be\n        permanently removed. This action cannot be undone.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setIsOpen(false)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Deactivate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setIsOpen(false)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Cancel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hui-dDialog</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Dialog<span class="token punctuation">,</span> DialogOverlay<span class="token punctuation">,</span> DialogTitle<span class="token punctuation">,</span> DialogDescription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@headlessui/vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        HuiDialog<span class="token operator">:</span> Dialog<span class="token punctuation">,</span>\n        HuiDialogOverlay<span class="token operator">:</span> DialogOverlay<span class="token punctuation">,</span>\n        HuiDialogTitle<span class="token operator">:</span> DialogTitle<span class="token punctuation">,</span>\n        HuiDialogDescription<span class="token operator">:</span> DialogDescription<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="further-reading"><a class="header-anchor" href="#further-reading" aria-hidden="true">#</a> Further reading</h2><p>Refer to <a href="https://headlessui.dev/vue/modal" target="_blank" rel="noopener noreferrer">@headlessui/vue</a> for more examples and documentation.</p>',8)];p.render=function(s,t,p,o,c,l){return a(),n("div",null,e)};export{t as __pageData,p as default};
