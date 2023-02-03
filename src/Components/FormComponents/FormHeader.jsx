export default function FormHeader(props) {
  return (
    <div className="form-footer">
      <div className="form-intro">
            Form intro go here
      </div>
      <div className="submit-button">
            Form submit button
      </div>
      <div className="page-selector">
          Page selector
          <div>{props.pageNumber} of {props.numberOfPages}</div>
      </div>
    </div>
  );
}
