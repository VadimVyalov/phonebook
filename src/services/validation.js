import * as yup from 'yup';
const REQUIRED_FIELD = 'Має бути обов`язково заповнене';

export const validateShema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export const loginValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.length < 3) {
      return 'Логін має бути більше 2 символів';
    }
    if (value.match(/[а-яА-Я]/)) {
      return 'Логін не має містити кирилицю';
    }

    return true;
  },
};

export const emailValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (
      !value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return 'Пошта повинна мати вірний формат';
    }

    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.length < 7) {
      return 'Пароль має бути більше 6 символів';
    }

    return true;
  },
};

export const contactValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.length < 3) {
      return "Ім'я має бути більш 2 символів";
    }

    return true;
  },
};

export const phoneValidation = {
  required: REQUIRED_FIELD,
  validate: value => {
    if (value.includes('_')) {
      return 'Телефон має бути у зазначеному форматі';
    }
    return true;
  },
};
