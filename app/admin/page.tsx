'use client';

import { useState } from 'react';
import Link from 'next/link';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = {
    totalVehicles: 156,
    pendingVehicles: 24,
    totalBookings: 89,
    totalOwners: 42,
    totalCustomers: 320,
    totalRevenue: 1250000,
  };

  const pendingVehicles = [
    { id: '1', name: 'Swift Dzire', brand: 'Maruti', owner: 'Rajesh Kumar', phone: '+91 9876543210', submittedDate: '2023-12-15' },
    { id: '2', name: 'Toyota Innova', brand: 'Toyota', owner: 'Amit Sharma', phone: '+91 9123456789', submittedDate: '2023-12-16' },
    { id: '3', name: 'Tata Winger', brand: 'Tata', owner: 'Priya Patel', phone: '+91 8765432109', submittedDate: '2023-12-17' },
  ];

  const recentBookings = [
    { id: '101', vehicle: 'Swift Dzire', customer: 'Vikram Singh', startDate: '2023-12-20', endDate: '2023-12-22', amount: 3600, status: 'confirmed' },
    { id: '102', vehicle: 'Toyota Innova', customer: 'Travel Agency', startDate: '2023-12-25', endDate: '2023-12-30', amount: 12500, status: 'in_progress' },
    { id: '103', vehicle: 'Tata Winger', customer: 'Corporate Group', startDate: '2024-01-05', endDate: '2024-01-07', amount: 8400, status: 'pending' },
  ];

  const statsCards = [
    { icon: '🚗', label: 'Total Vehicles', value: stats.totalVehicles, color: 'from-blue-500 to-blue-600', change: '+12%' },
    { icon: '⏳', label: 'Pending Approval', value: stats.pendingVehicles, color: 'from-amber-500 to-amber-600', change: '+5' },
    { icon: '📋', label: 'Total Bookings', value: stats.totalBookings, color: 'from-green-500 to-green-600', change: '+8%' },
    { icon: '👥', label: 'Total Owners', value: stats.totalOwners, color: 'from-purple-500 to-purple-600', change: '+3' },
    { icon: '😊', label: 'Total Customers', value: stats.totalCustomers, color: 'from-pink-500 to-pink-600', change: '+15%' },
    { icon: '💰', label: 'Total Revenue', value: `₹${(stats.totalRevenue / 100000).toFixed(1)}L`, color: 'from-emerald-500 to-emerald-600', change: '+22%' },
  ];

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'vehicles', name: 'Vehicles', icon: '🚗' },
    { id: 'bookings', name: 'Bookings', icon: '📋' },
    { id: 'owners', name: 'Owners', icon: '👥' },
    { id: 'customers', name: 'Customers', icon: '😊' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  const getStatusBadge = (status: string) => {
    const styles: { [key: string]: string } = {
      confirmed: 'bg-blue-100 text-blue-700',
      in_progress: 'bg-amber-100 text-amber-700',
      pending: 'bg-gray-100 text-gray-700',
      completed: 'bg-green-100 text-green-700',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg">
                ⚙️
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-xs text-gray-500">Manage YatraWheels Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all">
                🔔
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
              </div>
              <button className="ml-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition-all">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {statsCards.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 animate-fadeIn border border-gray-100"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl text-white shadow-lg mb-3`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
              <div className="flex items-center gap-1">
                <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                <span className="text-green-500 text-xs">▲</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden">
          <div className="border-b border-gray-100">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 whitespace-nowrap py-4 px-6 font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 font-semibold'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>📊</span> Dashboard Overview
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Pending Vehicles */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-amber-500">⏳</span> Pending Approvals
                      </h3>
                      <Link href="/admin/vehicles?status=pending" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View All →
                      </Link>
                    </div>
                    
                    <div className="space-y-3">
                      {pendingVehicles.map((vehicle, idx) => (
                        <div key={vehicle.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-2xl">
                                🚗
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">{vehicle.name}</p>
                                <p className="text-sm text-gray-500">{vehicle.owner} • {vehicle.submittedDate}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-all flex items-center gap-1">
                                <span>✓</span> Approve
                              </button>
                              <button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-all flex items-center gap-1">
                                <span>✗</span> Reject
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recent Bookings */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-green-500">📋</span> Recent Bookings
                      </h3>
                      <Link href="/admin/bookings" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View All →
                      </Link>
                    </div>
                    
                    <div className="space-y-3">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-2xl">
                                📋
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">{booking.vehicle}</p>
                                <p className="text-sm text-gray-500">{booking.customer}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-gray-900">₹{booking.amount.toLocaleString()}</p>
                              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getStatusBadge(booking.status)}`}>
                                {booking.status.replace('_', ' ')}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span>⚡</span> Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: '➕', label: 'Add Vehicle', color: 'from-blue-500 to-blue-600' },
                      { icon: '👤', label: 'Add Owner', color: 'from-purple-500 to-purple-600' },
                      { icon: '📊', label: 'View Reports', color: 'from-green-500 to-green-600' },
                      { icon: '💰', label: 'Commission', color: 'from-amber-500 to-amber-600' },
                    ].map((action, idx) => (
                      <button key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${action.color} text-white font-medium hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg border border-white/20`}>
                        <span className="text-3xl block mb-3">{action.icon}</span>
                        <span className="text-sm font-medium">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'vehicles' && (
              <div className="animate-fadeIn">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span>🚗</span> Manage Vehicles
                  </h2>
                  <button className="btn-primary flex items-center gap-2">
                    <span>➕</span> Add Vehicle
                  </button>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap gap-3 mb-6">
                  <select className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-2 md:mb-0">
                    <option>All Status</option>
                    <option>Approved</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-2 md:mb-0">
                    <option>All Types</option>
                    <option>Car</option>
                    <option>Tempo Traveller</option>
                    <option>Bus</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="🔍 Search vehicles..." 
                    className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all flex-1 min-w-[200px] mb-2 md:mb-0"
                  />
                  <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all">
                    <span>⚙️</span> Filters
                  </button>
                </div>
                
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {pendingVehicles.map((vehicle) => (
                          <tr key={vehicle.id} className="bg-white hover:bg-gray-50 transition-all">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl">🚗</div>
                                <div>
                                  <p className="font-bold text-gray-900">{vehicle.name}</p>
                                  <p className="text-sm text-gray-500">{vehicle.brand}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{vehicle.owner}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">Car</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-700">
                                Pending
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <button className="px-3 py-1 text-xs font-medium text-green-600 hover:bg-green-50 rounded-lg transition-all">Approve</button>
                                <button className="px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all">Reject</button>
                                <button className="px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-all">Edit</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'bookings' && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>📋</span> Manage Bookings
                </h2>
                
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {recentBookings.map((booking) => (
                          <tr key={booking.id} className="bg-white hover:bg-gray-50 transition-all">
                            <td className="px-6 py-4 font-bold text-blue-600">#{booking.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{booking.vehicle}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{booking.customer}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{booking.startDate} → {booking.endDate}</td>
                            <td className="px-6 py-4 font-bold text-gray-900">₹{booking.amount.toLocaleString()}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 text-xs font-bold rounded-full ${getStatusBadge(booking.status)}`}>
                                {booking.status.replace('_', ' ')}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <button className="px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-all">View</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>⚙️</span> System Settings
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span>💰</span> Commission Settings
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { label: 'Car Commission', value: 10, icon: '🚗' },
                        { label: 'Tempo Commission', value: 12, icon: '🚐' },
                        { label: 'Bus Commission', value: 15, icon: '🚌' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                          <span className="text-2xl">{item.icon}</span>
                          <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">{item.label} (%)</label>
                            <input
                              type="number"
                              defaultValue={item.value}
                              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      ))}
                      <button className="w-full btn-primary mt-4">
                        Save Commission Settings
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span>🔧</span> Platform Settings
                    </h3>
                    
                    <div className="space-y-4">
                      {[
                        { label: 'New Vehicle Approval Required', checked: true },
                        { label: 'Email Notifications', checked: true },
                        { label: 'SMS Notifications', checked: true },
                        { label: 'Maintenance Mode', checked: false },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                          <button className={`w-12 h-7 rounded-full transition-all ${item.checked ? 'bg-blue-600' : 'bg-gray-300'}`}>
                            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${item.checked ? 'translate-x-6' : 'translate-x-1'}`}></div>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'owners' || activeTab === 'customers') && (
              <div className="animate-fadeIn text-center py-12">
                <span className="text-6xl mb-4 block">🔧</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-500">This section is under development</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;