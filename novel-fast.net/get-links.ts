import axios from "axios";
import * as cheerio from "cheerio";

const main = async () => {
  const response = await axios.get("https://novel-fast.net/novel/%e0%b9%80%e0%b8%8b%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b8%84%e0%b8%b5%e0%b8%a2%e0%b9%8c%e0%b8%9a%e0%b8%ad%e0%b8%a3%e0%b9%8c%e0%b8%94-%e9%99%86%e5%9c%b0%e9%94%ae%e4%bb%99/");

  const $ = cheerio.load(response.data);

  const links = $("#post-177920 > div.sertobody > div.bixbox.bxcl.epcheck > div.eplister.eplisterfull > ul > li > a");

for (let i = 0; i < links.length; i++) {
    const link = $(links[i]).attr("href");
    console.log($(links[i]).text(), link);
  }
};

main();
