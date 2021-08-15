<template>
  <div class="warekiSeireki px-2">
    <div class="card">
      <header class="card-header is-primary">
        <p class="card-header-title">和暦を入力</p>
      </header>

      <div class="card-content">
        <div class="columns is-vcentered is-multiline">
          <div class="column is-12">
            <div class="field">
              <label class="label">和暦</label>
              <div class="is-flex is-align-items-center">
                <div class="select">
                  <select v-model="gengo">
                    <template v-for="g of gengos" :key="g.key">
                      <option :value="g.key">{{ g.name }}</option>
                    </template>
                  </select>
                </div>

                <input
                  class="input has-text-right"
                  type="number"
                  style="width: 5em"
                  v-model="gengoYear"
                />
                年
                <div class="select">
                  <select v-model="month">
                    <template v-for="x of 12" :key="x">
                      <option :value="x - 1">{{ x }}</option>
                    </template>
                  </select>
                </div>
                月
                <div class="select">
                  <select v-model="date">
                    <template v-for="x of 31" :key="x">
                      <option :value="x">{{ x }}</option>
                    </template>
                  </select>
                </div>
                日
              </div>
            </div>
          </div>

          <div class="column is-12">
            <button class="button is-primary" @click="resolve">決定</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-4">
      <header class="card-header is-primary">
        <p class="card-header-title">結果</p>
      </header>
      <div class="card-content">{{ seirekiText }}</div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { REIWA, HEISEI, SHOWA, TAISHO, MEIJI } from "../seirekiwareki/Wareki";

export default {
  name: "WarekiSeireki",
  setup() {
    const today = new Date();

    const gengos = ref([REIWA, HEISEI, SHOWA, TAISHO, MEIJI]);
    const gengo = ref(gengos.value[0].key);
    const gengoYear = ref(
      (today.getFullYear() - REIWA.startJsDate.getFullYear() + 1).toString()
    );
    const month = ref(today.getMonth().toString());
    const date = ref(today.getDate().toString());

    const seirekiText = ref("");

    const resolve = () => {
      const g = gengos.value.find((x) => x.key === gengo.value);

      seirekiText.value = `西暦：${
        g.startJsDate.getFullYear() + Number(gengoYear.value) - 1
      }年${Number(month.value) + 1}月${date.value}日`;
    };

    return {
      gengos,
      gengo,
      gengoYear,
      month,
      date,

      resolve,
      seirekiText,
    };
  },
};
</script>