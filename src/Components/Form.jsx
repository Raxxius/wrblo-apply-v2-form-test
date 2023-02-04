import Example2 from "../Tests/Example2";
import FormBuilder from "./FormComponents/FormBuilder";
import FormHeader from "./FormComponents/FormHeader";
import FormFooter from "./FormComponents/FormFooter";
import { useState } from "react";
import { parseData, handlePageChange } from "../Functions/formFunctions";
import { useEffect } from "react";

export default function Form() {
  /* datafetch */
  const DATA = Example2;

  /* state management */
  const [formIntro, numberOfPages, pages] = parseData(DATA);
  const [pageNumber, setPageNumber] = useState(3);
  const [displayedPage, setDisplayedPage] = useState(pages[pageNumber-1])
  console.log(displayedPage)
 
  useEffect(() => {
    setDisplayedPage(pages[pageNumber-1])
  }, [pageNumber])

  return (
    <>
      <FormHeader
        formIntro={formIntro}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
        handlePageChange={handlePageChange}
        setPageNumber={setPageNumber}
        pages={pages}
      />
      <FormBuilder 
        formData={displayedPage}
        setFormData={setDisplayedPage}
      />
      <FormFooter />
    </>
  );
}
