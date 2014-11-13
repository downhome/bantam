# Framework

This is very much a WIP. Not yet ready for production.

A customizable CSS framework for scalable, robust, front-end development. Zero visual styling. It's all about reusability, accessibility, solid naming conventions and super fast performance. Created by <a href="http://www.twitter.com/colmtuite" target="_blank">Colm Tuite</a>.

## Things to note

- Zero visual style. Zilch. Nada. That's your job.
- Function is completely separated from form.
- Less than 20kb before gzip.

## Naming

- Component names should be in camelCase.
- Component modifiers should have two dashes. e.g. .componentName--modifier
- Component ancestors should have one dash. e.g. .componentName--ancestor
- Component states should be like .is-stateName e.g. .is-disabled
- JS hooks should be prefixed with "js-". e.g. .js-javascriptHook

## File structure

### Objects

The 'objects' folder contains single-purpose CSS classes for the more commonly used CSS properties and each of their available values. You can use these single-purpose CSS classes directly in your markup to style elements. Alternatively, you can use them to build 'utilities' and 'components' via the Sass extend function.

Objects can be identified by their prefix "o-". Objects should follow the same naming convention described above. When a CSS property contains two words (e.g. "text-align"), you should abbreviate that to its initials i.e. "ta". If two CSS properties share the same initials, the more commonly used property should be abbreviated and the other should remain unabbreviated. CSS property values should be prefixed with two dashes e.g. "--left".

Here is an example of the 'objects' naming convention: ".o-ta--left".

### Utilities

The 'utilities' folder contains a bunch of reusable code snippets for performing common tasks, like clearing floats, inlining elements, hiding/displaying elements, vertically centering elements etc. Utilities often require custom CSS but should make use of 'objects' whenever possible to reduce code repetition.

Utilities can be identified by their prefix "u-". Utilities should follow the same naming convention described above.

## Browser support

The grid utility is the only part of this framework with limited browser support. The grid works down to IE9 inclusive.

### Methodologies and guidelines

- This framework adheres to the majority of Mark Otto's <a href="http://codeguide.co">code guide</a>.
- This framework adheres to the single responsibility principle.

## Contributing

Contributions are more than welcome. I'd love to hear any feedback, suggestions, pull requests, issues, bugs, complaints, abuse or otherwise.

## License

This framework is released under the <a href="https://github.com/colmtuite/framework/blob/master/LICENSE">MIT license</a>, which basically means you can use it as you see fit.