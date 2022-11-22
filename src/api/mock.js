import Mock from "mockjs";
// 请求的数据封装在一个文件里,方便调用
import homeApi from "./mockServeData/home";
import user from "./mockServeData/user";
import permission from "./mockServeData/permission";

// 定义mock请求拦截
// Mock.mock("/api/home/getData", function () {
//   // 拦截到请求后的处理逻辑
//   console.log("拦截到了");
//   return [];
// });
Mock.mock("/api/home/getData", homeApi.getStatisticalData);

// 用户列表的数据
// 接口
Mock.mock("/api/user/add", "post", user.createUser);
Mock.mock("/api/user/edit", "post", user.updateUser);
Mock.mock("/api/user/del", "post", user.deleteUser);
// 改写成正则，相对的
Mock.mock(/api\/user\/getUser/, user.getUserList);
Mock.mock(/api\/permission\/getMenu/, "post", permission.getMenu);
