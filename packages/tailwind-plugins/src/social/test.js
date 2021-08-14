const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates social classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .social-facebook {
        background-color: #537bbd;
      }
      
      .social-facebook:hover {
        background-color: color(#537bbd shade(10%));
      }
      
      .social-google {
        background-color: #444749;
      }
      
      .social-google:hover {
        background-color: color(#444749 shade(10%));
      }
      
      .social-twitter {
        background-color: #78cdf0;
      }
      
      .social-twitter:hover {
        background-color: color(#78cdf0 shade(10%));
      }
      
      .social-linkedin {
        background-color: #1e88c9;
      }
      
      .social-linkedin:hover {
        background-color: color(#1e88c9 shade(10%));
      }
      
      .social-instagram {
        background-color: #696a6a;
      }
      
      .social-instagram:hover {
        background-color: color(#696a6a shade(10%));
      }
      
      .social-youtube {
        background-color: #e9654b;
      }
      
      .social-youtube:hover {
        background-color: color(#e9654b shade(10%));
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
