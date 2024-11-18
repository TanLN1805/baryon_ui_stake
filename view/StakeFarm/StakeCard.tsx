
'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { Button, Modal, Tooltip, Icon, TokenImg } from '@ne/uikit-dex';
import ShareIcon from '@/components/ui/ShareIcon';
import Link from 'next/link';
import Image from 'next/image';
import TokenPrice from '@/components/common/TokenPrice';
import ModalHarvest from './ModalHarvest';
import BoxSecondary from '@/components/ui/BoxSecondary';
import AnimateHeight from 'react-animate-height';
import { PATHS } from '@/constants/paths';
import { useTranslations } from 'next-intl';
import { IFarmStakePoolInfoModel } from '@/types/farmStake.model';
import ModalConfirm from '@/components/ui/Modal/ModalConfirm';
import { useGlobalStore } from '@/stores/global.store';
import ModalFarm from './ModalFarm';
import CurrencyValue from '@/components/common/CurrencyValue';
import { convertBalanceToWei, unapprove } from '.';
import ModalApproval from '@/components/ui/Modal/ModalApproval';

interface StakeCardProps {
  stake: any;
  id:string;
  title: string;
  tokenImage: string;
  apr: string;
  earn: string;
  endDate: string;
  rewards: number;
  poolLink: string;
}

const StakeCard = ({ 
  data
}:any) => {
  const [open, setOpen] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  console.log('dữ liệu',data);
  

  const closeModal = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    console.log("Confirmed!");
    // Thực hiện hành động xác nhận ở đây
  };
const ButtonAction = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cursor-pointer font-light w-12 h-12 bg-btn-background-secondary text-brand-primary text-3xl rounded-lg hover:text-4xl duration-300 flex-center hover:bg-background-primary-reverse">
      {children}
    </div>
  );
};

console.log('apr',typeof(data.apr));


  const handleCancel = () => {
    console.log("Cancelled!");
    closeModal();
  };

  console.log('lượng tiền đã stake vào',data.stake);
  console.log('kiểu',typeof(data.stake));
  
  
  
  console.log('typer of bignum',typeof(data.allowance));
  console.log('bignum value',data.allowance);
  
  


  const clickHandleUnApprove =()=>{
   
   unapprove(0,data.address, data.addressTokenStake)
  }

  const t = useTranslations();
  const configLiquidity = [
    {
      title: t('common_view_contract'),
      link:  `https://www.vicscan.xyz/address/${data.contractAdd}`,
    },
    {
      title: t('common_see_token_info'),
      link: `https://www.baryon.network/token/${data.tokenInfo}`,
    },
  ];

  const { activeChain, localCoins } = useGlobalStore();
    const [chainData, setChainData] = useState({});

    useEffect(() => {
        if (localCoins && localCoins[activeChain]) {
            const updatedChainData = localCoins[activeChain];
            setChainData(updatedChainData);
            // console.log("Chain Data:", JSON.stringify(updatedChainData, null, 2));
        }
    }, [localCoins, activeChain]);


  const [openFarm, setOpenFarm] = React.useState(false);

  const openModalFarm = () => {
    setOpenFarm(true);
  };

  const closeModalFarm = () => {
    setOpenFarm(false);
  };

  const handleCancelFarm = () => {
    console.log("Cancelled!");
    closeModalFarm();
  };

  const [openFarmUn, setOpenFarmUn] = React.useState(false);

  const openModalFarmUn = () => {
    setOpenFarmUn(true);
  };

  const closeModalFarmUn = () => {
    setOpenFarmUn(false);
  };

  const handleCancelFarmUn = () => {
    console.log("Cancelled!");
    closeModalFarmUn();
  };
  

  const [openFarmMore, setOpenFarmMore] = React.useState(false);

  const openModalFarmMore = () => {
    setOpenFarmMore(true);
  };

  const closeModalFarmMore = () => {
    setOpenFarmMore(false);
  };

  const handleCancelFarmMore = () => {
    console.log("Cancelled!");
    closeModalFarmMore();
  };

  const [openApproveFarm, setOpenApproveFarmMore] = React.useState(false);
  const openModalApproveFarmMore = () => {
    setOpenApproveFarmMore(true);
  };

  const closeModalApproveFarmMore = () => {
    setOpenApproveFarmMore(false);
  };

  const handleCancelApproveFarmMore = () => {
    console.log("Cancelled!");
    closeModalApproveFarmMore();
  };

  const clickCofirmApprove =()=>{
    const amountWei = convertBalanceToWei(30*10**19,data.decimalTokenStake)
   
   unapprove(amountWei,data.address, data.addressTokenStake)
   console.log('sotien',data.amout);
   
 }


  return (
    <BoxSecondary className='col-span-1'>
    {/* // <div> */}
      <div className='flex flex-col justify-center items-center relative px-9 py-0'>
        <div className="absolute top-0 right-6 text-xl h-8 w-8 rounded-full bg-transparent transition-all duration-300 ease-in-out cursor-pointer text-gray-500">
          <ShareIcon />
        </div>                   
        <div className='w-20 h-20 flex items-center justify-center pb-[20px]'>
          <Image src={data.tokenImage} width={55} height={55} className='rounded-full' alt=""/>
        </div>
        <div className='text-xl font-semibold pb-6 transition-all duration-300 ease-in-out flex items-center hover:text-brand-primary whitespace-nowrap'>
          <Link href={'data.poolLink'} target='_blank' rel='noreferrer'> 
            <span>{data.title}</span>
            <Icon iconName="arrow_right" className='ml-4 mb-[2px] text-xl'/>
          </Link>
        </div>
        </div>
        <div className='px-10 py-10'>
        <div className='text-xl flex items-center justify-between font-semibold mb-6'>
          <div className='text-gray-500'>APR</div>
          <div className='text-xl flex text-yellow-500'>{data.apr}%</div>
        </div>
        <div className='text-xl flex items-center justify-between font-semibold mb-6'>
          <div className='text-gray-500'>Earn</div>
          <div className='flex items-center gap-4 relative'>
            <Tooltip
              id='earn-tooltip'
              direction='top-start'
              trigger={
                <div>
                  <span className='text-sm'>{data.earn}</span>
                </div>
              }
              children={
                // id === '1' ? (
                // <div>
                //   <TokenImg src='https://coin98.s3.ap-southeast-1.amazonaws.com/Chains/tomo.png' size='base' />
                // </div>
                // ):(<div>
                //   <TokenImg src='https://file.coin98.com/images/saros-LNsjfUWxDBp1q5V8.png' size='base' />
                // </div>)
              <div>
                <TokenImg src={data.tokenImage} size='base' /> 
              </div>
              }
            />
          </div>
        </div>
        <div className='text-xl flex items-center justify-between font-semibold mb-6'>
          <div className='text-gray-500'>End</div>
          <div className='text-xl flex text-yellow-500'>{data.endDate}</div>
        </div>
        </div>
        
      <div className='flex flex-col items-center min-h-60 rounded-2xl'>
        <div className="mt-6 mb-3 w-[90%]">
          <div className="flex-between items-end">
            <div className="flex flex-col gap-3">
              <span className="text-gray-500 font-semibold">Unclaimed Rewards</span>
              <span className="uppercase font-semibold text-2xl text-txt-secondary">
                <div className="text-txt-primary text-2xl mb-1">
                  {/* <CurrencyValue value={data.rewards} /> */}
                  <span>{parseFloat(data.rewards).toFixed(2)}</span>
                </div>
              </span>
            </div>
            <Button className='ml-16' onClick={openModal}>   
                Harvest
            </Button>
            <Modal
              // heading="Harvest"
              open={open}
              onSetOpen={setOpen}
              isHideClose
            >
              <ModalHarvest onCancel={handleCancel} onConfirm={handleConfirm} data={data}/>
            </Modal>
          </div>
        </div>
        
        <div className='w-[90%] mb-6'>
          <div>
            <a href={data.poolLink} className='text-base mb-3  text-gray-500'>
              <span className='text-yellow-400 mr-2'>SVIC</span>
              STAKED
            </a>
          </div>
          <div className='flex items-center justify-between w-full h-24'>
            {data.allowance === 0 && data.stake === 0 && (
                <Button
                className="w-[90%] container h-10 cursor-pointer flex items-center justify-center px-4 py-3 transition duration-300 ease-in-out text-2xl border-0 rounded-lg tracking-[0.31px] font-normal"
                onClick={openModalApproveFarmMore}
              >
                Enable
                <Modal
                    open={openApproveFarm}
                    onSetOpen={setOpenApproveFarmMore}
                    isHideClose
                  >
                    <ModalApproval onCancel={handleCancelApproveFarmMore} onConfirm={clickCofirmApprove} data={data}/>
                  </Modal>
              </Button>
            )}
                {data.stake !== 0 && (
                  <div className='flex items-center justify-between w-full h-20'>
                  <div className='outline outline-1 outline-transparent block'>
                    <div className='text-2xl text-txt-secondary mb-2 font-bold w-52 overflow-hidden whitespace-nowrap overflow-ellipsis'>{data.stake}</div>
                    <div className='text-gray-400'>$0</div>
                  </div>
                    <div className='flex items-center '>
                      <button className='h-12 w-12 flex items-center justify-center text-3xl rounded-lg mr-4 leading-8 cursor-pointer bg-gray-800 transition-all duration-300 ease-in-out  hover:bg-gray-700'onClick={openModalFarmUn}>
                        <div className='text-brand-primary h-auto w-auto rounded-none bg-transparent cursor-default text-xl flex justify-center items-center '>
                          -
                        </div>
                        <Modal
                          open={openFarmUn}
                          onSetOpen={setOpenFarmUn}
                          isHideClose
                        >
                          <ModalFarm handleClose={handleCancelFarmUn} onConfirm={handleCancelFarmUn} isStakeMore={false} data={data}/>
                        </Modal>
                      </button>
                      <span></span>
                      <button className='h-12 w-12 flex items-center justify-center text-3xl rounded-lg leading-8 cursor-pointer bg-gray-800 transition-all duration-300 ease-in-out  hover:bg-gray-700' onClick={openModalFarmMore}>
                        <div className='text-brand-primary h-auto w-auto rounded-none bg-transparent cursor-default text-xl flex justify-center items-center'>
                        +
                        </div>
                        <Modal
                          open={openFarmMore}
                          onSetOpen={setOpenFarmMore}
                          isHideClose
                        >
                          <ModalFarm handleClose={handleCancelFarmMore} onConfirm={handleCancelFarmMore} isStakeMore={true} data={data}/>
                        </Modal>
                      </button>
                      {/* <Modal
                        // heading="Harvest"
                        open={openConfirm}
                        onSetOpen={setOpenConfirm}
                        isHideClose
                      >
                        <ModalConfirm onCancel={handleCancelConfirm} onConfirm={handleConfirm}/>
                      </Modal> */}
                    </div>
                  </div>
                  
                )}
                {data.stake === 0 && data.allowance !== 0 && (
                  <Button className='w-[90%] container h-10 cursor-pointer flex items-center justify-center px-4 py-3 transition duration-300 ease-in-out text-2xl border-0 rounded-lg tracking-[0.31px] font-normal ' onClick={openModalFarm} >
                    <div>Stake</div>
                  </Button>                 
                )}
                <Modal
                  open={openFarm}
                  onSetOpen={setOpenFarm}
                  isHideClose
                >
                  <ModalFarm handleClose={handleCancelFarm} onConfirm={handleCancelFarm} isStakeMore={true} data={data}/>
                </Modal>
                {/* {(data.allowance===0 && data.stake === 0) && (
                  <Button className='w-[90%] container h-10 cursor-pointer flex items-center justify-center px-4 py-3 transition duration-300 ease-in-out text-2xl border-0 rounded-lg tracking-[0.31px] font-normal ' onClick={openModalFarm} >
                    Enable
                  </Button> 
                )} */}
          </div>
          <Button
              className="w-[90%] container h-10 cursor-pointer flex items-center justify-center px-4 py-3 transition duration-300 ease-in-out text-2xl border-0 rounded-lg tracking-[0.31px] font-normal"
              onClick={clickHandleUnApprove}
            >
              UnApprove
            </Button>
          {/* {data.allowance !== 0 ? (
            <Button
              className="w-[90%] container h-10 cursor-pointer flex items-center justify-center px-4 py-3 transition duration-300 ease-in-out text-2xl border-0 rounded-lg tracking-[0.31px] font-normal"
              onClick={clickHandleUnApprove}
            >
              UnApprove
            </Button>
          ) : (
            <Button
              className="w-[90%] container h-10 cursor-pointer flex items-center justify-center px-4 py-3 transition duration-300 ease-in-out text-2xl border-0 rounded-lg tracking-[0.31px] font-normal"
              onClick={openModalApproveFarmMore}
            >
              Enable
              <Modal
                  open={openApproveFarm}
                  onSetOpen={setOpenApproveFarmMore}
                  isHideClose
                >
                  <ModalApproval onCancel={handleCancelApproveFarmMore} onConfirm={clickCofirmApprove} data={data}/>
                </Modal>
            </Button>
            
          )} */}
        </div>
      </div>
      <div className='transition duration-300 ease-in-out hover:scale-110 w-full flex justify-center cursor-pointer'>
        <Icon iconName={openDetail ? 'arrow_up' : 'arrow_down'}
          onClick={() => setOpenDetail(!openDetail)}
          className='hover:text-white'>
        </Icon>
      </div>
      <AnimateHeight duration={300} height={openDetail ? 'auto' : 0}>
                <div className="mt-6">
                  <div className="flex-between gap-2">
                    <span>{t('common_liquidity')}</span>
                    {/* <span>Liquidity</span> */}
                    <span>{data.liquid}</span>
                  </div>
                  <div className="inline-flex flex-col gap-2 mt-2">
                    {configLiquidity.map((it, idx) => {
                      return (
                        <a
                          href={it?.link}
                          key={idx}
                          target="_blank"
                          className="flex items-center gap-2 "
                        >
                          <Icon iconName="pool_info" />
                          <span className="text-brand-primary">
                            {it?.title}
                            {/* View Contract */}
                          </span>
                        </a>
                       );
                    })}
                  </div>
                </div>
              </AnimateHeight>
    {/* </div> */}
    </BoxSecondary>
  );
};

export default StakeCard;
