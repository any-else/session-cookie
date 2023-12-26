const UserService = require("../services/user.service");
const argon = require("argon2");
const AuthController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const findUser = await UserService.checkEmailService(email, password);
      const checkPassword = await argon.verify(findUser.pass_word, password);
      if (!checkPassword) {
        return res.status(400).json({
          message: "Tai khoan hoac mat khau sai",
        });
      }
      //co user
      // luu thong tin user vao cookie
      res.cookie("user", JSON.stringify(findUser), {
        maxAge: 1000,
        httpOnly: true,
      });

      res.status(200).json({
        message: "Dang nhap thanh cong",
      });
    } catch (error) {
      console.log(error);
    }
  },
  signUP: async (req, res) => {
    const { user_name, email, password } = req.body;
    try {
      const hashedPassword = await argon.hash(password);
      // lưu thông tin vào bên trong bd
      await UserService.createUserService(user_name, email, hashedPassword);
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

  getAllUser: async (req, res) => {
    try {
      const email = JSON.parse(req.cookies.user).email;
      // ddi tim trong datbase xem co hay khong
      const isCheckUser = await UserService.checkEmailService(email);
      console.log(isCheckUser);

      if (!isCheckUser) {
        return res.status(400).json({
          message: "mayf deo co quyen",
        });
      }

      const dataUser = await UserService.getAllUserService();
      res.status(200).json({
        message: "oke",
        user: dataUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "loi server",
      });
    }
  },
};
module.exports = AuthController;
