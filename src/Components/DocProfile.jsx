import React, { useState, useEffect } from 'react';
import { Search, Filter, X, Phone, Mail, MapPin, Award, Calendar } from 'lucide-react';
import doctors from '../Components/data/doctors';
import './CSS/DocProfile.css'

function DocProfile() {

  // State for filtered doctors
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctorData, setSelectedDoctorData] = useState(null);

  // Get unique departments for filter dropdown
  const departments = Array.from(new Set(doctors.map(doctor => doctor.department)));

  // Get all doctor names for the name filter dropdown
  const doctorNames = doctors.map(doctor => doctor.name);

  // Filter doctors based on search term, selected department and selected doctor
  useEffect(() => {
    let result = doctors;

    if (searchTerm) {
      result = result.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedDepartment) {
      result = result.filter(doctor => doctor.department === selectedDepartment);
    }

    if (selectedDoctor) {
      result = result.filter(doctor => doctor.name === selectedDoctor);
    }

    setFilteredDoctors(result);
  }, [searchTerm, selectedDepartment, selectedDoctor]);

  // Handle opening the modal with doctor data
  const handleViewProfile = (doctor) => {
    setSelectedDoctorData(doctor);
    setModalOpen(true);
    // Add a class to the body to prevent scrolling when modal is open
    document.body.classList.add('overflow-hidden');
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDoctorData(null);
    // Remove the class from the body to allow scrolling again
    document.body.classList.remove('overflow-hidden');
  };

  // Close modal when clicking outside of it
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 pt-48 w-[80%] div-center max-sm:pt-[7.5rem] ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className='doc-heading doc-gradient'>Our Medical Specialists</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Meet our team of experienced and dedicated healthcare professionals
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search doctors by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative flex-1 max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="relative flex-1 max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              <option value="">All Doctors</option>
              {doctorNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div> */}
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-gray-500">
          Showing {filteredDoctors.length} of {doctors.length} doctors
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {filteredDoctors.map((doctor) => (

            <div key={doctor.id} className="bg-white flex overflow-hidden shadow rounded-lg transition-all duration-200 hover:shadow-lg">

              <div className="p-2 w-[50%] ">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-full object-cover rounded-2xl"
                  loading='lazy'
                />
              </div>

              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                <div className="mt-1 flex items-center">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {doctor.department}
                  </span>
                </div>
                {/* <p className="mt-3 text-sm text-gray-500">{doctor.specialty}</p> */}
                <p className="mt-1 text-sm text-gray-500">{doctor.experience} years experience</p>
                <div className="mt-4">
                  <button
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => handleViewProfile(doctor)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* No results message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No doctors found matching your criteria.</p>
            <button
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('');
                setSelectedDoctor('');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Doctor Profile Modal */}
      {modalOpen && selectedDoctorData && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto modal-overlay bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleOutsideClick}
        >
          <div className="relative bg-white rounded-lg shadow-xl doc-profile overflow-y-auto max-sm:pt-[19rem]" onClick={e => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row">
              {/* Doctor image - left side */}
              <div className="md:w-1/3 h-64 md:h-auto">
                <img
                  src={selectedDoctorData.imageUrl.replace('w=300', 'w=600')}
                  alt={selectedDoctorData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Doctor details - right side */}
              <div className="md:w-2/3 p-6">
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedDoctorData.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {selectedDoctorData.department}
                    </span>
                    {/* <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {selectedDoctorData.specialty}
                    </span> */}
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                      {selectedDoctorData.experience} years experience
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                  <p className="text-gray-600">{selectedDoctorData.bio}</p>
                </div>

                {/* Education */}
                <div className="mb-6 flex items-start">
                  <Award className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Education</h3>
                    <p className="text-gray-600">{selectedDoctorData.education}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6 flex items-start">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Availability</h3>
                    <p className="text-gray-600">{selectedDoctorData.availability.morning}</p>
                    <p className="text-gray-600">{selectedDoctorData.availability.evening}</p>
                  </div>
                </div>

                {/* Contact Information */}
                {/* <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{selectedDoctorData.contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{selectedDoctorData.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{selectedDoctorData.contact.office}</span>
                    </div>
                  </div>
                </div> */}

                {/* Book Appointment Button */}
                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    Book an Appointment
                  </button>
                  {/* Close button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 mt-5" onClick={handleCloseModal}>
                    Close
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DocProfile;