export default function TextArea(props) {
  /* Props deconstruction */
  const {
    id,
    listType,
    maxCharacter,
    handleFormChange,
    setFormData,
    pageNumber,
    value,
  } = props;

  return (
    <textarea
      id={id}
      type={listType}
      maxLength={maxCharacter}
      onChange={(e) => handleFormChange(e, setFormData, pageNumber)}
      value={value}
    />
  );
}
