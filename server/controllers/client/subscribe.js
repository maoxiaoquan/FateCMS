const { render, home_resJson } = require('../../utils/res_data')
const moment = require('moment')
const models = require('../../../db/mysqldb/index')
const Op = require('sequelize').Op

class Subscribe {
  constructor () {}

  static async get_article_tag_list (ctx) {
    let page = ctx.query.page || 1
    let pageSize = ctx.query.pageSize || 25
    let where_params = {
      enable: 1
    }
    let tag_name = ctx.query.tag_name

    tag_name && (where_params['article_tag_name'] = {
      [Op.like]: `%${tag_name}%`
    })

    let { count, rows } = await models.article_tag
      .findAndCountAll({
        attributes: [
          'article_tag_id',
          'article_tag_name',
          'article_tag_us_name',
          'article_tag_icon',
          'article_tag_icon_type',
          'article_tag_description'
        ],
        where: where_params, // 为空，获取全部，也可以自己添加条件
        offset: (page - 1) * pageSize, // 开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
        limit: pageSize // 每页限制返回的数据条数
      })

    for (let i in rows) {
      rows[i].setDataValue('subscribe_count', await models.subscribe_article_tag.count({
        where: { article_tag_id: rows[i].article_tag_id }
      }))
      rows[i].setDataValue('article_count', await models.article.count({
        where: {
          article_tag_ids: {
            [Op.like]: `%${rows[i].article_tag_id}%`
          }
        }
      }))
    }

    await home_resJson(ctx, {
      state: 'success',
      message: 'subscribe',
      data: {
        page,
        count,
        pageSize,
        tag_name,
        article_tag_list: rows
      }
    })
  }

  /**
   * 获取当前用户订阅的标签成功
   * @param   {obejct} ctx 上下文对象
   */

  static async get_subscribe_tag_my (ctx) {
    let { user = '' } = ctx.request
    let subscribe_article_tag = await models.subscribe_article_tag.findAll(
      {
        where: {
          uid: user.uid
        }
      }
    )
    home_resJson(ctx, {
      state: 'success',
      message: '获取当前用户订阅的标签成功',
      data: {
        subscribe_article_tag
      }
    })
  }

  static async post_subscribe_tag (ctx) {
    const { article_tag_id } = ctx.request.body
    let { user = '' } = ctx.request
    let findone_subscribe_article_tag = await models.subscribe_article_tag.findOne(
      {
        where: {
          uid: user.uid,
          article_tag_id
        }
      }
    )

    if (findone_subscribe_article_tag) {
      /* 判断是否关注了，是则取消，否则添加 */

      await models.subscribe_article_tag
        .destroy({
          where: {
            uid: user.uid,
            article_tag_id
          }
        })
        .then(() => {
          home_resJson(ctx, {
            state: 'success',
            message: '取消关注文章标签成功',
            data: {
              type: 'cancel'
            }
          })
        })
        .catch(() => {
          home_resJson(ctx, {
            state: 'error',
            message: '取消关注文章标签失败'
          })
        })
    } else {
      await models.subscribe_article_tag
        .create({
          uid: user.uid,
          article_tag_id
        })
        .then(() => {
          home_resJson(ctx, {
            state: 'success',
            message: '关注文章标签成功',
            data: {
              type: 'attention'
            }
          })
        })
        .catch(() => {
          home_resJson(ctx, {
            state: 'error',
            message: '关注文章标签失败'
          })
        })
    }
  }
}

module.exports = Subscribe
