const models = require('../../../db/mysqldb/index')
const { sign_resJson, admin_resJson } = require('../../utils/res_data')
const {
  tools: { encrypt },
} = require('../../utils/index')
const config = require('../../../config/config')
const moment = require('moment')
const { create_admin_system_log } = require('./admin_system_log')


class AdminIndex {
  static async admin_index_statistics(ctx) {
    const admin_user_count = await models.admin_user.count() // 后台用户统计
    const user_count = await models.user.count() // 前台用户统计
    const article_count = await models.article.count() // 文章统计
    const comment_count = await models.comment.count() // 评论统计

    const new_user = await models.user.findAll({
      limit: 10, // 每页限制返回的数据条数
      attributes: ['uid', 'avatar', 'nickname', 'sex', 'introduction'],
      order: [['create_date_timestamp', 'desc']],
    })

    const new_article = await models.article.findAll({
      limit: 10, // 每页限制返回的数据条数
      order: [['create_date_timestamp', 'desc']],
    })

    const new_comment = await models.comment.findAll({
      limit: 10, // 每页限制返回的数据条数
      order: [['create_date_timestamp', 'desc']],
    })

    for (const i in new_article) {
      new_article[i].setDataValue('create_at', await moment(new_article[i].create_date)
        .format('YYYY-MM-DD H:m:s'))
      new_article[i].setDataValue('user', await models.user.findOne({
        where: { uid: new_article[i].uid },
        attributes: ['uid', 'avatar', 'nickname', 'sex', 'introduction'],
      }))
    }

    for (const i in new_comment) {
      new_comment[i].setDataValue('create_at', await moment(new_comment[i].create_date)
        .format('YYYY-MM-DD H:m:s'))
      new_comment[i].setDataValue('user', await models.user.findOne({
        where: { uid: new_comment[i].uid },
        attributes: ['uid', 'avatar', 'nickname', 'sex', 'introduction'],
      }))
    }

    admin_resJson(ctx, {
      state: 'success',
      message: '获取统计信息成功',
      data: {
        count: {
          admin_user_count,
          user_count,
          article_count,
          comment_count,
        },
        new_article,
        new_user,
        new_comment,
      },
    })
  }
}

module.exports = AdminIndex
