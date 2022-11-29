import React, {useState} from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { View, Text, TextInput, StyleSheet  } from "react-native";
import { Button } from "../../Components/Forms/Button";
import { Input } from "../../Components/Forms/Input";
import { CategorySelectButton } from "../../Components/Forms/CategorySelectButton";
import { TransactionTypeButton } from "../../Components/Forms/TransactionTypeButton";
import { CategoriesSelect } from "../CategorySelect";
import { InputForm } from "../../Components/Forms/InputForm";
import { useForm } from "react-hook-form";

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes    
} from "./styles";


interface FormData  {
    name: string;
    amount: string;
   
}

interface Data {
    name: string;
    amount: string;
    transactionType: string;
    category: string;
    //errors: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),    
    amount: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('O valor é obrigatório')
}).required();





export function Register(){
   
   const [transactionType, setTransactionType] = useState('');

   const [categoryModalOpen, setCategoryModalOpen] = useState(false);

   const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
        

    }); 

    const {
        control,
        handleSubmit,
        formState: 
            {errors}
        
    } = useForm({
        resolver: yupResolver(schema)
    });
 

    function handleTransactionsTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    function handleRegister( form: Partial<FormData> )  {
        if(!transactionType){
            return Alert.alert('Selecione o tipo da transação');
        };


        if(category.key === 'category'){
            return Alert.alert('Selecione o tipo da categoria');
        };




        const data: Partial<Data> = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data);
    }

    


    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       
            <Container>
                    <Header>
                        <Title>Cadastro</Title>
                    </Header>

                    <Form>
                        <Fields>
                            <InputForm 
                                name="name"
                                control={control}
                                placeholder="Nome"
                                autoCapitalize={'sentences'}
                                error={errors.name?.message}
                                autoFocus={true}
                                autoCorrect={false}

                                
                            />
                            <InputForm 
                                name="amount"
                                control={control}
                                placeholder="Preço"
                                keyboardType="numeric"
                               error={errors.amount?.message}
                               
                            />
                            

                            <TransactionsTypes>
                                <TransactionTypeButton 
                                    title="Income" 
                                    type="up"   
                                    onPress={() => handleTransactionsTypeSelect('up')} 
                                    isActive={transactionType === 'up'}
                                />

                                <TransactionTypeButton 
                                    title="Outcome" 
                                    type="down"    
                                    onPress={() => handleTransactionsTypeSelect('down')}
                                    isActive={transactionType === 'down'}
                                />
                            </TransactionsTypes>

                            <CategorySelectButton 
                                title={category.name}
                                onPress={handleOpenSelectCategoryModal}
                            />

                            
                        </Fields>

                        <Button 
                            title="Enviar"
                            onPress={handleSubmit(handleRegister)}

                            
                        />

                        
                    </Form>

                    <Modal visible={categoryModalOpen}>
                        <CategoriesSelect 
                            category={category}
                            setCategory={setCategory}
                            closeSelectCategory={handleCloseSelectCategoryModal}
                        />
                    </Modal>
                

            </Container>
        </TouchableWithoutFeedback>
    );
    
}