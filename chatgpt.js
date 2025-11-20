const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

let model= prompt("What Chatgpt model are you going to use")
let input= prompt("What do you want Chatgpt to do")

async function chatgpt(chatData){
    const options = {
        method: `POST`,
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": `application/json`
         },
         body: JSON.stringify(chatData),
     }
     const response = await fetch("https://api.openai.com/v1/responses", options);
     const data = await response.json();
     console.log(model);
     console.log(input);
     console.log(data.output[0].content[0].text)
     return data;
}
chatgpt({
    model: model ,
    input: input
})
