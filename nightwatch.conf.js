var nightwatchCucumber = require('nightwatch-cucumber')({
    /* configuration */
});
var seleniumServer = require('selenium-server');
var phantomjs = require('phantomjs');
var chromedriver = require('chromedriver');

module.exports =
{
  "src_folders" : [nightwatchCucumber],
  "output_folder" : "reports",
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "",
  "globals_path" : "",

  "selenium" : {
    "start_process" : true,
    "server_path" : seleniumServer.path,
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path' : phantomjs.path
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      },
      "selenium" : {
        cli_args : {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
};
