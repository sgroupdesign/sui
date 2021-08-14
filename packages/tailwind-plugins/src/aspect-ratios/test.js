const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates aspect-ratio classes', () => {
    const config = {
        theme: {
            aspectRatio: {
                1: '1',
                33: '33',
            },
        },

        variants: {
            aspectRatio: false,
        },
    };

    const output = `
    .aspect {
      position: relative;
      width: 100%;
    }
    
    .aspect::before {
      display: block;
      padding-bottom: var(--aspect-ratio);
      content: '';
    }
    
    .aspect > * {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    
    .aspect-none::before {
      padding-bottom: 0px;
    }
    
    .aspect-none > * {
      position: static;
      height: auto;
      width: auto;
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
    }
    
    .aspect-1x1 {
      --aspect-ratio: calc(1 / 1 * 100%);
    }
    
    .aspect-1x33 {
      --aspect-ratio: calc(33 / 1 * 100%);
    }
    
    .aspect-33x1 {
      --aspect-ratio: calc(1 / 33 * 100%);
    }
    
    .aspect-33x33 {
      --aspect-ratio: calc(33 / 33 * 100%);
    }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
