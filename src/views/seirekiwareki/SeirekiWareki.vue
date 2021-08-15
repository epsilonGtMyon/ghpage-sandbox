<template>
  <div class="seirekiWareki px-2">
    <div class="card">
      <header class="card-header is-primary">
        <p class="card-header-title">求めたい西暦</p>
      </header>
      <div class="card-content">
        <div class="columns is-vcentered is-multiline">
          <div class="column is-12">
            <div class="field">
              <label class="label">西暦</label>
              <div class="is-flex is-align-items-center">
                <input
                  class="input has-text-right"
                  type="text"
                  style="width: 5em"
                  v-model="year"
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
      <div class="card-content">
        {{ jsDate.toLocaleDateString() }}

        <ul>
          <template v-for="(text, index) of warekiTexts" :key="index">
            <li>{{ text }}</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { MEIJI, TAISHO, SHOWA, HEISEI, REIWA } from "./Wareki";

export default {
  name: "SeirekiWareki",
  setup() {
    const today = new Date();
    const year = ref(today.getFullYear().toString());
    const month = ref(today.getMonth().toString());
    const date = ref(today.getDate().toString());

    const warekiTexts = ref([]);

    const jsDate = computed(() => {
      const nYear = Number(year.value);
      const nMonth = Number(month.value);
      const nDate = Number(date.value);
      return new Date(nYear, nMonth, nDate);
    });

    const resolve = () => {
      const warekis = [MEIJI, TAISHO, SHOWA, HEISEI, REIWA].reverse();
      warekiTexts.value = [];
      for (const w of warekis) {
        if (jsDate.value.getTime() < w.startJsDate.getTime()) {
          continue;
        }

        const warekiYear =
          jsDate.value.getFullYear() - w.startJsDate.getFullYear() + 1;

        warekiTexts.value.push(
          `${w.name}:${warekiYear}年${
            jsDate.value.getMonth() + 1
          }月${jsDate.value.getDate()}日`
        );
      }
    };
    return {
      year,
      month,
      date,
      warekiTexts,

      resolve,
      jsDate,
    };
  },
};
</script>