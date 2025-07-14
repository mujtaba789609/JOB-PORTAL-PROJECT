// ✅ Module 8: Public View of All Companies
import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get('/api/companies');
        setCompanies(res.data);
      } catch (err) {
        console.error('Error fetching companies:', err);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🏛️ All Companies / Universities</h2>

      {companies.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No companies found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {companies.map((company) => (
            <div
              key={company._id}
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
            >
              <h3>{company.name}</h3>
              <p><strong>Tagline:</strong> {company.tagline}</p>
              <p><strong>Services:</strong> {company.services}</p>
              <p><strong>Website:</strong> <a href={company.website} target="_blank" rel="noreferrer">{company.website}</a></p>
              <p><strong>Email:</strong> {company.email}</p>
            </div>
          ))}
          </div>
      )}
      </div>
  );
};

export default CompanyList;
