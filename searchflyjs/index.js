import fs from 'fs'
import axios from 'axios'

export const scraper = async (query) => {
    const links = "https://summary-tu6dy325kq-uc.a.run.app?search=" + query
    const webby = await axios.get(links)

    const sites = "https://search-tu6dy325kq-uc.a.run.app?query=" + query
    const websites = (await axios.get(sites))["data"]["links"]
    fs.createWriteStream("links.json", "utf-8").write(JSON.stringify({"data": websites}))


    fs.createWriteStream("data.txt", "utf-8").write(webby["data"])
    return "summary of the sites are in data.txt and links of the sites are in links.json"
}
