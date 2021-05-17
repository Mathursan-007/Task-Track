const Koa = require('koa');

const CardRoutes = require('../backend/routes/cardroute');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const app = new Koa();

app.use(cors())
app.use(bodyParser());


app.use(CardRoutes.routes())
    .use(CardRoutes.allowedMethods())


const port = process.env.PORT || 5000;

app.listen(port,(err)=>{

      if(err){
         console.log(err);
         return;
      }

      console.log("App is running")
})
