const Link = require('./src/_includes/components/Link.js');
const Icon = require('./src/_includes/components/Icon.js');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
const htmlmin = require('html-minifier');
const CleanCSS = require("clean-css");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const markdownIt = require("markdown-it");
// Optional
const htmlBeautify = require('html-beautify');
const htmlPrettify = require('html-prettify');

module.exports = function(eleventyConfig) {
  // Quiet mode
  eleventyConfig.setQuietMode(true);

  // Passthrough some directories
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy({"src/_includes/css": "css"}); 
  // eleventyConfig.addWatchTarget("./src/css"); 

  // Browsersync config (fix css not updating)
  eleventyConfig.setBrowserSyncConfig({watch: true,});

  // Shortcodes
  eleventyConfig.addShortcode("Link", Link);
  eleventyConfig.addShortcode("Icon", Icon);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Plugins
  eleventyConfig.addPlugin(inclusiveLangPlugin);
  eleventyConfig.addPlugin(lazyImagesPlugin, {
    imgSelector: '.lazy', // custom image selector
  });

  // Enable excerpts (for the top post in hero section)
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: '<!-- excerpt -->',
    // Optional, default is "page.excerpt"
    excerpt_alias: 'excerpt'
  });

  // Filters
  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  // Markdown-it
  const md = new markdownIt({html: true});
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  // Transforms
  // Beautify HTML
  // eleventyConfig.addTransform("htmlBeautify", function(content, outputPath) {
  //     if( this.inputPath && this.outputPath.endsWith(".html") ) {
  //       let beautiful = htmlBeautify(content);
  //       return beautiful;
  //     }
  //     return content;
  // });

  // Pretify HTML
  // eleventyConfig.addTransform("htmlPrettify", function(content, outputPath) {
  //   if( this.inputPath && this.outputPath.endsWith(".html") ) {
  //     let pretty = htmlPrettify(content);
  //     return pretty;
  //   }
  //   return content;
  // }); 

  // Minify HTML
  // eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
  //   if( this.inputPath && this.outputPath.endsWith(".html") ) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true
  //     });
  //     return minified;
  //   }
  //   return content;
  // });

  // Return
  return {
      dir: {
          input: 'src',
          includes: '_includes',
          output: '_site',
      },
    templateFormats: ['md','njk','html'],
    markdownTemplateEngine: 'md',
    htmlTemplateEngine: 'html',
    dataTemplateEngine: 'njk',
  };
};