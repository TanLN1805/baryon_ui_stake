'use client'
import { Fragment, useState } from 'react';
import StakeCard from './StakeCard';
import { MODAL } from '@/public';
import React from 'react';
import { STAKEFARM, VIDEO } from '@/public';
import { Button, Modal, TabItem,  TokenImg,  VideoBox } from '@ne/uikit-dex';
import BoxSecondary from '@/components/ui/BoxSecondary';
import CurrencyValue from '@/components/common/CurrencyValue';
import Image from 'next/image';
import CountUp from 'react-countup';
import { Switch } from '@ne/uikit-dex';
import { useFilterParams } from '@/hook/useFilterParams';
import { Tooltip } from '@ne/uikit-dex';
import { TabButton } from '@ne/uikit-dex';
import { Input } from '@ne/uikit-dex';
import { PieLoading } from '@ne/uikit-dex';
import { DURATION } from '@/constants';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';
import { Icon } from '@ne/uikit-dex';
import Link from 'next/link';
import ShareIcon from '@/components/ui/ShareIcon';
import { IFarmStakeModel, IFarmStakePoolInfoModel } from '@/types/farmStake.model';
import TokenPrice from '@/components/common/TokenPrice';
import ModalHarvest from './ModalHarvest';

export interface IFarmStakeParams{
  sortAsc:boolean;
  sort: string;
}

const handleStake = () => {
  console.log("Stake button clicked!");
  // Thực hiện hành động stake ở đây
};

const StakeFarm = () => {
  const mockPoolInfo = {
    pid: '1',
    stakedLpAddress: '0x...',
   
    rewardToken: {
      address: '0x...',
      image: 'url/to/image.png',
      symbol: 'TOKEN',
      id: 'token-id',
    },
    isV2: true,
  };

  const [open, setOpen] = useState(false);

  // Hàm mở modal
  const openModal = () => {
    setOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
    // Thực hiện hành động xác nhận ở đây
  };
  
  const handleCancel = () => {
    console.log("Cancelled!");
    closeModal();
  };

    const t = useTranslations()
    const statusTabs = [
        { label: t('Active'), count: 0 },
        { label: t('Completed'), count: 0 },
      ];

    const { params, setParams } = useFilterParams<{
      status: string;
      count: number;
    }>({ status: statusTabs[0].label, count: statusTabs[0].count });

    const configSort: TabItem[] = [
      {
        title: t('common_liquidity'),
        key: 'liquidity',
      },
      {
        title: t('common_apr'),
        key: 'apr',
      },
    ];

    const handleClickSort = (it: TabItem) => () => {
      // if (it.key === params.sort) {
      //   setParams({ sortAsc: !params.sortAsc });
      // } else {
      //   setParams({ sortAsc: true });
      //   setParams({ sort: it.key });
      // }
    };

    return (
        <div className='farm-screen-background container mx-auto box-border '>
            <div className='farm-screen-v2 py-12  '>
                <div className='grid grid-cols-11 relative gap-9 mb-9 '>
                <BoxSecondary  className='farm-screen-v2__head gap-9 col-span-8 '>

                    <div className='info-total-value w-100 p-8 box-border rounded-[1.6rem] overflow-hidden relative flex items-center justify-between gap-6'>
                        <div className=''>
                            <div className='mb-20'>
                                <div className='text-6xl font-[500] mb-6' >Stake</div>
                                <div className='text-gray-500 overflow-hidden overflow-x-hidden overflow-y-hidden text-ellipsis' >Stake tokens to earn rewards</div>
                            </div>
                            <div >
                                <div className='mb-5'>Total Value Staked</div>
                                <div className='text-yellow-500 text-2xl font-normal'>
                                    <CurrencyValue value={112321321321321} ></CurrencyValue>
                                </div>
                            </div>
                        </div>
                        <div className='info-rigt'>
                            <div className='info-right--video'>
                            <VideoBox
                                className="w-[300px] right-8 absolute -bottom-5  "
                                src={VIDEO.stakeBannerWebM}
                                srcSupport={VIDEO.stakeBannerWebM}
                            />
                            </div>
                            <Image
                                fill
                                src={STAKEFARM.bgBlurLeft}
                                className='absolute top-5'
                                alt='wave-cover'
                            />
                        </div>
                    </div>
                </BoxSecondary>
                <BoxSecondary className=' text-center col-span-3 flex items-center justify-center flex flex-col'>
                    <div className='text-base font-normal'>My Rewards</div>
                    <div className="text-brand-primary text-xl font-semibold ">
                        <CountUp
                            className="text-3xl"
                            start={0}
                            end={2222}
                            duration={2.75}
                            prefix="$"
                        />
                    </div>
                    <div className='my-reward-farm-v2__pulse'>
                        <Image
                            fill
                            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                            src={STAKEFARM.bgBlurRight}
                            alt="wave cover"
                        />
                    </div>
                </BoxSecondary>
                </div>
                <div className='mb-9'>
                <BoxSecondary className="flex justify-between text-center items-center">
                  <div className="flex justify-center gap-2 items-center">
                    {statusTabs.map((it, idx) => {
                      const isActive = params.status === it?.label;
                      return (
                        <TabButton
                          key={idx}
                          onClick={() => setParams({ status: it?.label })}
                          variant="line"
                          isSelected={isActive}
                          className="gap-1 flex-center px-0 font-light py-8 mr-3"
                        >
                      <span>{it.label}</span>
                      {it?.count != undefined && (
                        <span
                          className={twMerge(
                            'text-txt-secondary',
                            isActive && 'text-txt-primary',
                          )}
                        >
                          ({it?.count})
                        </span>
                      )}
                </TabButton>
              );
            })}
            <div className=" flex items-center">
              <div>
                <Switch className=" text-txt-secondary" label={t('Staked')} />
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex items-center ">
              <span>{t('common_sort')}:</span>
              {configSort.map((it) => {
                // const isActive = it?.key === params.sort;
                // const isActive = it?.key;
                return (
                  <div
                    className={twMerge(
                      'flex items-center gap-1 cursor-pointer',
                      'border-r-2 border-divide pr-2 last:border-none pl-2',
                    )}
                    key={it.key}
                    onClick={handleClickSort(it)}
                  >
                    <span>{it.title}</span>
                    <Icon
                      size="sm"
                      className={twMerge(
                        'text-txt-secondary visible transition-all opacity-100',
                        // isActive && 'visible opacity-100',
                        // params.sortAsc && 'rotate-180',
                      )}
                      iconName="arrow_down"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <div>
                <Input placeholder="Search here" isSearch />
              </div>
              <div>
                <Tooltip id="topTokens" trigger={t('common_data_auto_refresh')}>
                  <PieLoading size={20} duration={DURATION.PIE_LOADING} />
                </Tooltip>
              </div>
            </div>
          </div>
        </BoxSecondary>
            </div>
              <div className='grid grid-cols-3 gap-6'>
                <StakeCard
                  id="1"
                  title="Stake SVIC Earn VIC"
                  tokenImage="https://file.coin98.com/images/0xd84c4f5bdccd920068a69ec801cf19b9244ff22a-IoTnOyz4Fzedv18c.png"
                  apr="10.34%"
                  earn="666.67 VIC/day"
                  endDate="16/12/2024 18:00"
                  rewards={0}
                  poolLink="https://www.vicscan.xyz/address/0xCdde1f5D971A369eB952192F9a5C367f33a0A891"
                />
                <StakeCard
                  id="2"
                  title="Stake SAROS Earn SAROS"
                  tokenImage="https://file.coin98.com/images/saros-LNsjfUWxDBp1q5V8.png"
                  apr="10.34%"
                  earn="666.67 VIC/day"
                  endDate="16/12/2024 18:00"
                  rewards={0}
                  poolLink="https://www.vicscan.xyz/address/0xB786D9c8120D311b948cF1e5Aa48D8fBacf477E2"
                />
              </div>
            </div>
        </div>
    );
};

export default StakeFarm;

