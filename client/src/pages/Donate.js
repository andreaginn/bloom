import React from 'react';
import DonateForm from '../components/DonateForm';
import { Link } from 'react-router-dom';
import FilterVintageRoundedIcon from '@mui/icons-material/FilterVintageRounded';

const Donate = () => {

    return (
        <>
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-1 col-end-3 mt-5">
                    <DonateForm />
                </div>
                <div className="col-start-3 col-end-7 place-self-center text-7xl font-bold text-slate-700 mt-3 mr-3" style={{ display: 'inline-block' }}>
                    <span className="text-orange-400">Offset</span>your carbon footprint by supporting projects you care about.
                </div>
            </div>
            {/* One Tree Planted */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-7 mt-5">
                    <img className="w-full" src="./images/one-tree-planted.webp" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="mt-3 text-5xl font-bold text-slate-700 leading-snug">One Tree Planted</div>
                    <p className="my-3 text-xl text-slate-600">This organization engages in reforestation efforts worldwide. They aim to combat deforestation, restore ecosystems, and create a sustainable future for the planet.</p>
                </div>
                <div className="col-start-2 col-end-4 mb-3">
                    <div>
                        <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Protect habitat for wildlife</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Global partnerships for tree planting</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Environmental education and awareness</div></span>
                    </div>
                </div>
                <div className="col-start-4 col-end-5 place-self-start">
                    <Link className="btn-primary" as={Link} to='https://onetreeplanted.org/'>Learn more</Link>
                </div>
            </div>
            {/* Coming Clean */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-6">
                    <img className="w-full" src="./images/coming-clean.jpg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="text-5xl font-bold text-slate-700 leading-snug">Coming Clean</div>
                    <div className="text-xl text-slate-600 pb-3">
                        <p>This organization is a nonprofit environmental health collaborative dedicated to transforming the chemical industry into a safe and sustainable source of energy. Their mission is to reduce sources of chemical exposure in people's lives, especially in disproportionately impacted populations, and advocate for corporate and marketplace changes to address toxic chemicals as a public health threat.</p>
                    </div>
                </div>
                <div className="col-start-2 col-end-5">
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Advancing chemical policy reform</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Promoting environmental health and justice</div></span>
                    <span><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Holding corporations accountable for pollution</div></span>
                </div>
                <div className="col-start-5 col-end-6 place-self-start">
                    <Link className="btn-primary" as={Link} to='https://www.comingcleaninc.org/'>Learn more</Link>
                </div>
            </div>
            {/* Carbon180 */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-1 col-end-6 mt-5">
                    <img className="w-full" src="./images/carbon180.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="mb-3 text-5xl font-bold text-slate-700 1">Carbon180</div>
                    <div className="text-xl text-slate-600 pb-3">
                        <p>This organization helps improve the transparency and scientific integrity of carbon removal and climate solutions through open data, tools, and leadership.</p>
                    </div>
                </div>
                <div className="col-start-2 col-end-5">
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Promotes better climate policy</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Tracks carbon removal legislation</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Promotes carbon-removal on U.S. farmland</div></span>
                </div>
                <div className="col-start-5 col-end-6 place-self-start">
                    <Link className="btn-primary" as={Link} to='https://carbon180.org/'>Learn more</Link>
                </div>
            </div>
            {/* Clean Air Task Force */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-7 mt-5">
                    <img className="w-full" src="./images/CATF.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="mb-3 text-5xl font-bold text-slate-700 leading-snug">Clean Air Task Force</div>
                    <div className="text-xl text-slate-600 pb-3">
                        <p>This organization is a policy group that advocates for new technologies and policies needed to get to a zero-emissions, high-energy planet at an affordable cost.</p>
                    </div>
                </div>
                <div className="col-start-2 col-end-5">
                    <div>
                        <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Influences politicians on climate policy</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Top-rated climate charity</div></span>
                        <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Promotes key climate solutions</div></span>
                    </div>
                </div>
                <div className="col-start-5 col-end-6 place-self-start">
                    <Link className="btn-primary" as={Link} to='https://www.catf.us/'>Learn more</Link>
                </div>
            </div>
            {/* Rainforest Foundation */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-1 col-end-6 mt-5">
                    <img className="w-full" src="./images/rainforest800x450.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="mb-3 text-5xl font-bold text-slate-700 leading-snug">Rainforest Foundation</div>
                    <div className="text-xl text-slate-600 pb-3">
                        <p>This project gives Indigenous Amazonians the tools they need to protect their rainforest home. Using satellite monitoring and drones, Indigenous monitors detect deforestation early. This allows communities to prevent deforestation before it reaches a large scale.</p>
                    </div>
                </div>
                <div className="col-start-2 col-end-5">
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Protects biodiversity</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Promotes Indigenous land rights</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Prevents deforestation</div></span>
                </div>
                <div className="col-start-5 col-end-6 place-self-start">
                    <Link className="btn-primary" as={Link} to='https://rainforestfoundation.org/'>Learn more</Link>
                </div>
            </div>
            {/* Climate Ride */}
            <div className="grid grid-cols-6 gap-4 mt-5">
                <div className="col-start-2 col-end-6 mt-5">
                    <img className="w-full" src="./images/Climate-Ride1024x683.jpeg" alt="" />
                </div>
                <div className="col-start-2 col-end-6">
                    <div className="mb-3 text-5xl font-bold text-slate-700 leading-snug">Climate Ride</div>
                    <div className="pb-3 col-start-2 col-end-7 text-xl text-slate-600">
                        <p>This group organizes charitable multi-day cycling and hiking events to raise funds and awareness for sustainable solutions to climate change. By combining physical challenges with advocacy, Climate Ride empowers participants to support renewable energy, active transportation, and other initiatives that reduce CO2 emissions and promote a sustainable future.</p>
                    </div>
                </div>
                <div className="col-start-2 col-end-5">
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Advocacy for renewable energy</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Promotes active transporation solutions</div></span>
                    <span className="pb-2"><FilterVintageRoundedIcon /><div className="pl-2 text-xl text-slate-600">Supports sustainability through empowering others</div></span>
                </div>
                <div className="col-start-5 col-end-6 place-self-start">
                    <Link className="btn-primary" as={Link} to='https://www.climateride.org/'>Learn more</Link>
                </div>
            </div>
        </>
    )
}

export default Donate;
