// BaseNode.jsx
import { Handle } from "reactflow";

export function BaseNode({
  title,
  handles = [],
  width = 220,
  minHeight = 80,
  style,
  className,
  children,
}) {
  return (
    <div
      className={className}
      style={{
        width,
        minHeight,
        border: "1px solid #111",
        borderRadius: 10,
        background: "white",
        padding: 10,
        boxSizing: "border-box",
        position: "relative",
        ...style,
      }}
    >
      {/* Header */}
      <div style={{ fontWeight: 700, marginBottom: 8 }}>{title}</div>

      {/* Body */}
      <div>{children}</div>

      {/* Handles */}
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.top != null ? { top: `${h.top}%` } : undefined}
        />
      ))}
    </div>
  );
}
