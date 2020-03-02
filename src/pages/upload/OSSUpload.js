import React, { useState } from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Upload, Button } from 'antd';

const OSSUpload = (props) => {
  const [OSSData, setOSSData] = useState({});

  const onChange = ({ fileList }) => {
    const { onChange } = props;
    console.log('Aliyun OSS:', fileList);
    if (onChange && fileList.length > 0) {
      onChange([fileList[fileList.length - 1]]);
    }
  };

  const onRemove = file => {
    const { value, onChange } = props;
    const files = value.filter(v => v.url !== file.url);
    if (onChange) {
      onChange(files);
    }
  };

  const transformFile = file => {
    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    file.url = OSSData.dir + filename;
    return file;
  };

  const getExtraData = file => {
    return {
      key: file.url,
      OSSAccessKeyId: OSSData.accessId,
      policy: OSSData.policy,
      Signature: OSSData.signature,
    };
  };

  const beforeUpload = e => {
    console.log(22, e);
    return false;
  }

  const { value } = props;
  const uploadProps = {
    name: 'file',
    fileList: value,
    // action: OSSData.host,
    onChange: onChange,
    onRemove: onRemove,
    transformFile: transformFile,
    data: getExtraData,
    beforeUpload: beforeUpload,
  };
  return (
    <Upload {...uploadProps}>
      <Button>
        <LegacyIcon type="upload" /> <span>选择上传文件 </span>
      </Button>
    </Upload>
  );
};


export default OSSUpload;
