import { marked } from "marked";

const getResources = async () => {
  const github_url =
    "https://raw.githubusercontent.com/suhailkakar/awesome-base-info/main/README.md";

  const html = await fetch(github_url, {
    cache: "no-cache",
  })
    .then((response) => response.text())
    .then((text) => marked(text));

  // remove anything before "Base Official Links"

  const start = html.indexOf("<h2>Base Official Links</h2>");

  return html.slice(start);
};

export default getResources;
