import{o as n,c as s,a}from"./app.87ead44b.js";const e='{"title":"Overview","description":"","frontmatter":{},"headers":[{"level":2,"title":"No-CSS Approach","slug":"no-css-approach"},{"level":2,"title":"Modular Approach","slug":"modular-approach"},{"level":3,"title":"Tailwind preset","slug":"tailwind-preset"},{"level":3,"title":"Tailwind plugins","slug":"tailwind-plugins"}],"relativePath":"css-framework/overview.md","lastUpdated":1629709688739}',t={},o=[a('<h1>Overview</h1><p>We use <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">Tailwind</a> for CSS, due to its flexibility and ease of maintainability. This allows us to use utility classes in your HTML/Twig, rather than worrying about connecting your CSS and HTML, spending time on naming things, and making things more maintainable under a solid API.</p><p>When developing sites, always consult the <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">Tailwind docs</a> first and use their utilities, or their configuration. The S.UI framework is here as a layer on top of Tailwind to provide some quality-of-life utilities and functionality.</p><h2 id="no-css-approach"><a class="header-anchor" href="#no-css-approach" aria-hidden="true">#</a> No-CSS Approach</h2><p><strong>Don&#39;t write any CSS</strong>. It&#39;s one of the main benefits of using Tailwind, that you no longer need to write any CSS! Strive to do everything using utility classes in your HTML.</p><p><strong>However</strong> there are scenarios where you might just need to write CSS. You can navigate to <code>resources/scss</code>, which has the following structure:</p><ul><li><code>resources/</code><ul><li><code>scss/</code><ul><li><code>vendor/</code></li><li><code>style.scss</code></li></ul></li></ul></li></ul><p>As you can see, you can also use <a href="https://sass-lang.com/guide" target="_blank" rel="noopener noreferrer">SCSS</a>. The <code>style.scss</code> contains a well-commented file, split into 3 sections:</p><ul><li>Tailwind includes</li><li>Vendor code (Flickity, Formie, etc)</li><li>Site styles</li></ul><p><strong>Do not</strong> add your CSS to the <code>style.scss</code> file. This should be used as an index file and kept clean. Instead, create a new <code>.scss</code> file in <code>resources/scss</code>.</p><div class="language-scss"><pre><code><span class="token comment">// ==========================================================================</span>\n<span class="token comment">// Site Header</span>\n<span class="token comment">// ==========================================================================</span>\n\n<span class="token selector">.header-wrap </span><span class="token punctuation">{</span>\n    <span class="token comment">// Some complex CSS</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>If you&#39;ve written a component that you think might be re-usable, <a href="https://github.com/sgroupdesign/sui/issues" target="_blank" rel="noopener noreferrer">tell us about it</a>.</p><p>Any third-party related like plugins should be placed in <code>vendor</code>.</p><h2 id="modular-approach"><a class="header-anchor" href="#modular-approach" aria-hidden="true">#</a> Modular Approach</h2><p>With the above no-CSS approach in mind - how do we add our S.UI components like <code>.btn</code>, or load in defaults that we use on every project? We take a modular package approach. Instead of including numerous <code>.scss</code> files, or a lengthly <code>tailwind.config.js</code> file for <em>every</em> project, we publish these as <code>npm packages</code>.</p><p>Say we discover the <code>.btn</code> component is missing a particular reset property, and need to update it. We want this change to effect both new and old installs. Currently, we would have to copy/paste the change manually in the project files.</p><p>Or - we discover a new Tailwind plugin, or build a new component we want to include in projects from now on. The same approach applies.</p><p>We solve this in two ways: <a href="https://tailwindcss.com/docs/presets" target="_blank" rel="noopener noreferrer">Presets</a> and <a href="https://tailwindcss.com/docs/plugins" target="_blank" rel="noopener noreferrer">Plugins</a>.</p><h3 id="tailwind-preset"><a class="header-anchor" href="#tailwind-preset" aria-hidden="true">#</a> Tailwind preset</h3><p>A <a href="https://tailwindcss.com/docs/presets" target="_blank" rel="noopener noreferrer">preset</a> is just a regular Tailwind configuration object. We take what you&#39;d normally add to your <code>tailwind.config.js</code> file or every project, and add it to a preset to include instead.</p><p>The below becomes the entirety of our <code>tailwind.config.js</code> file for a web project.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    presets<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sgroup/tailwind-base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>This covers:</p><ul><li>Setting up JIT and purge options.</li><li>Including expanded classes for spacing, z-index, opacity.</li><li>Including expanded colours, and <code>primary</code> and <code>secondary</code>.</li><li>A <code>.container</code> that&#39;s centred and padded.</li><li>Some plugins <code>@tailwindcss/forms</code> and <code>@tailwindcss/line-clamp</code>.</li><li>Extending the default Tailwind configuration.</li></ul><p>The best part of using a preset is that anything you define in your project&#39;s <code>tailwind.config.js</code> file overrides the preset.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    presets<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sgroup/tailwind-base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n    theme<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Extend the preset rules</span>\n        extend<span class="token operator">:</span> <span class="token punctuation">{</span>\n            colors<span class="token operator">:</span> <span class="token punctuation">{</span>\n                primary<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    <span class="token number">500</span><span class="token operator">:</span> <span class="token string">&#39;#5A67D8&#39;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n            zIndex<span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token number">9001</span><span class="token operator">:</span> <span class="token number">9001</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n        <span class="token comment">// Completely replace the font families</span>\n        fontFamily<span class="token operator">:</span> <span class="token punctuation">{</span>\n            body<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sans-serif&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            heading<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sans-serif&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p>Here, despite configuration existing for <code>zIndex</code> and <code>colors.primary</code> in the preset these will be merged with our configuration. You can also completely override anything defined in the preset like you normally would, moving rules outside of <code>theme.extend</code>.</p><p>Through this package, we can continue to update this preset as we grow. Projects need only run <code>npm update</code> to get the latest and greatest changes. Take a look at the <a href="https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-base/src/index.js" target="_blank" rel="noopener noreferrer">@sgroup/tailwind-base</a> package for all it does.</p><h4 id="preset-configuration"><a class="header-anchor" href="#preset-configuration" aria-hidden="true">#</a> Preset configuration</h4><p>You can provide an object to the preset to override some settings.</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n   presets<span class="token operator">:</span> <span class="token punctuation">[</span>\n       <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@sgroup/tailwind-base&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n           screens<span class="token operator">:</span> <span class="token punctuation">{</span>\n               <span class="token comment">// Custom breakpoints for your project</span>\n               xs<span class="token operator">:</span> <span class="token number">480</span><span class="token punctuation">,</span> sm<span class="token operator">:</span> <span class="token number">640</span><span class="token punctuation">,</span> md<span class="token operator">:</span> <span class="token number">768</span><span class="token punctuation">,</span> lg<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>\n           <span class="token punctuation">}</span><span class="token punctuation">,</span>\n       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n   <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="tailwind-plugins"><a class="header-anchor" href="#tailwind-plugins" aria-hidden="true">#</a> Tailwind plugins</h3><p><a href="https://tailwindcss.com/docs/plugins" target="_blank" rel="noopener noreferrer">Plugins</a> let you register new styles for Tailwind using JavaScript instead of CSS. We use this to allow easy inclusion of a number of custom components and utilities:</p><ul><li>Alerts</li><li>Aspect ratio utilities</li><li>Breadcrumbs</li><li>Break-out container</li><li>Buttons</li><li>Columns</li><li>Headings</li><li>Horizontal rule</li><li>Icons</li><li>Images</li><li>Lazyload images</li><li>Links</li><li>Loading spinner</li><li>Position utilities</li><li>Rich-text</li><li>Social colours</li></ul><p>Despite these being &quot;just CSS&quot;, we use plugins (written in JS) so they can be published as <code>npm</code> packages, which we can include in projects, and run <code>npm update</code> whenever changes are made to each component - or new ones added! Otherwise, we find ourselves manually updating CSS per-project, not knowing if the code is the latest, buggy or non-standard.</p><p>For example, the <a href="/css-framework/components/buttons.html">Button</a> component adds <code>.btn-*</code> classes. This component is largely the same for every project, but you still want to control things like padding, font, and colours. Other components are even more &quot;hands-off&quot; and don&#39;t need to be configured much, if at all from sane defaults.</p><p>Each plugin adds available options to configure, outlined in each component doc page.</p><p>Let&#39;s look at a button component, which we can configure via the <code>theme</code>.</p><div class="language-js"><pre><code>theme<span class="token operator">:</span> <span class="token punctuation">{</span>\n    extend<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token function-variable function">button</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n                <span class="token comment">// Styles for all buttons e.g. `.btn`.</span>\n                <span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n                    paddingLeft<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;padding.4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    paddingRight<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;padding.4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n                <span class="token comment">// Add new named items, like `.btn-outline`.</span>\n                outline<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    backgroundColor<span class="token operator">:</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">,</span>\n                    color<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;textColor.primary.500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    borderColor<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;borderColor.primary.500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// Completely override `button.primary`</span>\n    <span class="token function-variable function">button</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            primary<span class="token operator">:</span> <span class="token punctuation">{</span>\n                color<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;textColor.white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                textTransform<span class="token operator">:</span> <span class="token string">&#39;uppercase&#39;</span><span class="token punctuation">,</span>\n\n                hover<span class="token operator">:</span> <span class="token punctuation">{</span>\n                    borderColor<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;borderColor.white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                    backgroundColor<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;backgroundColor.white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><p>As usual, we can extend the plugin component styles, or completely replace them using <code>theme.extend</code> or just <code>theme</code>. Be mindful when you completely override plugin styles.</p><p>For the above, we&#39;re:</p><ul><li>Setting the <code>px</code> for all <code>.btn</code> instances using <code>DEFAULT</code>.</li><li>Adding a new class <code>.btn-outline</code>.</li><li>Completely overriding <code>.btn-primary</code> with just the configuration defined here.</li></ul><p>You&#39;ll notice configuring components is very CSS-like - that&#39;s because it is! Tailwind uses <a href="https://tailwindcss.com/docs/plugins#css-in-js-syntax" target="_blank" rel="noopener noreferrer"><code>css-in-js</code></a> syntax. The only real difference being that property names are in <code>camelCase</code> - but you can use <code>kebab-case</code> if you prefer.</p><div class="language-js"><pre><code><span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    paddingLeft<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;padding.4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    paddingRight<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;padding.4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n<span class="token comment">// Is the exact same as:</span>\n<span class="token constant">DEFAULT</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;padding-left&#39;</span><span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;padding.4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;padding-right&#39;</span><span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;padding.4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><p>You can even nest properties, using SCSS-like behaviour with <code>&amp;</code> and media queries.</p><div class="language-js"><pre><code>primary<span class="token operator">:</span> <span class="token punctuation">{</span>\n    textTransform<span class="token operator">:</span> <span class="token string">&#39;uppercase&#39;</span><span class="token punctuation">,</span>\n\n    <span class="token string">&#39;&amp;:hover&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        backgroundColor<span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token string">&#39;backgroundColor.white&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token string">&#39;@media screen(sm)&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        textTransform<span class="token operator">:</span> <span class="token string">&#39;lowercase&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div>',46)];t.render=function(a,e,t,p,c,i){return n(),s("div",null,o)};export{e as __pageData,t as default};