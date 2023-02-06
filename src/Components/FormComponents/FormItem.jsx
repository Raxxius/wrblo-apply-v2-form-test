import { handleHelpButton } from '../../Functions/formFunctions'

/** indivdual form component */

const FormItem = (props) => {
  /** props deconstruction */
  const {
    id,
    listType,
    formTitle,
    formText,
    maxCharacter,
    helpButton,
    value,
    displayedPage,
    setFormData,
    handleFormChange,
  } = props;

  /** If a help button is in the form data, adds one, else doesn't render */
  let helpButtonDiv = ""

  if (helpButton != undefined) {
    helpButtonDiv = (
      <button className="help" onClick={() => handleHelpButton(helpButton)}>
        ?
      </button>
    );
  }

  let input = (
    <input
      id={id}
      type={listType}
      maxLength={maxCharacter}
      onChange={() => handleFormChange(setFormData)}
      value={value}
      style={{
        width: "40vw",
        textAlign: "left",
        paddingLeft: "5vw",
      }}
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
        onChange={() => handleFormChange(setFormData)}
        value={value}
        style={{
          width: "40vw",
          textAlign: "left",
          padding: "5px",
          height: "150px",
        }}
      ></textarea>
    );
  }


  /** core return */
  return (
    <div
      className="form_item"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "80vw",
      }}
    >
      <label
        className="form"
        htmlFor={id}
        style={{
          width: "20vw",
          textAlign: "left",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        {formTitle}
      </label>
      {input}
      {helpButtonDiv}
    </div>
  );
};

export default FormItem;
