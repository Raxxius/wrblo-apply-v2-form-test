import { handleHelpButton } from "../../Functions/formFunctions";
import Checkbox from "./FormInputs/Checkbox";
import Dropdown from "./FormInputs/Dropdown";
import Input from "./FormInputs/Input";
import Radio from "./FormInputs/Radio";
import TextArea from "./FormInputs/TextArea";

/** indivdual form component */

const FormItem = (props) => {
  /** props deconstruction */

  const {
    id,
    listType,
    formname,
    formtext,
    maxCharacter,
    helpButton,
    setFormData,
    handleFormChange,
    pageNumber,
    setModalActive,
    setModalText,
  } = props;

  console.log(formname)
  const value = formtext;

  /** If a help button is in the form data, adds one, else doesn't render */
  let helpButtonDiv = "";

  if (helpButton !== "") {
    helpButtonDiv = (
      <button
        className="form-help-button"
        onClick={() =>
          handleHelpButton(helpButton, setModalActive, setModalText)
        }
      >
        ?
      </button>
    );
  }

  /** default input for emails etc*/
  let input = (
    <Input
      id={id}
      type={listType}
      name={formname}
      maxCharacter={maxCharacter}
      handleFormChange={handleFormChange}
      setFormData={setFormData}
      pageNumber={pageNumber}
      value={value}
    />
  );

  /** Overwrites the default input box with a
   * text area box if the list item is defined "textarea" */
  if (listType === "textarea") {
    input = (
      <TextArea
        id={id}
        type={listType}
        name={formname}
        maxCharacter={maxCharacter}
        handleFormChange={handleFormChange}
        setFormData={setFormData}
        pageNumber={pageNumber}
        value={value}
      />
    );
  }

  /** Overwrites the default input box with a
   * dropdown input list if the item is defined "dropdown" */

  if (listType === "dropdown") {
    input = (
      <Dropdown
        id={id}
        type={listType}
        name={formname}
        maxCharacter={maxCharacter}
        handleFormChange={handleFormChange}
        setFormData={setFormData}
        pageNumber={pageNumber}
        value={value}
      />
    );
  }

    /** Overwrites the default input box with a
   * radio input list if the item is defined "radio" */

  if (listType === "radio") {
    input = (
      <Radio
        id={id}
        type={listType}
        name={formname}
        handleFormChange={handleFormChange}
        setFormData={setFormData}
        pageNumber={pageNumber}
        value={value}
      />
    );
  }

  if (listType === "checkbox") {
    input = (
      <Checkbox
        id={id}
        type={listType}
        name={formname}
        handleFormChange={handleFormChange}
        setFormData={setFormData}
        pageNumber={pageNumber}
        value={value}
      />
    );
  }

  /** core return */
  return (
    <div className="form-item">
      <label className="form" htmlFor={id}>
        {formname}
      </label>
      <div className="form-input-help">
        {input}
        {helpButtonDiv}
      </div>
    </div>
  );
};

export default FormItem;