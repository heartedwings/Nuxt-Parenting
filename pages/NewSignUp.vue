<template>
  <div class="newsignup">
    <div class="newSignUp-title">NEW ACCOUNT MAKE
    </div>
    <div class="login">
      メールアドレス<br /><input
        v-model="email"
        class="mail"
        type="email"
        placeholder="email"
        style="width: 250px;height: 30px;"
      /><br />
      パスワード<br /><input
        v-model="password"
        type="password"
        placeholder="password"
        style="width: 250px;height: 30px;"
      /><br />
      パスワード(確認用)<br /><input
        v-model="password"
        type="password"
        placeholder="password"
        style="width: 250px;height: 30px;"
      />
      <div>
        <button class="touroku" @click="register">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    user() {
      return this.$store.getters.userid
    }
  },
  methods: {
    register() {
      confirm('この内容で登録をしてもよろしいでしょうか')
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
      })
      this.email = ''
      this.password = ''
      this.$router.push({ name: 'SignUp' })
    },
    ...mapActions(["adds"])
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');
.newSignUp-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}
.touroku {
  // border: 2px solid #000;
  border-radius: 0;
  margin-left: 70%;
  background:rgb(180, 98, 98);
  margin: 5% 0 5% 0;
    width: 250px;
    padding: 5px;
    border-radius:30px;
  &:hover {
    // color: #fff;
    background: rgb(177, 90, 90);
  }
}
.newsignup {
    text-align: center;
  // font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  // font-family: 'Gluten', cursive;
  // color: rgb(133, 110, 110);
  // width: 400px;
  // margin: auto;
}
.mail {
  width: 60%;
}

</style>
