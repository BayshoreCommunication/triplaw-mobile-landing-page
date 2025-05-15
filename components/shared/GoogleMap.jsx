import React from "react";

const GoogleMap = () => {
  return (
    <div className=" bg-[#1E2538] overflow-hidden  h-[526px]">
      <iframe
        className="  h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4335.284323002121!2d-82.57165912387924!3d27.98536881317317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e9e6e573d881%3A0xb6ed0dc8071923a2!2sHess%20Spinal%20%26%20Medical%20Centers%2C%20Corporate!5e1!3m2!1sen!2sbd!4v1745742651702!5m2!1sen!2sbd"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
