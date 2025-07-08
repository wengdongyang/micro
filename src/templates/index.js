import * as lodash from 'lodash';
// apis
// hooks
// utils
import { mkdirSync, writeFileSync } from './utils.js';
// stores
// mixins
// configs
import { pageGroupList } from './configs.js';
// components
import { templateAddOrUpdateComponentVue, templateIndexVue } from './templateFile.js';

const { get, upperFirst, hasIn } = lodash.default;

const createPageGroup = async (pageGroup, basePath) => {
  try {
    const pageGroupName = get(pageGroup, ['name']);
    const filePath = `${basePath}/${pageGroupName}`;
    mkdirSync(filePath);
    pageGroup.pages.forEach(page => {
      createPage(page, filePath);
    });
  } catch (error) {
    console.warn(error);
  }
};

const createPage = async (page, basePath) => {
  try {
    const pageName = get(page, ['name']);
    const PageName = kebabCase(pageName);
    const components = get(page, ['components']) || [];
    const filePath = `${basePath}/${pageName}`;
    mkdirSync(filePath);
    mkdirSync(`${filePath}/components`);
    writeFileSync(`${filePath}/components/.gitkeep`, 'null not found'); // 生成 对应的占位文件
    writeFileSync(`${filePath}/${PageName}.vue`, templateIndexVue({ name: pageName, components }));
    writeFileSync(`${filePath}/${PageName}.less`, ``);
    components.forEach(component => {
      const Component = kebabCase(component.name);
      writeFileSync(`${filePath}/components/${Component}.vue`, templateAddOrUpdateComponentVue({ name: Component }));
      writeFileSync(`${filePath}/components/${Component}.less`, ``);
    });
  } catch (error) {
    console.warn(error);
  }
};

pageGroupList.forEach(async pageGroup => {
  const basePath = `src/pages`;
  const isPageGroup = hasIn(pageGroup, 'pages');
  if (isPageGroup) {
    createPageGroup(pageGroup, basePath);
  } else {
    createPage(pageGroup, basePath);
  }
});
