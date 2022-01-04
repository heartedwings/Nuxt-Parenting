import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import ja from 'vee-validate/dist/locale/ja.json';

// 全てのルールをインポート
let rule;
for (rule in rules) {
  extend(rule, {
    ...rules[rule], // eslint-disable-line
  });
}

// メッセージを設定
localize('ja', ja);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);