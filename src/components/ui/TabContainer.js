import React, { useState } from 'react';

const TabContainer = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = React.Children.toArray(children);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2
                ${activeTab === index
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.props.icon}
              {tab.props.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs[activeTab]}
      </div>
    </div>
  );
};

const Tab = ({ children, label, icon }) => {
  return <div>{children}</div>;
};

export { TabContainer, Tab };
