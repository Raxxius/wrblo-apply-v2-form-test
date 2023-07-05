import { handleSubmit } from "../../Functions/formFunctions";
import { handleHelpButton } from "../../Functions/formFunctions";
import parse from "html-react-parser";

export default function FormHeader(props) {
  /** props deconstruction */

  const {
    formIntro,
    introModalText,
    pageNumber,
    numberOfPages,
    handlePageChange,
    setPageNumber,
    pages,
    setModalActive,
    setModalText,
  } = props;

  return (
    <div className="form-header">
      <div className="form-intro-wrapper">
        {/* <div className="form-intro">{parse(formIntro)}</div> */}
        <button
          className="set-modal"
          onClick={() =>
            handleHelpButton(parse(introModalText), setModalActive, setModalText)
          }
        >
          Click here for more details on application
        </button>
      </div>
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
              className="prev-page page-button"
              onClick={() =>
                handlePageChange("prev", setPageNumber, numberOfPages)
              }
            >
              Prev Page
            </button>
            <button
              className="next-page page-button"
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
