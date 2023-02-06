import { handleSubmit } from "../../Functions/formFunctions";

export default function FormHeader(props) {
  /** props deconstruction */

  const {
    formIntro,
    pageNumber,
    numberOfPages,
    handlePageChange,
    setPageNumber,
    pages,
  } = props;

  return (
    <div className="form-footer">
      <div className="form-intro">{formIntro}</div>
      <div className="submit-button" onClick={() => handleSubmit(pages)}>
        Form submit button
      </div>
      <div className="page-selector">
        Page selector
        <div>
          {pageNumber} of {numberOfPages}
        </div>
        <div
          className="prev-page"
          onClick={() =>
            handlePageChange("prev", setPageNumber, numberOfPages)
          }
        >
          Prev Page
        </div>
        <div
          className="next-page"
          onClick={() => handlePageChange("next", setPageNumber, numberOfPages)}
        >
          Next Page
        </div>
      </div>
    </div>
  );
}
