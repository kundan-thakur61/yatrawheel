'use client';

import { useState } from 'react';
import Link from 'next/link';
import FileUpload from '../../../components/FileUpload';

const RegisterVehiclePage = () => {
  const [vehicleData, setVehicleData] = useState({
    name: '',
    brand: '',
    model: '',
    type: 'car',
    year: new Date().getFullYear(),
    seatingCapacity: 4,
    fuelType: 'petrol',
    transmission: 'manual',
    dailyRent: '',
    perKmRate: '',
    location: { city: '', state: '', address: '' },
    features: [] as string[],
    description: '',
    images: [] as string[],
    documents: { rc: '', insurance: '', pollutionCertificate: '', permit: '', fitnessCertificate: '' },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [featureInput, setFeatureInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('location.')) {
      const locationField = name.split('.')[1] as keyof typeof vehicleData.location;
      setVehicleData({ ...vehicleData, location: { ...vehicleData.location, [locationField]: value } });
    } else {
      setVehicleData({ ...vehicleData, [name]: value });
    }
  };

  const handleAddFeature = () => {
    if (featureInput.trim() && !vehicleData.features.includes(featureInput.trim())) {
      setVehicleData({ ...vehicleData, features: [...vehicleData.features, featureInput.trim()] });
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setVehicleData({ ...vehicleData, features: vehicleData.features.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Vehicle data submitted:', vehicleData);
    alert('Vehicle registration submitted successfully! Our team will review and approve your vehicle shortly.');
  };

  const steps = [
    { num: 1, icon: '🚗', title: 'Basic Info' },
    { num: 2, icon: '📍', title: 'Location & Features' },
    { num: 3, icon: '📄', title: 'Documents' },
  ];

  const commonFeatures = ['AC', 'Power Steering', 'Power Windows', 'Music System', 'GPS', 'USB Charging', 'First Aid Kit', 'Toolkit'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-5xl mb-4 block animate-float">🚗</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fadeIn">Register Your Vehicle</h1>
          <p className="text-xl opacity-90">List your vehicle and start earning today</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, idx) => (
                <div key={step.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${
                      currentStep >= step.num 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {currentStep > step.num ? '✓' : step.icon}
                    </div>
                    <span className={`text-sm mt-2 font-medium ${currentStep >= step.num ? 'text-blue-600' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`h-1 w-20 mx-4 rounded transition-all ${currentStep > step.num ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 animate-fadeIn">
            {/* Step 1 */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">🚗</span>
                  Basic Vehicle Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Vehicle Name', placeholder: 'e.g. Swift Dzire', icon: '🏷️' },
                    { name: 'brand', label: 'Brand', placeholder: 'e.g. Maruti, Toyota', icon: '🏢' },
                    { name: 'model', label: 'Model', placeholder: 'e.g. Dzire, Innova', icon: '📋' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{field.icon} {field.label} *</label>
                      <input
                        type="text"
                        name={field.name}
                        value={(vehicleData as any)[field.name]}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">🚙 Vehicle Type *</label>
                    <select name="type" value={vehicleData.type} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="car">🚗 Car</option>
                      <option value="tempo_traveller">🚐 Tempo Traveller</option>
                      <option value="bus">🚌 Bus</option>
                      <option value="bike">🏍️ Bike</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">📅 Year *</label>
                    <select name="year" value={vehicleData.year} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">👥 Seating Capacity *</label>
                    <input type="number" name="seatingCapacity" value={vehicleData.seatingCapacity} onChange={handleInputChange} min="1" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">⛽ Fuel Type *</label>
                    <select name="fuelType" value={vehicleData.fuelType} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="cng">CNG</option>
                      <option value="electric">Electric</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">⚙️ Transmission *</label>
                    <select name="transmission" value={vehicleData.transmission} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="manual">Manual</option>
                      <option value="automatic">Automatic</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">💰 Daily Rent (₹) *</label>
                    <input type="number" name="dailyRent" value={vehicleData.dailyRent} onChange={handleInputChange} min="0" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="e.g. 1500" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">📏 Per KM Rate (₹) *</label>
                    <input type="number" name="perKmRate" value={vehicleData.perKmRate} onChange={handleInputChange} min="0" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="e.g. 12" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">📍</span>
                  Location & Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">🏙️ City *</label>
                    <input type="text" name="location.city" value={vehicleData.location.city} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="e.g. Delhi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">🗺️ State *</label>
                    <input type="text" name="location.state" value={vehicleData.location.state} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="e.g. Delhi" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">🏠 Full Address *</label>
                    <input type="text" name="location.address" value={vehicleData.location.address} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Complete address" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">📝 Description</label>
                  <textarea name="description" value={vehicleData.description} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Describe your vehicle..."></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">✨ Features</label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {commonFeatures.map(feature => (
                      <button
                        key={feature}
                        type="button"
                        onClick={() => !vehicleData.features.includes(feature) && setVehicleData({ ...vehicleData, features: [...vehicleData.features, feature] })}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          vehicleData.features.includes(feature) ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {vehicleData.features.includes(feature) ? '✓ ' : '+ '}{feature}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input type="text" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddFeature())} className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Add custom feature" />
                    <button type="button" onClick={handleAddFeature} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {vehicleData.features.map((feature, index) => (
                      <span key={index} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {feature}
                        <button type="button" onClick={() => handleRemoveFeature(index)} className="hover:text-blue-900">×</button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">📄</span>
                  Documents & Submission
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {[
                    { id: 'rc', label: 'RC Book', required: true },
                    { id: 'insurance', label: 'Insurance', required: true },
                    { id: 'pollutionCertificate', label: 'Pollution Certificate', required: true },
                    { id: 'permit', label: 'Permit', required: false },
                  ].map(doc => (
                    <div key={doc.id} className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        📎 {doc.label} {doc.required && '*'}
                      </label>
                      <FileUpload 
                        id={`${doc.id}-upload`}
                        label={`Upload ${doc.label}`}
                        onFileUpload={(file) => {
                          setVehicleData({
                            ...vehicleData,
                            documents: { ...vehicleData.documents, [doc.id]: URL.createObjectURL(file) }
                          });
                        }}
                        allowedTypes={['image/jpeg', 'image/png', 'application/pdf']}
                        maxSize={5}
                      />
                      {(vehicleData.documents as any)[doc.id] && (
                        <p className="text-green-600 text-sm mt-2 flex items-center gap-1">✓ Uploaded</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <div className="flex gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <h3 className="font-bold text-amber-800">Important Information</h3>
                      <ul className="text-sm text-amber-700 mt-2 space-y-1">
                        <li>• All documents must be valid and not expired</li>
                        <li>• Vehicle will be approved after verification</li>
                        <li>• You will be notified via email/SMS once approved</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input id="terms" type="checkbox" required className="w-5 h-5 text-blue-600 rounded" />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  currentStep === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                ← Previous
              </button>

              {currentStep < 3 ? (
                <button type="button" onClick={() => setCurrentStep(currentStep + 1)} className="btn-primary">
                  Next Step →
                </button>
              ) : (
                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg">
                  ✓ Submit Vehicle
                </button>
              )}
            </div>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Have questions? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterVehiclePage;