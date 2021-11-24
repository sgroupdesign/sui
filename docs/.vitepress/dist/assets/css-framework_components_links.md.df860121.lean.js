import{r as n,o as s,c as a,e,w as t,b as o,d as l,a as i}from"./app.0a68d308.js";const r='{"title":"Links","description":"","frontmatter":{},"headers":[{"level":2,"title":"Stretched link","slug":"stretched-link"},{"level":3,"title":"Configuration","slug":"configuration"}],"relativePath":"css-framework/components/links.md","lastUpdated":1637726372774}',c={},p=o("h1",null,"Links",-1),u=o("p",null,[o("a",{href:"https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-plugins/src/links",target:"_blank",rel:"noopener noreferrer"},[o("code",null,"@sgroup/tailwind-plugins/links")])],-1),d=o("p",null,[l("Links aren't styled by default, so it's up to you to add the "),o("code",null,".link"),l(" class.")],-1),k=o("pre",null,[o("code",null,'<a href="#">An unstyled link</a>\n')],-1),h=o("pre",null,[o("code",null,'<a class="link" href="#">Some link</a>\n')],-1),m=o("p",null,[l("We encourage the use of an underline by default for accessibility, but you can always invert the behaviour through utility classes. You "),o("strong",null,"should not"),l(" change this behaviour site-wide unless the design calls for this.")],-1),g=o("pre",null,[o("code",null,'<a class="link no-underline hover:underline" href="#">Some link</a>\n')],-1),f=o("p",null,[l("As usual, you can also override any classes, but the "),o("code",null,".link"),l(" class provides a good base.")],-1),x=o("pre",null,[o("code",null,'<a class="link text-red-500 no-underline hover:underline hover:text-red-800" href="#">Some link</a>\n')],-1),v=o("p",null,"There are also some themed links.",-1),b=o("pre",null,[o("code",null,'<a href="#" class="link link-primary">Primary</a>\n<a href="#" class="link link-secondary">Secondary</a>\n<a href="#" class="link link-green">Success</a>\n<a href="#" class="link link-red">Danger</a>\n<a href="#" class="link link-orange">Warning</a>\n')],-1),y=o("h2",{id:"stretched-link"},[o("a",{class:"header-anchor",href:"#stretched-link","aria-hidden":"true"},"#"),l(" Stretched link")],-1),w=o("p",null,[l("It's a common scenario to have a card layout with a CTA (button or link) and have the entire card be able to be clicked on. Rather than wrapping a "),o("code",null,"<a>"),l(" tag around the image, heading (and actual link), we can use our "),o("code",null,"stretched-link"),l(" utility.")],-1),_=o("p",null,[l("All that's required is to add a "),o("code",null,"relative"),l(" class to the parent element you want to constrain the link to.")],-1),S=o("pre",null,[o("code",null,'<div class="mx-auto grid gap-5 grid-cols-3 max-w-none">\n    <div class="flex flex-col border relative">\n        <div class="flex-shrink-0">\n            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">\n        </div>\n\n        <div class="flex-1 bg-white p-6 flex flex-col justify-between">\n            <div class="flex-1">\n                <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>\n                <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>\n            </div>\n\n            <div class="mt-6">\n                <a class="btn btn-primary stretched-link" href="#">Read more</a>\n            </div>\n        </div>\n    </div>\n\n    <div class="flex flex-col border relative">\n        <div class="flex-shrink-0">\n            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">\n        </div>\n\n        <div class="flex-1 bg-white p-6 flex flex-col justify-between">\n            <div class="flex-1">\n                <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>\n                <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>\n            </div>\n\n            <div class="mt-6">\n                <a class="link stretched-link" href="#">Read more</a>\n            </div>\n        </div>\n    </div>\n</div>\n')],-1),A=o("p",null,[l("Notice in the above examples, hovering over any portion of the card will show the hand cursor. As an added bonus, using this utility will also trigger the "),o("code",null,":hover"),l(" and "),o("code",null,":focus"),l(" states on links for superior accessibility.")],-1),T=o("p",null,[l("Not only useful for cards, you can use it in a number of scenarios where you might not want to wrap all items with a "),o("code",null,"<a>"),l(" tag.")],-1),q=o("pre",null,[o("code",null,'<dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">\n    <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r relative">\n        <dd class="text-5xl font-extrabold text-indigo-600">100%</dd>\n        <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>\n        <a href="#" class="mt-4 link stretched-link">Find out more</a>\n    </div>\n\n    <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r relative">\n        <dd class="text-5xl font-extrabold text-indigo-600">24/7</dd>\n        <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>\n        <a href="#" class="mt-4 link stretched-link">Find out more</a>\n    </div>\n\n    <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l relative">\n        <dd class="text-5xl font-extrabold text-indigo-600">100k</dd>\n        <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>\n        <a href="#" class="mt-4 link stretched-link">Find out more</a>\n    </div>\n</dl>\n')],-1),C=i('',3);c.render=function(o,l,i,r,c,j){const D=n("code-preview");return s(),a("div",null,[p,u,d,e(D,{heading:"Unstyled anchor tag"},{default:t((()=>[k])),_:1}),e(D,{heading:"Styled link"},{default:t((()=>[h])),_:1}),m,e(D,{heading:"Underline inverted"},{default:t((()=>[g])),_:1}),f,e(D,{heading:"Overrides"},{default:t((()=>[x])),_:1}),v,e(D,{heading:"Theme"},{default:t((()=>[b])),_:1}),y,w,_,e(D,{heading:"Stretched link"},{default:t((()=>[S])),_:1}),A,T,e(D,{heading:"Another stretched link example."},{default:t((()=>[q])),_:1}),C])};export{r as __pageData,c as default};
