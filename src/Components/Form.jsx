import Example from "../Tests/Example";
import FormBuilder from "./FormComponents/FormBuilder";
import FormHeader from "./FormComponents/FormHeader";
import FormFooter from "./FormComponents/FormFooter";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import {
  handlePageChange,
  handleFormChange,
} from "../Functions/formFunctions";
import "./form.css"

export default function Form() {
  /* state management */
  const [formData, setFormData] = useState(Example);
  const [pageNumber, setPageNumber] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [modalText, setModalText] = useState("");
  
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbx9c-2XTbioCGYRWcg56I7G2-TZWr0zPsUNd--YRa_NtdEvTK4xXOo16l-KsJ8jUAfg/exec?id=0"
    )
      .then((response) => response.json())
      .then((data) => {
          setFormData(data)
      });
  }, []);

  return (
    <>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        modalText={modalText}
        setModalText={setModalText}
      />
      <FormHeader
        introModalText={formData.introModalText}
        formIntro={formData.formIntro}
        pageNumber={pageNumber}
        numberOfPages={formData.numberOfPages}
        handlePageChange={handlePageChange}
        setPageNumber={setPageNumber}
        pages={formData.formList}
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
