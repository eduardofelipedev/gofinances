import React from "react";
import { TouchableOpacityProps  } from "react-native";
import { RectButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';

import { 
    Container,
    Title 
} from "./styles";

interface Props{
    title: string;
    onPress: () => void;
}




export function Button({ title, onPress }: Props){
    return (
        
        <Container onPress={onPress}>
            <Title>
                { title }
            </Title>
        </Container>
        
        
        
    )
}