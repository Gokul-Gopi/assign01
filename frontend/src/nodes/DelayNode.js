import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id, data }) => {
  const [ms, setMs] = useState(data?.ms ?? 500);

  return (
    <BaseNode
      title="Delay"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-in` },
        { type: "source", position: Position.Right, id: `${id}-out` },
      ]}
    >
      <label
        style={{ display: "flex", justifyContent: "space-between", gap: 8 }}
      >
        <span>ms:</span>
        <input
          type="number"
          value={ms}
          min={0}
          onChange={(e) => setMs(Number(e.target.value))}
          style={{ width: 90 }}
        />
      </label>
    </BaseNode>
  );
};
