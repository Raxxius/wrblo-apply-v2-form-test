import FormItem from './FormItem'

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


/* core form builder */
const FormBuilder = (props) => {
  const formData = props.formData
  const setFormData = props.setFormData
  console.log(formData)

  /* Style variables */
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  /* Handle Save */
  function handleSave(pages) {
    alert("saving application form");
    const submitData = JSON.stringify(pages);
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
