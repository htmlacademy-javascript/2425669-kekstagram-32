export const MIN_POSTS_COUNT = 1;
export const MAX_POSTS_COUNT = 25;
export const AVATAR_MIN_COUNT = 1;
export const AVATAR_MAX_COUNT = 6;
export const LIKES_MIN_COUNT = 15;
export const LIKES_MAX_COUNT = 200;
export const COMMENT_MIN_COUNT = 0;
export const COMMENT_MAX_COUNT = 30;
export const COMMENT_MAX_ID = 500000;

export const HASHTAG_CHECK = /^#[a-zа-яё0-9]{1,19}$/i;
export const SPACE = /\s+/g;
export const MAX_HASHTAG = 5;
export const MAX_MESSAGE_LENGTH = 140;

export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const DEFAULT_SCALE = 100;

const EFFECT = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const EFFECT_TO_FILTER = {
  [EFFECT.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [EFFECT.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [EFFECT.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [EFFECT.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [EFFECT.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const EFFECT_TO_SLIDER_OPTIONS = {
  [EFFECT.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [EFFECT.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [EFFECT.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [EFFECT.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const COMMENT_NAMES = [
  'Анна',
  'Александр',
  'Светлана',
  'Юра',
  'Сергей',
  'Полина',
  'Олег',
  'Андрей',
  'Юля',
  'Анастасия',
  'Соня',
  'Татьяна',
  'Алексей',
  'Артем',
  'Вера',
  'Ирина',
  'Николай',
  'Ева',
  'Ольга',
  'Алиса'
];

const POSTS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Моя жизнь меняется, потому что меняю ее я.',
  'Не слушай никого, лишь твое сердце, оно все знает.',
  'Чтобы достичь новых берегов, мы должны плыть, а не дрейфовать.',
  'Навстречу новым приключениям.',
  'Каждое мгновенье жизни — еще одна возможность.',
  'Пусть эта фотография будет здесь',
  'Одна хорошая мысль утром меняет смысл целого дня.',
  'Как мало нужно для счастья.',
  'Этой фотографии описание не нужно'
];

export {
  COMMENT_NAMES,
  POSTS_COMMENTS,
  DESCRIPTIONS,
  EFFECT,
  EFFECT_TO_FILTER,
  EFFECT_TO_SLIDER_OPTIONS
};
