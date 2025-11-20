const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc

console.log("Welcome to Baseball API")
console.log("Pick a League from the list below")
console.log("MLB: 1", "National League: 104", "American League: 103")

const leagueId = prompt("Enter the league you want to see?")
const teamId = prompt("What team do you want to fetch?")

console.log(`Fetching ${teamId} from the ${leagueId}`);

const url = `https://statsapi.mlb.com/api/v1/?leagueId=${leagueId}&teamId=${teamId}/attendance`

async function fetchTeam(){
    const response= await fetch(url);
    const data= await response.json();
    console.log(data)
}

fetchTeam()
