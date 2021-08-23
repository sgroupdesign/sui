import{r as a,o as n,c as s,b as t,d as e,a as o}from"./app.87ead44b.js";const p=e("h1",null,"Alert",-1),l=e("p",null,[e("a",{href:"https://github.com/sgroupdesign/sui/blob/main/packages/alert",target:"_blank",rel:"noopener noreferrer"},[e("code",null,"@sgroup/alert")])],-1),c=e("p",null,"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",-1),u=o('<h2 id="installation"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>To get started, install <code>@sgroup/alert</code> via npm:</p><div class="language-sh"><pre><code>npm install @sgroup/alert\n</code></pre></div><h2 id="basic-example"><a class="header-anchor" href="#basic-example" aria-hidden="true">#</a> Basic example</h2><p>Alerts are built using the <code>Alert</code> and <code>AlertClose</code> components.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Ensure you change the <code>components</code> definition to include <code>Sui</code> as a prefix, as some component names conflict with native HTML element names and will not work.</p></div><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sui-alert</span><span class="token punctuation">&gt;</span></span>\n        Your changes were made successfully.\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sui-alert-close</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>h-5 w-5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 20 20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentColor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">fill-rule</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>evenodd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z<span class="token punctuation">&quot;</span></span> <span class="token attr-name">clip-rule</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>evenodd<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sui-alert-close</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sui-alert</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> AlertClose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@sgroup/alert&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span>\n        SuiAlert<span class="token operator">:</span> Alert<span class="token punctuation">,</span>\n        SuiAlertClose<span class="token operator">:</span> AlertClose<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="component-api"><a class="header-anchor" href="#component-api" aria-hidden="true">#</a> Component API</h2><h3 id="alert"><a class="header-anchor" href="#alert" aria-hidden="true">#</a> Alert</h3><p>The main <code>Alert</code> component.</p><table><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>tagName</code></td><td><code>String</code></td><td><code>div</code></td><td>The element the <code>Alert</code> should render as.</td></tr><tr><td><code>v-model:show</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>Whether the <code>Alert</code> is shown or not.</td></tr></tbody></table><h3 id="alertclose"><a class="header-anchor" href="#alertclose" aria-hidden="true">#</a> AlertClose</h3><p>The trigger component that closes an <code>Alert</code>.</p><table><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>tagName</code></td><td><code>String</code></td><td><code>div</code></td><td>The element the <code>AlertClose</code> should render as.</td></tr></tbody></table>',14),r='{"title":"Alert","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Basic example","slug":"basic-example"},{"level":2,"title":"Component API","slug":"component-api"},{"level":3,"title":"Alert","slug":"alert"},{"level":3,"title":"AlertClose","slug":"alertclose"}],"relativePath":"js-framework/components/alert.md","lastUpdated":1629709660346}',i={};const d=Object.assign(i,{setup:function(e){return(e,o)=>{const r=a("code-preview");return n(),s("div",null,[p,l,c,t(r,{heading:"With close button",snippet:'\n<sui-alert class="rounded-md bg-green-50 p-4" role="alert" v-model:show="alertShownByDefault">\n    <div class="flex">\n        <div class="flex-shrink-0">\n            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>\n        </div>\n\n        <div class="ml-3">\n            <p class="text-sm font-medium text-green-800">Successfully uploaded</p>\n        </div>\n\n        <div class="ml-auto pl-3">\n            <div class="-mx-1.5 -my-1.5">\n                <sui-alert-close class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">\n                    <span class="sr-only">Dismiss</span>\n                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>\n                </sui-alert-close>\n            </div>\n        </div>\n    </div>\n</sui-alert>\n'}),u])}}});export{r as __pageData,d as default};
