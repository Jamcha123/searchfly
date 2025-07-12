#searchflyjs

searchflyjs is an npm package for searchfly.

searchfly allows you to search and summarize topics like programming or hacking and puts the data into data.txt and the links into links.json

web app: https://searchfly.org

github repo: https://github.com/Jamcha123/searchfly

npm package: https://www.npmjs.com/package/searchflyjs

initialization:

    1. npm install searchflyjs

    2. import {scraper} from 'searchflyjs' //into an index.js file

    3. console.log(await scraper(<search_query>))

    4. and run node .

You will get a data.txt file that stores the summaries.
Then you get a links.json file that stores the links.

hope you enjoy.