<template>
  <div class="heightSandbox px-2">
    <div class="card">
      <header class="card-header is-primary">
        <p class="card-header-title">数を入力</p>
      </header>
      <div class="card-content">
        <div class="columns is-vcentered is-multiline">
          <div class="column is-12">
            <div class="field">
              <label class="label">数</label>
              <div class="is-flex is-align-items-center">
                <input
                  class="input has-text-right"
                  type="number"
                  min="1"
                  max="150"
                  style="width: 5em"
                  v-model.number="inputCount"
                />
              </div>
            </div>
          </div>
          <div class="column is-12">
            <button class="button is-primary" @click="decide">決定</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-4">
      <header class="card-header is-primary">
        <p class="card-header-title">結果</p>
      </header>
      <div class="card-content">
        <ul>
          <template v-for="x of decidedCount" :key="x">
            <li>{{x}}</li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  name: "HeightSandbox",
  setup() {
    const inputCount = ref(100);
    const decidedCount = ref(inputCount.value);

    const decide = () => {
      decidedCount.value = inputCount.value;
    };

    return {
      inputCount,
      decidedCount,

      decide
    };
  },
};
</script>