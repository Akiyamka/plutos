<template>
    <div class='item'>
        <div class='item__left'>
            <span class='item__switcher'></span>
            <span class='item__text'>{{name}}</span>
        </div>
        <div class='item__right'>
            <span class='item__how-much'>${{price}}</span>
            <span class='item__trash'>
              <Trash />
            </span>
        </div>
    </div>
</template>

<script>
import Trash from '@/assets/icons/trash.svg';

export default {
    name: 'LineItem',
    props: {
        name: String,
        price: Number,
    },
    components: { 
      Trash
    },
};
</script>

<style scoped lang='stylus'>

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
    display: inline-block
    vertical-align: middle
    margin: 10px 8px

  &__how-much
    display: inline-block
    margin-right: 12px
    vertical-align: middle

</style>