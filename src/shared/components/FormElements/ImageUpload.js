import React, { useRef } from 'react';
import Button from './Button';

import './ImageUpload.css';

const ImageUpload = (props) => {
  const filePickerRef = useRef();

  const pickHandler = (e) => {
    console.log(e.target);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        ref={filePickerRef}
        id={props.id}
        type="file"
        style={{ display: 'none' }}
        accept=".jpg, .png,.jpeg"
        onChange={pickHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
          <img src="." alt="Preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>
          Pick Image
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
