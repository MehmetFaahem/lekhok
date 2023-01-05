import { EditorState } from "draft-js";
import { convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Editored({ settingExact }) {
  return (
    <div
      style={{ width: "710px", height: "310px" }}
      className="p-4 rounded-2xl text-black bg-white mt-6 border-2 border-slate-900"
    >
      <Editor onContentStateChange={(e) => settingExact(e)} />
    </div>
  );
}
