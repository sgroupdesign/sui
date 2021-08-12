import{r as e,o as i,c as l,d as s,w as t,b as u,e as n}from"./app.60fc63aa.js";const a='{"title":"Rich Text","description":"","frontmatter":{},"relativePath":"framework/components/richtext.md","lastUpdated":1628735710193}',r={},o=u("h1",null,"Rich Text",-1),m=u("p",null,[n("When using a variety of elements inside a Rich Text (Redactor) field, we'll want to display them 'normally'. For example, Tailwind by default will not render "),u("code",null,"<ul>"),n(" items visually as a list, which is desirable in this instance. We don't have (easy) control over adding classes to these elements.")],-1),c=u("p",null,[n("Make sure to wrap your content in a "),u("code",null,".richtext"),n(" class.")],-1),p=u("pre",null,[u("code",null,'<div class="richtext">\n    <h2>Lorem ipsum dolor sit amet</h2>\n    <h3>Lorem ipsum dolor sit amet</h3>\n    <h4>Lorem ipsum dolor sit amet</h4>\n    <h5>Lorem ipsum dolor sit amet</h5>\n\n    <p><a href="#">Some link</a></p>\n\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida non velit fermentum lacinia. Nulla rutrum eu nisi vel scelerisque. Nulla mollis, lectus cursus placerat placerat, neque felis mollis est, ut iaculis dui diam quis metus. Suspendisse cursus velit eget semper ullamcorper.</p>\n    <p>Suspendisse fringilla nibh a dui congue, eget pretium lorem hendrerit. Mauris risus ante, iaculis ut tristique sit amet, tincidunt id odio. Nunc metus purus, pellentesque non lectus sit amet, malesuada tempor purus.</p>\n\n    <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida non velit fermentum lacinia. Nulla rutrum eu nisi vel scelerisque.</blockquote>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida non velit fermentum lacinia. Nulla rutrum eu nisi vel scelerisque. Nulla mollis, lectus cursus placerat placerat, neque felis mollis est, ut iaculis dui diam quis metus. Suspendisse cursus velit eget semper ullamcorper.</p>\n    \n    <ul>\n        <li>Lorem ipsum dolor sit amet</li>\n        <li>Nulla volutpat aliquam velit\n            <ul>\n                <li>Phasellus iaculis neque</li>\n                <li>Purus sodales ultricies\n                    <ul>\n                        <li>Phasellus iaculis neque</li>\n                        <li>Purus sodales ultricies\n                            <ul>\n                                <li>Phasellus iaculis neque</li>\n                                <li>Purus sodales ultricies</li>\n                            </ul>\n                        </li>\n                        <li>Vestibulum laoreet porttitor sem</li>\n                        <li>Ac tristique libero volutpat at</li>\n                    </ul>\n                </li>\n                <li>Vestibulum laoreet porttitor sem</li>\n                <li>Ac tristique libero volutpat at</li>\n            </ul>\n        </li>\n    </ul>\n\n    <p>Suspendisse fringilla nibh a dui congue, eget pretium lorem hendrerit. Mauris risus ante, iaculis ut tristique sit amet, tincidunt id odio. Nunc metus purus, pellentesque non lectus sit amet, malesuada tempor purus.</p>\n\n    <ol>\n        <li>Lorem ipsum dolor sit amet</li>\n        <li>Nulla volutpat aliquam velit\n            <ol>\n                <li>Phasellus iaculis neque</li>\n                <li>Purus sodales ultricies\n                    <ol>\n                        <li>Phasellus iaculis neque</li>\n                        <li>Purus sodales ultricies\n                            <ol>\n                                <li>Phasellus iaculis neque</li>\n                                <li>Purus sodales ultricies</li>\n                            </ol>\n                        </li>\n                        <li>Vestibulum laoreet porttitor sem</li>\n                        <li>Ac tristique libero volutpat at</li>\n                    </ol>\n                </li>\n                <li>Vestibulum laoreet porttitor sem</li>\n                <li>Ac tristique libero volutpat at</li>\n            </ol>\n        </li>\n    </ol>\n\n    <p>Nam euismod semper leo sit amet tristique. Cras congue pretium ligula at egestas.</p>\n</div>\n')],-1);r.render=function(u,n,a,r,d,h){const v=e("code-preview");return i(),l("div",null,[o,m,c,s(v,{heading:"Rich text will apply 'normal' classes to elements"},{default:t((()=>[p])),_:1})])};export{a as __pageData,r as default};
