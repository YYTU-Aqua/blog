<script setup lang="ts">
</script>
<template class="font">
  <nav>
    <ul>
      <sp><li><a href="#" class="fonts"><NuxtLink to="/"><p>ホーム</p></NuxtLink></a></li></sp>
      <sp><li><a href="#" class="fonts"><NuxtLink to="/schedule"><p>スケジュール</p></NuxtLink></a></li></sp>
      <sp><li><a href="#" class="fonts"><NuxtLink to="/blog"><p>ブログ</p></NuxtLink></a></li></sp>
    </ul>
  </nav>
  <header>
    <div class=hig-box>
      <div class="wrapper">
        <NuxtPage />
        <!--<RouterView />-->
      </div>
    </div>
  </header>

</template>

<style scoped>

sp {
  padding-right: 2rem;
}
p {
  font-family: APJ;
  font-size: 118%;
}
ul {
  display: flex;
}
li {
  list-style: none;
}
li:hover {
  /*padding:1px;*/
  border-radius: 10px;
  background: rgba(50, 46, 79, 0.34);
/*  box-shadow: inset 4px 4px 0 rgba(0,0,0,0.3);*/
}
a {

  display: block;
  text-decoration: none;
  color: white;
  font-family: 'APJT'!important;
  font-size: 100%;
 }



header {
  line-height: 1.5;
}



/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }*/

  .logo {
    margin: 0 2rem 0 0;
  }

  /*header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}*/

.font {
  font-family: 'APJT';
  font-size: 120%;
}

</style>

