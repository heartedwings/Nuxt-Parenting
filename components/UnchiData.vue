<template>
  <div class="unchiD">
    <div class="unchiBar">UNCHI MEMO</div>
    <table class="data">
      <tr>
        <th>日付</th>
        <th>色</th>
        <th>状態</th>
        <th>メモ</th>
        <th>{{ kara }}</th>
      </tr>
      <tr v-for="(unchiItem, index) in this.getUser.unchi" :key="index">
        <td>
          <div>{{ unchiItem.start }}</div>
        </td>
        <td>
          <div>{{ unchiItem.unchicolor }}</div>
        </td>
        <td>
          <div>{{ unchiItem.unchishape }}</div>
        </td>
        <td>
          <div>{{ unchiItem.unchimemo }}</div>
        </td>
        <td>
          <div>
            <button @click="clear(unchiItem)">
              <img
                :src="require(`~/assets/trush.png`)"
                width="25px"
                height="25px"
              />
            </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      kara: '',
    }
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
    ...mapGetters(['getAllData', 'getUser']),
  },

  methods: {
    clear(i) {
      if (this.$store.state.UserInfo) {
          confirm(`消去しますか？`)

          const unchisD = {
            unchiList: i,
            UserInfo: this.$store.state.UserInfo,
          }
  
      // console.log(this.$store.getters.user);
      // console.log(i);

      // this.$store.dispatch("deleteSelectData", i)
      this.deleteUnchiData(unchisD)
      }
    },

    ...mapActions(['deleteUnchiData']),
  },
}
</script>

<style lang="scss">
.unchiD {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.data {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 90%;

  border-collapse: collapse;
  padding: 0;
  box-shadow: 0 0 10px -6px #00000073;
  tr {
    background-color: #fff;
  }
  th,
  td {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  th {
    width: 20%;
    padding: 10px 0;
    font-size: 16px;
    padding: 15px;
    background-color: #f8cece;
    color: #632020;
  }
  tr {
    text-align: center;
    width: 20%;
    padding: 20px 0;
    background-color: #fff;
    color: #3a3a3a;
  }
  tr:hover {
    background-color: #fffcf607;
  }
}
.unchiBar {
  color: #e49999;
  font-size: 150%;
  margin-bottom: -1%;
  font-weight: 700;
}

</style>