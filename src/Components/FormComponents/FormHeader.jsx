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
    <div className="form-header">
      <div className="form-intro">{formIntro}</div>
      <div className="form-navigation">
        <button className="submit-button" onClick={() => handleSubmit(pages)}>
          Submit the WRBLO Preliminary Application
        </button>
        <div className="page-selector">
          <div className="page-number">
            Page {pageNumber} of {numberOfPages}
          </div>
          <div className="button-box">
            <button
              className="prev-page, page-button"
              onClick={() =>
                handlePageChange("prev", setPageNumber, numberOfPages)
              }
            >
              Prev Page
            </button>
            <button
              className="next-page, page-button"
              onClick={() =>
                handlePageChange("next", setPageNumber, numberOfPages)
              }
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
