export const findMenuItemByKeyPath = (menuTree, keyPath) => {
  try {
    let currentLevel = menuTree;
    for (const name of keyPath) {
      const foundItem = currentLevel.find(item => item.name === name);
      if (!foundItem) {
        return null;
      }
      if (foundItem.children) {
        currentLevel = foundItem.children;
      } else {
        return foundItem;
      }
    }
    return null;
  } catch (error) {
    console.warn(error);
    return {};
  }
};
