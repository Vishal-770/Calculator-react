import React from 'react';
import styled from 'styled-components';

const Key = ({ label,OnButtonClick}) => {
  return (
    <StyledWrapper>
      <button className="delete-button" onClick={()=>OnButtonClick(label)}>{label}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .delete-button {
    background-color: #000;
    color: #fff;
    font-size: 17px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 8px;
    width: 60px;
    height: 65px;
    border-radius: 15px 15px 12px 12px;
    cursor: pointer;
    position: relative;
    will-change: transform;
    transition: all 0.1s ease-in-out 0s;
    user-select: none;
    /* Add gradient shading to each side */
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0)
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    background-position: bottom right, bottom right;
    background-size: 100% 100%, 100% 100%;
    background-repeat: no-repeat;
    box-shadow: inset -4px -10px 0px rgba(255, 255, 255, 0.4),
      inset -4px -8px 0px rgba(0, 0, 0, 0.3), 0px 2px 1px rgba(0, 0, 0, 0.3),
      0px 2px 1px rgba(255, 255, 255, 0.1);
    transform: perspective(70px) rotateX(5deg) rotateY(0deg);
  }

  .delete-button::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(0, 0, 0, 0.5)
    );
    z-index: -1;
    border-radius: 15px;
    box-shadow: inset 4px 0px 0px rgba(255, 255, 255, 0.1),
      inset 4px -8px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.1s ease-in-out 0s;
  }

  .delete-button::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0)
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    background-position: bottom right, bottom right;
    background-size: 100% 100%, 100% 100%;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: 15px;
    transition: all 0.1s ease-in-out 0s;
  }

  .delete-button:active {
    will-change: transform;
    transform: perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px)
      scale(0.96);
    height: 64px;
    border: 0.25px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset -4px -8px 0px rgba(255, 255, 255, 0.2),
      inset -4px -6px 0px rgba(0, 0, 0, 0.8), 0px 1px 0px rgba(0, 0, 0, 0.9),
      0px 1px 0px rgba(255, 255, 255, 0.2);
    transition: all 0.1s ease-in-out 0s;
  }

  .delete-button::after:active {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.2)
    );
  }

  .delete-button:active::before {
    content: "";
    display: block;
    position: absolute;
    top: 5%;
    left: 20%;
    width: 50%;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.1);
    animation: overlay 0.1s ease-in-out 0s;
    pointer-events: none;
  }

  @keyframes overlay {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .delete-button:focus {
    outline: none;
  }`;

export default Key;
