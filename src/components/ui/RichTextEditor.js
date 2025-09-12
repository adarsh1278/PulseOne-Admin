import React, { useState, useRef, useEffect } from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  Link, 
  List, 
  ListOrdered,
  Type
} from 'lucide-react';

const RichTextEditor = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = ''
}) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (editorRef.current) {
      const content = editorRef.current.innerText.trim();
      setIsEmpty(content === '');
    }
  }, [value]);

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    
    // Update the value
    const content = editorRef.current.innerHTML;
    onChange({
      target: {
        name,
        value: content
      }
    });
  };

  const handleContentChange = () => {
    const content = editorRef.current.innerHTML;
    const textContent = editorRef.current.innerText.trim();
    setIsEmpty(textContent === '');
    
    onChange({
      target: {
        name,
        value: content
      }
    });
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  const handleKeyDown = (e) => {
    // Handle Enter key to create new lines
    if (e.key === 'Enter') {
      document.execCommand('insertHTML', false, '<br><br>');
      e.preventDefault();
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <div className={`border rounded-md bg-white ${error ? 'border-red-300' : 'border-gray-300'} ${isFocused ? 'ring-2 ring-blue-500 border-blue-500' : ''}`}>
        {/* Toolbar */}
        <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 rounded-t-md">
          <select 
            className="text-sm border-none bg-transparent focus:outline-none text-gray-700 px-2 py-1"
            onChange={(e) => formatText('formatBlock', e.target.value)}
            defaultValue=""
          >
            <option value="">Normal</option>
            <option value="<h1>">Heading 1</option>
            <option value="<h2>">Heading 2</option>
            <option value="<h3>">Heading 3</option>
          </select>
          
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          
          <button
            type="button"
            onClick={() => formatText('bold')}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-600 transition-colors"
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </button>
          
          <button
            type="button"
            onClick={() => formatText('italic')}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-600 transition-colors"
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </button>
          
          <button
            type="button"
            onClick={() => formatText('underline')}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-600 transition-colors"
            title="Underline"
          >
            <Underline className="h-4 w-4" />
          </button>
          
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          
          <button
            type="button"
            onClick={() => formatText('insertUnorderedList')}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-600 transition-colors"
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </button>
          
          <button
            type="button"
            onClick={() => formatText('insertOrderedList')}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-600 transition-colors"
            title="Numbered List"
          >
            <ListOrdered className="h-4 w-4" />
          </button>
          
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          
          <button
            type="button"
            onClick={() => {
              const url = prompt('Enter URL:');
              if (url) formatText('createLink', url);
            }}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-600 transition-colors"
            title="Insert Link"
          >
            <Link className="h-4 w-4" />
          </button>
        </div>
        
        {/* Editor Content */}
        <div className="relative">
          <div
            ref={editorRef}
            contentEditable
            className="min-h-[120px] p-3 focus:outline-none text-gray-900 leading-relaxed"
            onInput={handleContentChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onPaste={handlePaste}
            onKeyDown={handleKeyDown}
            suppressContentEditableWarning={true}
            style={{ minHeight: '120px' }}
          />
          
          {isEmpty && (
            <div className="absolute top-3 left-3 text-gray-400 pointer-events-none whitespace-pre-line select-none">
              {placeholder}
            </div>
          )}
        </div>
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default RichTextEditor;
