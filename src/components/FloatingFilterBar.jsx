
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiHome, FiGlobe, FiChevronDown } from 'react-icons/fi';
import { useFilterContext } from '../context/useAuthContext'; // update path as needed

const PURPOSES = ['For Rent', 'For Buying'];
const TYPES = ['House', 'Apartment', 'Villa'];
const LOCATIONS = ['Indonesia', 'India', 'USA', 'UK'];

export const FloatingFilterBar = () => {
  const [open, setOpen] = useState('');
  const navigate = useNavigate();

  const { purpose, setPurpose, type, setType, location, setLocation } = useFilterContext();

  const toggleOpen = (key) => setOpen(o => (o === key ? '' : key));

  const handleFindClick = () => {
    if (purpose.toLowerCase().includes('buy')) {
      navigate('/buy');
    } else if (purpose.toLowerCase().includes('rent')) {
      navigate('/rent');
    } else {
      // default or error handling
      console.warn('Unknown purpose:', purpose);
    }
  };

  return (
    <div className="relative z-20 flex justify-center px-4">
      <div className="mt-6 md:mt-[-40px] w-full max-w-[1106px] flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-lg md:rounded-full px-6 md:px-8 py-3 gap-4 md:gap-2">
          {/* Purpose */}
        <div
          className="relative flex items-center gap-2 h-[54px] w-full md:w-[220px] border rounded-full bg-white px-10 cursor-pointer select-none"
          onClick={() => toggleOpen('purpose')}
          tabIndex={0}
        >
          <FiMapPin />
          <span>{purpose}</span>
          <FiChevronDown className="ml-1" />
          {open === 'purpose' && (
            <div className="absolute left-0 top-[105%] bg-white shadow-lg rounded-xl w-full z-40 max-h-48 overflow-auto">
              {PURPOSES.map((p) => (
                <div
                  key={p}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPurpose(p);
                    setOpen('');
                  }}
                  className={`px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer ${
                    p === purpose ? 'font-semibold bg-gray-50' : ''
                  }`}
                >
                  {p}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Type */}
        <div
          className="relative flex items-center gap-2 h-[54px] w-full md:w-[220px] border rounded-full bg-white px-10 cursor-pointer select-none"
          onClick={() => toggleOpen('type')}
          tabIndex={0}
        >
          <FiHome />
          <span>{type}</span>
          <FiChevronDown className="ml-1" />
          {open === 'type' && (
            <div className="absolute left-0 top-[105%] bg-white shadow-lg rounded-xl w-full z-40 max-h-48 overflow-auto">
              {TYPES.map((t) => (
                <div
                  key={t}
                  onClick={(e) => {
                    e.stopPropagation();
                    setType(t);
                    setOpen('');
                  }}
                  className={`px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer ${
                    t === type ? 'font-semibold bg-gray-50' : ''
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div
          className="relative flex items-center gap-2 h-[54px] w-full md:w-[220px] border rounded-full bg-white px-10 cursor-pointer select-none"
          onClick={() => toggleOpen('location')}
          tabIndex={0}
        >
          <FiGlobe />
          <span>{location}</span>
          <FiChevronDown className="ml-1" />
          {open === 'location' && (
            <div className="absolute left-0 top-[105%] bg-white shadow-lg rounded-xl w-full z-40 max-h-48 overflow-auto">
              {LOCATIONS.map((l) => (
                <div
                  key={l}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLocation(l);
                    setOpen('');
                  }}
                  className={`px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer ${
                    l === location ? 'font-semibold bg-gray-50' : ''
                  }`}
                >
                  {l}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleFindClick}
          className="w-full md:w-[220px] h-[54px] bg-[#2563EB] text-white rounded-full font-semibold hover:bg-[#1E40AF] transition whitespace-nowrap"
        >
          Find Property
        </button>
      </div>
    </div>
  );
};
