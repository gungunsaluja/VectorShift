// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="min-w-[220px] bg-gradient-to-br from-vs-purple-900/80 to-vs-purple-800/80 border border-vs-purple-600/50 rounded-lg shadow-lg p-3">
      <div className="mb-2">
        <span className="text-vs-purple-200 font-semibold text-sm">Input</span>
      </div>
      <div className="space-y-2">
        <label className="block text-xs text-gray-300">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="w-full mt-1 px-2 py-1 bg-vs-dark-800/50 border border-vs-purple-700/50 rounded text-white text-xs focus:outline-none focus:border-vs-purple-500 focus:ring-1 focus:ring-vs-purple-500"
          />
        </label>
        <label className="block text-xs text-gray-300">
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            className="w-full mt-1 px-2 py-1 bg-vs-dark-800/50 border border-vs-purple-700/50 rounded text-white text-xs focus:outline-none focus:border-vs-purple-500 focus:ring-1 focus:ring-vs-purple-500"
          >
            <option value="Text" className="bg-vs-dark-800">Text</option>
            <option value="File" className="bg-vs-dark-800">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="!bg-vs-purple-500 !border-2 !border-vs-purple-300 !w-3 !h-3"
      />
    </div>
  );
}
