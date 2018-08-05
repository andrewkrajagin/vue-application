<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Руководство и рецепты по конфигурации / настройке проекта находятся по ссылке
      <a href="https://cli.vuejs.org" target="_blank">Документация по vue-cli</a>.
    </p>
    <h3>Установленные CLI-плагины</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank">eslint</a></li>
    </ul>
    <h3>Важные ссылки</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Основные документы</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Форум</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Чат коммьюнити</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h3>Связанные системы</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Добавте аттрибут "scoped", что бы определить CSS-стили только для данного компонента -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
