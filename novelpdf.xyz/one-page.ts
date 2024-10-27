import axios from "axios";
import * as cheerio from "cheerio";
import data from "./one-page-data.json";

const main = async (data: string[]) => {
  for (let i = 0; i < data.length; i++) {
    const response = await axios.get(data[i]);

    const $ = cheerio.load(response.data);

    // copy from selector on page
    const heading = $("#chapter-heading");
    const content = $(
      "body > div.wrap > div > div > div > div > div > div > div > div > div.c-blog-post > div.entry-content > div > div > div.reading-content > div.text-left"
    );

    console.log($(heading[i]).text());
    console.log($(content[i]).text());
  }
};

main(data);
