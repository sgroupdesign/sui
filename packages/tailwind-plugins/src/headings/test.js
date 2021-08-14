const plugin = require('./index');
const { generateComponents } = require('../../../../jest/generators');

test('it generates heading classes', () => {
    const config = {
        theme: {

        },
    };

    const output = `
      .h1,
      .h2,
      .h3,
      .h4,
      .h5,
      .h6 {
        font-weight: 500;
        line-height: 1.25
      }
      
      .h1,
      .richtext h1 {
        font-size: 2.25rem;
        line-height: 2.5rem
      }
      
      .h2,
      .richtext h2 {
        font-size: 1.875rem;
        line-height: 2.25rem
      }
      
      .h3,
      .richtext h3 {
        font-size: 1.5rem;
        line-height: 2rem
      }
      
      .h4,
      .richtext h4 {
        font-size: 1.25rem;
        line-height: 1.75rem
      }
      
      .h5,
      .richtext h5 {
        font-size: 1.125rem;
        line-height: 1.75rem
      }
      
      .h6,
      .richtext h6 {
        font-size: 1rem;
        line-height: 1.5rem
      }
      
      @media {
        .xs\\:h1,
      .xs\\:h2,
      .xs\\:h3,
      .xs\\:h4,
      .xs\\:h5,
      .xs\\:h6 {
          font-weight: 500;
          line-height: 1.25
        }
      
        .xs\\:h1,
      .xs\\:richtext h1 {
          font-size: 2.25rem;
          line-height: 2.5rem
        }
      
        .xs\\:h2,
      .xs\\:richtext h2 {
          font-size: 1.875rem;
          line-height: 2.25rem
        }
      
        .xs\\:h3,
      .xs\\:richtext h3 {
          font-size: 1.5rem;
          line-height: 2rem
        }
      
        .xs\\:h4,
      .xs\\:richtext h4 {
          font-size: 1.25rem;
          line-height: 1.75rem
        }
      
        .xs\\:h5,
      .xs\\:richtext h5 {
          font-size: 1.125rem;
          line-height: 1.75rem
        }
      
        .xs\\:h6,
      .xs\\:richtext h6 {
          font-size: 1rem;
          line-height: 1.5rem
        }
      }
      
      @media {
        .sm\\:h1,
      .sm\\:h2,
      .sm\\:h3,
      .sm\\:h4,
      .sm\\:h5,
      .sm\\:h6 {
          font-weight: 500;
          line-height: 1.25
        }
      
        .sm\\:h1,
      .sm\\:richtext h1 {
          font-size: 2.25rem;
          line-height: 2.5rem
        }
      
        .sm\\:h2,
      .sm\\:richtext h2 {
          font-size: 1.875rem;
          line-height: 2.25rem
        }
      
        .sm\\:h3,
      .sm\\:richtext h3 {
          font-size: 1.5rem;
          line-height: 2rem
        }
      
        .sm\\:h4,
      .sm\\:richtext h4 {
          font-size: 1.25rem;
          line-height: 1.75rem
        }
      
        .sm\\:h5,
      .sm\\:richtext h5 {
          font-size: 1.125rem;
          line-height: 1.75rem
        }
      
        .sm\\:h6,
      .sm\\:richtext h6 {
          font-size: 1rem;
          line-height: 1.5rem
        }
      }
      
      @media {
        .md\\:h1,
      .md\\:h2,
      .md\\:h3,
      .md\\:h4,
      .md\\:h5,
      .md\\:h6 {
          font-weight: 500;
          line-height: 1.25
        }
      
        .md\\:h1,
      .md\\:richtext h1 {
          font-size: 2.25rem;
          line-height: 2.5rem
        }
      
        .md\\:h2,
      .md\\:richtext h2 {
          font-size: 1.875rem;
          line-height: 2.25rem
        }
      
        .md\\:h3,
      .md\\:richtext h3 {
          font-size: 1.5rem;
          line-height: 2rem
        }
      
        .md\\:h4,
      .md\\:richtext h4 {
          font-size: 1.25rem;
          line-height: 1.75rem
        }
      
        .md\\:h5,
      .md\\:richtext h5 {
          font-size: 1.125rem;
          line-height: 1.75rem
        }
      
        .md\\:h6,
      .md\\:richtext h6 {
          font-size: 1rem;
          line-height: 1.5rem
        }
      }
      
      @media {
        .lg\\:h1,
      .lg\\:h2,
      .lg\\:h3,
      .lg\\:h4,
      .lg\\:h5,
      .lg\\:h6 {
          font-weight: 500;
          line-height: 1.25
        }
      
        .lg\\:h1,
      .lg\\:richtext h1 {
          font-size: 2.25rem;
          line-height: 2.5rem
        }
      
        .lg\\:h2,
      .lg\\:richtext h2 {
          font-size: 1.875rem;
          line-height: 2.25rem
        }
      
        .lg\\:h3,
      .lg\\:richtext h3 {
          font-size: 1.5rem;
          line-height: 2rem
        }
      
        .lg\\:h4,
      .lg\\:richtext h4 {
          font-size: 1.25rem;
          line-height: 1.75rem
        }
      
        .lg\\:h5,
      .lg\\:richtext h5 {
          font-size: 1.125rem;
          line-height: 1.75rem
        }
      
        .lg\\:h6,
      .lg\\:richtext h6 {
          font-size: 1rem;
          line-height: 1.5rem
        }
      }
      
      @media {
        .xl\\:h1,
      .xl\\:h2,
      .xl\\:h3,
      .xl\\:h4,
      .xl\\:h5,
      .xl\\:h6 {
          font-weight: 500;
          line-height: 1.25
        }
      
        .xl\\:h1,
      .xl\\:richtext h1 {
          font-size: 2.25rem;
          line-height: 2.5rem
        }
      
        .xl\\:h2,
      .xl\\:richtext h2 {
          font-size: 1.875rem;
          line-height: 2.25rem
        }
      
        .xl\\:h3,
      .xl\\:richtext h3 {
          font-size: 1.5rem;
          line-height: 2rem
        }
      
        .xl\\:h4,
      .xl\\:richtext h4 {
          font-size: 1.25rem;
          line-height: 1.75rem
        }
      
        .xl\\:h5,
      .xl\\:richtext h5 {
          font-size: 1.125rem;
          line-height: 1.75rem
        }
      
        .xl\\:h6,
      .xl\\:richtext h6 {
          font-size: 1rem;
          line-height: 1.5rem
        }
      }
      
      @media {
        .\\32xl\\:h1,
      .\\32xl\\:h2,
      .\\32xl\\:h3,
      .\\32xl\\:h4,
      .\\32xl\\:h5,
      .\\32xl\\:h6 {
          font-weight: 500;
          line-height: 1.25
        }
      
        .\\32xl\\:h1,
      .\\32xl\\:richtext h1 {
          font-size: 2.25rem;
          line-height: 2.5rem
        }
      
        .\\32xl\\:h2,
      .\\32xl\\:richtext h2 {
          font-size: 1.875rem;
          line-height: 2.25rem
        }
      
        .\\32xl\\:h3,
      .\\32xl\\:richtext h3 {
          font-size: 1.5rem;
          line-height: 2rem
        }
      
        .\\32xl\\:h4,
      .\\32xl\\:richtext h4 {
          font-size: 1.25rem;
          line-height: 1.75rem
        }
      
        .\\32xl\\:h5,
      .\\32xl\\:richtext h5 {
          font-size: 1.125rem;
          line-height: 1.75rem
        }
      
        .\\32xl\\:h6,
      .\\32xl\\:richtext h6 {
          font-size: 1rem;
          line-height: 1.5rem
        }
      }
    `;

    expect.assertions(2);

    return generateComponents(plugin, config).then((result) => {
        expect(result.css).toMatchCss(output);
        expect(result.warnings().length).toBe(0);
    });
});
