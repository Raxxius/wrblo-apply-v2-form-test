export default function Input(props) {
  /* Props deconstruction */
  const {
    id,
    type,
    name,
    maxCharacter,
    handleFormChange,
    setFormData,
    pageNumber,
    value,
  } = props;

  return (
    <input
      id={id}
      type={type}
      placeholder={name}
      maxLength={maxCharacter}
      onChange={(e) => handleFormChange(e, setFormData, pageNumber)}
      value={value}
    />
  );
}
