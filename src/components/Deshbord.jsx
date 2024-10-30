import React from 'react';
import { FaShoppingCart, FaUsers, FaEye, FaBell, FaClipboardList, FaChartLine } from 'react-icons/fa';


const Dashboard = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-32 px-5 md:px-20">
      <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">Dashboard</h2>
      
      {/* Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {[
          { icon: FaShoppingCart, label: "Total Sales", value: "2,340", color: "bg-blue-500" },
          { icon: FaUsers, label: "New Users", value: "453", color: "bg-green-500" },
          { icon: FaEye, label: "Page Views", value: "12,783", color: "bg-purple-500" },
          { icon: FaChartLine, label: "Revenue", value: "$9,842", color: "bg-yellow-500" },
        ].map((stat, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-lg text-white ${stat.color} hover:scale-105 transform transition duration-300`}>
            <stat.icon className="text-4xl mb-3"/>
            <h3 className="text-2xl font-semibold">{stat.label}</h3>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Progress and Task Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Progress Bars */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Progress</h3>
          <div className="space-y-4">
            {[
              { title: "Dashboard Design", progress: 80 },
              { title: "Frontend Development", progress: 60 },
              { title: "Backend Integration", progress: 45 },
            ].map((task, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-800 font-medium">{task.title}</span>
                  <span className="text-gray-600">{task.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${task.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">To-Do List</h3>
          <ul className="space-y-3">
            {["Review user feedback", "Update homepage", "Optimize images", "Check API endpoints"].map((task, index) => (
              <li key={index} className="flex items-center space-x-3">
                <FaClipboardList className="text-gray-500"/>
                <span className="text-gray-700">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Notifications and Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notifications</h3>
          <ul className="space-y-3">
            {["New sale recorded", "User C has a question", "Inventory low for item X"].map((notification, index) => (
              <li key={index} className="flex items-center space-x-3">
                <FaBell className="text-purple-500"/>
                <span className="text-gray-700">{notification}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Add Product</button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">View Users</button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg">Generate Report</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
