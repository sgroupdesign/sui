const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates richtext classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .richtext h2 {
        margin-bottom: 1rem;
      }
      
      .richtext h3 {
        margin-bottom: 0.75rem;
      }
      
      .richtext h4, .richtext h5, .richtext h6 {
        margin-bottom: 0.5rem;
      }
      
      .richtext blockquote {
        margin-bottom: 1rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      
      .richtext p {
        margin-bottom: 1rem;
      }
      
      .richtext ul, .richtext ol {
        margin-bottom: 1rem;
      }
      
      .richtext ul ul, .richtext ul ol, .richtext ol ul, .richtext ol ol {
        margin-bottom: 0px;
      }
      
      .richtext ul li {
        margin-left: 1rem;
        list-style-type: disc;
      }
      
      .richtext ul li li {
        list-style-type: circle;
      }
      
      .richtext ol li {
        margin-left: 1rem;
        list-style-type: decimal;
      }
      
      .richtext ol li li {
        list-style-type: lower-alpha;
      }
      
      .richtext > *:last-child {
        margin-bottom: 0px;
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
