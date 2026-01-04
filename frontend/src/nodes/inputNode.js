// inputNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import LabelText from "./LabelText";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      handles={[
        {
          type: "source",
          position: Position.Right,
          id: `${id}-value`,
        },
      ]}
    >
      <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
        <label
          style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
        >
          <LabelText>Name:</LabelText>
          <input
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>

        <label
          style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
        >
          <LabelText>Type:</LabelText>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
