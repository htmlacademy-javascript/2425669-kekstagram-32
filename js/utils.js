const SHOW_TIME = 5000;

const dataErrorTemplate = document
  .querySelector('#data-error')
  .content.querySelector('.data-error');

const showAlert = () => {
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorElement);

  setTimeout(() => {
    dataErrorElement.remove();
  }, SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { isEscapeKey, showAlert };
