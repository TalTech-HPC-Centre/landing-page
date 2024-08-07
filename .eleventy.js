module.exports = function(eleventyConfig) {
    // copy static assets to the output folder
    eleventyConfig.addPassthroughCopy("./src/CNAME");
    eleventyConfig.addPassthroughCopy("./src/*.png");
    eleventyConfig.addPassthroughCopy("./src/*.jpg");
    eleventyConfig.addPassthroughCopy("./src/*.jpeg");
    eleventyConfig.addPassthroughCopy("./src/*.ico");
    eleventyConfig.addPassthroughCopy("./src/*.xml");
    eleventyConfig.addPassthroughCopy("./src/*.svg");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("./src/css");
    //eleventyConfig.addPassthroughCopy("./src/fonts");
    //eleventyConfig.addPassthroughCopy("./src/static");
    return {
        // template formats to read
        templateFormats: ["html", "md", "njk"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        // specify input and output directories
        dir: {
            input: "src",
            includes: "_includes",
            output: "public",
            data: "_data",
        },
    };
};
