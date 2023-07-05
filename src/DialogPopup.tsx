import React, { useState } from 'react';
import {DialogMode} from './const';

interface IDialogPopupProps {
  dialogMode: DialogMode;
  closeDialog: () => void;
}

const DialogPopup: React.FC<IDialogPopupProps> = ({ dialogMode, closeDialog }) => {
  const text = dialogMode === DialogMode.EDIT ? 'Hello' : '';
  const [txt, setTxt] = useState<string>(text);

  const handleCancel = () => {
    closeDialog();
  };

  const handleSave = () => {
    console.log(txt);
    closeDialog();
  };

  return (
    <div className="dialogContainer">
      <input
        placeholder="Some text..."
        className="input"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
      />
      <div className="buttonWrapper">
        <button className="dialogButton" onClick={handleCancel}>
          Cancel
        </button>
        <button
          className={txt !== '' ? 'dialogButton' : 'dialogButtonDisabled'}
          onClick={handleSave}
          disabled={txt === ''}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DialogPopup;
