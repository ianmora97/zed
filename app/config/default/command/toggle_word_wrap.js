var config = require("zed/config");

module.exports = function(options, callback) {
    config.togglePreference("wordWrap", callback);
};
