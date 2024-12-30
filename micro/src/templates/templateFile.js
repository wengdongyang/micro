import lodash from 'lodash';

const { upperFirst } = lodash;
const commonImport = `import { get, set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import * as lodash from 'lodash';
import { NEllipsis } from 'naive-ui';
import { computed, ref, watch } from 'vue';`;
const notesImportPrev = `// apis
// hooks
// utils
// stores
// configs
// components`;
const notesImportNext = `// props
// emits
// refs
// computed
// methods
// watch`;
const useImport = `const { loading, run } = useRequest(() => {}, {
  manual: true,
  onSuccess: ({ code, data, msg }) => {
    if (code !== 200) {
      message.error(msg);
    }
  },
});
tryOnMounted(() => {});`;

export const templateIndexVue = ({ name, components = [] }) => {
  const Name = upperFirst(name);

  const Components = components.map(component => {
    const Component = upperFirst(component.name);
    return `import ${Component} from './components/${Component}.vue'; // ${component.title}`;
  });
  return `<template>
  <section>${Name}</section>
</template>
<script lang="jsx" name="${Name}" setup>
${commonImport}
${notesImportPrev}
${Components.join('\n')}
${notesImportNext}
${useImport}
</script>
<style lang="less" scoped>
@import './index.less';
</style>`;
};

export const templateComponentVue = ({ name }) => {
  const Name = upperFirst(name);
  return `<template>
  <section>${Name}</section>
</template>
<script lang="jsx" name="${Name}" setup>
${commonImport}
${notesImportPrev}
${notesImportNext}
${useImport}
</script>
<style lang="less" scoped>
@import './${Name}.less';
</style>`;
};
