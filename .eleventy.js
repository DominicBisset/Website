const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISODate();
  });

  eleventyConfig.setTemplateFormats([
    "md",
    "html",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);
  return {
    dir: {
      input:"src"
    }
  };
};