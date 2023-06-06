import React, { useState, useEffect } from 'react';
import DonateForm from '../components/DonateForm';
import { Link } from 'react-router-dom';

const Donate = () => {

    return (
        <>
            <div class="grid grid-cols-3 gap-4">
                <div class="">
                    <DonateForm />
                </div>
                <div class="cols-span-2">
                    <div>
                        <img class="w-full aspect-square" src="http://placehold.it/" alt="" />
                        <h4>One Tree Planted</h4>
                        <p>This organization engages in reforestation efforts worldwide. They aim to combat deforestation, restore ecosystems, and create a sustainable future for the planet.</p>
                        <div>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Protect habitat for wildlife</span>
                                </p>
                            </span>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Global partnerships for tree planting</span>
                                </p>
                            </span> <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Environmental education and awareness</span>
                                </p>
                            </span>
                        </div>
                        <Link as={Link} to='https://onetreeplanted.org/'>Learn more</Link>
                    </div>
                    <div>
                        <h4>Carbon180</h4>
                        <p>This organization helps improve the transparency and scientific integrity of carbon removal and climate solutions through open data, tools, and leadership.</p>
                        <div>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Promotes better climate policy</span>
                                </p>
                            </span>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Tracks carbon removal legislation</span>
                                </p>
                            </span> <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Promotes carbon-removal on U.S. farmland</span>
                                </p>
                            </span>
                        </div>
                        <Link as={Link} to='https://carbon180.org/'>Learn more</Link>
                    </div>
                    <div>
                        <h4>Clean Air Task Force</h4>
                        <p>This organization is a policy group that advocates for new technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost.</p>
                        <div>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Influences politicians on climate policy</span>
                                </p>
                            </span>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Top-rated climate charity</span>
                                </p>
                            </span> <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Promotes key climate solutions</span>
                                </p>
                            </span>
                        </div>
                        <Link as={Link} to='https://www.catf.us/'>Learn more</Link>
                    </div>
                    <div>
                        <h4>Rainforest Foundation</h4>
                        <p>This project gives Indigenous Amazonians the tools they need to protect their rainforest home. Using satellite monitoring and drones, Indigenous monitors detect deforestation early. This allows communities to prevent deforestation before it reaches a large scale.</p>
                        <div>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Protects biodiversity</span>
                                </p>
                            </span>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Promotes Indigenous land rights</span>
                                </p>
                            </span> <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Prevents deforestation</span>
                                </p>
                            </span>
                        </div>
                        <Link as={Link} to='https://rainforestfoundation.org/'>Learn more</Link>
                    </div>
                    <div>
                        <h4>Climate Ride</h4>
                        <p>This organization is a policy group that advocates for new technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost.</p>
                        <div>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Influences politicians on climate policy</span>
                                </p>
                            </span>
                            <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Top-rated climate charity</span>
                                </p>
                            </span> <span>
                                <p>
                                    <span><svg></svg></span>
                                    <span>Promotes key climate solutions</span>
                                </p>
                            </span>
                        </div>
                        <Link as={Link} to='https://www.climateride.org/'>Learn more</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donate;