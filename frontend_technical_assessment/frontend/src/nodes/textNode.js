// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="min-w-[220px] bg-gradient-to-br from-vs-purple-900/80 to-vs-purple-800/80 border border-vs-purple-600/50 rounded-lg shadow-lg p-3">
      <div className="mb-2">
        <span className="text-vs-purple-200 font-semibold text-sm">Text</span>
      </div>
      <div>
        <label className="block text-xs text-gray-300">
          Text:
          <input 
            type="text" 
            value={currText} 
            onChange={handleTextChange}
            className="w-full mt-1 px-2 py-1 bg-vs-dark-800/50 border border-vs-purple-700/50 rounded text-white text-xs focus:outline-none focus:border-vs-purple-500 focus:ring-1 focus:ring-vs-purple-500"
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="!bg-vs-purple-500 !border-2 !border-vs-purple-300 !w-3 !h-3"
      />
    </div>
  );
}
