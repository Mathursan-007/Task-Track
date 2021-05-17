const Koa = require('koa');

const CardRoutes = require('../backend/routes/cardroute');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa();

app.use(cors())
app.use(bodyParser());


app.use(CardRoutes.routes())
    .use(CardRoutes.allowedMethods())


app.listen(3001,(err)=>{

      if(err){
         console.log(err);
         return;
      }

      console.log("App is running")
})