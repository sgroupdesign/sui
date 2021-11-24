import{r as e,o as t,c as o,e as a,w as n,a as s,b as l}from"./app.0a68d308.js";const d='{"title":"Mobile Nav","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Available options","slug":"available-options"},{"level":2,"title":"Examples","slug":"examples"}],"relativePath":"js-framework/components/mobile-nav.md","lastUpdated":1629709654441}',i={},r=s('<h1>Mobile Nav</h1><p><a href="https://github.com/sgroupdesign/sui/blob/main/packages/mobile-nav" target="_blank" rel="noopener noreferrer"><code>@sgroup/mobile-nav</code></a></p><p>The mobile nav component is a vanilla JS component that aims to do a single thing - toggle a class on the <code>&lt;html&gt;</code> element, to let other components on the page control how the mobile menu should be shown. It&#39;s this hands-off approach that allows each project to use this component, withough being opinionated at all.</p><p>Despite it being a glorified &quot;class-toggler&quot; - there are some handy utilities specifically for mobile menus.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Import the <code>@sgroup/mobile-nav</code> module, and call its constructor.</p><div class="language-js"><pre><code><span class="token keyword">import</span> MobileNav <span class="token keyword">from</span> <span class="token string">&#39;@sgroup/mobile-nav&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">MobileNav</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// ....</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="available-options"><a class="header-anchor" href="#available-options" aria-hidden="true">#</a> Available options</h2><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>openSelector</code></td><td><code>String</code></td><td><code>[data-mobile-nav-open]</code></td><td>The selector string for all open triggers (supports multiple)</td></tr><tr><td><code>closeSelector</code></td><td><code>String</code></td><td><code>[data-mobile-nav-close]</code></td><td>The selector string for all close triggers (supports multiple)</td></tr><tr><td><code>activeClass</code></td><td><code>String</code></td><td><code>mobile-nav-open</code></td><td>The class to toggle on the <code>&lt;html&gt;</code> element when clicked.</td></tr><tr><td><code>classElement</code></td><td><code>HTMLElement</code></td><td><code>document.documentElement</code></td><td>The element the active class should be applied to.</td></tr><tr><td><code>enableScrollLock</code></td><td><code>Boolean</code></td><td><code>true</code></td><td>Whether to lock scrolling when triggered.</td></tr><tr><td><code>scrollLockElement</code></td><td><code>HTMLElement</code></td><td><code>document.body</code></td><td>The element scroll-locking should apply to.</td></tr><tr><td><code>scrollLockOptions</code></td><td><code>Object</code></td><td><code>{ reserveScrollBarGap: true }</code></td><td>Settings for the <code>body-scroll-lock</code> package.</td></tr></tbody></table><h2 id="examples"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>',10),c=l("pre",null,[l("code",null,'<div class="flex justify-end items-center bg-white">\n    <button type="button" class="btn rounded-md p-2 text-gray-400" aria-expanded="false" data-mobile-nav-open>\n        <span class="sr-only">Open menu</span>\n        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>\n    </button>\n</div>\n\n<div class="mobile-nav-open:opacity-100 mobile-nav-open:visible fixed inset-0 overflow-hidden opacity-0 invisible transition-all ease-in-out duration-500" role="dialog" aria-modal="true">\n    <div class="absolute inset-0 overflow-hidden">\n        <div class="absolute inset-0 bg-gray-500 bg-opacity-75" aria-hidden="true" data-mobile-nav-close></div>\n\n        <div class="fixed inset-y-0 right-0 max-w-full flex">\n            <div class="mobile-nav-open:translate-x-0 w-screen max-w-md transform translate-x-full transition ease-in-out duration-500">\n                <button class="btn rounded-md p-2 text-gray-400 absolute right-0 mr-8 mt-12" data-mobile-nav-close>\n                    <span class="sr-only">Close panel</span>\n                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>\n                </button>\n\n                <div class="h-full flex flex-col p-6 bg-white shadow-xl"></div>\n            </div>\n        </div>\n    </div>\n</div>\n')],-1);i.render=function(s,l,d,i,p,h){const u=e("code-preview");return t(),o("div",null,[r,a(u,{"body-id":"mobile-menu-example",heading:"Mobile menu example"},{default:n((()=>[c])),_:1})])};export{d as __pageData,i as default};
