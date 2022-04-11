import React from "react";
import "./styles/service.css";
import EditIcon from '@mui/icons-material/Edit';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

function Services() {
  return (
    <div className="service" id="services">
      <h3>We offer high demand services</h3>
      <div className="service-items">
        <section className="section section-1">
          {/* <AccessAlarm /> */}
          <EditIcon style={ {color:'#fff',padding:'1rem',fontSize:'3.5rem', backgroundColor: '#2D9CDB' ,borderRadius:'5pt'}} />
          <h2>UI/UX Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button>Get started</button>
        </section>
        <section className="section section-2">
          <CodeIcon style={{color:'#fff',padding:'1rem',fontSize:'3.5rem',  backgroundColor: '#27AE60' ,borderRadius:'5pt'}}/>
          <h2>Front End</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button>Get started</button>
        </section>
        <section className="section section-3">
          <StorageIcon style={{color:'#fff',padding:'1rem',fontSize:'3.5rem',  backgroundColor: '#EB5757' ,borderRadius:'5pt'}}/>
          <h2>Back End</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
            metus ac nulla consequat aliquet id quis turpis.
          </p>
          <button>Get started</button>
        </section>
      </div>
    </div>
  );
}

export default Services;
