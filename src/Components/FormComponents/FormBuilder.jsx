import FormItem from "./FormItem";

/**
 * format = expected data input from JSON
 *
 * array of list item:
 *
 * {
 * id: 'str'
 * listType: 'str',
 * formlegend: '{title of form}'
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

  /* creates an array 'formItems' that Maps data from the formData*/
  const formItems = formData.formList[pageNumber - 1].map((form) => {
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
          {form.legend !==  "" 
          ?
          <legend className="form-legend">{form.legend}</legend>
          : 
          ""}
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
    <div className="form-box">
      <div className="header-box">
        <div className="description"></div>
      </div>
      <div className="form-content">{formItems}</div>
    </div>
  );
};

export default FormBuilder;
