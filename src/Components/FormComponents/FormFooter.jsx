import { handleSave, handleLoad } from '../../Functions/formFunctions'

export default function FormFooter(props) {
  return (
    <div className="form-footer">
      <div
        className="save-load-button"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "20px",
        }}
      >
        <div
          className="save-button"
          style={{
            backgroundColor: "white",
            cursor: "pointer",
            border: "2px solid black",
            padding: "5px",
            marginTop: "15px",
            marginLeft: "15px",
          }}
        >
          <input
            type="file"
            name="load"
            formlegend="Load from Text file"
            onChange={handleLoad}
          />
        </div>
        <div
          className="save-button"
          style={{
            cursor: "pointer",
            color: "white",
            backgroundColor: "darkblue",
            width: "150px",
            padding: "5px",
            marginTop: "15px",
            marginRight: "0",
          }}
          onClick={handleSave}
        >
          Save Form
        </div>
      </div>
    </div>
  );
}
