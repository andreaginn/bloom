import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                }
            }
        }
    `;

export const UPDATE_IMPACT = gql`
    mutation updateImpact($input: ActionInput) {
        updateImpact(input: $input){
            username
        }
        
}

`;

export const OFFSET_TOTAL_IMPACT = gql`
    mutation offsetTotalImpact($input: OffsetInput) {
        offsetTotalImpact(input: $input) {
            impactScore
        }
}
`;

export const UPDATE_GOAL = gql`
    mutation updateGoal($goalText: String!){
        updateGoal(goalText: $goalText){
            weeklyGoal{
                goalText
            }
        }
    }`;

export const UPDATE_ELECTRICITY_BILL = gql`
    mutation updateElectricityBill($electricityBill: Float!){
        updateElectricityBill(electricityBill: $electricityBill){
            electricityBill
        }
    }
    `