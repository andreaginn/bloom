import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            impactScore
            dailyImpact
        }
    }
`;

export const GET_ACTIONS = gql`
query Action($category: String) {
  actions(category: $category) {
    carbonPerUnit
    category
    name
    units
  }
}
`