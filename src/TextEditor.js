import * as React from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  
} = EditorTools;
const TextEditor = ({onChange, customtype=null, customid=null,defaultContent='',value=''}) => {
  return (
    <Editor
      tools={[
        [Bold, Italic, Underline, Strikethrough],
        
      ]}
      contentStyle={{
        height: 120,
      }}
      // value={value}
       defaultContent={defaultContent}
      customid={customid} 
      customtype={customtype}
      onChange={onChange}
    />
  );
};
export default TextEditor;