import React, { Component } from "react";
import { EditorState, convertToRaw,ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  constructor(props) {
    super(props);
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getDetail = () => {
    return draftToHtml(
      convertToRaw(this.state.stateeditorState.getCurrentContent())
    );
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          editorStyle={{ border: "1px solid #ccc", minHeight: "200px" }}
        />
        {/* <textarea
          disabled
        /> */}
      </div>
    );
  }
}
