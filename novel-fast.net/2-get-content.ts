import axios from "axios";
import * as cheerio from "cheerio";
import data from "./get-content.json";

const main = async (data: string[]) => {
  for (let i = 0; i < data.length; i++) {
    const response = await axios.get(data[i]);

    const $ = cheerio.load(response.data);

    // copy from selector on page
    const heading = $("#post-178773 > div.bixbox.episodedl > div > div.epheader > h1");
    console.log(heading.text());

    const content = $("#post-178773 > div.bixbox.episodedl > div > div.epcontent.entry-content");
    console.log(content.text());
  }
};

main(data);
