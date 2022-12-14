import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton, RectButton, RectButtonProps, GestureHandlerRootView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";



export const Container = styled(RectButton) `
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    align-items: center;
    padding: 18px;
    
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    
    
`;