import { useState } from "react";

/**
 * format =
 *
 * expected data input from JSON
 *
 * array of list item:
 *
 * {
 * id: 'str'
 * listType: 'str',
 * formtitle: '{title of form}'
 * formText: '{User input text}'
 * maxCharacter: '{max number of characters in the input}
 * }
 *
 * or fieldset based sublist
 *
 * {
 * id: 'str',
 * listType: 'fieldset',
 * legend: 'legend',
 * list: '[array of list item]
 * }
 *
 */

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

/* core form builder */
const FormBuilder = (props) => {
  /* State variables */
  const [formData, setFormData] = useState(props.data);

  /* Style variables */
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  /* Handle Save */
  function handleSave() {
    alert("saving application form");
    const submitData = JSON.stringify(formData);
    const blob = new Blob([submitData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "form-data.txt";
    link.href = url;
    link.click();
  }

  /* Handle loading data from a text file */
  function handleLoad(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    console.log(e.target.files[0]);
    reader.onload = function () {
      let newForm = JSON.parse(reader.result);
      console.log(newForm);
      setFormData(newForm);
    };
  }

  /* Handle emailing data */
  function handleSubmit() {
    alert(
      "Please remember to attach any additional documents to the email before sending"
    );
    const emailBody = formData.map((form) => {
      if (form.listType !== "fieldset") {
        return `%0A%0A ${form.formtitle}: %0A%0A ${form.formText}`;
      } else {
        const subForm = form["list"].map((subform) => {
          return `%0A%0A ${subform.formtitle}: %0A%0A ${subform.formText}`;
        });
        return `%0A%0A ${form.legend} ${subForm}`;
      }
    });

    const mailto = `mailto:mail@gmail.com?subject=WRBLO Preliminary submit form&body=${emailBody}`;
    window.location.href = mailto;
  }

  const formItems = formData.map((form) => {
    if (form.listType === "fieldset") {
      const subFormItems = form.list.map((subform) => {
        return (
          <FormItem
            key={subform.id}
            {...subform}
            formData={formData}
            setFormData={setFormData}
            value={subform.formText}
          />
        );
      });
      return (
        <fieldset key={form.id}>
          <legend
            style={{
              color: "white",
              backgroundColor: "darkblue",
              padding: "5px",
            }}
          >
            {form.legend}
          </legend>
          {subFormItems}
        </fieldset>
      );
    } else {
      return (
        <FormItem
          key={form.id}
          {...form}
          formData={formData}
          setFormData={setFormData}
          value={form.formText}
        />
      );
    }
  });

  /* Core return render **/
  return (
    <div className="form-box" style={style}>
      <div
        className="header-box"
        style={{
          width: "85vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <div
          className="description"
          style={{
            width: "45vw",
            textAlign: "left",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div
          className="submit-button"
          style={{
            width: "20vw",
            cursor: "pointer",
            color: "white",
            backgroundColor: "#c29f48",
            fontWeight: "600",
          }}
          onClick={handleSubmit}
        >
          <p>Submit the WRBLO Preliminary Application</p>
        </div>
      </div>
      <div
        className="form-content"
        style={{
          backgroundColor: "#D3D3D3",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        {formItems}
        <div
          className="save-load-button"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80vw",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "20px"
          }}
        >
          <div
            className="save-button"
            style={{
              backgroundColor: "white",
              cursor: "pointer",
              border: "2px solid black",
              padding: "5px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            <input
              type="file"
              name="load"
              formtitle="Load from Text file"
              onChange={handleLoad}
            />
          </div>
          <div
            className="save-button"
            style={{
              cursor: "pointer",
              color: "white",
              backgroundColor: "darkblue",
              width: "150px",
              padding: "5px",
              marginTop: "15px",
              marginRight: "0",
            }}
            onClick={handleSave}
          >
            Save Form
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
