import { handleHelpButton } from "../../Functions/formFunctions";
import { Modal } from "../Modal"

/** indivdual form component */

const FormItem = (props) => {
  /** props deconstruction */
  const {
    id,
    listType,
    formlegend,
    formText,
    maxCharacter,
    helpButton,
    setFormData,
    handleFormChange,
    pageNumber,
  } = props;

  const value = formText;

  /** If a help button is in the form data, adds one, else doesn't render */
  let helpButtonDiv = "";

  if (helpButton != undefined) {
    helpButtonDiv = (
      <>
      <button className="form-help-button" onClick={() => handleHelpButton(helpButton)}>
        ?
      </button>
      <Modal />
      </>
    );
  }

  let input = (
    <input
      id={id}
      type={listType}
      maxLength={maxCharacter}
      onChange={(e) => handleFormChange(e, setFormData, pageNumber)}
      value={value}
    ></input>
  );

  /** Overwrites the default input box with a
   * text area box if the list item is defined "textarea" */
  if (listType === "textarea") {
    input = (
      <textarea
        id={id}
        type={listType}
        maxLength={maxCharacter}
        onChange={(e) => handleFormChange(e, setFormData, pageNumber)}
        value={value}
      ></textarea>
    );
  }

  /** core return */
  return (
    <div className="form-item">
      <label className="form" htmlFor={id}>
        {formlegend}
      </label>
      {input}
      {helpButtonDiv}
    </div>
  );
};

export default FormItem;
