import React, { useState } from "react";
import "./style.scss";

const ButtonTop = () => {
  const [btn, setBtn] = useState(false);

  const buttonActive = () => {
    if (window.scrollY > 150) {
        setBtn(true);
    } else {
        setBtn(false)
    }
  };

  window.addEventListener('scroll', buttonActive);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={btn ? "upbtn active" : "upbtn"} onClick={scrollUp}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M11 20C11 20.2652 11.1053 20.5196 11.2929 20.7071C11.4804 20.8947 11.7348 21 12 21C12.2652 21 12.5196 20.8947 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20H11ZM12 4.00003L12.707 3.29303C12.5195 3.10556 12.2651 3.00024 12 3.00024C11.7348 3.00024 11.4805 3.10556 11.293 3.29303L12 4.00003ZM5.29298 9.29303C5.11082 9.48163 5.01003 9.73423 5.01231 9.99643C5.01458 10.2586 5.11975 10.5094 5.30516 10.6948C5.49057 10.8803 5.74138 10.9854 6.00358 10.9877C6.26578 10.99 6.51838 10.8892 6.70698 10.707L5.29298 9.29303ZM17.293 10.707C17.4816 10.8892 17.7342 10.99 17.9964 10.9877C18.2586 10.9854 18.5094 10.8803 18.6948 10.6948C18.8802 10.5094 18.9854 10.2586 18.9877 9.99643C18.9899 9.73423 18.8891 9.48163 18.707 9.29303L17.293 10.707ZM13 20V4.00003H11V20H13ZM6.70698 10.707L12.707 4.70703L11.293 3.29303L5.29298 9.29303L6.70698 10.707ZM11.293 4.70703L17.293 10.707L18.707 9.29303L12.707 3.29303L11.293 4.70703Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ButtonTop;
