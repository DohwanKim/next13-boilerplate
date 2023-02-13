/* eslint-disable */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';
import axiosClient from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';

interface Props {
  initValue?: string;
  isEditorLoaded: boolean;
  onChange?(data: string): void;
}

const Index = ({ isEditorLoaded, onChange, initValue = '' }: Props) => {
  const [editorData, setEditorData] = useState('');

  useEffect(() => {
    setEditorData(initValue);
  }, [initValue]);

  const customUploadAdapter = (loader: { file: Promise<string | Blob> }) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const data = new FormData();

          loader.file.then((file: string | Blob) => {
            data.append('files', file);

            resolve({
              default: `https://pixlr.com/images/index/remove-bg.webp`,
            });

            axiosClient
              .post('/file/image', data)
              .then((res) => {
                console.log(res);

                resolve({
                  default: `https://pixlr.com/images/index/remove-bg.webp`,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  // @ts-ignore
  function uploadPlugin(editor) {
    // @ts-ignore
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  return (
    <div>
      {isEditorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={initValue}
          onChange={(event, editor) => {
            const data = editor.getData();

            setEditorData(editor.getData());

            if (onChange) {
              onChange(data);
            }
          }}
          config={{
            mediaEmbed: {
              previewsInData: true,
            },
            extraPlugins: [uploadPlugin],
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

export default Index;
