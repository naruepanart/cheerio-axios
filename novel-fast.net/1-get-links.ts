import axios from "axios";
import fs from "fs";
import * as cheerio from "cheerio";
import data from "./get-links.json";

const main = async (data: any) => {
  for (let i = 0; i < data.length; i++) {
    const response = await axios.get(data[i]);
    const $ = cheerio.load(response.data);

    const links = $("#post-177920 > div.sertobody > div.bixbox.bxcl.epcheck > div.eplister.eplisterfull > ul > li > a");

    let l = [];
    for (let i = 0; i < links.length; i++) {
      const link = $(links[i]).attr("href");
      l.push(link);

      // write to one-page.data.json file use es6 version
      fs.writeFileSync("./novel-fast.net/get-content.json", JSON.stringify(l));
    }
  }
};

main(data);
