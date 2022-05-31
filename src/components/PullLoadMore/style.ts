import styled from "styled-components"

export default styled.div`
  width: 100%;
  height: 100%;
  .load-status-description {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    .kee-icon {
      width: 14px;
      height: 14px;
      animation: autoRotate 1s linear infinite;
    }
    svg {
      fill: #3B81F7;
    }
  }
  @keyframes autoRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`