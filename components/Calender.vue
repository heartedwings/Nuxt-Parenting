<template>
  <div class="calender">
    <FullCalendar :options="config" />
    <!-- <FullCalendar :options="calendarOptions" /> -->
    <!-- <FullCalendar :plugins="calendarOptions.plugins" :initial-view="calendarOptions.initialView" :header-toolbar="calendarOptions.headerToolbar" /> -->
    

    </div>
</template>

<script type="module">
// import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timegrid from '@fullcalendar/timegrid'
import { mapGetters } from 'vuex'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      unchiArray7: [],
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timegrid, listPlugin],
        initialView: 'dayGridMonth',

        headerToolbar: {
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        },
        // events: [
        // {
        //   title: '給料日',
        //   start: '2021-11-25',
        //   allDay: true,
        //   constraint: '予定１',
        //   color: 'rgb(252, 115, 61)',
        // },
        // ],
        events: this.events,
      },
    }
  },

  computed: {
    config() {
      return {
        ...this.configOptions,
      }
    },
    configOptions() {
      // うんちDB情報
      // console.log(this.getAllData.unchi);
      // console.log(this.$store.state.allData.unchi);
      // const unchiArray = this.getAllData.unchi;

      // 仮データ！！！！ 導入成功！！！
      const unchiAllArray = []
      const unchiDates = []
      const unchiFinalDates = []
      const i = [
        { unchidate: '2021-11-20T11:09', n: 'nnn' },
        { unchidate: '2021-11-26T11:09' },
        { unchidate: '2021-11-12T11:09' },
      ]
      // console.log(i)

      for (let a = 0; a < i.length; a++) {
        // console.log(i[a])
        // console.log( unchiArray[a].unchidate );
        unchiDates.push(i[a].unchidate + ':00')
        // console.log( unchiDates );
      }
      // console.log(unchiDates)

      for (let aa = 0; aa < unchiDates.length; aa++) {
        // console.log(unchiDates[aa])
        const unchiObj = {}
        unchiObj.start = unchiDates[aa]
        // console.log(unchiObj)

        unchiFinalDates.push(unchiObj)
        // console.log(unchiFinalDates)
      }

      for (let aaa = 0; aaa < unchiFinalDates.length; aaa++) {
        // console.log(unchiFinalDates[aaa])
        const unchiAllData = {
          title: '最新うんぴ',
          color: 'rgb(252, 115, 61)',
        }
        const unchiEndDates = Object.assign(unchiAllData, unchiFinalDates[aaa])
        // console.log(unchiEndDates)
        unchiAllArray.push(unchiEndDates)
        // console.log(unchiAllArray)
      }

      // firebaseデータ格納庫！！！！
      const AllArrays = []

      // うんちデータ
      const unchiDates2 = []
      const unchiFinalDates2 = []
      // console.log(this.getAllData)

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const unchiArray2 = this.getUser.unchi
      const unchiArray3 = JSON.stringify(unchiArray2)
      let unchiArray6 = []
      if (unchiArray3) {
        unchiArray6 = JSON.parse(unchiArray3)
      }

      for (let b = 0; b < unchiArray6.length; b++) {
        // console.log(unchiArray6[b])
        unchiDates2.push(unchiArray6[b].unchidate + ':00')
        // console.log(unchiDates2)
      }

      for (let bb = 0; bb < unchiDates2.length; bb++) {
        // console.log(unchiDates2[bb])
        const unchiObj2 = {}
        unchiObj2.start = unchiDates2[bb]
        // console.log(unchiObj2)

        unchiFinalDates2.push(unchiObj2)
        // console.log(unchiFinalDates2)
      }

      for (let bbb = 0; bbb < unchiFinalDates2.length; bbb++) {
        // console.log(unchiFinalDates2[bbb])
        const unchiAllData2 = {
          title: 'うんち',
          color: 'rgb(252, 115, 61)',
        }
        const unchiEndDates2 = Object.assign(
          unchiAllData2,
          unchiFinalDates2[bbb]
        )
        // console.log(unchiEndDates2)
        AllArrays.push(unchiEndDates2)
        // console.log(AllArrays)
      }

      // ごはんデータ
      const foodDates = []
      const foodFinalDates = []
      // console.log(this.getAllData)

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const foodArray2 = this.getUser.food
      const foodArray3 = JSON.stringify(foodArray2)
      let foodArray6 = []
      if (foodArray3) {
        foodArray6 = JSON.parse(foodArray3)
      }

      for (let c = 0; c < foodArray6.length; c++) {
        // console.log(unchiArray6[c])
        foodDates.push(foodArray6[c].fooddate + ':00')
        // console.log(unchiDates)
      }

      for (let cc = 0; cc < foodDates.length; cc++) {
        // console.log(unchiDates2[bb])
        const foodObj = {}
        foodObj.start = foodDates[cc]
        // console.log(foodObj)

        foodFinalDates.push(foodObj)
        // console.log(foodFinalDates)
      }

      for (let ccc = 0; ccc < foodFinalDates.length; ccc++) {
        // console.log(unchiFinalDates2[bbb])
        const foodAllData = {
          title: 'ごはん',
          color: 'rgb(252, 115, 61)',
        }
        const foodEndDates = Object.assign(foodAllData, foodFinalDates[ccc])
        // console.log(unchiEndDates2)
        AllArrays.push(foodEndDates)
        // console.log(AllArrays)
      }

      // おしっこデータ
      const urineDates = []
      const urineFinalDates = []
      // console.log(this.getAllData)

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const urineArray2 = this.getUser.urine
      const urineArray3 = JSON.stringify(urineArray2)
      let urineArray6 = []
      if (urineArray3) {
        urineArray6 = JSON.parse(urineArray3)
      }

      for (let d = 0; d < urineArray6.length; d++) {
        // console.log(unchiArray6[c])
        urineDates.push(urineArray6[d].urinedate + ':00')
        // console.log(unchiDates)
      }

      for (let dd = 0; dd < urineDates.length; dd++) {
        // console.log(unchiDates2[bb])
        const urineObj = {}
        urineObj.start = urineDates[dd]
        // console.log(foodObj)

        urineFinalDates.push(urineObj)
        // console.log(foodFinalDates)
      }

      for (let ddd = 0; ddd < urineFinalDates.length; ddd++) {
        // console.log(unchiFinalDates2[bbb])
        const urineAllData = {
          title: 'おしっこ',
          color: 'rgb(252, 115, 61)',
        }
        const urineEndDates = Object.assign(urineAllData, urineFinalDates[ddd])
        // console.log(unchiEndDates2)
        AllArrays.push(urineEndDates)
        // console.log(AllArrays)
      }
      
      // console.log(AllArrays)

      return {
        // locale: 'ja',
        // 終日スロットのタイトル
        allDayText: '終日',
        // 表示する日
        day: 31,

        firstDay: 0,
        editable: false,
        navLinks: false,
        selectable: false,
        // 日付クリックイベント
        // dayClick() {
        //   alert('日付クリックイベント')
        // },

        // eventClick(date, calEvent, jsEvent, view){
        //   alert('イベント発火！')
        // },

        // events: [
        // {
        //   title: this.getAllData.unchi,
        //   // start: this.$store.state.allData.unchi.unchidate + ":00",
        //   start: '2021-11-20T11:09' + ':00',
        //   color: 'rgb(252, 115, 61)',
        // },
        // {
        //   title: 'うんち',
        //   // start: this.$store.state.allData.unchi.unchidate + ":00",
        //   start: unchiDates[0],
        //   color: 'rgb(252, 115, 61)',
        // },
        // {
        //   title: 'うんちっち',
        //   // start: this.$store.state.allData.unchi.unchidate + ":00",
        //   start: unchiDates2[2],
        //   color: 'rgb(252, 115, 61)',
        // },
        // ],
        events: AllArrays,
        plugins: [dayGridPlugin, interactionPlugin, timegrid, listPlugin],
        initialView: 'dayGridMonth',

        headerToolbar: {
          left: 'prev,today,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        },
      }
    },
    ...mapGetters(['getUser', 'getUser']),

    hoge: () => {
      // this.calenderOptions.events = this.getAllData.unchi.concat()
      // console.log(this.calenderOptions.events);
      return this.calenderOptions.events.concat(this.getUser.unchi)
    },
  },


  methods: {},
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Estonia&family=Righteous&display=swap');

$fc-width: 80%;

@mixin bar-style(
  $color: rgb(253, 232, 237),
  $background-color: #290202,
  $border: none
) {
  color: $color;
  background-color: $background-color;
  border: $border;
}

@mixin table-frame($border: 1px #976f6f solid) {
  border: $border;
}

.sample {
  color: rgb(252, 61, 86);
}

.calender {
  margin: 5% auto 5% auto;
  width: 90%;
}
.fc {
  color: rgb(43, 1, 5);
  width: $fc-width;
  margin: 5% auto 5% auto;
  background-color: #ad8787;
  padding: 3%;
  border-radius: 5%;

  .fc-header-toolbar {
    border-bottom: 5px #d6b2b2 dotted;
    flex-shrink: 0;
    top: 5%;
  }

  .fc-toolbar-title {
    font-size: 200%;
    padding: 0 5% 0 5%;
    color: rgb(247, 225, 227);
    text-align: center;
    font-family: 'Righteous', cursive;
    margin-bottom: 5%;
  }
  .fc-header-toolbar {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .fc-button-group {
    justify-content: center;
    flex-shrink: 0;
  }
  .fc-toolbar-chunk {
    margin-bottom: 3%;
  }

  .fc-prev-button {
    @include bar-style();
    margin-right: 2.5%;
  }
  .fc-next-button {
    @include bar-style();
    margin-left: 2.5%;
  }
  .fc-today-button {
    @include bar-style();
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  .fc-dayGridMonth-button {
    @include bar-style();
  }
  .fc-timeGridWeek-button {
    @include bar-style();
  }
  .fc-timeGridDay-button {
    @include bar-style();
  }
  .fc-listMonth-button {
    @include bar-style();
  }
}

th {
  .fc-day {
    @include table-frame();
  }
  .fc-day-sat {
    background-color: #fff0d1;
  }
  .fc-day-sun {
    background-color: #fff0d1;
  }
  .fc-day-sat .fc-col-header-cell-cushion {
    color: blue;
  }
  .fc-day-sun .fc-col-header-cell-cushion {
    color: red;
  }
}

td {
  .fc-day {
    @include table-frame();
  }
  .fc-day-sat {
    background-color: #eaf4ff;
  }
  .fc-day-sun {
    background-color: #ffeaea;
  }
  .fc-day-sat .fc-daygrid-day-number {
    color: blue;
  }
  .fc-day-sun .fc-daygrid-day-number {
    color: red;
  }
  .fc-timegrid-slot {
    height: 2.5em !important;
    border-bottom: 0 !important;
  }
}

.fc-day {
  background-color: rgb(255, 255, 255);
}
.fc-daygrid {
  @include table-frame();
}
.fc-col-header-cell-cushion {
  color: black;
}
.fc-daygrid-day-number {
  color: black;
}
.fc-scroller {
  background-color: #faf1e1;
}
.fc-col-header-cell {
  background-color: #fff0d1;
}

.fc-dayGridMonth-view .fc-event-time {
  display: none;
}
</style>
