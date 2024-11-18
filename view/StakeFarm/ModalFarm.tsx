import CurrencyValue from '@/components/common/CurrencyValue';
import TokenPrice from '@/components/common/TokenPrice';
import BoxSecondary from '@/components/ui/BoxSecondary';
import { MAX_NUMBER_INPUT_DECIMAL, MAX_NUMBER_INPUT_VALUE } from '@/constants';
import { IFarmStakeModel } from '@/types/farmStake.model';
import { ITokenInfoModel } from '@/types/token.model';
import { Button, InputNumber, SliderBrand } from '@ne/uikit-dex';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { convertBalanceToWei, handleDeposit ,unapprove,witdrawAndharvest} from '.';
import BigNumber from 'bignumber.js';

interface Props {
  handleClose?: () => void;
  token?: ITokenInfoModel;
  poolInfo: IFarmStakeModel;
  handleDeposit: any;
  isStakeMore: boolean;
  data:any;
}


const ModalFarmStake = ({ handleClose, token, poolInfo ,isStakeMore,data}: Props) => {
  const [percentValue, setPercentValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const t = useTranslations();
  const [value, setValue] = useState<string>('');

  const clickHandle =()=>{
     const amountWei = BigNumber(convertBalanceToWei(Math.floor(amount),data.balanceSt)).toNumber();
     console.log("🚀 ~ clickHandle ~ amountWei:", amountWei)
     
     if(data.allowance >= amountWei ){
      handleDeposit(data.id,amountWei,data.address)
     }else{
      const amountWei = convertBalanceToWei(30*10**19,data.decimalTokenStake)
   
      unapprove(amountWei,data.address, data.addressTokenStake)
     }

  }

  const clickHandleUn =()=>{
    const amountWei = convertBalanceToWei(Math.floor(amount),data.balanceSt)
   
    witdrawAndharvest(data.id,amountWei,data.address)
 }

  const handleChangeSLide = (value: any) => {
    
    setPercentValue(value);
    value ? setAmount(Math.floor(parseFloat(data.balance) * value) / 100) : 0;
    console.log('amd',Math.floor(parseFloat(data.balance) * value));
  };

  console.log('balance',data.balance);
  
  // console.log("isStakeMore:", handleClose);

  return (
    <div>
      <BoxSecondary>
        <div className="flex-between gap-2">
          <InputNumber
            value={String(value)}
            onChangeValue={(value) => setValue(value)}
            isAllowed={() => true} 
            maxDecimal={MAX_NUMBER_INPUT_DECIMAL}
            isFull
            className="p-0"
            classNameInput="placeholder:font-semibold text-xl placeholder:text-xl font-semibold"
            placeholder="0.0"
          />
          <h4 className="uppercase font-semibold text-nowrap">
            {data.nameOftokenStake.toUpperCase()}
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="flex items-center gap-1 text-[0.8rem]">
            <span className="text-txt-secondary">{t('common_amount')}:</span>
            <span className="overflow-auto">
              <TokenPrice id={token?.id} amount={Number(value ?? 0)} />
            </span>
          </div>
          <div className="flex items-center justify-end gap-1 text-[0.8rem]">
            <span>{t('common_balance')}:</span>
            <span className="text-brand-primary cursor-pointer">
              {data.balance}
            </span>
          </div>
        </div>
        <div className="mt-6">
          <SliderBrand
            value={percentValue}
            onChange={handleChangeSLide}
            className="w-full"
            step={1} // Giả sử là bước tăng giảm 1
            max={100} // Giả sử là 100
            tipFormatter={(e) => `${e}%`} // Định dạng hiển thị giá trị trượt
          />
        </div>
      </BoxSecondary>
      <div className="flex items-center gap-4 mt-8">
        <Button color="secondary" isBlock onClick={handleClose}>
          {t('common_cancel')}
        </Button>
        { isStakeMore ? ( percentValue ? (<Button isBlock onClick={clickHandle}  >
         {t('common_stake_now')}
        </Button>):(<Button isBlock onClick={clickHandle} disabled>
         {t('common_stake_now')}
        </Button>))
        
         :
         <Button isBlock onClick={clickHandleUn}>
         Unstakenow
        </Button> }
      </div>
    </div>
    
  );
};

export default ModalFarmStake;
