// submit.js

import { Send, SendHorizontal } from "lucide-react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export async function submitPipeline(nodes, edges) {
  const res = await fetch("http://localhost:8000/pipelines/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nodes, edges }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Request failed");
  }

  return res.json();
}

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const onSubmit = async () => {
    try {
      const result = await submitPipeline(nodes, edges);
      alert(
        `Pipeline Check ✅\n\nNodes: ${result.num_nodes}\nEdges: ${
          result.num_edges
        }\nDAG: ${result.is_dag ? "Yes" : "No (cycle found)"}`
      );
    } catch (err) {
      alert(`Submit failed ❌\n\n${err.message}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        className="bg-primary-500 flex items-center gap-2 text-white px-4 py-2 rounded-md"
        type="submit"
        onClick={onSubmit}
      >
        Submit
        <SendHorizontal size={16} className="translate-y-[1px]" />
      </button>
    </div>
  );
};
