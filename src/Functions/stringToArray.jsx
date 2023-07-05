export default function stringToArray(str) {
  /* remove white space, brackets and comma seperate split array*/
  const content = str.slice(1, -1);
  const elements = content.split(",");

  // Trim each element to remove any extra spaces
  const trimmedElements = elements.map((element) => element.trim());

  return trimmedElements;
}
