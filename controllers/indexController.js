'use strict'
const controller ={}
const models = require('../models');

controller.showHomepage = async (req,res)=>{
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page))
    const option = {
        attributes: ['confName','confStartDate','confEndDate','confApplydlDate','confLink','ConfOrganizeTb.organize','ConfAddressTb.address'],
        include:[{
            model: models.ConfOrganizeTb
        },{
            model: models.ConfAddressTb
        }]
    }
    const limit = 20
    option.limit = limit
    option.offset = limit * (page -1)
    let {rows,count} = await models.ConferenceitTb.findAndCountAll(option)
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count,
        queryParams: req.query
    }
    res.locals.conferences = rows
    res.render('index')
}
module.exports = controller