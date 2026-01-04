'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const AdminVehiclesPage = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    search: '',
  });

  // Mock data for vehicles
  useEffect(() => {
    const mockVehicles = [
      {
        id: '1',
        name: 'Swift Dzire',
        brand: 'Maruti',
        model: 'Dzire',
        type: 'car',
        owner: 'Rajesh Kumar',
        phone: '+91 9876543210',
        dailyRent: 1200,
        status: 'approved',
        submittedDate: '2023-12-15',
        location: 'Delhi',
      },
      {
        id: '2',
        name: 'Toyota Innova',
        brand: 'Toyota',
        model: 'Innova',
        type: 'tempo_traveller',
        owner: 'Amit Sharma',
        phone: '+91 9123456789',
        dailyRent: 2500,
        status: 'pending',
        submittedDate: '2023-12-16',
        location: 'Mumbai',
      },
      {
        id: '3',
        name: 'Tata Winger',
        brand: 'Tata',
        model: 'Winger',
        type: 'tempo_traveller',
        owner: 'Priya Patel',
        phone: '+91 8765432109',
        dailyRent: 2800,
        status: 'rejected',
        submittedDate: '2023-12-17',
        location: 'Bangalore',
      },
      {
        id: '4',
        name: 'Scania Bus',
        brand: 'Scania',
        model: 'Interlink',
        type: 'bus',
        owner: 'Raj Tours',
        phone: '+91 7654321098',
        dailyRent: 8000,
        status: 'approved',
        submittedDate: '2023-12-14',
        location: 'Chennai',
      },
    ];

    setVehicles(mockVehicles);
    setLoading(false);
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    return (
      (filters.status === 'all' || vehicle.status === filters.status) &&
      (filters.type === 'all' || vehicle.type === filters.type) &&
      (filters.search === '' || 
        vehicle.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        vehicle.owner.toLowerCase().includes(filters.search.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  const updateVehicleStatus = (id: string, newStatus: string) => {
    setVehicles(vehicles.map(vehicle => 
      vehicle.id === id ? { ...vehicle, status: newStatus } : vehicle
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Manage Vehicles</h1>
        
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              placeholder="Search vehicles..."
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div className="flex space-x-2">
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="disabled">Disabled</option>
            </select>
            
            <select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="all">All Types</option>
              <option value="car">Car</option>
              <option value="tempo_traveller">Tempo Traveller</option>
              <option value="bus">Bus</option>
              <option value="bike">Bike</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Daily Rent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{vehicle.name}</div>
                    <div className="text-sm text-gray-500">{vehicle.brand} {vehicle.model}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{vehicle.owner}</div>
                    <div className="text-sm text-gray-500">{vehicle.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vehicle.type.replace('_', ' ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vehicle.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    ₹{vehicle.dailyRent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      vehicle.status === 'approved' ? 'bg-green-100 text-green-800' :
                      vehicle.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      vehicle.status === 'rejected' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link 
                        href={`/vehicles/${vehicle.id}`}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </Link>
                      
                      {vehicle.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateVehicleStatus(vehicle.id, 'approved')}
                            className="text-green-600 hover:text-green-900"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateVehicleStatus(vehicle.id, 'rejected')}
                            className="text-red-600 hover:text-red-900"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      
                      {vehicle.status === 'approved' && (
                        <button
                          onClick={() => updateVehicleStatus(vehicle.id, 'disabled')}
                          className="text-orange-600 hover:text-orange-900"
                        >
                          Disable
                        </button>
                      )}
                      
                      {(vehicle.status === 'rejected' || vehicle.status === 'disabled') && (
                        <button
                          onClick={() => updateVehicleStatus(vehicle.id, 'approved')}
                          className="text-green-600 hover:text-green-900"
                        >
                          Enable
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredVehicles.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No vehicles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AdminVehiclesPage;