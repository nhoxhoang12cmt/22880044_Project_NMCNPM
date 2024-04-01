let models = require('./models');

(async function(){
    let conference = await models.ConferenceitTb.findOne({where:{id:1}});
    console.log(conference)
})();