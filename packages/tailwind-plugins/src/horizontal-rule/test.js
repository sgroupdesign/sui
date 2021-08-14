const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates horizontal-rule classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .hr {
        border: 0;
        outline: 0;
        height: 1px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        background-color: #9ca3af
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
