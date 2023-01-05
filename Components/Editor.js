import { EditorState } from "draft-js";
import { convertFromRaw } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Editored({ settingExact }) {
  const [writerState, setWriterState] = useState(EditorState.createEmpty());

  return (
    <div
      style={{ width: "710px", height: "auto" }}
      className="p-4 rounded-2xl text-black bg-white mt-6 border-2 border-slate-900"
    >
      <Editor
        editorState={writerState}
        onEditorStateChange={(e) => setWriterState(e)}
        onContentStateChange={(e) => settingExact(e)}
      />
    </div>
  );
}
