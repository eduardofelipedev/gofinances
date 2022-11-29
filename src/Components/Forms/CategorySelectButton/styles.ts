import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons';
import { BorderlessButton, RectButton, RectButtonProps } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";




export const Container = styled(RectButton).attrs({
    activeOpacity: 0.7
})`
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.shape};
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 18px 16px;
    margin-top: 16px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
`;


export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;