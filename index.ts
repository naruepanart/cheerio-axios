import axios from "axios";
import * as cheerio from "cheerio";

const main = async () => {
  const response = await axios.get("https://news.ycombinator.com/newest");

  const $ = cheerio.load(response.data);

  const links = $(".titleline > a");

  console.log(links.text());
};

main();
