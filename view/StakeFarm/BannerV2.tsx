import React from 'react';
import Image from 'next/image'; 
import CurrencyValue from '@/components/common/CurrencyValue';
import BoxSecondary from '@/components/ui/BoxSecondary';
import {VideoBox,} from '@ne/uikit-dex';
import { STAKEFARM, VIDEO } from '@/public';
import CountUp from 'react-countup';


interface Props {
    isFarm: boolean;
  }

const Banner = ({ isFarm}: Props) => {
  return (
    <div >
            <div className="text-base font-normal">My Rewards</div>
            <div className="text-brand-primary text-xl font-semibold ">
              <CountUp
                className="text-3xl"
                start={0}
                end={2222}
                duration={2.75}
                prefix="$"
              />
            </div>
            <div className="my-reward-farm-v2__pulse">
              <Image 
                fill
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                src={isFarm ? STAKEFARM.bgBlurRight : STAKEFARM.bgBlurLeft}
                alt="wave cover"
              />
            </div>
    </div>
  );
};

export default Banner;
