const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates image classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .img-cover {
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat
      }
      
      .img-contain {
        height: 100%;
        width: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
