// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div className="min-w-[220px] bg-gradient-to-br from-vs-purple-900/80 to-vs-purple-800/80 border border-vs-purple-600/50 rounded-lg shadow-lg p-3">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
        className="!bg-vs-purple-500 !border-2 !border-vs-purple-300 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
        className="!bg-vs-purple-500 !border-2 !border-vs-purple-300 !w-3 !h-3"
      />
      <div className="mb-2">
        <span className="text-vs-purple-200 font-semibold text-sm">LLM</span>
      </div>
      <div>
        <span className="text-gray-400 text-xs">This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="!bg-vs-purple-500 !border-2 !border-vs-purple-300 !w-3 !h-3"
      />
    </div>
  );
}
