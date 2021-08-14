const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates alert classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .alert {
        position: relative;
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem
      }
      
      .alert-transparent {
        background-color: transparent;
        color: #fff
      }
      
      .alert-current {
        background-color: currentColor;
        color: #fff
      }
      
      .alert-black {
        background-color: #000;
        color: #fff
      }
      
      .alert-white {
        background-color: #fff;
        color: #fff
      }
      
      .alert-gray {
        background-color: #6b7280;
        color: #fff
      }
      
      .alert-red {
        background-color: #ef4444;
        color: #fff
      }
      
      .alert-yellow {
        background-color: #f59e0b;
        color: #fff
      }
      
      .alert-green {
        background-color: #10b981;
        color: #fff
      }
      
      .alert-blue {
        background-color: #3b82f6;
        color: #fff
      }
      
      .alert-indigo {
        background-color: #6366f1;
        color: #fff
      }
      
      .alert-purple {
        background-color: #8b5cf6;
        color: #fff
      }
      
      .alert-pink {
        background-color: #ec4899;
        color: #fff
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
