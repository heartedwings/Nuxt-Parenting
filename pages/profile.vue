<template>
  <div class="profileImg">
    <no-ssr>
      <div class="profile-title">PROFILE</div>

      <div>
        <img class="profile-hr" :src="require(`~/assets/hr.png`)" alt="" />
      </div>

      <div>
        <img class="proImg" :src="FinalproImg2" alt="プロフィール画像" />
      </div>

      <div class="profile-container">
        <div class="profile-main">
          <div
            v-for="userItemName in FinalMainData.babyname"
            :key="userItemName.index"
            class="allProData"
          >
            <div class="proData">名前</div>
            <div>{{ userItemName }}</div>
          </div>

          <div
            v-for="userItemGender in FinalMainData.gender"
            :key="userItemGender.index"
            class="allProData"
          >
            <div class="proData">性別</div>
            <div>{{ userItemGender }}</div>
          </div>

          <div
            v-for="userItemBirth in FinalMainData.birthday"
            :key="userItemBirth.index"
            class="allProData"
          >
            <div class="proData">生年月日</div>
            <div>{{ userItemBirth }}</div>
          </div>

          <div
            v-for="userItemHeight in FinalMainData.height"
            :key="userItemHeight.index"
            class="allProData"
          >
            <div class="proData">身長</div>
            <div>{{ userItemHeight }} cm</div>
          </div>

          <div
            v-for="userItemWeight in FinalMainData.weight"
            :key="userItemWeight.index"
            class="allProData"
          >
            <div class="proData">体重</div>
            <div>{{ userItemWeight }} g</div>
          </div>
        </div>
      </div>

      <div class="allergy-nav">
        <span class="allergy-circle1">ア</span>
        <span class="allergy-circle2">ル</span>
        <span class="allergy-circle3">ー</span>
        <div
          v-for="allergyI in FinalImg"
          :key="allergyI.index"
          class="container2"
        >
          <div
            v-for="i in allergyI.newallergy"
            :key="i.index"
            class="container2"
          >
            <img :src="i" width="60px" height="60px" alt="アレルギー画像" />
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/lazyload@2.0.0-rc.2/lazyload.min.js"></script>

<script>
import { mapGetters } from 'vuex'
// import Upload from '../components/imgUpLoad'
export default {
  // components: {
  //   Upload,
  // },
  data() {
    return {
      name: '',
      gender: '',
      birth: '',
      height: '',
      weight: '',
      picture: null,
      FinalImg: [],
      FinalproImg: [],
      FinalproImg2: '',
      // オブジェクト型にして保存、配列から呼び出し
      FinalMainData: [],
    }
  },
  head: {
    title: 'プロフィール画面',
  },
  computed: {
    ...mapGetters(['getAllData', 'getUser']),
  },
  created() {
    // アレルギー！
    const lastImg = this.getUser.allergy
    const lastImg2 = []
    console.log(lastImg)

    const lastImgArray1 = lastImg
    const lastImgArray2 = JSON.stringify(lastImgArray1)
    let lastImgArray3 = []
    if (lastImgArray2) {
      lastImgArray3 = JSON.parse(lastImgArray2)
    }
    // console.log(lastImgArray3);

    for (let i = 0; i < lastImgArray3.length; i++) {
      // console.log(lastImgArray3[i]);

      const finalImg = lastImg2.concat(lastImgArray3[i])
      // console.log(finalImg);

      this.FinalImg = finalImg
      // console.log(this.FinalImg);
    }
    // プロフィール画像
    const proImg = this.getUser.usersSign
    const proImg2 = []
    // console.log(proImg);

    const lastProImgArray1 = proImg
    const lastProImgArray2 = JSON.stringify(lastProImgArray1)
    let lastProImgArray3 = []
    if (lastProImgArray2) {
      lastProImgArray3 = JSON.parse(lastProImgArray2)

      // console.log(lastProImgArray3);
      for (let ii = 0; ii < lastProImgArray3.length; ii++) {
        // console.log(lastProImgArray3[ii].picture);

        const finalproImg = proImg2.concat(lastProImgArray3[ii].picture)
        this.FinalproImg2 = finalproImg
      }
      // console.log(this.FinalproImg2);
    }

    // 名前とか体重まで
    const mainData = this.getUser.usersSign
    const mainData2 = []

    const mainDataArray1 = mainData
    const mainDataArray2 = JSON.stringify(mainDataArray1)
    let mainDataArray3 = []
    if (mainDataArray2) {
      mainDataArray3 = JSON.parse(mainDataArray2)
      console.log(mainDataArray3)
    }
    for (let ii = 0; ii < mainDataArray3.length; ii++) {
      console.log(mainDataArray3[ii])

      const finalMainDataName = mainData2.concat(mainDataArray3[ii].babyname)
      const finalMainDataGender = mainData2.concat(mainDataArray3[ii].gender)
      const finalMainDataBirth = mainData2.concat(mainDataArray3[ii].birthday)
      const finalMainDataHeight = mainData2.concat(mainDataArray3[ii].height)
      const finalMainDataWeight = mainData2.concat(mainDataArray3[ii].weight)
      this.FinalMainData.babyname = finalMainDataName
      this.FinalMainData.gender = finalMainDataGender
      this.FinalMainData.birthday = finalMainDataBirth
      this.FinalMainData.height = finalMainDataHeight
      this.FinalMainData.weight = finalMainDataWeight
    }
    console.log(this.FinalMainData)
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.container2 {
  display: flex;
  flex-wrap: wrap;
  margin: 2% auto 0 auto;
  text-align: center;
}
.profile-container {
  margin: 0 auto 0 auto;
  width: 70%;
}
.profileImg {
  width: 70%;
  margin: 5% auto 10% auto;
}
.profile-main {
  margin: 7% auto 3% auto;
  font-size: 20px;
  text-align: center;
}
.profile-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}

.profile-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}
.upload-img {
  text-align: center;
}

.allergy-nav {
  margin-top: 15%;
  margin-bottom: 15%;
  font-size: 20px;
  background: rgba(252, 237, 206, 0.61);
  padding: 30px;
  border-radius: 10px;
}
.allergy-circle1 {
  font-size: 20px;
  line-height: 2.0;
  position: absolute;
  margin-top: -50px;
  font-weight: bold;
  color: #fff;
  background-color: #ffa726;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  &::after {
    content: 'レ';
    position: absolute;
    margin-top: 0.4em;
    font-weight: bold;
    color: #fff;
    background-color: #ffa726;
    border-radius: 50%;
    text-align: center;
    width: 40px;
    height: 40px;
  }
}
.allergy-circle2 {
  position: absolute;
  font-size: 20px;
  line-height: 2.0;
  margin-top: -50px;
  margin-left: 60px;
  font-weight: bold;
  color: #fff;
  background-color: #ffa726;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    margin-left: -16px;
    border: 5px solid transparent;
    border-top: 14px solid #ffa726;
    -ms-transform: rotate(-20deg);
    -webkit-transform: rotate(-20deg);
    transform: rotate(-25deg);
  }
  &::after {
    content: 'ギ';
    position: absolute;
    margin-top: 0.2em;
    font-weight: bold;
    color: #fff;
    background-color: #ffa726;
    border-radius: 50%;
    text-align: center;
    width: 40px;
    height: 40px;
  }
}
.allergy-circle3 {
  position: absolute;
  font-size: 20px;
  line-height: 2.0;
  margin-top: -50px;
  margin-left: 120px;
  font-weight: bold;
  color: #fff;
  background-color: #ffa726;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
}

.proImg {
  width: 250px;
  margin: 0 auto 0 auto;
}
.allProData {
  margin-bottom: 5%;
}

.proData {
  font-weight: 900;
  color: rgb(197, 78, 70);
  border-bottom: solid 3px rgb(214, 164, 162);
  width: 50%;
  margin: 0 auto 3% auto;

  &::after {
    position: absolute;
    display: block;
    content: '';
    border-bottom: solid 3px rgb(197, 78, 70);
    width: 5%;
  }
}
</style>