module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: "./", // This is relative to the config file
        output: "../public" // Output to a folder outside of src
      }
    };
  };