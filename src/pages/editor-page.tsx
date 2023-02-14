import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/organism/Editor'), {
  ssr: false,
});

export default function Home() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [testData, setTestData] = useState({ content: '' });

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
          setTestData({ ...testData, content: data });
        }}
      />
    </div>
  );
}
