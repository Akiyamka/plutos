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
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700')
html,body
  height 100%
  padding 0
  margin 0
body
  background: linear-gradient(180deg, #0081CA 0%, #00A3FF 100%)

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e5

#nav
  background: rgba(0,0,0, 0.2)
  color #fff

  a
    color: rgba(255, 255, 255, .3)
    display: inline-block
    font-family: Ubuntu
    font-style: normal
    font-weight: bold
    font-size: 22px
    text-decoration none
    text-align: center
    text-transform: uppercase
    line-height: normal
    margin: 0 39px 0
    padding: 23px 0

    &.router-link-exact-active
      box-shadow: inset 0 -4px 0 #fff
      color: #fff

.wrapper
  width: 1064px
  font-family: Ubuntu
  margin: 6px auto 0
    
.title
  margin-bottom: 11px
  display: flex

  &__one
    width: 50%
    margin: 82px 21.5px 0 0
    color: #fff
    font-size: 30px

  &__two
    width: 50%
    margin: 82px 0 0 21.5px
    color: #fff
    font-size: 30px

.line
  overflow: hidden
  height: 4px
  background: rgba(0,0,0, .1)

.content
  display: flex

.left,
.right
  flex-grow: 1

.left
  margin-right: 20px

.right
  margin-left: 20px

.left-title
  display: flex
  
  &__name
    flex-grow: 1
    font-size: 12px
    color: rgba(0, 0, 0, 0.3)
    margin: 12px 0 0 47px;

  &__count
    text-align: right
    flex-grow: 1
    font-size: 12px
    color: rgba(0, 0, 0, 0.3)
    margin: 12px 47px 0 0;

.right-title
  display: flex

  &__name
    flex-grow: 1
    font-size: 12px
    color: rgba(0, 0, 0, 0.3)
    margin: 12px 0 0 47px;

  &__count
    text-align: right
    flex-grow: 1
    font-size: 12px
    color: rgba(0, 0, 0, 0.3)
    margin: 12px  47px 0 0;

.items
  margin-top: 14px
  height: 200px
  overflow-y: scroll
  padding: 0 16px 0 0

.item
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)
  background: #fff
  border-radius: 2px
  margin-bottom: 8px
  font-size: 16px
  display: flex
  color: #466C7D

  &__text
    vertical-align: middle
    margin-left: 8px

  &__left
    flex-grow: 2
    
  &__right
    text-align: right
    flex-grow: 1

  &__switcher
    margin: 8px
    background-color: #ABC8D8 
    width: 16px
    height: 24px
    display: inline-block
    vertical-align: middle
    border-radius: 4px

  &__trash
    width: 20px
    height: 20px
    background-color: #ABC8D8
    display: inline-block
    vertical-align: middle
    margin: 10px 8px

  &__how-much
    display: inline-block
    margin-right: 12px
    vertical-align: middle
    

.add-form
  margin-top: 10.5px

  &__name
    background: rgba(0, 0, 0, 0.1)
    padding: 8px
    border: none
    margin-right: 8px
    font-size: 16px
    font-family: Ubuntu;
    border-radius: 2px
    color: #fff
  
  &__how-much
    width: 100px
    border: none
    color: #fff
    border-radius: 2px
    font-size: 16px
    padding: 8px
    background: rgba(0, 0, 0, 0.1)
    font-family: Ubuntu;

  &__btn
    padding: 8px 23px;
    color: #466C7D;
    border: none
    font-size: 14px
    background: #fff
    margin-left: 8px

.percent
  display: flex
  margin-top: 20px
  
  &__left
    background: rgba(51, 255, 0, 0.3);
    flex-grow: 1
    color: #fff
    padding: 8px
  
  &__right
    background: rgba(255, 0, 0, 0.3);
    flex-grow: 2
    color: #fff
    padding: 8px

.statistics
  display: flex
  margin: 19px 0 0

.statistics-text
  flex-grow: 1
  text-align: left

  &__h3
    color: #fff
    font-size: 22px
    margin: 0

.btns
  flex-grow: 1
  text-align: right

  &__btn
    border-radius: 4px
    font-size: 14px
    padding: 5px 7px
    margin-left: 8px
    color: rgba(255, 255, 255, 0.8);
    background: linear-gradient(180deg, #0081CA 0%, #00A3FF 100%)
    border: 2px solid rgba(255, 255, 255, 0.8)
 

</style>