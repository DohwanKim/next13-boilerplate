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

type embedType = 'youtube' | 'vimeo' | 'youku';

const Editor = ({ isEditorLoaded, onChange, initValue = '' }: Props) => {
  const [editorData, setEditorData] = useState('');

  useEffect(() => {
    setEditorData(initValue);
  }, [initValue]);

  const getEmbedMarkup = (type: embedType, id: string): string => {
    const baseUrl =
      type === 'youtube'
        ? 'https://www.youtube.com/embed/'
        : type === 'vimeo'
        ? 'https://player.vimeo.com/video/'
        : 'https://player.youku.com/embed/';

    return `<div style="position: relative; height: 0; padding-bottom: 56.2493%;">
              <iframe src="${baseUrl}${id}"
                  style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"
                  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
              </iframe>
            </div>`;
  };

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
            extraPlugins: [uploadPlugin],
            mediaEmbed: {
              previewsInData: true,
              allowedProviders: ['youtube', 'vimeo', 'youku'],
              providers: [
                {
                  name: 'youtube',
                  url: /^https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
                  html: (match: string[]) => {
                    return getEmbedMarkup('youtube', match[2]);
                  },
                },
                {
                  name: 'vimeo',
                  url: /^https?:\/\/(player\.)?vimeo\.com\/(video\/)?([0-9]+)$/,
                  html: (match: string[]) => {
                    return getEmbedMarkup('vimeo', match[3]);
                  },
                },
                {
                  name: 'youku',
                  url: /^(https?:\/\/)?(v|player)\.youku\.com\/(v_show|player\.php|embed)(\/sid)?\/(id_)?(\w+)|(\w+)/,
                  html: (match: string[]) => {
                    return getEmbedMarkup('youku', match[6]);
                  },
                },
              ],
            },
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

export default Editor;
