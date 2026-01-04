import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import LabelText from "./LabelText";

export const MergeNode = ({ id, data }) => {
  const [mode, setMode] = useState(data?.mode || "concat");

  return (
    <BaseNode
      title="Merge"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-a`, top: 33 },
        { type: "target", position: Position.Left, id: `${id}-b`, top: 66 },
        { type: "source", position: Position.Right, id: `${id}-out` },
      ]}
    >
      <label
        style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
      >
        <LabelText>Mode:</LabelText>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="concat">Concat</option>
          <option value="json">JSON</option>
        </select>
      </label>
    </BaseNode>
  );
};
