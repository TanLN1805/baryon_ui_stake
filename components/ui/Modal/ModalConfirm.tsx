import { Button } from '@ne/uikit-dex';
import { useTranslations } from 'next-intl';

const ModalConfirm = ({
  onConfirm,
  onCancel,
}: {
  onConfirm?: () => void;
  onCancel?: () => void;
}) => {
  const t = useTranslations();

  return (
    <div>
      <div className="flex flex-col items-center mb-4">
          <img 
              src="/images/Modal/confirm.png" 
              alt="Review" 
              className='object-contain rounded-[50%] mb-4'
            />
          <h2 className="text-xl font-semibold">{t('Notification')}</h2>
      </div>
      <div className="text-center text-base ipad:text-sm">
        <div className="block ">
          {`${t('modal_confirm_harvest_before_stake')}`}
        </div>
        <div>{t('modal_confirm_continue')}</div>
      </div>
      <div className="flex items-center gap-6 ipad:gap-4 mt-6">
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

export default ModalConfirm;
