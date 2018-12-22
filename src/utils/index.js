export const getPathPrefix = (locale) => {
  // If locale is 'en' the path should not include it
  // e.g. '/en/blog' should just return '/blog'
  if(locale === 'en') {
    return ''; //empty string
  }
  // otherwise return the locale string
  return locale;
};

export const formatDate = (dateString) => {
  // dateString should be YYYY-MM-DDTHH:MM+HH:MM
  // Return date of form "DD-MM-YYYY, h:mma"
  const dateStringSplit = dateString.split('T');
  const date = dateStringSplit[0].split('-').reverse().join('-');
  const timeHour = parseInt(dateStringSplit[1].slice(0, 2), 10);
  const timeMinute = dateStringSplit[1].slice(3, 5);
  let time;
  if(timeHour < 13) {
    // Time is am
    time = `${timeHour}:${timeMinute}am`;
  } else {
    // Time is pm
    time = `${timeHour - 12}:${timeMinute}pm`
  }
 
  return `${date}, ${time}`;
}
