module.exports = {
  port: process.env.PORT,
  defaultLocale: 'en',
  api: 'https://konovalho.ru',
  app: {
    htmlAttributes: { lang: 'ru' },
    title: 'Konovalho',
    titleTemplate: 'Frontend developer!',
    meta: [
      {
        name: 'description',
        content: 'Artem Konovalov - Frontend Developer',
      },
    ],
  },
};
