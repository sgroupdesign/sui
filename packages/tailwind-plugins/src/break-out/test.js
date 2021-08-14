const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates break-out classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .break-out {
        position: relative;
        width: 100vw;
        left: calc(-1 * (100vw - 100%) / 2)
      }
      
      @media {
        .xs\\:break-out {
          position: relative;
          width: 100vw;
          left: calc(-1 * (100vw - 100%) / 2)
        }
      }
      
      @media {
        .sm\\:break-out {
          position: relative;
          width: 100vw;
          left: calc(-1 * (100vw - 100%) / 2)
        }
      }
      
      @media {
        .md\\:break-out {
          position: relative;
          width: 100vw;
          left: calc(-1 * (100vw - 100%) / 2)
        }
      }
      
      @media {
        .lg\\:break-out {
          position: relative;
          width: 100vw;
          left: calc(-1 * (100vw - 100%) / 2)
        }
      }
      
      @media {
        .xl\\:break-out {
          position: relative;
          width: 100vw;
          left: calc(-1 * (100vw - 100%) / 2)
        }
      }
      
      @media {
        .\\32xl\\:break-out {
          position: relative;
          width: 100vw;
          left: calc(-1 * (100vw - 100%) / 2)
        }
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
