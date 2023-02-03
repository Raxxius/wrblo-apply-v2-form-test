import Example2 from "../Tests/Example2";
import FormBuilder from "./FormComponents/FormBuilder";
import FormHeader from "./FormComponents/FormHeader";
import FormFooter from "./FormComponents/FormFooter";
import { useState } from "react";
import { parseData } from "../Functions/formFunctions";

export default function Form() {
  /* datafetch */
  const DATA = Example2;

  const [formIntro, numberOfPages, pages] = parseData(DATA);
  const [pageNumber, setPageNumber] = useState(1);

  console.log("number of pages is " + numberOfPages )

  return (
    <>
      <FormHeader formIntro={formIntro} pageNumber={pageNumber} />
      {/* <FormBuilder /> */}
      <FormFooter />
    </>
  );
}
