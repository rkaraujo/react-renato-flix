import styled from 'styled-components';

export const FormInputText = styled.input`
    background-color: var(--grayDark);
    border: 0;
    border-radius: 3px;
    color: var(--white);
    height: 50px;
    margin-bottom: 40px;
    padding-left: 10px;
    width: 100%;

    &:focus {
        border-bottom: 2px solid var(--primary);
    }
`;

export const FormTextArea = styled.textarea`
    background-color: var(--grayDark);
    border: 0;
    border-radius: 3px;
    color: var(--white);
    height: 150px;
    margin-bottom: 40px;
    padding-top: 10px;
    padding-left: 10px;
    width: 100%;

    &:focus {
        border-bottom: 2px solid var(--primary);
    }
`;

export const FormInputColor = styled.input`
    background-color: var(--grayDark);
    border: 0;
    border-radius: 3px;
    display: block;
    height: 40px;
    margin-bottom: 40px;
    margin-top: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 150px;
`;