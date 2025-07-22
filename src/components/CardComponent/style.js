import styled from "styled-components";
import { Card } from "antd";

export const WrapperCardStyle = styled(Card)`
    width: 170px;
    background: #fff;
    position: relative;
`

export const StyleNameProduct = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(56, 56, 61)
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
`
export const WrapperPrice = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin: 8px 0;
`

export const WrapperContent = styled.div`
    border-top: 2px solid #f0f0f0;
    padding: 12px;
    background: #fff;
`;