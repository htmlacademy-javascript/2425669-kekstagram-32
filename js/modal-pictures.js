import { currentPictures } from './main.js';
import { isEscapeKey } from './utils.js';

const bigPicturesModal = document.querySelector('.big-picture');
const body = document.querySelector('body');

const closeBigPicturesButton = bigPicturesModal.querySelector('.big-picture__cancel');

const fillDataBigPicture = (bigPicture, {url, likes, comments, description}) => {
  bigPicture.querySelector('big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-shown-count').textContent = comments.length <= 5 ? comments.length : 5;

  const commentsList = bigPicture.querySelector('.social__comments');
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = comments[i].avatar;
    comment.querySelector('.social__picture').alt = comments[i].name;
    comment.querySelector('.social__text').textContent = comments[i].message;
    commentFragment.append(comment);
  }
  commentsList.append(commentFragment);
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicturesModal.classList.add('hidden');
  }
};

const openBigPictureWindow = () => {
  bigPicturesModal.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  /*временно скрыть */
  bigPicturesModal.querySelector('.social__comment-count').classList.add('hidden');
  bigPicturesModal.querySelector('.comments-loader').classList.add('hidden');
};

const closeBigPictureWindow = () => {
  bigPicturesModal.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

closeBigPicturesButton.addEventListener('click', closeBigPictureWindow);

document.addEventListener('click', (evt) => {
  if(evt.target.closest('.picture')) {
    openBigPictureWindow();
    const currentId = Number(evt.target.closest('.picture').id);
    const currentPicture = currentPictures.find(({id}) => id === currentId);
    fillDataBigPicture(bigPicturesModal, currentPicture);
  }
});

