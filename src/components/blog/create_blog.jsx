import React from "react";
import {
  FaHeading,
  FaLink,
  FaSearch,
  FaBold,
  FaItalic,
  FaQuoteLeft,
} from "react-icons/fa";
import { Editor, EditorState, RichUtils } from "draft-js";

import "./create_blog.css";
import "draft-js/dist/Draft.css";
import "./custom_editor.css";
import "./draftjs_editor.css";

const styleMap = {
  HEADING: {
    fontSize: "2em",
  },
  STRIKETHROUGH: {
    textDecoration: "line-through",
  },
  BLOCKQUOTE: {
    fontStyle: "italic",
    textAlign: "center",
    margin: "50px",
    padding: "5px",
    borderLeft: "5px solid #999",
  },
};

class CreateBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      showOptions: false,
      showURLInput: false,
    };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  }

  _onItalicClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  }

  _onHeadingClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "HEADING")
    );
  }

  _onBlockQuoteClick() {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "BLOCKQUOTE")
    );
  }

  render() {
    return (
      <div>
        <center>
          <div className="editor__toolbar">
            <FaHeading
              className="option__item"
              onClick={this._onHeadingClick.bind(this)}
              size={25}
            />
            <FaBold
              className="option__item"
              onClick={this._onBoldClick.bind(this)}
              size={25}
            />
            <FaItalic
              className="option__item"
              onClick={this._onItalicClick.bind(this)}
              size={25}
            />
            <FaQuoteLeft
              className="option__item"
              onClick={this._onBlockQuoteClick.bind(this)}
              size={25}
            />
            <FaLink className="option__item" size={25} />
            <FaSearch className="option__item" size={25} />
          </div>
          <div>
            <Editor
              customStyleMap={styleMap}
              editorState={this.state.editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              placeholder="Tell your story..."
              ref="editor"
            />
          </div>
        </center>
      </div>
    );
  }
}

export default CreateBlog;
