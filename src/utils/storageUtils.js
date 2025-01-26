export const saveToSession = (key, value) => sessionStorage.setItem(key, value);
export const getFromSession = (key, defaultValue) =>
  sessionStorage.getItem(key) || defaultValue;