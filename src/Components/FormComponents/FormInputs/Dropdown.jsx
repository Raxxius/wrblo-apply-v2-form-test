import stringToArray from "../../../Functions/stringToArray";

export default function Dropdown(props) {
  /* Props deconstruction */
  const { id, handleFormChange, setFormData, pageNumber, value } =
    props;

  const dropDownArray = stringToArray(value);
  let selectDropDown = [];
  for (const dropDown in dropDownArray) {
    let dropDownOption = (
      <option
        key={dropDownArray[dropDown]}
        value={dropDownArray[dropDown]}
        onChange={(e) => handleFormChange(e, setFormData, pageNumber)}
      >
        {dropDownArray[dropDown]}
      </option>
    );
    selectDropDown.push(dropDownOption);
  }
  return (
    <select className="drop-down" id={id}>
      {selectDropDown}
    </select>
  );
}
