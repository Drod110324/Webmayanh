import styled from "styled-components";
import { Card } from "antd";

export const WrapperCardStyle = styled(Card)`
    width: 170px;
    background: #fff;
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
`

export const StyleNameProduct = styled.div`
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: rgb(56, 56, 61)
`

export const WrapperReportText = styled.div`
    padding-top: 12px;
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    white-space: nowrap;
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
    padding: none;
    background: #fff;
`;
export const WrapperStyledTextSell = styled.span`
    font-size: 13px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`
export const WrapperDiscount = styled.span`
    font-size: 12px;
    line-height: 24px;
    color: rgb(255, 66, 78);
    font-weight: 500;
    margin-left: none;
`