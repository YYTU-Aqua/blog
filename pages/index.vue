<script lang="ts">
</script>

<template>
    <div class="about">
      <img alt="anzu logo" class="logo" src="@/assets/icon.png" width="250" height="250" />
      <HelloWorld msg="Hello!" />
      <div class="greetings">
        <h1 class="pink fonts">小鳥あんず</h1>
        <h3 class="fonts">
          Hello!
        </h3>
        <div class="in-box">
            <p1 class="fonts">
               まだなにもないよ
        </p1>
        </div>
    </div>
    <live2d/>
    </div>
  </template>
  
  <style scoped>
  h1 {
    font-size: 3rem;
    position: relative;
    top: -10px;
    margin: 0 auto 2rem;
    text-align: center;
  }
  
  p1 {
    margin:0 auto 2rem;
    text-align: center;
    font-size: 2rem
  }

  h3 {
    font-size: 4rem;
  }
  
  .greetings h3 {
    text-align: center;
  }


  
  /*@media (min-width: 1024px) {
    .greetings hi,
    .greetings h3 {
      text-align: left;
    }
  }*/
  </style>
  
  