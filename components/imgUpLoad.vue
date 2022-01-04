<template>
  <div>
    <div>
      <div
      v-if="!value"
          class="
            h-48
            w-full
            checker-bg
            flex
            items-center
            justify-center
            p-4
            text-blue-500
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      <label v-if="!value" class="upload-content-space user-photo default">
        <input ref="file" class="file-button" type="file" @change="upload" />
        <!-- <img
          class="user-photo-image1"
          :src="require(`../assets/profileLogo.png`)"
        /> -->
        アップロード
      </label>
    </div>

    <div v-if="value" class="uploaded">
      <div>
        <label class="upload-content-space user-photo">
          <input ref="file" class="file-button" type="file" @change="upload" />
          <img class="user-photo-image2" :src="value" />
        </label>
      </div>

      <div>
        <button type="button" class="delete-button" @click="deleteImage">
          削除する
        </button>
      </div>
    </div>

    <ul v-if="fileErrorMessages.length > 0" class="error-messages">
      <li v-for="(message, index) in fileErrorMessages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      file: null,
      fileErrorMessages: [],
    }
  },
  methods: {
    getBase64(file) {
      // Promiseにアロー関数を渡して非同期処理を書く。
      return new Promise((resolve, reject) => {
        // 組み込みオブジェクトを使い、Base64エンコードされた画像データを取得
        const reader = new FileReader()
        reader.readAsDataURL(file)
        // 成功時と失敗時の処理。resolveの引数に結果を渡して、のちの.then(result => ...)で受け取る
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },

    async upload(e) {
      const files = e.target.files || e.dataTransfer.files
      const file = files[0]

      if (this.checkFile(file)) {
        const picture = await this.getBase64(file)
        this.$emit('input', picture)
      }
    },

    checkFile(file) {
      let result = true
      this.fileErrorMessages = []
      const SIZE_LIMIT = 5000000 // 5MB
      // キャンセルしたら処理中断
      if (!file) {
        result = false
      }
      // jpeg か png 関連ファイル以外は受付けない
      if (
        file.type !== 'image/jpeg' &&
        file.type !== 'image/png' &&
        file.type !== 'application/pdf'
      ) {
        this.fileErrorMessages.push(
          'アップロードできるのは jpeg画像ファイル, png画像ファイル, pdf画像ファイルのみです。'
        )
        result = false
      }
      // 上限サイズより大きければ受付けない
      if (file.size > SIZE_LIMIT) {
        this.fileErrorMessages.push(
          'アップロードできるファイルサイズは5MBまでです。'
        )
        result = false
      }
      return result
    },
    deleteImage() {
      this.$emit('input', null)
      this.$refs.file = null
    },
  },
}
</script>


<style lang="scss">
.user-photo {
  cursor: pointer;
  outline: none;
}

.user-photo.default {
  align-items: center;
  background-color: #0074fb;
  border: 1px solid #0051b0;
  border-radius: 30px;
  box-sizing: border-box;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.3px;
  color: #fff;
  height: 50px;
  padding: 0 3%;
  max-width: 175px;
  &:hover {
    background-color: #4c9dfc;
  }
  &:active {
    background-color: #0051b0;
  }
}

.user-photo-image1 {
  margin: 2% auto 2% auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1.5px solid #972c50;
  border-radius: 50%;
}

.user-photo-image2 {
  margin: 2% auto 2% auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1.5px solid #972c50;
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
  }
}

.file-button {
  display: none;
}

.uploaded {
  align-items: center;
}

.delete-button {
  background-color: #fff;
  border: none;
  color: #0074fb;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
}

.error-messages {
  color: #cf0000;
  list-style: none;
  margin: 0.4rem 0 0 0;
  padding: 0 0.2rem;
  font-size: 1.6rem;
}
</style>
