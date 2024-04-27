
"use client"
import React, { useRef } from 'react'
import Editor from '@monaco-editor/react';
const CodeEditor = () => {
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor:any, monaco:any) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }


  return (<div>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        theme='vs-dark'
        path='script.py'
        defaultLanguage="python"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </div>
  )
}

export default CodeEditor