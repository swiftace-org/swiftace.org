import featuresContent from "./features.md.txt";
import authenticationContent from "./authentication.md.txt";

function extractTitle(content) {
  const firstLineBreak = content.indexOf("\n");
  const firstLine = content.substr(0, firstLineBreak).trim();
  if (!firstLine) throw new Error("First line must not be empty");
  if (!firstLine.startsWith("# "))
    throw new Error("First line must start with '# '");
  return firstLine.substr(2);
}

function extractBody(content) {
  const firstLineBreak = content.indexOf("\n");
  return content.substr(firstLineBreak).trim();
}

export const posts = [
  {
    slug: "authentication",
    author: "Aakash N S",
    title: extractTitle(authenticationContent),
    date: "May 16, 2024",
    content: extractBody(authenticationContent),
  },
  {
    slug: "features",
    author: "Aakash N S",
    title: extractTitle(featuresContent),
    date: "May 15, 2024",
    content: extractBody(featuresContent),
  },
];
