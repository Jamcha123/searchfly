import * as functions from 'firebase-functions'
import dotenv from 'dotenv'
import fs from 'fs'
import admin from 'firebase-admin'
import axios from 'axios'
import { OpenAI } from 'openai/client.js'

dotenv.config();
const key = fs.readFileSync("creds.json", "utf-8")
admin.initializeApp()

const ai = new OpenAI({apiKey: process.env.AI})

export const search = functions.https.onRequest({cors: true}, async (req, res) => {
    const {query} = req.query
    const link = "https://www.googleapis.com/customsearch/v1?key=" + process.env.SEARCH + "&cx=464995ac1214e4508&q=" + query

    const webby = (await axios.get(link))["data"]["items"]

    const [urls, title] = [[], []]
    let snippet = ""
    for(let i = 0; i != webby.length; i++){
        urls.push(webby[i]["link"])
        snippet += webby[i]["snippet"] + "\n" 
        title.push(webby[i]["title"])   

    }

    res.status(200).json({"title": title, "links": urls, "snippet": snippet})
    return res.end()
})

export const summary = functions.https.onRequest({cors: true}, async (req, res) => {
    const {search} = req.query

    const links = "https://search-tu6dy325kq-uc.a.run.app?query=" + search
    const webby = (await axios.get(links))["data"]

    const response = await ai.chat.completions.create({
        model: "o4-mini", 
        reasoning_effort: "low", 
        messages: [
            {
                role: "user", 
                content: [
                    {type: "text", text: "summarize " + webby["snippet"] + ", please"}
                ]
            }
        ]
    })
    res.status(200).send(response.choices[0].message["content"])
    return res.end()
})