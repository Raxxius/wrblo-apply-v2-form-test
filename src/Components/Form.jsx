import Example2 from "../Tests/Example2";
import FormBuilder from "./FormComponents/FormBuilder";
import FormHeader from "./FormComponents/FormHeader";
import FormFooter from "./FormComponents/FormFooter";
import Modal from "./Modal";
import { useState } from "react";
import {
  parseData,
  handlePageChange,
  handleFormChange,
} from "../Functions/formFunctions";

export default function Form() {
  /* datafetch */
  const DATA = Example2;
  const [formIntro, numberOfPages, pages] = parseData(DATA);

  /* state management */
  const [formData, setFormData] = useState(DATA);
  const [pageNumber, setPageNumber] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [modalText, setModalText] = useState("");

  return (
    <>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        modalText={modalText}
        setModalText={setModalText}
      />
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
        setModalActive={setModalActive}
        setModalText={setModalText}
      />
      <FormFooter formData={formData} setFormData={setFormData} />
    </>
  );
}
