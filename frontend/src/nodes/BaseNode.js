import { Handle } from "reactflow";

export function BaseNode({ title, handles = [], children }) {
  return (
    <div
      // className={className}
      className="bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-2 text-slate-800 min-w-[15rem]"
    >
      <div className="font-semibold text-sm mb-2">{title}</div>

      <div className="text-sm space-y-2">{children}</div>

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
