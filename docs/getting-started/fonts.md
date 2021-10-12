# Fonts
When using fonts in your projects the preference is to use webfonts served from Google Fonts, Typekit, Fonts.com or some other hosted font service.

These should be imported in the `<head>` of the `_layout.html` Twig file.

```twig
<!-- Google Fonts / Typekit -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Self-hosted fonts
Self-hosting fonts provides a means to include custom font families, but also has performance benefits.

Firstly, create the file `resources/scss/fonts.scss` and include the following:

```scss
@font-face {
    font-family: 'averta-regular';
    src: url('/fonts/averta-regular-webfont.woff2') format('woff2'),
         url('/fonts/averta-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
```

And be sure to include this in your `style.scss` file.

Then, copy all your font files to `resources/fonts`. You can have them in subfolders if you prefer, but take note of the path to the font files, and use them in the `src` attribute. Also ensure the `font-family` is correct.

The path should contain a leading `/` which is relative to the `resources` directory. This is important, so that Vite can resolve the path whether the dev server is running, or upon build. When the dev server is running, the path will be `http://localhost:3000/fonts/font-file.woff`. However on build, this will be replaced to refer to the output `dist` directory `/dist/fonts/font-file.woff`.