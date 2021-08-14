const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates breadcrumb classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .breadcrumb {
        margin: 0px;
        display: flex;
        list-style-type: none;
        flex-wrap: wrap;
        padding: 0px;
      }
      
      .breadcrumb-item {
        text-overflow: ellipsis;
        max-width: 20rem;
        overflow: hidden;
        white-space: nowrap;
      }
      
      @media {
        .breadcrumb-item {
          max-width: none;
        }
      }
      
      .breadcrumb-item + .breadcrumb-item {
        padding-left: 0.5rem;
      }
      
      .breadcrumb-item + .breadcrumb-item:before {
        content: '/';
        display: inline-block;
        padding-right: 0.5rem;
        color: #6b7280;
      }
      
      .breadcrumb-item:not(:first-child):not(:last-child) {
        display: none;
      }
      
      @media {
        .breadcrumb-item:not(:first-child):not(:last-child) {
          display: block;
        }
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
