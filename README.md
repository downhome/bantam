# Bantam CSS

A set of single-purpose CSS classes for every functional CSS property. Absolutely zero visual styling.

Reuse this framework on every website ever to build layouts and perform common functional tasks.

## Things to note

- Zero visual style. Zilch. Nada. That's your job.
- Reusable across all projects.
- About 30kb before gzip.

## Naming convention

### File naming

All filenames should be singular. e.g. button.scss

### Single-purpose class naming

The general syntax looks like:

    .float-left { float: left }

When the CSS property consists of two words, abbreviate the words to their initials:

    .fs-xl { font-size: 40px }

When two properties share the same initials, abbreviate the more commonly used property and leave the less commonly used property unabbreviated.

    .bs-solid { border-style: solid }
    .boxSizing-borderBox { box-sizing: border-box }

### Utility naming

Utilities can be identified by their prefix "u-". Utilities should follow the same naming convention as objects, described above.

### Component naming

- Component names are camelCase.
- Component descendants have one dash. e.g. .componentName-descendantName
- Component modifiers have two dashes. e.g. .componentName--modifierName
- Component states should be prefixed with ".is-" or ".has-". e.g. .is-disabled
- JS hooks should be prefixed with "js-". e.g. .js-javascriptHook

## File structure

    /spc - Single-purpose classes for properties with pre-defined values.
    /theme - Single-purpose classes for properties with custom values.
    /utilities - A set of reusable, style-agnostic utility classes.
    /components - A set of reusable, core UI components.
    /miscellaneous - Resets, third-party files and other miscellaneous stuff.

### Single-purpose classes

The 'spc' folder contains single-purpose classes for properties with pre-defined values. You can use these single-purpose CSS classes directly in your markup to style elements. Alternatively, you can combine them to build 'utilities' and 'components'.

### Utilities

The 'utilities' folder contains a set of reusable, style-agnostic utility classes for performing common tasks - like clearing floats, inlining elements, hiding/displaying elements, truncating text, vertically centering elements etc.

## Browser support

Tested down to IE9 inclusive.

## Methodologies and guidelines

- This framework adheres to the majority of Mark Otto's <a href="http://codeguide.co">code guide</a>.
- This framework adheres to the single responsibility principle.

## Getting started

The simplest and fastest way to get started is to include the minified CSS file in your project. Just add this snippet to the head of your html file:

    <link rel="stylesheet" href="https://raw.githubusercontent.com/colmtuite/framework/master/css/framework.min.css">

## Contributing

Contributions are more than welcome. I'd love to hear any feedback, suggestions, pull requests, issues, bugs, complaints, abuse or otherwise.

## License

This framework is released under the <a href="https://github.com/colmtuite/framework/blob/master/LICENSE">MIT license</a>, which basically means you can use it as you see fit.
