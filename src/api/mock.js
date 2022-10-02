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

mockjs.mock("manage/category/list", "post", {
  success: "@boolean(1, 9, false)",
  errorCode: "@integer(0, 10)",
  message: "@cword(2,10)",
  total: "@integer(10, 50)",
  "data|5": [
    {
      parentId: "@integer(0, 3)",
      parentName: "@cword(2,10)",
      id: "@id",
      name: "@cword(2,10)",
      _v: "@integer(0, 2)",
    },
  ],
});
mockjs.mock("manage/product/list", {
  success: "@boolean(1, 9, false)",
  errorCode: "@integer(0, 10)",
  message: "@cword(2,10)",
  total: "@integer(10, 50)",
  "list|10": [
    {
      state: "@integer(0,1)",
      images: [
        "@image('200x200', 'red', 'Hello')",
        "@image('200x200', '#4A7BF7', 'Word')",
      ],
      _id: "@id",
      name: "@cword(5,10)",
      desc: "@cword(30,50)",
      price: "@integer(1000,9999)",
      pCategoryId: "@integer(0,1)",
      categoryId: "@id",
      detail: "@cword(30,50)",
    },
  ],
});

mockjs.mock("/manage/category/info", {
  success: "@boolean(1, 9, false)",
  errorCode: "@integer(0, 10)",
  message: "@cword(2,10)",
  data: {
    parentId: "@id",
    _id: "@id",
    name: "@cword(5,10)",
    _v: "@integer(0, 1)",
  },
});

mockjs.mock("/manage/image/upload", "post", {
  success: "@boolean(1, 9, false)",
  data: {
    name: "image.jpg",
    url: "@image('200x200', '#4A7BF7', 'Word')",
  },
});

mockjs.mock("/manage/image/delete", "post", {
  success: "@boolean(1, 9, false)",
});
