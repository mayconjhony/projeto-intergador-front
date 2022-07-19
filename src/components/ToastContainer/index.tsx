import React from "react";
import { Container } from "./styles";
import { useTransition } from "react-spring";
import Toast  from "./Toast"
import { ToastMessage } from "../../hooks/toast"


interface ToastContainerPros { 
    messages: ToastMessage[];
}


const ToastContainer: React.FC<ToastContainerPros> = ({ messages }) => {

    const messagesWhithTrasnsitions = useTransition(
        messages, message => message.id,
        {
            from: { right: '-120'},
            enter: { right: '0%'},
            leave: {    right: '-120'},
        },
    );

    return  ( 
        <Container>
            {messagesWhithTrasnsitions.map(({item, key, props}) => (
                <Toast
                key ={ key }
                message = { item }
                style = { props }
                />
            ))}
        </Container>
    );
};

export default ToastContainer;