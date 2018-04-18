class Format {
  constructor () {
    // super()
  }

  /**
   * 登录信息数据的返回，附带token
   * @param  {obejct} ctx 上下文对象
   * @param  {Booleans} statu 状态，必填,判断数据是否返回正确 1正常、2错误、3未登录、4登录超时
   * @param  {String} message 信息，必填,返回的弹窗信息
   * @param  {String} token token
   * @param  {obejct} date 返回的数据
   * @param  {number} status 状态码，必填
   */

  async format_login (ctx, state, message, token, date, status) {
    let sts = status || 200
    ctx.response.status = sts
    ctx.body = {
      state,
      message,
      token,
      date
    }
  }

  /**
   * 常用数据的返回,不附带token
   * @param  {obejct} ctx 上下文对象
   * @param  {number} status 状态，必填,判断数据是否返回正确 1正常、2错误、3未登录、4登录超时
   * @param  {String} message 信息，必填,返回的弹窗信息
   * @param  {obejct} date 返回的数据
   * @param  {number} status 状态码，必填
   */

  async format_data (ctx, state, message, date, status) {
    let sts = status || 200
    ctx.response.status = sts
    ctx.body = {
      state,
      message,
      date
    }
  }

  async render (ctx, {title, view_url, status, message, data}) {
    let d = data || []
    await ctx.render(view_url, {
      title,
      status,
      message,
      data: d,
      user_info: {
        islogin: ctx.session.islogin,
        account: ctx.session.nickname,
        user_id: ctx.session.user_id
      }
    })
  }

}

module.exports = new Format()