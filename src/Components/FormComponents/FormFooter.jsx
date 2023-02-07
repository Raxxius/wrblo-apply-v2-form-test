import { handleSave, handleLoad } from '../../Functions/formFunctions'

export default function FormFooter(props) {
  const { formData, setFormData } = props
  return (
    <div className="form-footer">
      <div
        className="save-load-button"
      >
        <div
          className="load-button"
        >
          <input
            type="file"
            name="load"
            formlegend="Load from Text file"
            onChange={(e) => handleLoad(e, setFormData)}
          />
        </div>
        <button
          className="save-button"
          onClick={() => handleSave(formData)}
        >
          Save Form
        </button>
      </div>
    </div>
  );
}
