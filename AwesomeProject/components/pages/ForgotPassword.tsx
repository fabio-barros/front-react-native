import {
    Button,
    Center,
    FormControl,
    Heading,
    Input,
    KeyboardAvoidingView,
    Modal,
    Text,
    VStack,
} from "native-base";
import React, { FC, useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Platform,
} from "react-native";
interface ForgotPasswordScreenProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({
    setShowModal,
    showModal,
}) => {
    return (
        <KeyboardAvoidingView
            h={{
                base: "400px",
                lg: "auto",
            }}
            behavior={Platform.OS === "android" ? "padding" : "height"}
        >
            <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Esqueceu a senha?</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>
                                    Digite o CPF associado a sua conta.
                                </FormControl.Label>
                                <Input />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button
                                    variant="ghost"
                                    colorScheme="blueGray"
                                    onPress={() => {
                                        setShowModal(false);
                                    }}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    onPress={() => {
                                        setShowModal(false);
                                    }}
                                >
                                    Enviar
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
        </KeyboardAvoidingView>
    );
};

export default ForgotPasswordScreen;
