import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import DonateForm from '../components/DonateForm';

const Profile = () => {
    const { data, loading } = useQuery(QUERY_ME);
    var userData = data?.me || {};

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
            <h3>Hello!</h3>
            <div>
                {userData.impactScore}
            </div>
            {/* <div>
                {userData.dailyImpacts.map((impact) => {
                    return (
                        <div key={impact.date}>
                            <div>
                                {impact.travelContribution ?  chartjs graph: null}
                            </div>
                            <div>
                                {impact.travelContribution ?  chartjs graph: null}
                            </div>
                            <div>
                                {impact.travelContribution ?  chartjs graph: null}
                            </div>
                        </div>
                    )
                })}
            </div> */}
            <div>
                <DonateForm />
            </div>

        </>
    )
}

export default Profile;