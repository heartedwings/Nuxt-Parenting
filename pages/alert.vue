<template>
  <div>
    <div class="timer-title">MILK TIMER</div>
    <div><img class="timer-hr" :src="require(`~/assets/hr.png`)" /></div>
      <div class="timer">
          <div class="countdown">MILK TIME COUNTDOWN</div><br/>
          <!-- <progress id="myProgress" value="0" max="100">0%</progress> -->
          <div class="container">
            <div class="m-3">
              <button  class="  w-12 h-12   bg-red-800   text-lg text-white   font-semibold rounded-full hover:bg-red-700 " @click="countup" >
                +
              </button>
              <br><br>
               <button  class="  w-12 h-12   bg-red-800   text-lg text-white   font-semibold rounded-full hover:bg-red-700 " @click="countdown" >
                -
              </button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="math">{{ CountTime }}</div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="m-3">
              <button
                class=" w-12  h-12  bg-red-800  text-lg text-white  font-semibold rounded-full hover:bg-red-700 " @click="countups">
                +
              </button>
              <br><br>
               <button  class="  w-12 h-12   bg-red-800   text-lg text-white   font-semibold rounded-full hover:bg-red-700 " @click="countdowns" >
                -
              </button>
            </div>
          </div>
      
        <div class="container">
          <div class="m-3">
            <button id="myButton" @click="start">
              <div class="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"  fill="none" viewBox="0 0 24 24"  stroke="currentColor"  width="30px"
                  height="30px">
                  <path stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path  stroke-linecap="round" stroke-linejoin="round"   stroke-width="2"  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                START
              </div>
            </button>
          </div>
          <div class="m-3">
            <button @click="stop">
              <div class="button">
                <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6"  fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                  <path  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"
                    d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
                </svg>
                STOP
              </div>
            </button>
          </div>
        </div>
  


    <div class="timer-title">LULLABY</div>
    <div><img class="timer-hr" :src="require(`~/assets/hr.png`)" /></div>
    <div class="timer">
    <div class="container">
      <div class="item">
          music1
          <img src="~/assets/background-music.jpeg" width="100px" height="100px"/><br>
           <div class="container">
               <div class="buttonn">
                   <button @click="komori1">
                       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><br>
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><br>
                       </svg>
                   </button>
            </div>
   &nbsp;&nbsp;&nbsp;&nbsp;
    <div class="buttonn">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button>
     </div>
    </div><br>
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <div class="item">
      music2
     <img src="~/assets/background-music.jpeg" width="100px" height="100px"/><br>
  <div class="container">
     <div class="buttonn">
    <button @click="komori2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><br>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><br>
      </svg>
    </button>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
      <div class="buttonn">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button>
    </div>
    </div><br>
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="item">
      music3
     <img src="~/assets/background-music.jpeg" width="100px" height="100px"/><br>
     <div class="container">
     <div class="buttonn">
    <button @click="komori3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><br>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><br>
      </svg>
    </button></div>
    &nbsp;&nbsp;&nbsp;&nbsp;

    <div class="buttonn">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button>
    </div>
    </div>
    <br>
  </div>
    </div>
    </div>
  </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
<script>
import sound from '~/assets/audios/baby.mp3'
import sounds from '~/assets/audios/haru.mp3'
import soundss from '~/assets/audios/odayaka.mp3'
import soundsss from '~/assets/audios/neko.mp3'
export default {
  components:{
  },
  data() {
    return {
      min: 0,
      sec: 0,
    }
  },
    head: {
    title: 'タイマー&子守唄',
  },
  computed: {
    CountTime() {
      const timeStrings = [
        // 秒と分が一桁の時は文字列にする
        // (例)01分01秒
        this.min.toString(),
        this.sec.toString(),
      ].map(function (str) {
        if (str.length < 2) {
          return '0' + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ':' + timeStrings[1]
    },
    options() {
      return {
        radius: 80,
        text(value) {
          return (
            this.htmlifyNumber(value) +
            '<span style="font-size: 0.4em;">%</span>'
          )
        },
        rectWidth: 600,
        rectHeight: 50,
        rectRadius: 25,
        duration: 2000,
      }
    },
    styles() {
      let width = this.CountTime.length*100
      return {
        border: '5px solid blue',
        width: width + '%',
      }
    },
  },
  methods: {
    countup() {
      this.min++
    },
    countdown(){
       this.min--
    },
    countups() {
      this.sec++
    },
    countdowns(){
      this.sec--
    },
    count() {
      // 0秒以下かつ1分を切っていない時の処理
      if (this.sec <= 0 && this.min >= 1) {
        this.min--
        this.sec = 59
      }
      // 0秒以下かつ０分以下の処理
      else if (this.sec <= 0 && this.min <= 0) {
        this.musicstart()
        this.complete()
      } else {
        // それ以外の処理
        // 秒数を１にする
        this.sec--
      }
    },
    start() {
      const self = this // プログレスバーの進捗値
    //   let  val // 一定間隔で処理を行うintervalのIDを保持
    //   let  intervalID
    //     val = 0;  // ボタンを無効にする(何回も押せないように)
    // document.getElementById("myButton").disabled = true;
    //    // 1msおきにプログレスバーを更新する
    //   intervalID = setInterval("updateProgress()", 100);
      this.timerObj = setInterval(function () {
      self.count()
      }, 1000)
      this.timerOn = true // timerがONであることを保持
    },
  // updateProgress() {
  //   // プログレスバーの進捗値を更新し、プログレスバーに反映させる
  //   val += 1;
  //   document.getElementById("myProgress").value = val;
  //   document.getElementById("myProgress").innerText = val + "%";
  //   console.log("progress:", val, "%");
  //   // 最大値まで達したら終了
  //   if (val == 100) {
  //     clearInterval(intervalID);
  //     document.getElementById("myButton").disabled = false;
  //   }
  // },
    stop() {
      clearInterval(this.timerObj)
      this.timerOn = false
      this.musicstop()
      // timerがOFFであることを保持
    },
    // 時間が経過したら
    complete() {
      clearInterval(this.timerObj)
    },
    musicstart() {
      const music = new Audio(sound)
      music.play()
    },
    musicstop() {
      const music = new Audio(sound)
      music.pause(sound)
      console.log(`aa`)
      music.currentTime = 0;
      console.log(`pp`)
    },
    komori1() {
      const sound = new Audio(sounds)
      sound.play()
    },
    stopkomori() {},
    komori2() {
      const sound = new Audio(soundss)
      sound.play()
    },
    komori3() {
      const sound = new Audio(soundsss)
      sound.play()
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;;
}
.math {
  font-size: 70px;
  text-align: center;
  margin: 10% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(61, 53, 53);
  margin: 5% 0 5% 0;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  border-radius: 3px;
  width: 160px;
  height: 40px;
  border: 1px solid #bbbbbb;
  transition: 0.3s;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(209, 209, 209, 1));
  &:hover {
  background-image: linear-gradient(180deg, rgba(209, 209, 209, 1), rgba(255, 255, 255, 1));
}
}
.buttonn {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  border-radius: 3px;
  width: 40px;
  height: 40px;
  border: 1px solid #bbbbbb;
  transition: 0.3s;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(209, 209, 209, 1));
  &:hover {
  background-image: linear-gradient(180deg, rgba(209, 209, 209, 1), rgba(255, 255, 255, 1));
}
}

.timer {
  width: 400px;
  margin: auto;
}

.timer-title {
  text-align: center;
  font-size: 200%;
  margin: 10% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}
.timer-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}
.countdown{
  text-align: center;
  color: rgb(61, 53, 53);
  font-size: 150%;
  margin: 10% 0 5% 0;
  font-family: 'Gluten', cursive;
}

</style>
