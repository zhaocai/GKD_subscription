import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mt.mtxx.mtxx',
  name: '美图秀秀',
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="升级新版客户端"] - [text="取消"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13238352',
    },
  ],
});
