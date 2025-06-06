import React from "react";
import { useNavigate } from "react-router-dom";

const StoreMap = () => {
  const navigate = useNavigate();
  return (
    <div className="store-map">
      <div style={{ display: "flex", justifyContent: 'space-between' }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
          {" "}
          <h3 style={{color: 'blue'}}>Store map</h3>
          <span>Find your products instantly inside!</span>
          <button
            style={{
                width: '50%',
              padding: "0.5rem",
              marginTop: "0.5rem",
              background: "var(--primary-color)",
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate('/store-map')}
          >
            View map
          </button>
        </div>
        <div>
            <img  src="/images/walmart_stoer_map.jpeg" alt="Store map" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default StoreMap;
