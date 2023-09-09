module.exports = {
  extends: ["custom/next"],
  "rule": {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn"
  }
};
