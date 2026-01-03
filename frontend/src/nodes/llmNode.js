// llmNode.js
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-system`,
          top: 33,
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-prompt`,
          top: 66,
        },
        { type: "source", position: Position.Right, id: `${id}-response` },
      ]}
    >
      <div style={{ opacity: 0.8 }}>This is a LLM.</div>
    </BaseNode>
  );
};
