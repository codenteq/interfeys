import React, { ReactNode, useState } from 'react';

interface ITabProps {
    tabs: string[];
    children: ReactNode;
}

export default function Tab({ tabs, children }: ITabProps) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="text-sm font-medium text-center text-zinc-500 border-b border-zinc-200 dark:text-zinc-400 dark:border-zinc-700">
                <ul className="flex flex-wrap -mb-px">
                    {tabs.map((tab, index) => (
                        <li key={index} className="me-2">
                            <div
                                onClick={() => handleTabClick(index)}
                                className={`cursor-pointer inline-block p-4 border-b-2 rounded-t-lg hover:text-zinc-500 hover:border-zinc-300 dark:hover:text-zinc-300 ${
                                    activeTab === index
                                        ? 'text-brand border-brand'
                                        : 'text-zinc-500 border-transparent'
                                }`}>
                                {tab}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {React.Children.map(children, (child, index) => (
                <div
                    key={index}
                    className={`py-5 px-2 ${
                        activeTab === index ? 'active' : 'hidden'
                    }`}>
                    {child}
                </div>
            ))}
        </>
    );
}
