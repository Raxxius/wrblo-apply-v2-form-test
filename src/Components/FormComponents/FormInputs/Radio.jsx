import stringToArray from "../../hooks/stringToArray";

export default function Radio(props) {
  /* Props deconstruction */
  const { id, type, name, handleFormChange, setFormData, pageNumber, value } =
    props;

  const radioArray = stringToArray(value);
  let inputRadio = [];
  for (const radio in radioArray) {
    const radioInput = (
      <div className="radio-box" key={radioArray[radio]}>
        <input
          id={radioArray[radio]}
          className="radio"
          name={name}
          type={type}
          onChange={(e) => handleFormChange(e, setFormData, pageNumber)}
        />
        <label>{radioArray[radio]}</label>
      </div>
    );
    inputRadio.push(radioInput);
  }
  return (
    <div className="input-radio" id={id}>
      {inputRadio}
    </div>
  );
}
