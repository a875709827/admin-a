
<template>
  <div class="loginDom">
    <div class="loginBox">
      <div class="topImg">
        <img src="../../assets/img/user.jpg" />
      </div>
      <el-form ref="loginFormRef" class="liginForm" :rules="loginFormRules" :model="loginForm">
        <h3 class="loginTitle">XXX管理平台</h3>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" clearable />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            prefix-icon="el-icon-lock"
            clearable
          />
        </el-form-item>
        <el-form-item class="subButtom">
          <el-button type="primary" icon="el-icon-thumb" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      loginForm: {
        // 绑定数据对象
        username: "123",
        password: "123"
      },
      // 表单验证规则对象
      loginFormRules: {
        username: [
          {
            required: true,
            message: "请输入正确的账号或邮箱",
            trigger: "blur"
          },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        if (
          this.loginForm.username == "admin" &&
          this.loginForm.password == "123456"
        ) {
          this.$message.success("登陆成功");
        } else {
          this.$message.error("账号密码错误");
        }
        // const { data: res } = await this.$http.post('login', this.loginForm)
        // if(res.meta.status !== 200) return this.$message.error('账号密码错误')
        // this.$message.success('登陆成功')
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.loginDom {
  background: #27b8bd;
  height: 100%;
  width: 100%;
  position: relative;
}
.loginBox {
  width: 500px;
  height: 400px;
  background: #eeebeb;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  position: relative;
}
.topImg {
  height: 150px;
  width: 150px;
  border: 0px solid #999;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 #9c9396;
  padding: 10px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #eeebeb;
  }
}
.subButtom {
  width: 100%;
  margin: auto;
  margin-top: 15px;
  * {
    width: 100%;
  }
}
.liginForm {
  position: absolute;
  padding: 0 50px;
  box-sizing: border-box;
  width: 100%;
  bottom: 20%;
}
.loginTitle {
  color: #27b8bd;
  text-align: center;
}
</style>
