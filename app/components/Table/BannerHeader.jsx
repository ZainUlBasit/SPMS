import styled from "styled-components";

export const BannerHeader = styled.h1.attrs({
  className:
    "",
})`
  & {
    padding: ${(props) => (props.padding ? props.padding : "")};
  }
`;