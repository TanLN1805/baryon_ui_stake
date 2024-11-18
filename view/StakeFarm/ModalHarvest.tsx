import { Button, TokenImg } from '@ne/uikit-dex';
import { useTranslations } from 'next-intl';
import TokenPrice from '@/components/common/TokenPrice';
import { convertBalanceToWei, thuhoach} from '.';
import { useState } from 'react';


const ModalHarvest = ({
  poolInfo,
  onCancel,
  // onConfirm,
  
  data,
}: {
  poolInfo?: any;
  onCancel?: () => void;
  // onConfirm?: () => void;
  data:any;
}) => {
  const t = useTranslations();
  console.log('ngu',data.id);
  

  const onConfirm =()=>{
   
   thuhoach(data.id,data.address)
  }


  return (
    <div>
      <div>
        <div className="flex flex-col items-center mb-4">
          <img 
            src="/images/Modal/review.png" 
            alt="Review" 
            className='object-contain rounded-[50%] mb-4'
          />
          {/* <h2 className="text-xl font-semibold">{t('Harvest')}</h2> */}
          <h2 className="text-xl font-semibold">Harvest</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            {/* <TokenImg src={poolInfo?.rewardToken?.image} /> */}
            <TokenImg/>
            <span className="uppercase">
              {/* {poolInfo?.rewardToken?.symbol} */}
            </span>
          </div>
          <span className="font-semibold">
            {/* {poolInfo?.pendingReward ?? 0} */}
          </span>
        </div>
        <div className="pt-5 mt-5 border-t border-divide">
          <div className="flex-between gap-2">
            <span className="text-txt-secondary">
              {t('common_total_receive')}
            </span>
            <span className="text-xl font-semibold text-brand-primary">
              <TokenPrice
                // id={poolInfo?.rewardToken?.id}
                // amount={poolInfo?.pendingReward ?? 0}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Button color="secondary" isBlock onClick={onCancel}>
          {t('common_cancel')}
        </Button>
        <Button isBlock onClick={onConfirm}>
          {t('common_confirm')}
        </Button>
      </div>
    </div>
  );
};



export default ModalHarvest;
