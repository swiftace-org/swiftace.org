import featuresContent from "./features.md.txt";
import authenticationContent from "./authentication.md.txt";
import form1Content from "./anatomy-of-a-form-part-1.md.txt";
import ditchingServerlessContent from "./ditching-serverless.md.txt";
import designPrinciplesContent from "./design-principles.md.txt";
import shipOfTheseusContent from "./ship-of-theseus.md.txt";
import howToWriteAFunctionContent from "./how-to-write-a-function.md.txt";
import denoContent from "./switching-to-deno.md.txt";
import jsxPart1Content from "./jsx-runtime-part-1.md.txt";
import deployWebAppContent from "./deploy-web-app-to-cloud-vm.md.txt";

function extractTitle(content) {
  const firstLineBreak = content.indexOf("\n");
  const firstLine = content.substr(0, firstLineBreak).trim();
  if (!firstLine) throw new Error("First line must not be empty");
  if (!firstLine.startsWith("# ")) {
    throw new Error("First line must start with '# '");
  }
  return firstLine.substr(2);
}

function extractBody(content) {
  const firstLineBreak = content.indexOf("\n");
  return content.substr(firstLineBreak).trim();
}

export const posts = [
  {
    slug: "deploy-web-app-to-cloud-vm",
    author: "Aakash N S",
    title: extractTitle(deployWebAppContent),
    date: "Nov 16, 2024",
    content: extractBody(deployWebAppContent),
  },
  {
    slug: "jsx-runtime-part-1",
    author: "Aakash N S",
    title: extractTitle(jsxPart1Content),
    date: "Oct 25, 2024",
    content: extractBody(jsxPart1Content),
  },
  {
    slug: "switching-to-deno",
    author: "Aakash N S",
    title: extractTitle(denoContent),
    date: "Oct 18, 2024",
    content: extractBody(denoContent),
  },
  {
    slug: "how-to-write-a-function",
    author: "Aakash N S",
    title: extractTitle(howToWriteAFunctionContent),
    date: "Oct 14, 2024",
    content: extractBody(howToWriteAFunctionContent),
  },
  {
    slug: "ship-of-theseus",
    author: "Aakash N S",
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
