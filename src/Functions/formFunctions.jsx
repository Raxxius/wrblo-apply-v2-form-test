/** function that parses the JSON file into seperate variables that can be used by the form consturctor
 *
 * input = object {keys = intro: text, numberOfPages: number, formList: formobject}
 *
 * output = numberOfPages (number)
 *
 *
 */
export function parseData(props) {
  const numberOfPages = props.numberOfPages;
  const pages = [];
  const formIntro = props.intro;
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(props.formList[i]);
  }

  console.log(numberOfPages)
  return [formIntro, numberOfPages, pages];
}
