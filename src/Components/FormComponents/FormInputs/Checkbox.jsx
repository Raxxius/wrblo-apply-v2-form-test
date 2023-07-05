import stringToArray from "../../../Functions/stringToArray";

export default function Checkbox(props) {
  /* Props deconstruction */
  const {
    id,
    type,
    handleFormChange,
    setFormData,
    pageNumber,
    value,
  } = props;

  const checkboxArray = stringToArray(value);
  let inputCheckbox = [];
  for (const checkbox in checkboxArray) {
    const checkboxInput = (
      <div className="checkbox-box" key={checkboxArray[checkbox]}>
        <input
          id={checkboxArray[checkbox]}
          className="checkbox"
          type={type}
          name={checkboxArray[checkbox]}
          value={checkboxArray[checkbox]}
          onChange={(e) => handleFormChange(e, setFormData, pageNumber)}
        />
        <label htmlFor={checkboxArray[checkbox]}>{checkboxArray[checkbox]}</label>
      </div>
    )
    inputCheckbox.push(checkboxInput)
  }

  return (
    <div className="input-checkbox" id={id}>
        {inputCheckbox}
    </div>
  )
}
