// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="px-5">
      <div className="shadow border-primary border mt-4 flex flex-wrap gap-2 p-2 rounded-lg">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="customMerge" label="Merge" />
        <DraggableNode type="customMath" label="Math" />
        <DraggableNode type="customDelay" label="Delay" />
        <DraggableNode type="customSplit" label="Split" />
        <DraggableNode type="customFilter" label="Filter" />
      </div>
    </div>
  );
};
