import React, { useEffect, useRef, useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import Upload from './upload';

interface Props {
  setcontent: string;
  onchange: (value: string) => void;
}

const SunEditorComponent: React.FC<Props> = ({ setcontent, onchange }) => {
  const [editorInstance, setEditorInstance] = useState<any>(null);
  const [coverImg, setCoverImg] = useState("");

  const insertMedia = (url: string) => {
    if (!editorInstance) return;

    if (url.match(/\.(jpeg|jpg|gif|png|webp)$/)) {
      editorInstance.insertHTML(`<img src="${url}" alt="Uploaded" style="max-width: 100%;" />`);
    } else if (url.match(/\.(mp4|webm|ogg)$/)) {
      editorInstance.insertHTML(`
        <video controls style="max-width: 100%;">
          <source src="${url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `);
    }
  };

  return (
    <div className="relative">
      <div className="mb-2">
        <Upload
          coverImg={coverImg}
          setCoverImg={setCoverImg}
          onUploadComplete={(url: string) => insertMedia(url)}
        />
      </div>

      <SunEditor
        getSunEditorInstance={setEditorInstance} // ✅ get reference to editor
        setDefaultStyle="font-size: 1vw; line-height: 1.5; height: 16vw; border: 1px solid #ccc; padding: 10px; overflow-y: scroll;"
        setContents={setcontent}
        onChange={(content) => onchange(content)}
        setOptions={{
          buttonList: [
            ['undo', 'redo'],
            ['bold', 'underline', 'italic', 'strike'],
            ['fontSize', 'formatBlock'],
            ['align', 'list', 'link','video'], // 👈 removed image/video buttons
            ['codeView', 'fullScreen'],
          ],
        }}
      />
    </div>
  );
};

export default SunEditorComponent;