import UsageByModuleGraph from '@/app/main/components/UsageByModule/UsageByModuleGraph';
import styles from './ClientRequest.module.scss';
import { useClientModule } from '@/hooks/useClientModule';

export default function ClientRequest({
  standard,
  serialKey,
}: {
  standard: number;
  serialKey: string;
}) {
  const { list } = useClientModule(standard, serialKey);
  return (
    <div className={`${styles.request} w-[60%] h-full rounded-[10px]`}>
      <div className={`${styles.main} p-3 h-full flex flex-col`}>
        <span className={`${styles.title} text-2xl`}>Recent Request</span>
        <div className={`w-full h-[100%]`}>
          <UsageByModuleGraph list={list} />
        </div>
      </div>
    </div>
  );
}
