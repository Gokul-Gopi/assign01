import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const MathNode = ({ id, data }) => {
  const [op, setOp] = useState(data?.op || "add");

  return (
    <BaseNode
      title="Math"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-a`, top: 33 },
        { type: "target", position: Position.Left, id: `${id}-b`, top: 66 },
        { type: "source", position: Position.Right, id: `${id}-result` },
      ]}
    >
      <label
        style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
      >
        <span>Op:</span>
        <select value={op} onChange={(e) => setOp(e.target.value)}>
          <option value="add">A + B</option>
          <option value="sub">A - B</option>
          <option value="mul">A × B</option>
          <option value="div">A ÷ B</option>
        </select>
      </label>
    </BaseNode>
  );
};
