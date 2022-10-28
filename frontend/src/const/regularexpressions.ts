export const expressions = {
  user: /^[a-zA-Z0-9_-]{4,16}$/, //
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //
  password: /^.{4,12}$/, // 4 to 12
  mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/ // 7 to 14 numers.
}
