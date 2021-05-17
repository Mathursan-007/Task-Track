const Router =require('@koa/router');
const {addCard,getCards,addList,handleList} = require('../api/cards.api');

const router = new Router({
    prefix:'/cards'
})

router.get('/',ctx=>{
    //ctx.body=ctx.req.body;
    ctx.body=getCards();
    console.log(ctx.body);
});

router.post('/',ctx=>{
    let card = ctx.request.body
    card =addCard(card)
    ctx.body=card
    console.log(ctx.response.body);
});

router.post('/lists',ctx=>{
    let list=ctx.request.body
    list =addList(list);
    ctx.body=list;
    console.log(ctx.body)
})

router.patch('/lists/:id',ctx=>{


    let state=ctx.request.body;
    let id=ctx.params.id;
    let list=handleList(id,state);
    ctx.body=list;
    console.log(ctx.body);

})

module.exports=router;