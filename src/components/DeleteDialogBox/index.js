import "./index.css";
const DeleteDialogBox = (props) => {
  const { onDeleteButton, onCancelButton } = props;

  return (
    <div className="model-wrapper">
      <div className="model-container">
        <p>Are you sure you want to delete?</p>
        <div className="model-button-card">
          <button className="model-cancel-btn" onClick={onCancelButton}>
            Cancel
          </button>
          <button className="model-delete-btn" onClick={onDeleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialogBox;
