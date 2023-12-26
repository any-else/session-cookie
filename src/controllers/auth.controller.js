const UserService = require("../services/user.service");

const AuthController = {
  login: (req, res) => {
    res.render("login");
  },
  signUP: async (req, res) => {
    const { user_name, email, password } = req.body;
    try {
      // lưu thông tin vào bên trong bd
      await UserService.createUserService(user_name, email, password);
      res.status(201).json({
        message: "Tạo mới thành công",
      });
    } catch (error) {
      res.status(500).json({
        message: "Lỗi server",
        error: error,
      });
    }
  },
};
module.exports = AuthController;
