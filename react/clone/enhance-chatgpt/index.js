const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const bodyParser = require("body-parser");
const cors = require ('cors')

const configuration = new Configuration({
    organization: "org-4QmRCcjtQYOuz9N1zOby6XHt",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);



const app = express()
app.use(bodyParser.json())
app.use(cors())


const port = 3080
 
app.post('/', async (req,res) =>{
    const {message, currentModel} = req.body;
    const response = await openai.createCompletion({
      model: `${currentModel}`, //"text-davinci-003",
      prompt: `${message}`,
      max_tokens : 400,
      temperature: 0.5,

    });
    res.json({
      message: response.data.choices[0].text, 
    })
});

app.get('/models', async (req,res) =>{
    const response = await openai.listEngines();
    console.log(response.data.data)
    res.json({
      models : response.data.data

    })

});


app.listen(port, ()=>{
  console.log(`http${port}`)
})



