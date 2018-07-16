<template>
	  <div id="app">
	    <div id="nav">
        <router-link to="/incomes-costs">ДОХОД/РАСХОД</router-link> |
        <router-link to="/">ЦЕЛЬ</router-link> |
	      <router-link to="/funds-flow">Funds-flow</router-link> |
	      <router-link to="/planning">Planning</router-link>
	    </div>
	    <router-view/>
	  </div>
</template>

<style lang="stylus">

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

#nav
  
  padding 30px
  a
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    color #fff
    &.router-link-exact-active
      color #fff
</style>
