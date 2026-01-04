import { useEffect, useMemo, useRef, useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import LabelText from "./LabelText";

const VAR_REGEX = /\{\{\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  // Extract variables from text (unique + stable order)
  const variables = useMemo(() => {
    const found = [];
    const seen = new Set();
    let match;

    while ((match = VAR_REGEX.exec(currText)) !== null) {
      const name = match[1];
      if (!seen.has(name)) {
        seen.add(name);
        found.push(name);
      }
    }

    return found;
  }, [currText]);

  // Auto-resize textarea (height)
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [currText]);

  // Build handles:
  //   - left handles for variables
  //   - right output handle
  const handles = useMemo(() => {
    const left = variables.map((v, i) => {
      const top =
        variables.length === 1 ? 50 : ((i + 1) * 100) / (variables.length + 1);

      return {
        type: "target",
        position: Position.Left,
        id: `${id}-${v}`,
        top,
      };
    });

    return [
      ...left,
      { type: "source", position: Position.Right, id: `${id}-output` },
    ];
  }, [variables, id]);

  return (
    <BaseNode title="Text" handles={handles} width={260} minHeight={100}>
      <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <LabelText>Text:</LabelText>

        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={1}
          style={{
            width: "100%",
            resize: "none",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
          placeholder="Type... e.g. Hello {{input}}"
        />
      </label>

      {variables.length > 0 && (
        <div style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>
          Vars: {variables.map((v) => `{{${v}}}`).join(", ")}
        </div>
      )}
    </BaseNode>
  );
};
