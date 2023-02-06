
/** indivdual form component */

const FormItem = (props) => {
  /** props deconstruction */
  const {displayedPage, setFormData, handleFormChange} = props


  

  /** If a help button is in the form data, adds one, else doesn't render */
  let helpButton = "";

  if (props.helpButton != undefined) {
    helpButton = (
      <button className="help" onClick={handleHelpButton}>
        ?
      </button>
    );
  }

  let input = (
    <input
      id={props.id}
      type={props.listType}
      maxLength={props.maxCharacter}
      onChange={props.handleFormChange(props.setFormData)}
      value={props.value}
      style={{
        width: "40vw",
        textAlign: "left",
        paddingLeft: "5vw",
      }}
    ></input>
  );

  /** Overwrites the default input box with a
   * text area box if the list item is defined "textarea" */
  if (props.listType === "textarea") {
    input = (
      <textarea
        id={props.id}
        type={props.listType}
        maxLength={props.maxCharacter}
        onChange={props.handleFormChange(props.setFormData)}
        value={props.value}
        style={{
          width: "40vw",
          textAlign: "left",
          padding: "5px",
          height: "150px",
        }}
      ></textarea>
    );
  }

  /** Current alert, to be fleshed out to a modal */
  function handleHelpButton() {
    alert(props.helpButton);
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
        htmlFor={props.id}
        style={{
          width: "20vw",
          textAlign: "left",
          paddingLeft: "5vw",
          paddingRight: "5vw",
        }}
      >
        {props.formtitle}
      </label>
      {input}
      {helpButton}
    </div>
  );
};

export default FormItem;
