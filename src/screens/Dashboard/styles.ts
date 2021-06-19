import styled from "styled-components/native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View `
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};

`;
export const Header = styled.View `
    width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    justify-content: space-between;
    flex-direction: row;
    margin-top: ${RFValue(28)}px;
    align-items: center;
`;

export const UseInfor = styled.View `
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image `
    width: ${RFValue(48)} px;
    height: ${RFValue(48)} px;
    border-radius: 10px;
`;

export const User = styled.View `
    margin-left: 17px;
`;

export const UserGreting = styled.Text `
    color: ${({theme}) => theme.colors.shape};


    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text `
    color: ${({theme}) => theme.colors.shape};

    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secundary};
    font-size: ${RFValue(24)}px;

`;

export const HightLigthCards = styled.ScrollView`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text `
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`;