import FormItem from "./FormItem";

/**
 * format = expected data input from JSON
 *
 * array of list item:
 *
 * {
 * id: 'str'
 * listType: 'str',
 * formTitle: '{title of form}'
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
  /** props deconstruction */

  const { pageNumber, formData, setFormData, handleFormChange } = props;

  /* Style variables */
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  /* creates an array 'formItems' that Maps data from the formData*/
  const formItems = formData.formList[pageNumber-1].map((form) => {
    if (form.listType === "fieldset") {
      const subFormItems = form.list.map((subform) => {
        return (
          <FormItem
            key={subform.id}
            {...subform}
            setFormData={setFormData}
            handleFormChange={handleFormChange}
            pageNumber={pageNumber}
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
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          pageNumber={pageNumber}
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
          marginBottom: "20px",
        }}
      >
        <div
          className="description"
          style={{
            width: "45vw",
            textAlign: "left",
          }}
        ></div>
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
      </div>
    </div>
  );
};

export default FormBuilder;
