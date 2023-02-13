import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

export default function Home() {
  const Editor = dynamic(() => import('@/components/organism/Editor'), {
    ssr: false,
  });
  const [editorLoaded, setEditorLoaded] = useState(false);
  const testData = {
    title: '',
    content: '',
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="App">
      <h1>CKEditor 5</h1>
      <Editor
        isEditorLoaded={editorLoaded}
        initValue={''}
        onChange={(data) => {
          console.log(data);
          testData.content = data;
        }}
      />
    </div>
  );
}
