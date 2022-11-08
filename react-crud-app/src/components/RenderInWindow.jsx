import { useEffect, useRef } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

const RenderInWindow = (props) => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  useEffect(() => {
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "",
        "",
        "width=600,height=400,left=200,top=200"
      );
      newWindow.current.document.body.appendChild(container);

      const curWindow = newWindow.current;

      return () => {
        curWindow.close();
        props.setOn(false);
      };
    }
  }, [container]);

  return container && createPortal(props.children, container);
};

export default RenderInWindow;
