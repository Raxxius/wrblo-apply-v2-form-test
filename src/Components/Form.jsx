import Example from "../Tests/Example";
import FormBuilder from "./FormComponents/FormBuilder";
import FormHeader from "./FormComponents/FormHeader";
import FormFooter from "./FormComponents/FormFooter";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import {
  parseData,
  handlePageChange,
  handleFormChange,
} from "../Functions/formFunctions";


export default function Form() {

  const [formIntro, introModalText, numberOfPages, pages] = parseData(Example);

  /* state management */
  const [formData, setFormData] = useState(Example);
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
        introModalText={introModalText}
        formIntro={formIntro}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
        handlePageChange={handlePageChange}
        setPageNumber={setPageNumber}
        pages={pages}
        setModalActive={setModalActive}
        setModalText={setModalText}
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
