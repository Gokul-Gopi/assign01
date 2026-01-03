import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const SplitNode = ({ id }) => {
  return (
    <BaseNode
      title="Split"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-in` },
        { type: "source", position: Position.Right, id: `${id}-out1`, top: 33 },
        { type: "source", position: Position.Right, id: `${id}-out2`, top: 66 },
      ]}
    >
      <div style={{ opacity: 0.8 }}>Splits input into two branches.</div>
    </BaseNode>
  );
};
