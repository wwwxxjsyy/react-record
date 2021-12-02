import React from "react";
import { pxvm } from "@/utils";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: ${pxvm(98)};
  background: #fff;
  border-top: 0.5px solid rgba(5, 5, 5, 0.08);
  z-index: 1;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5ad8a6;
  }
`;

const footerArr = [
  { name: "第一个", url: "pdfcanvas" },
  { name: "第二个", url: "csssticky" },
];

const Footer = () => {
  let history = useHistory();

  return (
    <FooterDiv>
      {footerArr.map((res) => {
        return (
          <span
            key={res.url}
            onClick={() => {
              history.push(res.url);
            }}
          >
            {res.name}
          </span>
        );
      })}
    </FooterDiv>
  );
};

export default Footer;