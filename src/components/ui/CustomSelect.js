import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const CustomSelect = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "Select an option...", 
  className = "",
  showSearch = false,
  size = "sm" // sm, md, lg
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const selectedOption = options.find(option => option.value === value);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (option.description && option.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, showSearch]);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    } else if (event.key === 'Enter' && filteredOptions.length > 0) {
      handleSelect(filteredOptions[0]);
    }
  };

  // Size configurations
  const sizeClasses = {
    sm: {
      trigger: "px-3 py-2 text-sm",
      option: "px-3 py-2",
      icon: "w-4 h-4",
      search: "px-2 py-1 text-xs"
    },
    md: {
      trigger: "px-4 py-3 text-base",
      option: "px-4 py-3",
      icon: "w-5 h-5",
      search: "px-3 py-2 text-sm"
    },
    lg: {
      trigger: "px-5 py-4 text-lg",
      option: "px-5 py-4",
      icon: "w-6 h-6",
      search: "px-4 py-3 text-base"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Select Trigger */}
      <div 
        className={`
          relative w-full bg-white border border-gray-300 rounded-lg cursor-pointer
          transition-all duration-200 ease-in-out hover:border-gray-400
          ${currentSize.trigger}
          ${isOpen 
            ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20' 
            : ''
          }
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            {selectedOption ? (
              <div>
                <div className="font-medium text-gray-900 truncate">
                  {selectedOption.label}
                </div>
                {selectedOption.description && size !== 'sm' && (
                  <div className="text-xs text-gray-500 truncate mt-0.5">
                    {selectedOption.description}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-gray-400 truncate">
                {placeholder}
              </div>
            )}
          </div>
          <ChevronDown 
            className={`
              ${currentSize.icon} text-gray-400 transition-transform duration-200 flex-shrink-0 ml-2
              ${isOpen ? 'transform rotate-180' : ''}
            `} 
          />
        </div>
      </div>

      {/* Dropdown */}
      <div 
        className={`
          absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 
          rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-200
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-2 invisible'
          }
        `}
      >
        {/* Search Input */}
        {showSearch && (
          <div className="p-2 border-b border-gray-100">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`
                w-full border border-gray-200 rounded focus:outline-none 
                focus:ring-1 focus:ring-blue-500 focus:border-transparent
                ${currentSize.search}
              `}
            />
          </div>
        )}

        {/* Options List */}
        <div className="max-h-48 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`
                  ${currentSize.option} cursor-pointer transition-all duration-150
                  hover:bg-blue-50 flex items-center justify-between group
                  ${value === option.value 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-900 hover:text-blue-700'
                  }
                `}
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">
                    {option.label}
                  </div>
                  {option.description && size !== 'sm' && (
                    <div className="text-xs text-gray-500 mt-0.5 truncate">
                      {option.description}
                    </div>
                  )}
                </div>
                {value === option.value && (
                  <Check className={`${currentSize.icon} text-blue-600 ml-2 flex-shrink-0`} />
                )}
              </div>
            ))
          ) : (
            <div className={`${currentSize.option} text-center text-gray-500`}>
              <div className="text-sm">No options found</div>
              {showSearch && (
                <div className="text-xs mt-1">Try a different search term</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;