<template>
  <section :class="$style['modal-layout']">
    <section :class="$style['modal-content']">
      <slot />
    </section>
    <footer :class="$style['modal-footer']">
      <slot v-if="$slots.footer" name="footer" />
      <template v-else>
        <a-button :class="$style['btn']" type="default" @click="$emit('cancel')">取消</a-button>
        <a-button :class="$style['btn']" type="primary" @click="$emit('ok')">确认</a-button>
      </template>
    </footer>
  </section>
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// props
// emits
const emits = defineEmits(['ok', 'cancel']);
// refs
// computed
// methods
// watch
</script>
<style lang="less" module>
@import './ModalLayout.less';
</style>
