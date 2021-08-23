# Rich Text
[`@sui/tailwind-plugins/richtext`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/richtext)

When using a variety of elements inside a Rich Text (Redactor) field, we'll want to display them 'normally'. For example, Tailwind by default will not render `<ul>` items visually as a list, which is desirable in this instance. We don't have (easy) control over adding classes to these elements.

Make sure to wrap your content in a `.richtext` class.

<code-preview heading="Rich text will apply 'normal' classes to elements">
    <div class="richtext">
        <h2>Lorem ipsum dolor sit amet</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
        <h4>Lorem ipsum dolor sit amet</h4>
        <h5>Lorem ipsum dolor sit amet</h5>

        <p><a href="#">Some link</a></p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida non velit fermentum lacinia. Nulla rutrum eu nisi vel scelerisque. Nulla mollis, lectus cursus placerat placerat, neque felis mollis est, ut iaculis dui diam quis metus. Suspendisse cursus velit eget semper ullamcorper.</p>
        <p>Suspendisse fringilla nibh a dui congue, eget pretium lorem hendrerit. Mauris risus ante, iaculis ut tristique sit amet, tincidunt id odio. Nunc metus purus, pellentesque non lectus sit amet, malesuada tempor purus.</p>

        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida non velit fermentum lacinia. Nulla rutrum eu nisi vel scelerisque.</blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida non velit fermentum lacinia. Nulla rutrum eu nisi vel scelerisque. Nulla mollis, lectus cursus placerat placerat, neque felis mollis est, ut iaculis dui diam quis metus. Suspendisse cursus velit eget semper ullamcorper.</p>
        
        <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Nulla volutpat aliquam velit
                <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies
                        <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies
                                <ul>
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                </ul>
                            </li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ul>
                    </li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                </ul>
            </li>
        </ul>

        <p>Suspendisse fringilla nibh a dui congue, eget pretium lorem hendrerit. Mauris risus ante, iaculis ut tristique sit amet, tincidunt id odio. Nunc metus purus, pellentesque non lectus sit amet, malesuada tempor purus.</p>

        <ol>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Nulla volutpat aliquam velit
                <ol>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies
                        <ol>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies
                                <ol>
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                </ol>
                            </li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                        </ol>
                    </li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                </ol>
            </li>
        </ol>

        <p>Nam euismod semper leo sit amet tristique. Cras congue pretium ligula at egestas.</p>
    </div>
</code-preview>
