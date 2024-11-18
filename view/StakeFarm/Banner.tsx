import React from 'react';
import Image from 'next/image'; 
import CurrencyValue from '@/components/common/CurrencyValue';
import BoxSecondary from '@/components/ui/BoxSecondary';
import {VideoBox,} from '@ne/uikit-dex';
import { STAKEFARM, VIDEO } from '@/public';
import { useLiquid } from '.';

interface Props {
    isFarm: boolean;
  }


const Banner = ({ isFarm}: Props) => {
  const { totalLiquid } = useLiquid()
  console.log("Total Liquid:", totalLiquid);
  return (
            <div className="info-total-value w-100 p-8 box-border rounded-[1.6rem] overflow-hidden relative flex items-center justify-between gap-6">
              {isFarm ?
                <div className="">
                <div className="mb-20">
                  <div className="text-6xl font-[500] mb-6">Farrm</div>
                    <div className="text-gray-500 overflow-hidden overflow-x-hidden overflow-y-hidden text-ellipsis">
                      Farm LP tokens to earn rewards
                    </div>
                  </div>
                  <div>
                    <div className="mb-5">Total Value Staked</div>
                    <div className="text-yellow-500 text-2xl font-normal">
                      <CurrencyValue value={totalLiquid}></CurrencyValue>
                  </div>
                </div>
              </div>:
                <div className="">
                <div className="mb-20">
                  <div className="text-6xl font-[500] mb-6">Stake</div>
                    <div className="text-gray-500 overflow-hidden overflow-x-hidden overflow-y-hidden text-ellipsis">
                      Stake tokens to earn rewards
                    </div>
                  </div>
                  <div>
                    <div className="mb-5">Total Value Staked</div>
                    <div className="text-yellow-500 text-2xl font-normal">
                      <CurrencyValue value={totalLiquid}></CurrencyValue>
                  </div>
                </div>
              </div>     
              } 
              <div className="info-rigt">
                <div className="info-right--video">
                  <VideoBox
                    className="w-[300px] right-8 absolute -bottom-0  "
                    src={isFarm ?  VIDEO.farmBannerWebM : VIDEO.stakeBannerWebM }
                    srcSupport={isFarm? VIDEO.farmBannerWebM : VIDEO.stakeBannerWebM}
                  />
                </div>
                <Image
                  fill
                  src={STAKEFARM.bgBlurLeft}
                  className="absolute top-5"
                  alt="wave-cover"
                />
              </div>
            </div>
  );
};

export default Banner;
