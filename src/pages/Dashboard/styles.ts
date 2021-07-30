import styled from "styled-components/native";

export const Options = styled.ScrollView`
    width: 100%;
    margin: 20px;
`;

export const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    margin: 20px 20px 0px 20px
    background: #1f232f;
    border-radius: 20;
`;

export const Text = styled.Text`
    margin-top: 10px;
    font-size:25px;
    color: #a5a7ac;
`;


export const Result = styled.View`
    width: calc(100%-20px);
    margin: 20px
    background: #1f232f;
    border-radius: 20;
    text-align: center;
    justify-content: center;
`;