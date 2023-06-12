import React from 'react';
import DonateForm from '../components/DonateForm';
import { Link } from 'react-router-dom';
import FilterVintageRoundedIcon from '@mui/icons-material/FilterVintageRounded';
import { orange } from '@mui/material/colors';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Donate = () => {

    return (
        <>
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="lg:col-start-1 lg:col-end-3 mt-5 col-start-2 col-end-6">
                    <DonateForm />
                </div>
                <div className="donate-intro-text" style={{ display: 'inline-block' }}>
                    <span className="text-orange-400">Offset</span>your carbon footprint by supporting projects you care about.
                </div>
            </div>
            {/* One Tree Planted */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-7 mt-5">
                    <img className="w-full" src="./images/one-tree-planted.webp" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="donate-titles">One Tree Planted</div>
                    <p className="donate-text">This organization engages in reforestation efforts worldwide. They aim to combat deforestation, restore ecosystems, and create a sustainable future for the planet.</p>
                </div>
                <div className="donate-points">
                    <div>
                        <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Protect habitat for wildlife</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Global partnerships for tree planting</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Environmental education and awareness</div></span>
                    </div>
                </div>
                <div className="donate-button">
                    <Link className="btn-primary" as={Link} to='https://onetreeplanted.org/'>Learn more<KeyboardArrowRightIcon /></Link>
                </div>
            </div>
            {/* Coming Clean */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-6">
                    <img className="w-full" src="./images/coming-clean.jpg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="donate-titles">Coming Clean</div>
                    <div className="donate-text">
                        <p>This organization is a nonprofit environmental health collaborative dedicated to transforming the chemical industry into a safe and sustainable source of energy. Their mission is to reduce sources of chemical exposure in people's lives, especially in disproportionately impacted populations, and advocate for corporate and marketplace changes to address toxic chemicals as a public health threat.</p>
                    </div>
                </div>
                <div className="donate-points">
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Advancing chemical policy reform</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Promoting environmental health and justice</div></span>
                    <span><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Holding corporations accountable for pollution</div></span>
                </div>
                <div className="donate-button">
                    <Link className="btn-primary" as={Link} to='https://www.comingcleaninc.org/'>Learn more<KeyboardArrowRightIcon /></Link>
                </div>
            </div>
            {/* Carbon180 */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-1 col-end-6 mt-5">
                    <img className="w-full" src="./images/carbon180.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="donate-titles">Carbon180</div>
                    <div className="donate-text">
                        <p>This organization helps improve the transparency and scientific integrity of carbon removal and climate solutions through open data, tools, and leadership.</p>
                    </div>
                </div>
                <div className="donate-points">
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Promotes better climate policy</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Tracks carbon removal legislation</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Promotes carbon-removal on U.S. farmland</div></span>
                </div>
                <div className="donate-button">
                    <Link className="btn-primary" as={Link} to='https://carbon180.org/'>Learn more<KeyboardArrowRightIcon /></Link>
                </div>
            </div>
            {/* Clean Air Task Force */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-7 mt-5">
                    <img className="w-full" src="./images/CATF.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="donate-titles">Clean Air Task Force</div>
                    <div className="donate-text">
                        <p>This organization is a policy group that advocates for new technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost.</p>
                    </div>
                </div>
                <div className="donate-points">
                    <div>
                        <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Influences politicians on climate policy</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Top-rated climate charity</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Promotes key climate solutions</div></span>
                    </div>
                </div>
                <div className="donate-button">
                    <Link className="btn-primary" as={Link} to='https://www.catf.us/'>Learn more<KeyboardArrowRightIcon /></Link>
                </div>
            </div>
            {/* Rainforest Foundation */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-1 col-end-6 mt-5">
                    <img className="w-full" src="./images/rainforest800x450.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="donate-titles">Rainforest Foundation</div>
                    <div className="donate-text">
                        <p>This project gives Indigenous Amazonians the tools they need to protect their rainforest home. Using satellite monitoring and drones, Indigenous monitors detect deforestation early. This allows communities to prevent deforestation before it reaches a large scale.</p>
                    </div>
                </div>
                <div className="donate-points">
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Protects biodiversity</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Promotes Indigenous land rights</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Prevents deforestation</div></span>
                </div>
                <div className="donate-button">
                    <Link className="btn-primary" as={Link} to='https://rainforestfoundation.org/'>Learn more<KeyboardArrowRightIcon /></Link>
                </div>
            </div>
            {/* Climate Ride */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-6 mt-5">
                    <img className="w-full" src="./images/Climate-Ride1024x683.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="donate-titles">Climate Ride</div>
                    <div className="donate-text">
                        <p>This group organizes charitable multi-day cycling and hiking events to raise funds and awareness for sustainable solutions to climate change. By combining physical challenges with advocacy, Climate Ride empowers participants to support renewable energy, active transportation, and other initiatives that reduce CO2 emissions and promote a sustainable future.</p>
                    </div>
                </div>
                <div className="donate-points">
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Advocacy for renewable energy</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Promotes active transporation solutions</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon sx={{ color: orange[500]}}/><div className="donate-points-text">Supports sustainability through empowering others</div></span>
                </div>
                <div className="donate-button">
                    <Link className="btn-primary" as={Link} to='https://www.climateride.org/'>Learn more<KeyboardArrowRightIcon /></Link>
                </div>
            </div>
        </>
    )
}

export default Donate;
