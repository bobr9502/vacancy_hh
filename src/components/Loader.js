import React from "react";
import Loader from "react-loader-spinner";
import styled from 'styled-components'

const MainLoader = () => {
    const MainLoader = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `;
    return (
      <MainLoader>
        <Loader type="Oval" color="#4183c4" height="50" width="50" />
      </MainLoader>
    );
}

export default MainLoader
