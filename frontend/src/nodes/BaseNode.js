import { Handle } from "reactflow";

export function BaseNode({ title, handles = [], children }) {
  return (
    <div className="bg-white border-solid rounded-xl border border-slate-200 shadow-md p-4 text-slate-800 min-w-[15rem]">
      <div className="font-semibold mb-3 border-b pb-2">{title}</div>

      <div className="text-sm space-y-2">{children}</div>

      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.top != null ? { top: `${h.top}%` } : undefined}
          className="!bg-primary-500 !w-2 !h-2"
        />
      ))}
    </div>
  );
}
