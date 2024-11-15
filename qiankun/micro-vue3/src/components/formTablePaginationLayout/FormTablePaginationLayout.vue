<template>
  <section :class="$style['form-table-pagination']">
    <header :class="$style['form']">
      <slot name="form" />
    </header>
    <section :class="$style['table-pagination']">
      <slot name="tablePagination" />
    </section>
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
// refs
// computed
// methods
// watch
</script>
<style lang="less" module>
@import './FormTablePaginationLayout.less';
</style>
