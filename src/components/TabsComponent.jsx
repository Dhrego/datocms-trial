import { useState } from "react";
import "./TabsComponent.css";

export default function TabsComponent({ tabsData }) {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.tabId || "");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const currentTab =
    tabsData.find((tab) => tab.tabId === activeTab) || tabsData[0];

  return (
    <div className="tab-container">
      <div className="main-content">
        <img
          src={currentTab.imageurl}
          alt={currentTab.title}
          className="content-image"
        />
        <div className="content-data">{currentTab.content}</div>
      </div>

      <div className="tabs">
        {tabsData.map((tab) => (
          <button
            key={tab.tabId}
            className={`tab ${activeTab === tab.tabId ? "active" : ""}`}
            onClick={() => handleTabClick(tab.tabId)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
