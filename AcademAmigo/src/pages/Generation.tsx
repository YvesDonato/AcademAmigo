import React, { useState, useEffect } from 'react';
import { message, Upload, Input} from 'antd';
import { UploadFile, UploadChangeParam } from 'antd/lib/upload';
import type { UploadProps} from 'antd';
import { InboxOutlined } from '@ant-design/icons';

function Generation(){
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(false);
  const { Dragger } = Upload;

  useEffect(() => {
    const valid = validateTitle(title);
    setIsTitleValid(valid);
  }, [title]);

  const validateTitle = (inputTitle: string) => {
    if (inputTitle.includes('-') || inputTitle.trim() === '') {
      setTitleError('Enter title first. Title must not be empty or contain dashes (-).');
      return false;
    } else {
      setTitleError('');
      return true;
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    validateTitle(newTitle);
    setTitle(newTitle);
  };

  const props: UploadProps = {
    name: 'pdf',
    multiple: false,
    action: 'http://localhost:3000/api/upload',
    onChange(info: UploadChangeParam<UploadFile>) {
      if (titleError) {
        info.file.status = 'error'; // force error status if title is invalid
      }
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: React.DragEvent<HTMLDivElement>) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    data: (file) => {
      if (!validateTitle(title)) {
        throw new Error('Invalid title, cannot upload');
      }
      return { title, fileName: file.name };
    },
    beforeUpload: (file) => {
      return validateTitle(title); // prevent upload if title is invalid
    },
    disabled: !isTitleValid
  };

  return(
    <div className="flex h-3/4 justify-center">
      <div className="w-2/4 p-10 justify-center items-center">
        <div className="col-span-2 py-2">
          <Input placeholder="Title" onChange={handleChangeTitle} value={title} />
          {titleError && <div style={{ color: 'red' }}>{titleError}</div>}
        </div>     
        <div className="justify-center p-3 h-80 bg-white rounded-lg">
          <div className="m-5">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Dragger>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Generation;
