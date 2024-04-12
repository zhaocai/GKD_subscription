import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhihu.android',
  name: '知乎',
  deprecatedKeys: [0, 1, 2, 3, 5, 8, 11],
  groups: [
    {
      key: 6,
      name: '分段广告-信息流广告',
      desc: '点击关闭-点击内容不感兴趣',
      quickFind: true,
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
        'com.zhihu.android.ContentActivity',
        'com.zhihu.android.app.ui.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <n * >n [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13849671',
            'https://i.gkd.li/i/14645530',
            'https://i.gkd.li/i/14178516',
            'https://i.gkd.li/i/13849442',
            'https://i.gkd.li/i/14178979',
          ],
        },
        {
          key: 2,
          matches: '@ImageView[clickable=true] < * - * > [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14321041',
            'https://i.gkd.li/i/14468152',
          ],
        },
        {
          key: 3,
          matches: '@ViewGroup[clickable=true] <4 * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14192451',
        },
        {
          key: 4,
          matches: '@ViewGroup[clickable=true] <3 * < * -3 * >2 [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14730741',
        },
        {
          preKeys: [0, 2, 3, 4],
          key: 90,
          matches: '@[clickable=true] >3 [text$="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/13849689',
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-回答底部评论顶部的任意广告推荐',
      activityIds: [
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
        'com.zhihu.android.app.ui.activity.HostActivity',
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView[text$="的广告"] +n TextView[text="×"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12864109',
        },
        {
          key: 10,
          matches:
            '@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12647525',
            'https://i.gkd.li/i/14178516', //activityId: com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity
          ],
        },
        {
          key: 11,
          matches: 'TextView[text$="的广告"] +3 ImageView',
          snapshotUrls: 'https://i.gkd.li/i/14178922',
        },
        {
          key: 12,
          matches: 'TextView[text$="的广告"] - Image',
          snapshotUrls: 'https://i.gkd.li/i/14548763',
        },
        // 预留13~99
        {
          preKeys: [10],
          key: 100,
          name: '反馈弹窗-点击“不感兴趣”',
          matches:
            '[id="com.zhihu.android:id/recycler_view"] > FrameLayout >(3) [text$="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/i/12647541'],
        },
      ],
    },
    {
      key: 9,
      name: '局部广告-推荐页-顶部广告',
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        '[id="com.zhihu.android:id/tv_ad_tag"] + [id="com.zhihu.android:id/img_close_focus"]', // 1686911063850
        '[vid="ad_container"] [vid="img_close_focus"]',
      ],
      snapshotUrls: 'https://i.gkd.li/i/14156887', //规则2，规则1快照缺失
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      desc: '点击x按钮',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.zhihu.android:id/guide_title"] - [id="com.zhihu.android:id/guide_image_exit"][clickable=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/25cfef06-fe50-4250-bf45-1f6210f95063',
          snapshotUrls: 'https://i.gkd.li/i/12647583',
        },
        {
          key: 1,
          matches: '@[vid="btn_close"] +2 [text$="内容推送"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1d1fee24-3ba0-4cf1-a0d5-696f4f62a5e0',
          snapshotUrls: 'https://i.gkd.li/i/14917866',
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '会员页弹窗广告',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[id="com.zhihu.android:id/dismiss"]',
          snapshotUrls: 'https://i.gkd.li/i/12707676',
        },
        {
          key: 1,
          name: '首页弹窗广告',
          activityIds: 'com.zhihu.android.app.ui.activity.AdAlphaVideoActivity',
          matches: '[vid="tv_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14648128',
        },
        {
          key: 2,
          name: '会员页红包弹窗',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[id="com.zhihu.android:id/floating_close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12647421',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-比赛、活动弹窗',
      desc: '点击x',
      rules: [
        {
          key: 0,
          name: '发想法赢奖励弹窗',
          quickFind: true,
          activityIds: 'com.zhihu.android.topic.TopicActivity',
          matches: '@ImageView - ViewGroup <<n [vid="scene_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14020339',
        },
        {
          key: 1,
          name: '古遗址提名大赛弹窗',
          activityIds:
            'com.zhihu.android.creatorcenter.CreatorCenterHostActivity',
          action: 'clickCenter',
          matches: 'View[text="关闭"] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/14957770',
        },
      ],
    },
    {
      key: 14,
      name: '局部广告-信息流广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <n * >n [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14178980',
            'https://i.gkd.li/i/14206949',
            'https://i.gkd.li/i/14206988',
          ],
        },
        {
          key: 2,
          activityIds: [
            'com.zhihu.android.mix.activity.ContentMixProfileActivity',
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          ],
          matches: '@[text="×"] <n * > [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14220104',
            'https://i.gkd.li/i/14421277',
          ],
        },
        {
          key: 3,
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '@[vid="menu"][visibleToUser=true] < * - * > [text^="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14296163',
        },
        {
          key: 4,
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14332161',
        },
        {
          key: 5,
          quickFind: true,
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches:
            '@Image[index=1][clickable=true][visibleToUser=true] + [text$="广告"] <<n [vid="view_content"]',
          snapshotUrls: 'https://i.gkd.li/i/14391614',
        },
        {
          key: 6,
          quickFind: true,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <n * > [text*="知乎"][index=1]',
          snapshotUrls: [
            'https://i.gkd.li/i/14235024',
            'https://i.gkd.li/i/14944631',
            'https://i.gkd.li/i/14232195', // [index=1]避免误触
          ],
        },
        {
          key: 7,
          quickFind: true,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <n * > [text="创作者小助手"][index=1]',
          snapshotUrls: 'https://i.gkd.li/i/14232195',
        },
      ],
    },
    {
      key: 15,
      name: '局部广告-悬浮小广告',
      rules: [
        {
          key: 0,
          name: '发现页面-右侧年卡折扣悬浮窗',
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '@[vid="activity_close"] + * > [vid="activity_img"]',
          snapshotUrls: 'https://i.gkd.li/i/14296251',
        },
        {
          key: 1,
          name: '首页-右侧悬浮窗广告',
          quickFind: true,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14635636',
        },
      ],
    },
    {
      key: 16,
      name: '更新提示',
      matchTime: 10000,
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '勾选[不再提醒]',
          matches: 'CheckBox[text="不再提醒"][checked=false][clickable=true]', // checked=false 区别勾选前后
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: [
            'https://i.gkd.li/i/14445502', // 勾选前
            'https://i.gkd.li/i/14445815', // 勾选后
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[取消]',
          matches: '@[text="取消"] + [text="去应用市场"]',
          exampleUrls:
            'https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965',
          snapshotUrls: 'https://i.gkd.li/i/14445502',
        },
      ],
    },
    {
      key: 101, // 不属于广告，序号往后排
      name: '功能类-问题回答-自动展开',
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        'ImageView[id="com.zhihu.android:id/iv_expand"] - TextView[id="com.zhihu.android:id/tv_expand"][text="展开"][visibleToUser=true]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12647688',
        'https://i.gkd.li/i/12707687', // 使用 [visibleToUser=true] 进行限定，防止在控件不可见时提前触发规则
      ],
    },
  ],
});
