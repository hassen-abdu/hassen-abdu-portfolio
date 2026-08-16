export interface ContactConfig {
  name: string;
  title: string;
  location: string;
  status: string;
  phones: string[];
  email: string;
  telegram: {
    display: string;
    url: string;
  };
  whatsapp: {
    display: string;
    url: string;
  };
  linkedin: {
    display: string;
    url: string;
  };
  github: {
    display: string;
    url: string; // Configurable - enter actual GitHub URL when ready
   
  };
}

export const contactConfig: ContactConfig = {
  name: "Hassen Abdu",
  title: "Web Developer & Full-Stack Web Application Developer",
  location: "Available Globally",
  status: "Available for selected projects",
  phones: ["0985001827", "0922873878"],
  email: "hassenabdu013@gmail.com",
  telegram: {
    display: "@hass085",
    url: "https://t.me/hass085",
  },
  whatsapp: {
    display: "@hassen_085",
    url: "https://wa.me/251922873878",
  },
  linkedin: {
    display: "Hassen Abdu",
    url: "https://www.linkedin.com/in/hassen-abdu-526a16396",
  },
  github: {
    display: "GitHub Profile",
    url: "https://github.com/hassen-abdu", // Leave blank until real GitHub URL is added
    
  },
};
