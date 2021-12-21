<template>
  <div class="signup">
    <div class="signup-title">SIGN UP</div>
    <div><img class="signup-hr" :src="require(`~/assets/hr.png`)" /></div>

    <div class="profileImg">
       <input type="file" @change="upload">
    </div>
    <p>赤ちゃんのニックネーム</p>
    <input v-model="babyname" type="text" />
    <br />
    <label id="女">
      <input
        id="女"
        v-model="gender"
        type="radio"
        name="gender"
        value="女"
      />女の子
    </label>
    <label id="男">
      <input
        id="男"
        v-model="gender"
        type="radio"
        name="gender"
        value="男"
      />男の子
    </label>
    <label id="なし">
      <input
        id="なし"
        v-model="gender"
        type="radio"
        name="gender"
        value="なし"
      />設定なし
    </label>
    <br />
    <div>生年月日</div>
    <input v-model="birthday" type="date" />
    <br />

    <div>身長</div>
    <input v-model="height" class="height" type="text" /> cm

    <div>体重</div>
    <input v-model="weight" class="weight" type="text" /> kg

    <div class="m-3">
      <button @click="addinfo">
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
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 登録
        </div>
      </button>
       <!-- <img :src="newnew" width="350px" height="300px"> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import Upload from '../components/imgUpLoad'
import firebase from '~/plugins/firebase'
import 'firebase/storage'

const db = firebase.firestore()
const UserRef = db.collection(`User`)

export default {
  components: {
    // Upload,
  },
  data() {
    return {
      picture: null,
      babyname: '',
      gender: '',
      birthday: '',
      height: '',
      weight: '',
      customerinfo: '',
      newnew:[]
    }
  },
    computed:{
    ...mapGetters(['getUser'])
  },
  created(){
    const newpicture= this.getUser.usersSign
    console.log(newpicture)
    const newpicture1=[]

    const newpicture2 = JSON.stringify(newpicture)

    let newpicture3 = []
    if (newpicture2) {
        newpicture3 = JSON.parse(newpicture2)
        console.log(newpicture3)
  
     const newpicture4= newpicture1.concat(newpicture3)
  
     this.newnew=newpicture4
      console.log(this.newnew)
      }

  },
  methods: {
    addinfo() {
      if(this.$store.state.UserInfo){
        alert(`この内容で登録をしてもよろしいでしょうか`)
       UserRef
       .doc(this.$store.state.UserInfo)
       .update({
        usersSign: firebase.firestore.FieldValue.arrayUnion({
          babyname: this.babyname,
          birthday: this.birthday,
          gender: this.gender,
          picture: this.picture,
          height: this.height,
          weight: this.weight,
        })
        })
        .then((ref) => {
          console.log(this.$store.state.UserInfo)
          console.log(this.getUser)
           this.babyname=""
           this.birthday=""
           this.gender=""
           this.picture=""
           this.height=""
           this.weight=""
        })
      }
    },
    // 画像のパス取得&storageへアクセスし保存
    upload(e) {
      const file = e.target.files[0]
      console.log(file.name)
      if (!file.type.includes('image')) {
        this.errorMessage = '画像を指定してください'
        // this.inputFileReset()
        return
      }
     firebase.storage().ref(file.name).put(file).then(() => {
      console.log(file)
        firebase
          .storage()
          .ref(file.name)
          .getDownloadURL()
          .then((url) => {
            this.picture = url
            console.log(this.picture)
          })
      }) 
  },
    ...mapActions(['userupdate']),
  },
}
</script>

<style lang="scss">
.signup {
  margin: auto;
  text-align: center;
}
.signup-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}

.signup-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}

.touroku {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.reset {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.profileImg {
  width: 50%;
  margin: 5% auto 10% auto;
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

.height {
  text-align: center;
}
.weight {
  text-align: center;
}
</style>
