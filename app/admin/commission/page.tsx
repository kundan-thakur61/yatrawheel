'use client';

import { useState, useEffect } from 'react';

const AdminCommissionPage = () => {
  const [commissionSettings, setCommissionSettings] = useState([
    { id: 'car', type: 'Car', percentage: 10 },
    { id: 'tempo_traveller', type: 'Tempo Traveller', percentage: 12 },
    { id: 'bus', type: 'Bus', percentage: 15 },
    { id: 'bike', type: 'Bike', percentage: 8 },
    { id: 'truck', type: 'Truck', percentage: 10 },
  ]);

  const [newCommission, setNewCommission] = useState({
    type: '',
    percentage: 10,
  });

  const [isAdding, setIsAdding] = useState(false);

  const handlePercentageChange = (id: string, value: number) => {
    setCommissionSettings(
      commissionSettings.map(setting =>
        setting.id === id ? { ...setting, percentage: value } : setting
      )
    );
  };

  const handleSave = () => {
    // In a real app, this would save to the database
    console.log('Saving commission settings:', commissionSettings);
    alert('Commission settings updated successfully!');
  };

  const handleAddCommission = () => {
    if (newCommission.type.trim() && newCommission.percentage >= 0 && newCommission.percentage <= 100) {
      const newSetting = {
        id: newCommission.type.toLowerCase().replace(' ', '_'),
        type: newCommission.type,
        percentage: newCommission.percentage,
      };
      
      setCommissionSettings([...commissionSettings, newSetting]);
      setNewCommission({ type: '', percentage: 10 });
      setIsAdding(false);
    }
  };

  const handleDelete = (id: string) => {
    setCommissionSettings(commissionSettings.filter(setting => setting.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Commission Settings</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Commission Rule
        </button>
      </div>

      {isAdding && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Add New Commission Rule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
              <input
                type="text"
                value={newCommission.type}
                onChange={(e) => setNewCommission({...newCommission, type: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Car, Bus, Bike"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Commission (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={newCommission.percentage}
                onChange={(e) => setNewCommission({...newCommission, percentage: Number(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-end space-x-2">
              <button
                onClick={handleAddCommission}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Current Commission Rules</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commission (%)
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commissionSettings.map((setting) => (
                <tr key={setting.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {setting.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={setting.percentage}
                      onChange={(e) => handlePercentageChange(setting.id, Number(e.target.value))}
                      className="w-20 px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleDelete(setting.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-md font-medium text-blue-800 mb-2">How Commission Works</h3>
        <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
          <li>Commission is calculated as a percentage of the total booking amount</li>
          <li>Commission is charged only on confirmed and completed bookings</li>
          <li>Commission rates can be adjusted based on vehicle type</li>
          <li>Commission is collected from the vehicle owner's payment</li>
        </ul>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Save All Changes
        </button>
      </div>
    </div>
  );
};

export default AdminCommissionPage;