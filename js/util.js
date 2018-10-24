export const getElementFromTemplate = (elementTemplate) => {
  const container = document.createElement(`div`);
  container.innerHTML = elementTemplate;
  return container;
};

export const addElement = (element, nextPage) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(element);
  nextPage();
};

export const changeView = (view) => {
  const container = document.querySelector(`.central`);
  container.innerHTML = ``;
  container.appendChild(view);
};
