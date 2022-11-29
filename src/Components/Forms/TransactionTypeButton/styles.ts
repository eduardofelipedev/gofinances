import styled, { css } from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";





interface TypeProps{
    type: 'up' | 'down';
}

interface ContainerProps{
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled(RectButton)<ContainerProps>`
    //background-color: red;
    
    flex-direction: row;
    align-items: center;
    border: 1.5px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    padding: 16px 35px;
    justify-content: center;

    ${({ isActive, type}) => isActive && type === 'down' && css `
        background-color: ${({ theme }) => theme.colors.attention_light}
        border: none
        
    `};

    ${({ isActive, type}) => isActive && type === 'up' && css `
        background-color: ${({ theme }) => theme.colors.success_light}
        border: none
        
    `};

`;

export const Icon = styled(Feather)<TypeProps>`
    color: ${({ theme, type }) => 
    type === 'up' ?  theme.colors.success : theme.colors.attention};
    
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

`;


export const Title = styled.Text<ContainerProps>`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    ${({ isActive, type}) => isActive && type === 'down' && css `
        color: ${({ theme }) => theme.colors.shape}        
    `};

    ${({ isActive, type}) => isActive && type === 'up' && css `
        color: ${({ theme }) => theme.colors.shape}        
    `};

`;