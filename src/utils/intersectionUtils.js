// utils/intersectionUtils.js
export const createIntersectionObserver = (callback, options) =>
    new IntersectionObserver(callback, options);
  