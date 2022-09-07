const mockjs = require("mockjs");
mockjs.setup({
  timeout: 500,
});
mockjs.mock("test/login", "post", {
  success: "@boolean(1, 9, false)",
  errorCode: "@integer(0, 10)",
  message: "@cword(2,10)",
  data: {
    userName: "@cword(2,4)",
    userId: "@integer(1000, 9999)",
    password: /^[a-zA-Z0-9_]{4,12}$/,
  },
});
