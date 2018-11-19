export const getPathPrefix = (locale) => {
  // If locale is 'en' the path should not include it
  // e.g. '/en/blog' should just return '/blog'
  if(locale === 'en') {
    return ''; //empty string
  }
  // otherwise return the locale string
  return locale;
};
