<template>
    <div class="home">
      <NuxtLink to="/blog20240507">
      <div class="hig-box">
        <div class="flex">
        <figure class="image"><img alt="anzu logo" class="logo" src="@/assets/icon.png" width="250" height="250" /></figure>
        <b1 class="text fonts">自己紹介<br/><m1>このBlogについてと自己紹介</m1></b1>
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="/blog20240509">
      <div class="hig-box">
        <div class="flex">
        <figure class="image"><img alt="" class="logo" src="@/assets/purely.png" width="250" height="250" /></figure>
        <b1 class="text fonts">遊戯王マスターデュエル<br/><m1>自己満デッキ紹介()</m1></b1>
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="/blog20240515">
      <div class="hig-box">
        <div class="flex">
        <figure class="image"><img alt="" class="logo" src="@/assets/techno_w.jpg" width="443" height="250" /></figure>
        <b1 class="text fonts">古いゲーム倉庫<br/><m1>古いアーケード筐体がたくさんおいてあるゲームセンターに行った話</m1></b1>
    </div>
    </div>
  </NuxtLink>
  <NuxtLink to="/blog20240930">
      <div class="hig-box">
        <div class="flex">
        <figure class="image"><img alt="" class="logo" src="@/assets/DSC_0609.jpg" width="443" height="250" /></figure>
        <b1 class="text fonts">PlayStation1を買った話<br/><m1>PS2も持っているのにPS1を買う謎</m1></b1>
    </div>
    </div>
  </NuxtLink>
    </div>
  </template>

<script>
  export default {
    methods: {
      blog1(){
        window.location.href = "./schedule";
      }
    }
  }
</script>

<style>
b1 {
  padding-top:0px;
  margin:2rem;
  margin-top:10px;
  margin:0 auto 2rem;
  margin-bottom: 3rem;
  font-size: 40px;
  text-decoration:underline;
  color: rgb(255, 213, 229);
}

m1 {
  padding-top:5px;
  margin:rem;
  margin-bottom: 1rem;
  font-size: 25px;
  color:white;
  text-decoration: none;
}
.flex {
  display: flex; /*横並び*/
}
</style>