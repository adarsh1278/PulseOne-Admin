import React, { useState } from 'react';
import CustomSelect from '../ui/CustomSelect';

const CustomSelectDemo = () => {
  const [simpleValue, setSimpleValue] = useState('');
  const [searchableValue, setSearchableValue] = useState('');
  const [frameworkValue, setFrameworkValue] = useState('');

  const simpleOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const frameworkOptions = [
    { value: 'react', label: 'React', description: 'JavaScript library for building UIs' },
    { value: 'vue', label: 'Vue.js', description: 'Progressive JavaScript framework' },
    { value: 'angular', label: 'Angular', description: 'Platform for building mobile and desktop apps' },
    { value: 'svelte', label: 'Svelte', description: 'Cybernetically enhanced web apps' },
    { value: 'nextjs', label: 'Next.js', description: 'The React framework for production' },
    { value: 'nuxtjs', label: 'Nuxt.js', description: 'The Vue.js framework' }
  ];

  const sizeOptions = [
    { value: 'small', label: 'Small Size' },
    { value: 'medium', label: 'Medium Size' },
    { value: 'large', label: 'Large Size' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Custom Select Component Demo
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Simple Select - Small */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Simple Select (Small)
          </label>
          <CustomSelect
            options={simpleOptions}
            value={simpleValue}
            onChange={setSimpleValue}
            placeholder="Choose an option..."
            size="sm"
          />
        </div>

        {/* Framework Select with Search - Medium */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Searchable Select (Medium)
          </label>
          <CustomSelect
            options={frameworkOptions}
            value={searchableValue}
            onChange={setSearchableValue}
            placeholder="Select a framework..."
            showSearch={true}
            size="md"
          />
        </div>

        {/* Large Select */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Large Select
          </label>
          <CustomSelect
            options={sizeOptions}
            value={frameworkValue}
            onChange={setFrameworkValue}
            placeholder="Pick a size..."
            size="lg"
          />
        </div>
      </div>

      {/* Display Selected Values */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Selected Values:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-medium">Simple:</span> {simpleValue || 'None'}
          </div>
          <div>
            <span className="font-medium">Searchable:</span> {searchableValue || 'None'}
          </div>
          <div>
            <span className="font-medium">Large:</span> {frameworkValue || 'None'}
          </div>
        </div>
      </div>

      {/* Usage Example */}
      <div className="bg-gray-900 rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Usage Example:</h3>
        <pre className="text-sm overflow-x-auto">
{`<CustomSelect
  options={[
    { value: 'react', label: 'React', description: 'JavaScript library' },
    { value: 'vue', label: 'Vue.js', description: 'Progressive framework' }
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select framework..."
  showSearch={true}
  size="md"
  className="w-full"
/>`}
        </pre>
      </div>
    </div>
  );
};

export default CustomSelectDemo;