var nightwatchCucumber = require('nightwatch-cucumber')({
    /* configuration */
    runner: 'cucumber'
});

module.exports = {
    default: '--require ' + nightwatchCucumber + ' --require features'
}
