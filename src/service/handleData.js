import fetch from 'src/utils/fetch'

/**
 * 获取列表
 */
export const getCarouselList = () => fetch('/workapi/v1/public/work/carousel/list');

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {
  username,
  password,
  captcha_code
}, 'POST');

