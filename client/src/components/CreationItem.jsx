import React from 'react'
import { useState } from 'react'
import Markdown from 'react-markdown'

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false); // Fixed variable name

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
      <div className='flex justify-between items-center gap-4' onClick={toggleExpanded}>
        <div>
          <h2 className='font-medium'>{item.prompt}</h2>
          <p className='text-gray-500'>
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full'>
          {item.type}
        </button>
      </div>
      
      {expanded && (
        item.type === 'image' ? (
          <div className='mt-3'>
            <img src={item.content} alt="Generated content" className='w-full max-w-md rounded' />
          </div>
        ) : (
          <div className='mt-3 max-h-64 overflow-y-auto text-sm text-slate-700 p-3 bg-gray-50 rounded'>
            <div className='reset-tw'>
              <Markdown>{item.content}</Markdown>
              </div>
          </div>
        )
      )}
    </div>
  )
}

export default CreationItem
