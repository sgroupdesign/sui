import{r as n,o as a,c as s,b as t,w as e,d as o,e as p,a as c}from"./app.a3b816ba.js";const l='{"title":"Group Variants","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mobile Menu","slug":"mobile-menu"},{"level":2,"title":"Accordion","slug":"accordion"}],"relativePath":"framework/group-variants.md","lastUpdated":1629002363041}',i={},u=o("h1",null,"Group Variants",-1),r=o("p",null,[o("a",{href:"https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/group-variants/index",target:"_blank",rel:"noopener noreferrer"},[o("code",null,"@sui/tailwind-plugins/group-variants")])],-1),d=o("p",null,[p("You should hopefully be familar with the concept of "),o("a",{href:"https://tailwindcss.com/docs/configuring-variants",target:"_blank",rel:"noopener noreferrer"},"Tailwind variants"),p('. There are some special types of variants, which "group" functionality together. One of which is the '),o("code",null,"group-hover"),p(" variant.")],-1),k=o("pre",null,[o("code",null,'<div class="group border p-8">\n    <p class="text-indigo-600 group-hover:text-gray-900">New Project</p>\n    <p class="text-indigo-600 group-hover:text-gray-900">Create a new project from a variety of starting templates.</p>\n</div>\n')],-1),g=c('',23),v=o("pre",null,[o("code",null,'<div class="flex justify-end items-center bg-white">\n    <button type="button" class="btn rounded-md p-2 text-gray-400" aria-expanded="false" data-mobile-nav-open>\n        <span class="sr-only">Open menu</span>\n        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>\n    </button>\n</div>\n\n<div class="mobile-nav-open:opacity-100 mobile-nav-open:visible fixed inset-0 overflow-hidden opacity-0 invisible transition-all ease-in-out duration-500" role="dialog" aria-modal="true">\n    <div class="absolute inset-0 overflow-hidden">\n        <div class="absolute inset-0 bg-gray-500 bg-opacity-75" aria-hidden="true" data-mobile-nav-close></div>\n\n        <div class="fixed inset-y-0 right-0 max-w-full flex">\n            <div class="mobile-nav-open:translate-x-0 w-screen max-w-md transform translate-x-full transition ease-in-out duration-500">\n                <button class="btn rounded-md p-2 text-gray-400 absolute right-0 mr-8 mt-12" data-mobile-nav-close>\n                    <span class="sr-only">Close panel</span>\n                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>\n                </button>\n\n                <div class="h-full flex flex-col p-6 bg-white shadow-xl"></div>\n            </div>\n        </div>\n    </div>\n</div>\n')],-1),h=c('',8),m=o("pre",null,[o("code",null,'<div class="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">\n    <div>\n        <button class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" type="button" aria-expanded="true" onclick="parentElement.classList.toggle(\'open\')">\n            <span>What is your refund policy?</span>\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="transform rotate-180 w-5 h-5 text-purple-500"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>\n        </button>\n\n        <div class="hidden accordion-open:block px-4 pt-4 pb-2 text-sm text-gray-500">If you\'re unhappy with your purchase for any reason, email us within 90 days and we\'ll refund you in full, no questions asked.</div>\n    </div>\n\n    <div class="mt-2">\n        <button class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" type="button" aria-expanded="true" onclick="parentElement.classList.toggle(\'open\')">\n            <span>Do you offer technical support?</span>\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="transform rotate-180 w-5 h-5 text-purple-500"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>\n        </button>\n\n        <div class="hidden accordion-open:block px-4 pt-4 pb-2 text-sm text-gray-500">No.</div>\n    </div>\n</div>\n')],-1),b=c('',5);i.render=function(o,p,c,l,i,f){const y=n("code-preview");return a(),s("div",null,[u,r,d,t(y,{"body-id":"breakpoint-example",heading:"Group-hover example"},{default:e((()=>[k])),_:1}),g,t(y,{"body-id":"mobile-menu-example",heading:"Mobile menu example"},{default:e((()=>[v])),_:1}),h,t(y,{heading:"Accordion example"},{default:e((()=>[m])),_:1}),b])};export{l as __pageData,i as default};