import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import LabelText from "./LabelText";

export const FilterNode = ({ id, data }) => {
  const [rule, setRule] = useState(data?.rule || "nonEmpty");

  return (
    <BaseNode
      title="Filter"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-in` },
        { type: "source", position: Position.Right, id: `${id}-out` },
      ]}
    >
      <label
        style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
      >
        <LabelText>Rule:</LabelText>
        <select value={rule} onChange={(e) => setRule(e.target.value)}>
          <option value="nonEmpty">Non-empty</option>
          <option value="isNumber">Is number</option>
          <option value="startsWithA">Starts with “A”</option>
        </select>
      </label>
    </BaseNode>
  );
};
