export default (elementTemplate) => {
  const container = document.createElement(`div`);
  container.innerHTML = elementTemplate;
  return container;
};
