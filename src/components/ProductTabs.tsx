import { useState } from 'react';

interface ProductTabsProps {
  description: string;
}

export default function ProductTabs({ description }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'additionalInfo' | 'reviews'>('description');

  return (
    <div>
      <div className="flex justify-center gap-8 mt-10 text-lg">
        {['description', 'additionalInfo', 'reviews'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'font-bold' : ''}
            onClick={() => setActiveTab(tab as 'description' | 'additionalInfo' | 'reviews')}
          >
            {tab === 'description' ? 'Description' : tab === 'additionalInfo' ? 'Additional Information' : 'Reviews'}
          </button>
        ))}
      </div>

      {activeTab === 'description' && <p className="mt-4 px-4">{description}</p>}
      {activeTab === 'additionalInfo' && <p className="mt-4 px-4">High-quality furniture with elegant designs.</p>}
      {activeTab === 'reviews' && <p className="mt-4 px-4">No reviews yet. Be the first to review!</p>}
    </div>
  );
}
