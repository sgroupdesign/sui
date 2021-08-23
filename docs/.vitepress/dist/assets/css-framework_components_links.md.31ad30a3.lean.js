import{r as e,o as t,c as l,b as n,w as a,d as i,e as s}from"./app.d3da16a8.js";const r='{"title":"Links","description":"","frontmatter":{},"headers":[{"level":2,"title":"Stretched link","slug":"stretched-link"}],"relativePath":"css-framework/components/links.md","lastUpdated":1629439914666}',o={},d=i("h1",null,"Links",-1),c=i("p",null,[i("a",{href:"https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/links",target:"_blank",rel:"noopener noreferrer"},[i("code",null,"@sui/tailwind-plugins/links")])],-1),u=i("p",null,[s("Links aren't styled by default, so it's up to you to add the "),i("code",null,".link"),s(" class.")],-1),h=i("pre",null,[i("code",null,'<a href="#">An unstyled link</a>\n')],-1),m=i("pre",null,[i("code",null,'<a class="link" href="#">Some link</a>\n')],-1),f=i("p",null,[s("We encourage the use of an underline by default for accessibility, but you can always invert the behaviour through utility classes. You "),i("strong",null,"should not"),s(" change this behaviour site-wide unless the design calls for this.")],-1),p=i("pre",null,[i("code",null,'<a class="link no-underline hover:underline" href="#">Some link</a>\n')],-1),g=i("p",null,[s("As usual, you can also override any classes, but the "),i("code",null,".link"),s(" class provides a good base.")],-1),x=i("pre",null,[i("code",null,'<a class="link text-red-500 no-underline hover:underline hover:text-red-800" href="#">Some link</a>\n')],-1),b=i("h2",{id:"stretched-link"},[i("a",{class:"header-anchor",href:"#stretched-link","aria-hidden":"true"},"#"),s(" Stretched link")],-1),v=i("p",null,[s("It's a common scenario to have a card layout with a CTA (button or link) and have the entire card be able to be clicked on. Rather than wrapping a "),i("code",null,"<a>"),s(" tag around the image, heading (and actual link), we can use our "),i("code",null,"stretched-link"),s(" utility.")],-1),k=i("p",null,[s("All that's required is to add a "),i("code",null,"relative"),s(" class to the parent element you want to constrain the link to.")],-1),y=i("pre",null,[i("code",null,'<div class="mx-auto grid gap-5 grid-cols-3 max-w-none">\n    <div class="flex flex-col border relative">\n        <div class="flex-shrink-0">\n            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">\n        </div>\n\n        <div class="flex-1 bg-white p-6 flex flex-col justify-between">\n            <div class="flex-1">\n                <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>\n                <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>\n            </div>\n\n            <div class="mt-6">\n                <a class="btn btn-primary stretched-link" href="#">Read more</a>\n            </div>\n        </div>\n    </div>\n\n    <div class="flex flex-col border relative">\n        <div class="flex-shrink-0">\n            <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">\n        </div>\n\n        <div class="flex-1 bg-white p-6 flex flex-col justify-between">\n            <div class="flex-1">\n                <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>\n                <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>\n            </div>\n\n            <div class="mt-6">\n                <a class="link stretched-link" href="#">Read more</a>\n            </div>\n        </div>\n    </div>\n</div>\n')],-1),w=i("p",null,[s("Notice in the above examples, hovering over any portion of the card will show the hand cursor. As an added bonus, using this utility will also trigger the "),i("code",null,":hover"),s(" and "),i("code",null,":focus"),s(" states on links for superior accessibility.")],-1),q=i("p",null,[s("Not only useful for cards, you can use it in a number of scenarios where you might not want to wrap all items with a "),i("code",null,"<a>"),s(" tag.")],-1),A=i("pre",null,[i("code",null,'<dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">\n    <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r relative">\n        <dd class="text-5xl font-extrabold text-indigo-600">100%</dd>\n        <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>\n        <a href="#" class="mt-4 link stretched-link">Find out more</a>\n    </div>\n\n    <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r relative">\n        <dd class="text-5xl font-extrabold text-indigo-600">24/7</dd>\n        <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>\n        <a href="#" class="mt-4 link stretched-link">Find out more</a>\n    </div>\n\n    <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l relative">\n        <dd class="text-5xl font-extrabold text-indigo-600">100k</dd>\n        <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>\n        <a href="#" class="mt-4 link stretched-link">Find out more</a>\n    </div>\n</dl>\n')],-1);o.render=function(i,s,r,o,j,S){const _=e("code-preview");return t(),l("div",null,[d,c,u,n(_,{heading:"Unstyled anchor tag"},{default:a((()=>[h])),_:1}),n(_,{heading:"Styled link"},{default:a((()=>[m])),_:1}),f,n(_,{heading:"Underline inverted"},{default:a((()=>[p])),_:1}),g,n(_,{heading:"Overrides"},{default:a((()=>[x])),_:1}),b,v,k,n(_,{heading:"Stretched link"},{default:a((()=>[y])),_:1}),w,q,n(_,{heading:"Another stretched link example."},{default:a((()=>[A])),_:1})])};export{r as __pageData,o as default};
