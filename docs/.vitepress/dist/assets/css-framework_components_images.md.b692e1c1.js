import{r as e,o as a,c as s,b as o,w as t,d as i,a as n,e as r}from"./app.87ead44b.js";const l='{"title":"Images","description":"","frontmatter":{},"headers":[{"level":2,"title":"Background Images","slug":"background-images"},{"level":3,"title":"Cover","slug":"cover"},{"level":3,"title":"Contain","slug":"contain"}],"relativePath":"css-framework/components/images.md","lastUpdated":1629709736862}',c={},d=i("h1",null,"Images",-1),g=i("p",null,[i("a",{href:"https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-plugins/src/images",target:"_blank",rel:"noopener noreferrer"},[i("code",null,"@sgroup/tailwind-plugins/images")])],-1),p=i("p",null,"Images are responsive by default.",-1),h=i("pre",null,[i("code",null,'<img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80" alt="Responsive image">\n')],-1),u=n('<h2 id="background-images"><a class="header-anchor" href="#background-images" aria-hidden="true">#</a> Background Images</h2><p>Images can be applied to background of elements, and there are helper classes to make this easier for you. Typically, these implementations should combine with lazyloading. These also require the use of <a href="/css-framework/components/aspect-ratios.html">aspect ratio helpers</a> or a fixed height.</p><h3 id="cover"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>Using <code>.img-cover</code> will fill the image to the container dimensions.</p>',4),m=i("pre",null,[i("code",null,'<div class="img-cover aspect aspect-21x9" style="background-image: url(\'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80\');"></div>\n')],-1),f=i("h3",{id:"contain"},[i("a",{class:"header-anchor",href:"#contain","aria-hidden":"true"},"#"),r(" Contain")],-1),b=i("p",null,[r("Using "),i("code",null,".img-contain"),r(" will constrain the image to the container dimensions.")],-1),v=i("pre",null,[i("code",null,'<div class="img-contain aspect aspect-21x9" style="background-image: url(\'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80\');"></div>\n')],-1);c.render=function(i,n,r,l,c,_){const k=e("code-preview");return a(),s("div",null,[d,g,p,o(k,{heading:"Images"},{default:t((()=>[h])),_:1}),u,o(k,{heading:"Cover"},{default:t((()=>[m])),_:1}),f,b,o(k,{"body-id":"bg-contain-example",heading:"Contain"},{default:t((()=>[v])),_:1})])};export{l as __pageData,c as default};
