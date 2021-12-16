import React, { useState, useRef, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaHeading, FaLink, FaSearch } from "react-icons/fa";

function OldCreateBlog() {
  const textareaRef = useRef(null);
  const contentEditableRef = useRef(null);
  const [cursorHeight, setCursorHeight] = useState("0px");
  const [showOptions, setShowOptions] = useState(false);
  const [storyBoxSize, setStoryBoxSize] = useState(""); // you can manage data with it

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
    setCursorHeight(scrollHeight - 25 + "px");
  }, [storyBoxSize]);

  function getLineNumber(value) {
    var cursorPosition = value
      .substr(0, textareaRef.current.selectionStart)
      .split("\n").length;
    setCursorHeight(21 * (cursorPosition - 1) + "px");
  }

  return (
    <div className="editor">
      <div className="container">
        <input className="text__box title" type="text" placeholder="Title" />
      </div>
      <div className="container">
        <div className="menu">
          <FiPlusCircle
            className={showOptions ? "plus__menu__open" : "plus__menu__close"}
            onClick={() => {
              if (showOptions) {
                setShowOptions(false);
              } else {
                setShowOptions(true);
              }
            }}
            style={{ marginTop: cursorHeight }}
            size={35}
          />
          {showOptions ? (
            <div className="text__options" style={{ marginTop: cursorHeight }}>
              <FaHeading
                className="option__item"
                onClick={(e) => {
                  document.execCommand("bold", false, null);
                  console.log("Bhak");
                  e.preventDefault();
                }}
                size={25}
              />
              <FaLink className="option__item" size={25} />
              <FaSearch className="option__item" size={25} />
            </div>
          ) : null}
        </div>
        <textarea
          className="text__box story"
          placeholder="Tell your story..."
          ref={textareaRef}
          value={storyBoxSize}
          onChange={(e) => {
            setStoryBoxSize(e.target.value);
            setShowOptions(false);
          }}
          onKeyUp={(e) => {
            getLineNumber(e.target.value);
          }}
          onMouseUp={(e) => {
            getLineNumber(e.target.value);
          }}
        />
        <div>
          <FaHeading
            className="option__item"
            onClick={() => {
              console.log(contentEditableRef.current);
              console.log("Bhak");
            }}
            size={25}
          />

          <div
            ref={contentEditableRef}
            contentEditable
            style={{ border: "black 1px solid" }}
            onKeyUp={(e) => console.log(e.target.innerHTML)}
          ></div>
        </div>
      </div>
    </div>
  );
}
