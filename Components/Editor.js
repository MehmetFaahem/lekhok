import { EditorState } from "draft-js";
import { convertFromRaw } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Editored({ settingExact }) {
  const [writerState, setWriterState] = useState(EditorState.createEmpty());

  return (
    <Editor
      editorState={writerState}
      onEditorStateChange={(e) => setWriterState(e)}
      onContentStateChange={(e) => settingExact(e)}
    />
  );
}
