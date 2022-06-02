const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const connectionTOdatabase = require('./database')

const framework = express();

framework.use(cors());
framework.use(bodyParser.json())


//framework.get('/request/',(req,res)=>{
//res.send('all good')
//})

framework.get('/request/:requestid',(req,res)=>{
    
        var Requestvalue= req.params.requestid
        console.log(Requestvalue)
         var sql= "select DISTINCT verT.verdict ,\
                        verT.indicator,\
                        verT.id as indicator_id ,\
                        verT.type,\
                        verT.last_queried ,\
                        verT.title as indicator_title,\
                        b.trivia_key,\
                        c.name as trivia_key_name,\
                        c.description,\
                        d.tag,\
                        e.display_name as malware_display_name,\
                        e.id as malware_id,\
                        f.industry,\
                        g.links ,\
                        h.country,\
                        i.id as attack_id,\
                        i.name as attack_id_name,\
                        i.display_name as attack_id_display_name,\
                        j.adversary\
                    from   verdicts verT \
                        left join trivia_indicator b     on verT.indicator=b.indicator \
                        left join trivia c 			     on b.trivia_key = c.key \
                        left join tags d 			     on b.trivia_key=d.trivia_key \
                        left join malware e 			 on b.trivia_key= e.trivia_key\
                        left join industries f			 on b.trivia_key=f.trivia_key \
                        left join helplinks g 			 on b.trivia_key=g.trivia_key\
                        left join countries h 			 on b.trivia_key=h.trivia_key \
                        left join attack i 			     on b.trivia_key=i.trivia_key \
                        left join adversarys j 			 on b.trivia_key=j.trivia_key \
                    where verT.indicator=?"
                                
 
        
       connectionTOdatabase.all(sql,Requestvalue,
        (err,result)=>{
            if(err) {
            console.log(err)
            } 
            res.send(result)
            console.log(result)
            });   });
        


framework.listen(4000,()=>{
    console.log('running')
})
