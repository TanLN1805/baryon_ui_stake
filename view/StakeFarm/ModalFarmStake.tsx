import CurrencyValue from '@/components/common/CurrencyValue';
import TokenPrice from '@/components/common/TokenPrice';
import BoxSecondary from '@/components/ui/BoxSecondary';
import { MAX_NUMBER_INPUT_DECIMAL, MAX_NUMBER_INPUT_VALUE } from '@/constants';
import { useFarmStakeServices } from '@/hook/services/useFarmStakeServices';
import { useBalance } from '@/hook/useBalance';
import { useUtility } from '@/hook/useUtility';
import { IFarmStakeModel } from '@/types/farmStake.model';
import { ITokenInfoModel } from '@/types/token.model';
import { formatReadableNumber } from '@/utils/format';
import { convertBalanceToWei, convertWeiToBalance } from '@dagora/utils';
import { Button, InputNumber, SliderBrand } from '@ne/uikit-dex';
import { get } from 'lodash';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface Props {
  handleClose?: () => void;
  token?: ITokenInfoModel;
  handleSuccess: (tx: string) => void;
  poolInfo: IFarmStakeModel;
}

const ModalFarmStake = ({
  handleClose,
  handleSuccess,
  token,
  poolInfo,
}: Props) => {
  const t = useTranslations();
  // const balance = convertWeiToBalance(
  //   get(poolInfo, 'userPoolInfo.userPoolInfo.balance', 0),
  //   token?.decimal,
  // ).toNumber();
  const { balance } = useBalance(get(poolInfo, 'stakedLpAddress'));
  const { stakeServices } = useFarmStakeServices(poolInfo);
  const [value, setValue] = useState<string>('');
  const handleStake = (amount?: number) => {
    if (!amount) {
      return;
    }
    console.log({
      amount: convertBalanceToWei(amount, token?.decimal).toString(),
      amountUI: String(amount),
      pid: Number(poolInfo.pid),
      stakingTokenAddress: get(poolInfo, 'stakedLpAddress'),
      isWaitTx: true,
    });
    stakeServices.stake({
      amount: convertBalanceToWei(amount, token?.decimal).toString(),
      amountUI: String(amount),
      pid: Number(poolInfo.pid),
      stakingTokenAddress: get(poolInfo, 'stakedLpAddress'),
      isWaitTx: true,
      isV2: poolInfo.isV2,
    });
  };

  useEffect(() => {
    if (stakeServices.tx && stakeServices.isSuccess) {
      handleClose?.();
      handleSuccess?.(stakeServices.tx);
    }
  }, [stakeServices.isSuccess, stakeServices.isLoading, stakeServices.tx]);

  useEffect(() => {
    if (stakeServices.error) {
      handleSuccess?.('');
      handleClose?.();
    }
  }, [stakeServices.error]);

  return (
    <div>
      <BoxSecondary>
        <div className="flex-between gap-2">
          <InputNumber
            value={String(value)}
            onChangeValue={(value) => setValue(value)}
            isAllowed={(values) => {
              const { floatValue } = values;
              return (
                !floatValue ||
                (floatValue < MAX_NUMBER_INPUT_VALUE && floatValue <= balance)
              );
            }}
            maxDecimal={MAX_NUMBER_INPUT_DECIMAL}
            isFull
            className="p-0"
            classNameInput="placeholder:font-semibold text-xl placeholder:text-xl font-semibold"
            placeholder="0.0"
          />
          <h4 className="uppercase font-semibold text-nowrap">
            {get(token, 'symbol', '').toUpperCase()}
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="flex items-center gap-1 text-[0.8rem]">
            <span className="text-txt-secondary">{t('common_amount')}:</span>
            <span className="overflow-auto">
              <TokenPrice id={token?.id} amount={Number(value ?? 0)} />
            </span>
          </div>
          <div
            className="flex items-center justify-end gap-1 text-[0.8rem]"
            onClick={() => setValue(balance.toFixed(token?.decimal))}
          >
            <span>{t('common_balance')}:</span>
            <span className="text-brand-primary cursor-pointer">
              {formatReadableNumber(balance, { isTokenAmount: true })}
            </span>
          </div>
        </div>
        <div className="mt-6">
          <SliderBrand
            value={Number(value ?? 0)}
            onChange={(val) => setValue(val ? String(val) : '')}
            className="w-full"
            step={balance / 100}
            max={balance}
            tipFormatter={(e) =>
              `${(balance ? Number((e * 100) / balance) : 0).toFixed(2)}%`
            }
          />
        </div>
      </BoxSecondary>
      <div className="flex items-center gap-4 mt-8">
        <Button
          color="secondary"
          isBlock
          onClick={handleClose}
          disabled={stakeServices.isLoading}
        >
          {t('common_cancel')}
        </Button>
        <Button
          onClick={() => handleStake(Number(value ?? 0))}
          isBlock
          isLoading={stakeServices.isLoading}
          disabled={!Number(value ?? 0) || Number(value ?? 0) > balance}
        >
          {!value ? t('common_input_an_amount') : t('common_stake_now')}
        </Button>
      </div>
    </div>
  );
};

export default ModalFarmStake;
