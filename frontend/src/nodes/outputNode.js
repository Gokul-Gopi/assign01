// outputNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      title="Output"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-value`,
        },
      ]}
    >
      <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
        <label
          style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
        >
          <span>Name:</span>
          <input
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>

        <label
          style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
        >
          <span>Type:</span>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
