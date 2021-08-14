// Normalise setting `fontSize: theme('fontSize.4xl')` which contains the font size and line height
// { fontSize: [ '2.25rem', { lineHeight: '2.5rem' } ] }
// to
// { fontSize: '2.25rem', lineHeight: '2.5rem' }

module.exports = function(props) {
    Object.entries(props).forEach(([key, value], index) => {
        if (key === 'fontSize' && Array.isArray(value)) {
            props.fontSize = value[0] ?? '';

            if (value[1] && value[1].lineHeight) {
                props.lineHeight = value[1].lineHeight ?? '';
            }
        }
    });

    return props;
};
