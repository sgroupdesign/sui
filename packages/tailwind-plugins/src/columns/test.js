const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates column classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .row {
        margin-left: -1rem;
        margin-right: -1rem;
        display: flex;
        flex-wrap: wrap
      }
      
      .col {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem
      }
      
      .row.row-small {
        margin-left: -0.5rem;
        margin-right: -0.5rem
      }
      
      .row.row-small > .col {
        padding-left: 0.5rem;
        padding-right: 0.5rem
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
