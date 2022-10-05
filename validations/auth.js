import { body } from "express-validator";

export const registerValidation = [
  body("email", "Не вірний формат почти").isEmail(),
  body("password", "Пароль повинен бути мінімум 5 символів").isLength({
    min: 6,
  }),
  body("fullName", "Ім'я має бути мінімум 3 символа").isLength({ min: 3 }),
  body("avatarUrl", "Не вірна силка на аватарку").optional().isURL(),
];
