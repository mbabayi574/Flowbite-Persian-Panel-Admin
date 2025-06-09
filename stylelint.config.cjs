module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["plugin", "source"],
      },
    ],
    "no-empty-source": null,
  },
};
