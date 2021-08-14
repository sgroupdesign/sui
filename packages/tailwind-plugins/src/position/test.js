const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates position classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .align-y {
        top: 50%;
        transform: translate(0, -50%)
      }
      
      .align-x {
        left: 50%;
        transform: translate(-50%, 0)
      }
      
      .align-x-y {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
      }
      
      @media {
        .xs\\:align-y {
          top: 50%;
          transform: translate(0, -50%)
        }
      
        .xs\\:align-x {
          left: 50%;
          transform: translate(-50%, 0)
        }
      
        .xs\\:align-x-y {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }
      
      @media {
        .sm\\:align-y {
          top: 50%;
          transform: translate(0, -50%)
        }
      
        .sm\\:align-x {
          left: 50%;
          transform: translate(-50%, 0)
        }
      
        .sm\\:align-x-y {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }
      
      @media {
        .md\\:align-y {
          top: 50%;
          transform: translate(0, -50%)
        }
      
        .md\\:align-x {
          left: 50%;
          transform: translate(-50%, 0)
        }
      
        .md\\:align-x-y {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }
      
      @media {
        .lg\\:align-y {
          top: 50%;
          transform: translate(0, -50%)
        }
      
        .lg\\:align-x {
          left: 50%;
          transform: translate(-50%, 0)
        }
      
        .lg\\:align-x-y {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }
      
      @media {
        .xl\\:align-y {
          top: 50%;
          transform: translate(0, -50%)
        }
      
        .xl\\:align-x {
          left: 50%;
          transform: translate(-50%, 0)
        }
      
        .xl\\:align-x-y {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }
      
      @media {
        .\\32xl\\:align-y {
          top: 50%;
          transform: translate(0, -50%)
        }
      
        .\\32xl\\:align-x {
          left: 50%;
          transform: translate(-50%, 0)
        }
      
        .\\32xl\\:align-x-y {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
