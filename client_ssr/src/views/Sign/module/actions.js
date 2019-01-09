import { fetch } from '@request'

export default {
  SIGN_SEND_CODE: ({ commit, dispatch, state }, { email }) => { // 注册发送验证码
    return fetch({
      url: '/client/sign_up_code',
      method: 'post',
      data: { email }
    })
  },
  REGISTER: ({ commit, dispatch, state }, data) => { // 注册 post
    return fetch({
      url: '/client/sign_up',
      method: 'post',
      data
    })
  }
}
