const REQUIRED_FIELD = 'Обязательно для заполнения';

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать русские буквы';
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.length < 6) {
      return 'Пароль должен длиннее 6-ти символов';
    }

    return true;
  },
};

export const phoneValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.includes('_')) {
      return 'Телефон должен біть в формате';
    }

    return true;
  },
};
