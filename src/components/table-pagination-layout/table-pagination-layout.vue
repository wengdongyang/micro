<template>
  <section :class="$style['TablePaginationLayout']">
    <header>
      <slot name="header" />
    </header>
    <section>
      <slot name="table" />
    </section>
  </section>
</template>
<script lang="jsx" name="TablePaginationLayout" setup>
// apis
// hooks
// utils
// stores
// configs
// components
// props
// emits
// refs
// computed
// methods
// watch
</script>
<style lang="less" module>
@import './table-pagination-layout.less';
</style>
