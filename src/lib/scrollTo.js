export const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  
  if (!element) {
    return;
  }

  const offset = element.offsetTop

  window.scroll({
    top: offset,
    left: 0, 
    behavior: 'smooth',
  });
};