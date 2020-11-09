const { Joi, Segments } = require('celebrate');

const urlPattern = /^((http|https):\/\/)(www\.)?([a-zA-Z0-9\W]{1,})(#)?$/;

const createArticleSchema = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    link: Joi.string().uri().regex(RegExp(urlPattern)).required(),
    keyword: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    image: Joi.string().uri().regex(RegExp(urlPattern)).required(),
  }),
};

module.exports = createArticleSchema;
