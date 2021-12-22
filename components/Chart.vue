<!-- ここで注意すべき点は、<template>タグを記載してはいけないということだ。-->
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
   props: 
  // { word: {type: Array, required: true} },
  [ 'lists1', 'lists11' ],
  
  data() {
    return {
      chart1: [],

      chartData: {
        labels: this.$store.state.months,
        datasets: [
          {
            type: 'line',
            label: '身長',
            data: this.lists1,
            backgroundColor: 'rgba(177, 60, 89)',
            borderColor: 'rgb(209, 117, 140)',
            // 線下を塗りつぶすかどうか
            fill: false,
          },

          {
            type: 'line',
            label: '体重',
            data: this.lists11,
            backgroundColor: 'rgba(43, 70, 119)',
            borderColor: 'rgba(95, 137, 185)',
            fill: false,
            // 軸のID（複数軸存在する場合）
            yAxisID: 'y2',
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        // 軸の設定
        scales: {
          // Y軸のオプション
          yAxes: [
            {
              // 軸ラベル
              scaleLabel: {
                fontColor: 'black',
                display: true,
                labelString: 'Height (cm)',
                fontSize: 16,
              },
              // 目盛線
              gridLines: {
                color: 'rgba(126, 126, 126, 0.4)',
                zeroLineColor: 'black',
              },
              // 目盛り
              ticks: {
                fontColor: 'black',
                beginAtZero: true,
                suggestedMax: 100,
                stepSize: 10,
              },
            },
            {
              id: 'y2',
              position: 'right',
              autoSkip: true,
              scaleLabel: {
                fontColor: 'black',
                display: true,
                labelString: 'Body weight (Kg)',
                fontSize: 16,
              },
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: 'black',
                beginAtZero: true,
                max: 10,
                stepSize: 2,
                // callback (val) {
                //     return val + 'kg';
                // }
              },
            },
          ],
          // X軸のオプション
          xAxes: [
            {
              scaleLabel: {
                fontColor: 'black',
                display: true,
                labelString: 'Age (months)',
                fontSize: 16,
              },
              gridLines: {
                color: 'rgba(126, 126, 126, 0.4)',
                zeroLineColor: 'black',
              },
              ticks: {
                fontColor: 'black',
              },
            },
          ],
        },

        title: {
          display: true, // タイトルを表示する
          text: '❁ １歳までの成長曲線 ❁', // タイトルのテキスト
          fontSize: 24,
          fontColor: 'rgb(126, 96, 103',
        },
      },
    }
  },

  mounted() {
    this.renderChart(this.chartData, this.options)
  },

  methods: {
  }
}
</script>

<style>
.color {
  color: rgb(126, 96, 103);
}
</style>