'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Vehicles', href: '/admin/vehicles' },
    { name: 'Bookings', href: '/admin/bookings' },
    { name: 'Owners', href: '/admin/owners' },
    { name: 'Customers', href: '/admin/customers' },
    { name: 'Cities', href: '/admin/cities' },
    { name: 'Commission', href: '/admin/commission' },
    { name: 'Settings', href: '/admin/settings' },
  ];

  return (
    <div className="hidden md:block w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      
      <nav className="mt-5">
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 ${
                  pathname === item.href
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;