<template>
  <div class="unchi-main">
    <div class="unchi-title">UNCHI PAGE</div>

    <div><img class="unchi-hr" :src="require(`~/assets/hr.png`)" /></div>

    <div class="unchi-container">
      <div class="flame-unchi">
        <div class="unchi-flower" />

        <div>
          日時 :
          <input
            v-model="unchidate"
            type="datetime-local"
            name="datetime-local"
          />
        </div>
        <div class="val">{{ Validation.unchidate }}</div>

        <div class="color-main">
          色 :
          <label class="radio-label">
            <input
              v-model="color"
              type="radio"
              name="open-page"
              value="茶色"
              checked
            />
            <span class="radio-text-brown">茶</span>
          </label>
          <label class="radio-label">
            <input v-model="color" type="radio" name="open-page" value="黒色" />
            <span class="radio-text-black">黒</span>
          </label>
          <label class="radio-label">
            <input v-model="color" type="radio" name="open-page" value="赤色" />
            <span class="radio-text-red">赤</span>
          </label>
          <label class="radio-label">
            <input v-model="color" type="radio" name="open-page" value="緑色" />
            <span class="radio-text-green">緑</span>
          </label>
          <label class="radio-label">
            <input v-model="color" type="radio" name="open-page" value="黄色" />
            <span class="radio-text-yellow">黄</span>
          </label>
        </div>
        <div class="val">{{ Validation.color }}</div>

        <div class="form-main">
          形 :
          <input
            id="radio1"
            v-model="shape"
            class="radio-folm"
            name="folm"
            type="radio"
            value="かため"
          />
          <label for="radio1" class="back">かため</label>
          <input
            id="radio2"
            v-model="shape"
            class="radio-folm"
            name="folm"
            type="radio"
            value="ふつう"
          />
          <label for="radio2">ふつう</label>
          <input
            id="radio3"
            v-model="shape"
            class="radio-folm"
            name="folm"
            type="radio"
            value="やわらかめ"
          />
          <label for="radio3">やわらかめ</label>
          <input
            id="water"
            v-model="shape"
            class="radio-folm"
            name="folm"
            type="radio"
            value="水っぽい"
          />
          <label for="water">水っぽい</label>
        </div>
        <div class="val">{{ Validation.shape }}</div>

        <textarea
          v-model="unchimemo"
          class="textarea"
          cols="30"
          rows="5"
          name="Memo"
          placeholder="タップしてテキストを入力"
          maxlength="500"
        />
        <p>{{ unchimemo.length }}/500 文字</p>

        <div class="container">
          <div class="m-3">
            <button @click="addunchi">
              <div class="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="30px"
                  height="30px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  /></svg
                ><a class="save"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  保存</a
                >
              </div>
            </button>
          </div>

          <div class="m-3">
            <button @click="back">
              <div class="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="30px"
                  height="30px"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  /></svg
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                戻る
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
// import Memo from '../components/addMemo'
// import DateTime from '../components/addDateTime'

export default {
  components: {
    // Memo,
    // DateTime,
  },

  data() {
    return {
      unchimemo: '',
      shape: '',
      color: '',
      unchidate: '',

      Validation: {
        unchidate: '',
        color: '',
        shape: '',
      },
    }
  },

  head: {
    title: 'うんち管理',
  },
  computed: {
    ...mapGetters(['getUnchi', 'getUserItems']),
  },
  created() {
    console.log(this.$store.state)
    console.log(this.$store.state.UserInfo)
  },
  methods: {
    addunchi() {

      // this.Validation = {};
      if (this.unchidate === '') {
        this.Validation.unchidate = '日付はいつですか？'
      }

      if (this.color === '') {
        this.Validation.color = '色は何色でしたか？'
      }

      if (this.shape === '') {
        this.Validation.shape = 'どんな形でしたか？'
      }

        if (this.$store.state.UserInfo) {
          confirm(`この内容で登録してもよろしいでしょうか`)
          const unchis = {
            unchimemo: this.unchimemo,
            unchishape: this.shape,
            unchidate: this.unchidate,
            unchicolor: this.color,
            UserInfo: this.$store.state.UserInfo,
          }
          this.unchiupdate(unchis)
          this.$router.push({ name: 'index' })
          this.unchimemo = ''
          this.unchishape = ''
          this.unchidate = ''
          this.unchicolor = ''
        } else {
          alert(`ログインをしてください`)
          console.log(`ログインしていません`)
        }
      
    },
    back() {
      this.$router.push({ name: 'index' })
    },
    ...mapActions(['unchiupdate']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.unchi-title {
  text-align: center;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
  font-size: 200%;
}

.unchi-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}

.unchi-flower {
  &::before {
    content: '❋ *'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 35px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 20%;
    top: 80%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
    transform: rotate(45deg);
  }
}

.flame-unchi {
  margin: 0 auto 3% auto;
  background-color: #fff2f2e5;
  padding: 5%;
  width: 70%;
  border-left: 5px dotted rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 5px #fff2f2e5;

  &::before {
    content: '✻'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 40px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 75%;
    top: 45%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
  }
}

.unchi-container {
  text-align: center;
  margin: 2%;
}

/* 色のボタン */
.color-main {
  margin-top: 2%;
}
input[type='radio'] {
  display: none;
}

.radio-text:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}

.radio-text-brown:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-black:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-red:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-green:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-yellow:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}

input[type='radio']:not(:checked) + .radio-text-brown:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-brown:before {
  border-color: #573815;
  background-color: #573815;
}

input[type='radio']:not(:checked) + .radio-text-black:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-black:before {
  border-color: #000000;
  background-color: #000000;
}

input[type='radio']:not(:checked) + .radio-text-red:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-red:before {
  border-color: #d10101;
  background-color: #d10101;
}

input[type='radio']:not(:checked) + .radio-text-green:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-green:before {
  border-color: #0e8a23;
  background-color: #0e8a23;
}

input[type='radio']:not(:checked) + .radio-text-yellow:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-yellow:before {
  border-color: #f8eb34;
  background-color: #f8eb34;
}

/* 形のボタン */
.form-main {
  margin-top: 2%;
  margin-bottom: 2%;
}
.radio-folm {
  display: none;
  &:checked + label {
    background-color: pink;
    padding-top: 1.5%;
    padding-right: 3%;
    padding-bottom: 1.5%;
    padding-left: 3%;
    border-radius: 50%;
  }
}
.container {
  display: flex;
  flex-wrap: wrap;
  display: inline-block;
}
.button {
  display: flex;
  // border: 2px solid #000;
  border-radius: 0;
  background: rgb(180, 98, 98);
  margin: 5% 0 5% 0;
  width: 250px;
  padding: 5px;
  border-radius: 30px;
  &:hover {
    // color: #fff;
    background: rgb(177, 90, 90);
  }
}

.val {
  color: #da3838;
}
</style>
