import React from 'react';
import { InfoSection, InfoSectionServices, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSectionServices {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Pricing />
        </>
    )
}

export default Home;