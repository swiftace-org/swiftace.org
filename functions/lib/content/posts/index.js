import featuresContent from "./features.md.txt";
import authenticationContent from "./authentication.md.txt";
import form1Content from "./anatomy-of-a-form-part-1.md.txt";
import ditchingServerlessContent from "./ditching-serverless.md.txt";
import designPrinciplesContent from "./design-principles.md.txt";
import shipOfTheseusContent from "./ship-of-theseus.md.txt";

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
    slug: "ship-of-theseus",
    author:"Aakash N S",
    title: extractTitle(shipOfTheseusContent),
    date: "Sep 30, 2024",
    content: extractBody(shipOfTheseusContent),
  },
  {
    slug: "design-principles",
    author: "Aakash N S",
    title: extractTitle(designPrinciplesContent),
    date: "Aug 31, 2024",
    content: extractBody(designPrinciplesContent),
  },
  {
    slug: "ditching-serverless",
    author: "Aakash N S",
    title: extractTitle(ditchingServerlessContent),
    date: "Aug 28, 2024",
    content: extractBody(ditchingServerlessContent),
  },
  {
    slug: "anatomy-of-a-form-part-1",
    author: "Aakash N S",
    title: extractTitle(form1Content),
    date: "Jun 27, 2024",
    content: extractBody(form1Content),
  },
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
