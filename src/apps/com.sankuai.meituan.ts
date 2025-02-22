import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.meituan.android.upgrade.ui.',
        'com.meituan.android.upgrade.UpgradeDialogActivity',
        'com.meituan.android.pt.homepage.activity.MainActivity',
      ],
      rules:
        'TextView[text^="新版本"] - Button[id="com.sankuai.meituan:id/btn_close"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12614559',
        'https://i.gkd.li/i/12673132',
        'https://i.gkd.li/i/13292635', //com.meituan.android.pt.homepage.activity.MainActivity
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '美团买菜-折扣弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=1] > ImageView[childCount=0][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12639717',
        },
        {
          key: 1,
          name: '美团买菜-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            '@ImageView < ViewGroup +3 ViewGroup > ViewGroup > TextView[text^="红包已到账"]',
          snapshotUrls: 'https://i.gkd.li/i/12892626',
        },
        {
          key: 2,
          name: '美团买菜-支付成功后-红包弹窗',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches:
            'TextView[text="恭喜你获得以下权益"] + ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/12646768',
        },
        {
          key: 3,
          name: '超市便利-弹窗广告',
          activityIds:
            'com.sankuai.waimai.store.poi.list.newp.PoiVerticalityHomeActivity',
          matches:
            'FrameLayout[childCount=2] > FrameLayout + FrameLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13694877',
        },
        {
          key: 4,
          name: '骑行卡-红包弹窗',
          activityIds: 'com.meituan.mmp.lib.HeraActivity',
          matches:
            'View[childCount=3] > View + TextView + TextView[text=""][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12739204',
        },
        {
          key: 5,
          name: '订单完成后的红包弹窗',
          quickFind: true,
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
          matches: '@ImageView[clickable=true] - * >3 [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/i/13695703',
        },
        {
          key: 6,
          name: '邀请好友提现弹窗',
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches:
            'WebView > View[childCount=11] > View[childCount=1] >2 View[childCount=2] > Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14964911',
        },
      ],
    },
    {
      key: 3,
      name: '订单调查弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      quickFind: true,
      rules: [
        {
          name: '我的页面-小调查',
          action: 'back',
          activityIds: 'com.meituan.retail.c.android.mrn.mrn.MallMrnModal',
          matches: 'TextView[text="小调查"]',
          snapshotUrls: 'https://i.gkd.li/i/12639723',
        },
        {
          name: '订单详情页匿名调查',
          action: 'back',
          activityIds:
            'com.sankuai.waimai.bussiness.order.detail.WMOrderDetailActivity',
          matches: '[id="com.sankuai.meituan:id/questionnaireTitle"]',
          snapshotUrls: 'https://i.gkd.li/i/13682336',
        },
      ],
    },
    {
      key: 4,
      name: '首页右侧抽奖小广告',
      activityIds: [
        'com.meituan.android.pt.homepage.activity.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: 'FrameLayout > @ImageView + ImageView[desc="资质与规则"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12639815',
        'https://i.gkd.li/i/12639734',
      ],
    },
    {
      key: 7,
      name: '定位提示',
      desc: '首页/外卖界面-【打开位置开关弹窗】-点击右侧x关闭',
      activityIds: [
        'com.meituan.android.pt.homepage.activity.MainActivity',
        'com.sankuai.waimai.business.page.homepage.TakeoutActivity',
        'com.sankuai.meituan.MPMainActivity',
      ],
      rules: [
        '[id ="com.sankuai.meituan:id/location_close"]',
        '[id ="com.sankuai.meituan:id/location_layer_close"]',
        '[text="定位服务尚未开启"] +3 TextView',
      ],
      snapshotUrls: [
        'https://i.gkd.li/i/12874657',
        'https://i.gkd.li/i/12910210',
        'https://i.gkd.li/i/12910211',
        'https://i.gkd.li/i/14473024',
      ],
    },
    {
      key: 8,
      name: '请求开启通知权限弹窗',
      desc: '点击跳过',
      quickFind: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches:
            '[id="com.sankuai.meituan:id/notify_open_hint_title"] +n [id="com.sankuai.meituan:id/later"]',
          snapshotUrls: 'https://i.gkd.li/i/13439134',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-新人返场特惠',
      desc: '点击右上角返回',
      activityIds: 'com.meituan.android.base.knb.KNBWebViewActivity',
      matchTime: 10000,
      rules: '[id="shareNav"] > [text=""]',
      snapshotUrls: 'https://i.gkd.li/i/13800691',
    },
    {
      key: 11,
      name: '全屏广告-视频页广告弹窗',
      desc: '点击X',
      rules: [
        {
          key: 0,
          name: '签到弹窗',
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches: 'ViewGroup[childCount=17] > ImageView[index=5]',
          snapshotUrls: 'https://i.gkd.li/i/14033982',
        },
        {
          key: 1,
          name: '看视频领现金弹窗',
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches:
            '@ImageView[visibleToUser=true] - ViewGroup[childCount=3] [text="看视频继续领现金"]',
          snapshotUrls: 'https://i.gkd.li/i/14034073',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-付款后自动点击完成',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds:
            'com.sankuai.waimai.platform.machpro.container.WMMPActivity',
          matches:
            '[vid="mach_pro_root"] ViewGroup[childCount=3] > [text="完成"]',
          exampleUrls:
            'https://m.gkd.li/57941037/257a3a0d-966b-4c16-89d9-abf9acaef9a9',
          snapshotUrls: 'https://i.gkd.li/i/14163717',
        },
        {
          key: 1,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches: '[text="支付成功"] >n [text="完成"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/14392284',
        },
      ],
    },
  ],
});
