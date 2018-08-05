<template>
	  <div id="app">
	    <div id="nav">
	      <router-link to="/">Funds-flow</router-link>
	      <router-link to="/planning">Planning</router-link>
	    </div>
	    <router-view/>
	  </div>
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700');
html,body
  height 100%
  padding 0
  margin 0
body
  background: linear-gradient(180deg, #0081CA 0%, #00A3FF 100%);

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  height 72px

#nav
  background: rgba(0,0,0, 0.2);
  color #fff
  height 72px

  a
    display inline-block
    height 45px
    margin 23px 78px 0 61px
    text-decoration none
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    color rgba(255, 255, 255, .3);

    &.router-link-exact-active
      color #fff
      box-shadow: 0 4px 0 #fff

</style>
