<template>
  <div>
    <div>
      <textarea
        v-model="message"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder=" メモ"
        maxlength="150"
      />
      <p>{{ message.length }}/500 文字</p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  mounted(){
    this.$emit(this.message)
    console.log(this.message)
  }
}
</script>

<style>
/* .textarea {
  border: 1px solid rgb(179, 161, 161);
  width: 80%;
  margin-top: 5%;
} */
</style>