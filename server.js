//see on vajalik app loomiseks
const express = require('express');
const bodyParser= require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended: true})); 


app.get('/',function(request,response){
    
    response.sendFile(__dirname +'/index.html'); //nodejs peab täpselt ütlema, kus seda index faili kätte saada
}); ///võtab sisse kaks argumenti - aadress (kuhu kasutaja proovib seda päringut teha), teine on funktsioon


///post meetod on see, mida kasutaja annab läbi vormi serverile
app.post('/',function(request,response){
    console.log(request.body);
    let num1= Number(request.body.num1);
    let num2=Number(request.body.num2);
    
    let result=num1+num2;
    console.log(`${num1}+${num2}=${result}`); // siin näeb ainult konsoolis
    response.send(`${num1}+${num2}=${result}`) ///siis näeb ka browseris
});
///app hakkab ootama päringut, callbackiks kasutada anonüümset funktsiooni function() või () =>
app.listen(3000, function(){
    console.log('Server is running on Port 3000');
});