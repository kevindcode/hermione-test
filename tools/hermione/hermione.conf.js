const hermioneBrowsers = {
  "chrome_57.0_Windows_7": {
    desiredCapabilities: {
      browser: "chrome",
      browser_version: "57.0",
      base: "BrowserStack",
      os: "Windows",
      os_version: "7",
    },
    gridUrl: "",
    baseUrl: "",
  },
};

module.exports = {
  browsers: hermioneBrowsers,
  sets: {
    common: {
      files: ["./tools/hermione/*.hermione.js"],
      browsers: ["chrome_57.0_Windows_7"],
    },
  },
};
