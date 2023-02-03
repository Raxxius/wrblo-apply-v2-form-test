/* indivdual form component */

const FormItem = (props) => {
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
        onChange={handleChange}
        value={props.value}
        style={{
          width: "40vw",
          textAlign: "left",
          paddingLeft: "5vw",
        }}
      ></input>
    );
  
    if (props.listType === "textarea") {
      input = (
        <textarea
          id={props.id}
          type={props.listType}
          maxLength={props.maxCharacter}
          onChange={handleChange}
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
  
    function handleHelpButton() {
      alert(props.helpButton);
    }
  
    function handleChange(event) {
      const newFormData = props.formData.map((form) => {
        if (form.id === event.target.id) {
          return { ...form, formText: event.target.value };
        } else if (form.listType === "fieldset") {
          const subFormData = form["list"].map((subform) => {
            if (subform.id === event.target.id)
              return { ...subform, formText: event.target.value };
            return subform;
          });
          return { ...form, list: subFormData };
        }
        return form;
      });
      props.setFormData(newFormData);
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
  
  export default FormItem