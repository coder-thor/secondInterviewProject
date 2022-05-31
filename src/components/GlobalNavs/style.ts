import styled from "styled-components";

export default styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .nav-item {
        color: #999;
        text-decoration: none;
        &:hover {
            color: #666;
        }
        &.nav-active {
            color: #3274b5;
        }
    }
`