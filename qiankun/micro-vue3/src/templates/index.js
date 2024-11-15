import lodash from 'lodash';

// apis
// hooks
// utils
import { mkdirSync, writeFileSync } from '../templates/utils.js';
// stores
// mixins
// configs
import { microAppGroupList } from './configs.js';
// components
import { templateComponentVue, templateIndexVue } from './templateFile.js';
const { get, upperFirst } = lodash;
microAppGroupList.forEach(async microAppGroup => {
  const appGroupName = get(microAppGroup, ['name']);
  const filePath = `src/pages/${appGroupName}`;
  mkdirSync(filePath);

  const pages = get(microAppGroup, ['pages']) || [];

  pages.forEach(page => {
    const pageName = get(page, ['name']);
    const components = get(page, ['components']) || [];
    mkdirSync(`src/pages/${appGroupName}/${pageName}`);
    mkdirSync(`src/pages/${appGroupName}/${pageName}/components`);
    const PageName = upperFirst(get(page, ['name']));
    writeFileSync(`src/pages/${appGroupName}/${pageName}/index.vue`, templateIndexVue({ name: PageName, components }));
    writeFileSync(`src/pages/${appGroupName}/${pageName}/index.less`, ``);

    components.forEach(component => {
      const Component = upperFirst(component.name);
      writeFileSync(`src/pages/${appGroupName}/${pageName}/components/${Component}.vue`, templateComponentVue({ name: Component }));
      writeFileSync(`src/pages/${appGroupName}/${pageName}/components/${Component}.less`, ``);
    });
  });
});
