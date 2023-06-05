import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            impactScore
            dailyImpacts {
                date
                travelContribution
                energyContribution
                foodWasteContribution
            }
        }
    }
`;
