"use client"
import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, Eye, Edit, Trash2 } from 'lucide-react';

const DataTable = ({ 
  title = "Data Table",
  data = [],
  columns = [],
  showAddButton = true,
  addButtonText = "Add Item",
  onAdd,
  onView,
  onEdit,
  onDelete,
  searchable = true,
  paginated = true,
  itemsPerPageOptions = [12, 15, 50, 100]
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    
    return data.filter(item =>
      columns.some(column => {
        const value = item[column.key];
        return value && value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [data, searchTerm, columns]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const ActionButton = ({ icon: Icon, onClick, variant = 'default', className = '' }) => {
    const baseClasses = "p-2 rounded transition-colors";
    const variants = {
      view: "text-blue-600 hover:bg-blue-50 border border-blue-300",
      edit: "text-green-600 hover:bg-green-50 border border-green-300", 
      delete: "text-orange-600 hover:bg-orange-50 border border-orange-300"
    };
    
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        <Icon className="w-4 h-4" />
      </button>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-0">{title}</h2>
        {showAddButton && (
          <button
            onClick={onAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            {addButtonText}
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Display</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            >
              {itemsPerPageOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <span className="text-sm text-gray-600">Records Per Page</span>
          </div>
        </div>

        {searchable && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Search:</span>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-md pl-3 pr-8 py-1 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                placeholder="Search..."
              />
              <Search className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        )}
      </div>

      {/* Table Container with Responsive Overflow */}
      <div className="overflow-x-auto sm:overflow-x-visible border border-gray-200 rounded-lg">
        <table className="w-full min-w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 whitespace-nowrap sm:whitespace-normal"
                >
                  {column.label}
                </th>
              ))}
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((item, index) => (
              <tr key={item.id || index} className="hover:bg-gray-50 border-b border-gray-200">
                {columns.map((column) => (
                  <td key={column.key} className="px-3 sm:px-6 py-4 text-sm border-r border-gray-200 last:border-r-0 whitespace-nowrap sm:whitespace-normal sm:break-words">
                    <div className="max-w-xs sm:max-w-none overflow-hidden text-ellipsis">
                      {column.render ? column.render(item[column.key], item) : item[column.key]}
                    </div>
                  </td>
                ))}
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex items-center gap-1 sm:gap-2">
                    {onView && (
                      <ActionButton
                        icon={Eye}
                        onClick={() => onView(item)}
                        variant="view"
                        className="p-1 sm:p-2"
                      />
                    )}
                    {onEdit && (
                      <ActionButton
                        icon={Edit}
                        onClick={() => onEdit(item)}
                        variant="edit"
                        className="p-1 sm:p-2"
                      />
                    )}
                    {onDelete && (
                      <ActionButton
                        icon={Trash2}
                        onClick={() => onDelete(item)}
                        variant="delete"
                        className="p-1 sm:p-2"
                      />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {paginated && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-3 border-t border-gray-200 gap-4">
          <div className="text-sm text-gray-600 text-center sm:text-left">
            Showing Page {currentPage} of {totalPages}
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 text-sm border rounded-md ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;