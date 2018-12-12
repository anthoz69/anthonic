# Anthonic css

Anthonic is atomic css. eg. when you need to margin-top just add _mgt-10 it mean margin-top: 10px, if you need more space, size you can custom you own.

## how to use

```npm
npm install anthonic --save
```

```yarn
yarn add anthonic
```

```sass
// your can override any variable. see below.
$colors: (
  'primary': #4f6df5,
  'second': #fed766,
  'dark': #000000,
  'white': #ffffff
);

@import "../node_modules/anthonic/src/main";

```

## Variable defaults

Every Sass variable in **Anthonic** includes the !default flag allowing you to override the variable’s default value in your own Sass without modifying source code. Copy and paste variables as needed, modify their values.

```sass
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

$colors: (
  'primary': #4f6df5,
  'dark': #000000,
  'white': #ffffff
);

// margin, padding
$spacers: (
  '0': 0,
  '2': 2px,
  'at': auto
);

// width & height & dimension
// eg. top right bottom left
$sizes: (
  '0': 0,
  '10': 10px,
  '25pct': 25%,
  '50pct': 50%,
  '100pct': 100%,
  'at': auto
);

// border width
$borders: (
  '0': 0,
  '2': 2px
);

$border-radius: (
  '0': 0,
  '2': 2px,
  '4': 4px,
  '10': 10px
);

$font-size: (
  '16': 16px,
  '20': 20px,
  '24': 24px,
  '28': 28px
);
```

## Recomend to purge css

Anthonic css recomend to purge css when production. because you will get useless css you not use, you can choose laravel-mix, webpack, gulp or etc.

using gulp [gulp purge css](https://www.npmjs.com/package/gulp-css-purge)

using webpack [purgecss-webpack-plugin](https://github.com/FullHuman/purgecss-webpack-plugin)

using laravel-mix [Purgecss wrapper for Laravel Mix](https://github.com/spatie/laravel-mix-purgecss)