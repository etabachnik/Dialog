import React, { useState } from 'react';
import DialogPopup from './DialogPopup';
import {DialogMode} from './const';

interface IDialogContainerProps {}

  const DialogContainer: React.FC<IDialogContainerProps> = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogMode, setDialogMode] = useState<DialogMode>(DialogMode.BLANK);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleBlank = () => {
    setShowDialog(true);
    setDialogMode(DialogMode.BLANK);
  };

  const handleEdit = () => {
    setShowDialog(true);
    setDialogMode(DialogMode.EDIT);
  };

  return (
    <div className="container">
      <div className="divBlank">
        <button className="btn" onClick={handleBlank}>
          Blank
        </button>
      </div>

      <div className="divEdit">
        <button className="btn" onClick={handleEdit}>
          Edit
        </button>
      </div>

      {showDialog && <DialogPopup dialogMode={dialogMode} closeDialog={closeDialog} />}
    </div>
  );
}
export default DialogContainer;