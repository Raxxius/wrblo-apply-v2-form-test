import { handleSubmit } from "../../Functions/formFunctions";

export default function FormHeader(props) {
  return (
    <div className="form-footer">
      <div className="form-intro">
            Form intro go here
      </div>
      <div className="submit-button" onClick={() => handleSubmit(props.pages)}>
            Form submit button
      </div>
      <div className="page-selector">
          Page selector
          <div>{props.pageNumber} of {props.numberOfPages}</div>
          <div className="prev-page" onClick={() => props.handlePageChange("prev", props.setPageNumber, props.numberOfPages)}>Prev Page</div>
          <div className="next-page" onClick={() => props.handlePageChange("next", props.setPageNumber, props.numberOfPages)}>Next Page</div>
      </div>
    </div>
  );
}
