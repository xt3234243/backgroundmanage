const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // overlay: {
  //   warnings: false,
  //   errors: false,
  // },
  lintOnSave: false, //关闭eslint校验
});
