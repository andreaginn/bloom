import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import DonateForm from '../components/DonateForm';
import ImpactModal from '../components/ImpactModal.js'
import Button from '../components/Button.js'

const Profile = () => {
    const { data, loading } = useQuery(QUERY_ME);
    var userData = data?.me || {};

    if (loading) {
        return <h2>LOADING...</h2>;
    }

    // const [modalOpen, setModalOpen] = useState(false);
    // const handleClick = () => {
    //     console.log('Impact Button Clicked')
    //     setModalOpen(true);

        return (
            <>
                <h3>Hello!</h3>
                <div>
                    {userData.impactScore}
                </div>

                {/* <div className="home-body">
                    <Button content={"Log Your Impact"} onClick={() => handleClick()} />
                    {modalOpen && <ImpactModal onClose={() => setModalOpen(false)} />}
                </div> */}

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


export default Profile