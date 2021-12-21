<template>
  <div class="growth">
    <div class="growth-title">GROWTH PAGE</div>

    <div><img class="growth-hr" :src="require(`~/assets/hr.png`)" /></div>

  <div class="growth-container">

    <div class="flame-growth">
        <div class="growth-flower" />
  
    日時：<input v-model="heightdate" type="date" name="Date" /><br>
     身長： <div class="container">
     <div class="cp_ipselect"><select v-model="heightcm" class="cp_sl02" required>
        <option v-for="item in height" :key="item.cm" :value="item.cm">
          {{ item.cm }}
        </option>
        </select>
          <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">センチ</label>
        </div>
        <div class="cp_ipselect">
      <select v-model="heightmm" class="cp_sl02" required>
        <option v-for="item in heights" :key="item.mm" :value="item.mm">
          {{ item.mm }}
        </option>
        </select>
         <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">ミリメートル</label>
        </div>
        </div>
     年齢：<div class="container"><div class="cp_ipselect"><select v-model="heightyear" class="cp_sl02" required>
        <option v-for="item in year" :key="item.y" :value="item.y">
{{item.y}}
        </option>
      </select>
      <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">歳</label>
      </div>
     <div class="cp_ipselect"><select v-model="heightmonth" class="cp_sl02" required>
        <option v-for="item in month" :key="item.m" :value="item.m">
{{item.m}}
        </option>
      </select> <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">ヶ月</label>
          </div> 
          </div> 
 <div class="m-3">
    <button @click="addheight">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
保存
</div>
</button></div>
</div>


<div class="flame-growth2">
        <div class="growth-flower2" />
         日時：<input v-model="weightdate" type="date" name="Date" /><br>
      体重：<div class="container"><div class="cp_ipselect"><select v-model="weightk" class="cp_sl02" required>
        <option v-for="item in weight" :key="item.k" :value="item.k">
          {{ item.k }}
        </option>
        </select>
         <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">キロ</label>
        </div>
      <div class="cp_ipselect"><select v-model="weightg" class="cp_sl02" required>
        <option v-for="item in weights" :key="item.g" :value="item.g">
          {{ item.g }}
        </option>
        </select>
         <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">グラム</label>
          </div> 
      </div>&nbsp; <br>
  年齢： <div class="container"><div class="cp_ipselect"><select v-model="weightyear" class="cp_sl02" required>
        <option v-for="item in year" :key="item.y" :value="item.y">
{{item.y}}
        </option>
      </select>
       <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">歳</label>
      </div>
       <div class="cp_ipselect"><select v-model="weightmonth" class="cp_sl02" required>
        <option v-for="item in month" :key="item.m" :value="item.m">
{{item.m}}
        </option>
      </select>
        <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">ヶ月</label>
          </div>
      </div>
     <div class="m-3">
    <button  @click="addweight">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
保存</div></button></div>
<div class="m-3">
    <button  @click="back">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
戻る</div></button></div>
</div>


   </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
// import DateTime from '../components/addDateTime'

export default {
  components: {
    // DateTime,
  },
  data() {
    return {
      height: [
        { cm: `30` },{ cm: `31` }, { cm: `32` },{ cm: `33` },{ cm: `34` },{ cm: `35` },{ cm: `36` },{ cm: `37` },{ cm: `38` },{ cm: `39` },
        { cm: `40` },{ cm: `41` }, {cm:`42`},{ cm: `43` },{ cm: `44` },{ cm: `45` },{ cm: `46` },{ cm: `47` },{ cm: `48` },{ cm: `49` },{ cm: `50` },{ cm: `51` },{ cm: `52` },{ cm: `53` },{ cm: `54` },
        { cm: `55` },{ cm: `56` },{ cm: `57` },{ cm: `58` }, { cm: `59` },{ cm: `60` },{ cm: `61` },{ cm: `62` },{ cm: `63` },{ cm: `64` },{ cm: `65` },{ cm: `66` },{ cm: `67` },{ cm: `68` },{ cm: `69` },{ cm: `70` },
        { cm: `71` },{ cm: `72` },{ cm: `73` },{ cm: `74` },{ cm: `75` },{ cm: `76` },{ cm: `77` },{ cm: `78` }, { cm: `79` },{ cm: `80` },{ cm: `81` },{ cm: `82` },{ cm: `83` }, { cm: `84` },{ cm: `85` },
        { cm: `86` },{ cm: `87` },{ cm: `88` },{ cm: `89` },{ cm: `90` },{ cm: `91` },{ cm: `92` },{ cm: `93` },{ cm: `94` }, { cm: `95` },{ cm: `96` },{ cm: `97` },
        { cm: `98` },{ cm: `99` },{ cm: `100` },{ cm: `101` },{ cm: `102` },{ cm: `103` },{ cm: `104` },{ cm: `105` }, { cm: `106` },{ cm: `107` },
        { cm: `108` },{ cm: `109` },{ cm: `110` },{ cm: `111` },{ cm: `112` },{ cm: `113` },{ cm: `114` },{ cm: `115` },
        { cm: `116` },{ cm: `117` },{ cm: `118` },{ cm: `119` },{ cm: `120` },{ cm: `121` },{ cm: `122` },{ cm: `123` },{ cm: `124` },{ cm: `125` },{ cm: `126` },{ cm: `127` },
        { cm: `128` },{ cm: `129` },{ cm: `130` },{ cm: `131` },{ cm: `132` },{ cm: `133` },
        { cm: `134` },{ cm: `135` },{ cm: `136` },{ cm: `137` },{ cm: `138` },{ cm: `139` },{ cm: `140` },],
      heights: [{ mm: `0` },{ mm: `1` }, { mm: `2` },{ mm: `3` },{ mm: `4` },{ mm: `5` },{ mm: `6` },{ mm: `7` },{ mm: `8` },{ mm: `9` },],
      weight: [{ k: `0` }, { k: `1` },{ k: `2` },{ k: `3` },{ k: `4` },{ k: `5` },{ k: `6` },{ k: `7` },{ k: `8` },{ k: `9` }, { k: `10` },
        { k: `11` },{ k: `12` }, { k: `13` },{ k: `14` },{ k: `15` },{ k: `16` },{ k: `17` },{ k: `18` },{ k: `19` },{ k: `20` },],
      weights: [{ g: `1` }, { g: `2` }, { g: `3` },{ g: `4` },{ g: `5` },{ g: `6` },{ g: `7` },{ g: `8` },{ g: `9` },],
      year:[{y:`0`}, {y:`1`}, {y:`2`}],
      month:[{m:`00`},{m:`01`},{m:`02`},{m:`03`},{m:`04`},{m:`05`},{m:`06`},{m:`07`},{m:`08`},{m:`09`},{m:`10`},{m:`11`},{m:`12`} ],
      heightyear:"",
      heightmonth:"",
      weightyear:"",
      weightmonth:"",
      heightcm:"",
      heightmm:"",
      weightk:"",
      weightg:"",
      heightdate:"",
      weightdate:""
    }
  },
    head: {
    title: '成長管理',
  },
  created(){
    console.log(this.$store.state)
console.log(this.$store.state.UserInfo)
  },
  methods:{
   addheight() {
      if(this.$store.state.UserInfo){
      confirm(`この内容で登録してもよろしいでしょうか`)
      const heights = {
      height: this.heightcm+`.`+this.heightmm,
      heightdate:this.heightdate,
      babyyear:this.heightyear+`.`+this.heightmonth,
      UserInfo:this.$store.state.UserInfo
      }
      this.heightupdate(heights)
      this.heightcm=""
      this.heightmm=""
      this.heightdate=""
      this.heightyear=""
      this.heightmonth=""
      }else{
        alert(`ログインしてください`)
        console.log(`ログインしていません`)
      }
    },
    addweight() {
      if(this.$store.state.UserInfo){
      confirm(`この内容で登録してもよろしいでしょうか`)
      const weights = {
       weight: this.weightk+`.`+this.weightg,
       weightdate:this.weightdate,
       babyyear:this.weightyear+`.`+this.weightmonth,
       UserInfo:this.$store.state.UserInfo
      }
      this.weightupdate(weights)
      this.weightk=""
      this.weightg=""
      this.weightupdate=""
      this.weightyear=""
      this.weightmonth=""
      }else{
        alert(`ログインをしてください`)
        console.log(`ログインしてません`)
      }
    },
    back() {
      this.$router.push({ name: 'index' })
    },
    ...mapActions(['heightupdate',"weightupdate"]),
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.height {
  display: flex;
}
.weight {
  display: flex;
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
.growth-title {
  text-align: center;
  font-size: 200%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}

.growth-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}

.growth-flower {
  &::before {
    content: '❋ *'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 35px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 20%;
    top: 90%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
    transform: rotate(45deg);
  }
}
.flame-growth {
  margin: 0 auto 3% auto;
  background-color: #fff2f2e5;
  padding: 5%;
  width: 80%;
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

.growth-flower2 {
  &::before {
    content: '❋ *'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 35px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 20%;
    top: 90%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
    transform: rotate(45deg);
  }
}
.flame-growth2 {
  margin: 0 auto 3% auto;
  background-color: #f2f6ffe5;
  padding: 5%;
  width: 80%;
  border-left: 5px dotted rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 5px #f2f6ffe5;

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


/* 量のプルダウン */
.cp_ipselect {
  position: relative;
  width: 30%;
  margin: 2em auto;
  text-align: center;
}
.cp_sl02 {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }
}
.cp_ipselect .cp_sl02 {
  appearance: none;
  -webkit-appearance: none;
}
.cp_ipselect select::-ms-expand {
  display: none;
}
.cp_ipselect:after {
  position: absolute;
  top: 18px;
  right: 10px;
  width: 0;
  height: 0;
  padding: 0;
  content: '';
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.cp_sl02_selectlabel {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
}
.cp_sl02:focus ~ .cp_sl02_selectlabel,
.cp_sl02:valid ~ .cp_sl02_selectlabel {
  color: #da3c41;
  top: -20px;
  transition: 0.2s ease all;
  font-size: 14px;
}
.cp_sl02_selectbar {
  position: relative;
  display: block;
  width: 100%;
  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #da3c41;
    transition: 0.2s ease all;
  }
}
.cp_sl02_selectbar:before {
  left: 50%;
}
.cp_sl02_selectbar:after {
  right: 50%;
}
.cp_sl02:focus ~ .cp_sl06_selectbar:before,
.cp_sl06:focus ~ .cp_sl06_selectbar:after {
  width: 50%;
}
.cp_sl02_highlight {
  position: absolute;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
.container{
  display: flex;
  flex-wrap: wrap;
}
.button {
  display: flex;
  border-radius: 0;
   background:rgb(180, 98, 98);
  margin: 5% 0 5% 0;
    width: 250px;
    padding: 5px;
    border-radius:30px;
  &:hover {
  background: rgb(177, 90, 90);
}
}
.m-3 {
  text-align: center;
}
</style>
