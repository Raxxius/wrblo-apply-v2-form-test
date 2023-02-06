import Example2 from "../Tests/Example2";
import FormBuilder from "./FormComponents/FormBuilder";
import FormHeader from "./FormComponents/FormHeader";
import FormFooter from "./FormComponents/FormFooter";
import { useState } from "react";
import { parseData, handlePageChange, handleFormChange } from "../Functions/formFunctions";

export default function Form() {
  /* datafetch */
  const DATA = Example2;
  const [formIntro, numberOfPages, pages] = parseData(DATA);

  /* state management */
  const [formData, setFormData] = useState(DATA)
  const [pageNumber, setPageNumber] = useState(1);

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
        pageNumber={pageNumber}
        formData={formData}
        setFormData={setFormData}
        handleFormChange={handleFormChange}
      />
      <FormFooter />
    </>
  );
}
