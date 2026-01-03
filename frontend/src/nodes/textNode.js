// textNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode
      title="Text"
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span>Text:</span>
        <input value={currText} onChange={(e) => setCurrText(e.target.value)} />
      </label>
    </BaseNode>
  );
};
