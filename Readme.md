# PurgeCSS: Extractor for Pug with frontmatter [![badge](https://badgen.now.sh/npm/v/purgecss-from-pug-with-frontmatter)](https://www.npmjs.com/package/purgecss-from-pug-with-frontmatter)

I often use Pug with [11ty](https://11ty.dev/), which uses frontmatter for additional data and settings for pages, which in turn greatly confuses the default Pug extractor. This is a simple module that brings together [Gray Matter](https://www.npmjs.com/package/gray-matter) and [PurgeCSS from Pug Extractor](https://www.npmjs.com/package/purgecss-from-pug), and uses the extract method only on the content part of pug file.

## Installation

``` shell
npm i purgecss-from-pug-with-frontmatter
```

## License

ISC