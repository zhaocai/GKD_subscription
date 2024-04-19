import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.solar',
  name: '小猿搜题',
  groups: [
    {
      key: 1,
      name: '升级提示',

      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: [
            '[id="com.fenbi.android.solar:id/text_upgrade"]',
            '[id="com.fenbi.android.solar:id/img_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13246056',
        },
      ],
    },
  ],
});
