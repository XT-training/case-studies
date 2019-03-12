import debug from 'debug';

export default debug('loblaw');
export const actionlog = debug('loblaw:action');
export const reducerlog = debug('loblaw:reducer');
export const ctrllog = debug('loblaw:controller');
export const utillog = debug('loblaw:util');
export const jsxlog = debug('loblaw:jsx');
