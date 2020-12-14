(window.webpackJsonp = window.webpackJsonp || []).push([
  [
    51,
    53,
    57,
    64,
    65,
    66,
    67,
    68,
    69,
    104,
    108,
    112,
    114,
    116,
    118,
    120,
    122,
    126,
    128,
    130,
    132,
    134,
    136,
    138,
  ],
  {
    '+WcE': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'qrcode', name: '二维码', type: 'Upload', isCrop: !0, cropRate: 1 },
          { key: 'text', name: '文字', type: 'Text' },
          { key: 'color', name: '文字颜色', type: 'Color' },
          { key: 'fontSize', name: '文字大小', type: 'Number' },
        ],
        config: {
          qrcode: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://io.nainor.com/uploads/code_173e1705e0c.png',
            },
          ],
          text: '二维码',
          color: 'rgba(153,153,153,1)',
          fontSize: 14,
        },
      };
      t.default = o;
    },
    '1YRe': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '面积图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      t.default = o;
    },
    '3wTj': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'poster', name: '视频封面', type: 'Upload' },
          { key: 'url', name: '视频链接', type: 'Text' },
        ],
        config: {
          poster: [
            {
              uid: '001',
              name: 'image.png',
              status: 'done',
              url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
            },
          ],
          url: '',
        },
      };
      t.default = o;
    },
    '5pCo': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'text', name: '文字', type: 'Text' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'fontSize', name: '字体大小', type: 'Number' },
          {
            key: 'align',
            name: '对齐方式',
            type: 'Select',
            range: [
              { key: 'left', text: '左对齐' },
              { key: 'center', text: '居中对齐' },
              { key: 'right', text: '右对齐' },
            ],
          },
          { key: 'lineHeight', name: '行高', type: 'Number' },
        ],
        config: {
          text: '我是文本',
          color: 'rgba(60,60,60,1)',
          fontSize: 18,
          align: 'center',
          lineHeight: 2,
        },
      };
      t.default = o;
    },
    '691P': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
        a = e('RGNM'),
        r = {
          editData: [
            ...a.baseConfig,
            { key: 'translate', name: '文字偏移', type: 'Pos' },
            {
              key: 'align',
              name: '对齐方式',
              type: 'Select',
              range: [
                { key: 'left', text: '左对齐' },
                { key: 'center', text: '居中对齐' },
                { key: 'right', text: '右对齐' },
              ],
            },
            { key: 'titText', name: '标题文字', type: 'Text' },
            { key: 'titFontSize', name: '标题大小', type: 'Number' },
            { key: 'titColor', name: '标题颜色', type: 'Color' },
            {
              key: 'titFontWeight',
              name: '标题粗细',
              type: 'Select',
              range: [
                { key: '300', text: '300 x 300' },
                { key: '400', text: '400 x 400' },
                { key: '500', text: '500 x 500' },
                { key: '600', text: '600 x 600' },
              ],
            },
            { key: 'subTitText', name: '副标题文字', type: 'Text' },
            { key: 'subTitFontSize', name: '副标题大小', type: 'Number' },
            { key: 'subTitColor', name: '副标题颜色', type: 'Color' },
            {
              key: 'subTitFontWeight',
              name: '副标题粗细',
              type: 'Select',
              range: [
                { key: '300', text: '300 x 300' },
                { key: '400', text: '400 x 400' },
                { key: '500', text: '500 x 500' },
                { key: '600', text: '600 x 600' },
              ],
            },
            { key: 'imgUrl', name: '上传图片', type: 'Upload', isCrop: !1 },
            { key: 'round', name: '圆角', type: 'Number' },
          ],
          config: Object(o.a)(
            {
              translate: [0, 0],
              align: 'center',
              titText: '',
              titFontSize: 20,
              titColor: 'rgba(0,0,0,1)',
              titFontWeight: '400',
              subTitText: '',
              subTitFontSize: 16,
              subTitColor: 'rgba(0,0,0,1)',
              subTitFontWeight: '400',
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://io.nainor.com/uploads/bg_174e470dc22.png',
                },
              ],
              round: 0,
            },
            a.baseDefault,
          ),
        };
      t.default = r;
    },
    '94Fo': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
        a = e('RGNM'),
        r = {
          editData: [
            ...a.baseConfig,
            { key: 'bgColor', name: '背景色', type: 'Color' },
            { key: 'height', name: '高度', type: 'Number' },
            { key: 'logo', name: 'logo', type: 'Upload', isCrop: !0, cropRate: 1e3 / 618 },
            { key: 'logoText', name: 'logo文字', type: 'Text' },
            { key: 'color', name: '文字颜色', type: 'Color' },
            { key: 'fontSize', name: '文字大小', type: 'Number' },
          ],
          config: Object(o.a)(
            {
              bgColor: 'rgba(0,0,0,1)',
              logo: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://io.nainor.com/uploads/3_1740be8a482.png',
                },
              ],
              logoText: '页头Header',
              fontSize: 20,
              color: 'rgba(255,255,255,1)',
              height: 50,
            },
            a.baseDefault,
          ),
        };
      t.default = r;
    },
    EEmK: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          {
            key: 'theme',
            name: '主题',
            type: 'Select',
            range: [
              { key: 'success', text: '成功' },
              { key: 'warning', text: '警告' },
              { key: 'danger', text: '危险' },
            ],
          },
          {
            key: 'shape',
            name: '形状',
            type: 'Radio',
            range: [
              { key: 'circle', text: '圆形' },
              { key: 'line', text: '线形' },
              { key: 'semi-circle', text: '半圆形' },
            ],
          },
          { key: 'size', name: '大小', type: 'Number' },
          { key: 'percent', name: '进度值', type: 'Number', range: [0, 100] },
          { key: 'strokeWidth', name: '线条粗细', type: 'Number' },
        ],
        config: { theme: 'success', shape: 'circle', size: 200, percent: 30, strokeWidth: 10 },
      };
      t.default = o;
    },
    Eyt2: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
        a = e('RGNM'),
        r = {
          editData: [
            ...a.baseConfig,
            { key: 'bgColor', name: '背景色', type: 'Color' },
            { key: 'height', name: '高度', type: 'Number' },
            { key: 'text', name: '文字', type: 'Text' },
            { key: 'fontSize', name: '字体大小', type: 'Number' },
            { key: 'color', name: '文字颜色', type: 'Color' },
            {
              key: 'align',
              name: '对齐方式',
              type: 'Select',
              range: [
                { key: 'left', text: '左对齐' },
                { key: 'center', text: '居中对齐' },
                { key: 'right', text: '右对齐' },
              ],
            },
          ],
          config: Object(o.a)(
            {
              bgColor: 'rgba(0,0,0,1)',
              text: '页脚Footer',
              color: 'rgba(255,255,255,1)',
              align: 'center',
              fontSize: 16,
              height: 48,
            },
            a.baseDefault,
          ),
        };
      t.default = r;
    },
    FSN0: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '柱状图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
          ],
        },
      };
      t.default = o;
    },
    ForS: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '饼图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      t.default = o;
    },
    MfVi: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'bgColor', name: '背景色', type: 'Color' },
          { key: 'height', name: '高度', type: 'Number' },
          { key: 'text', name: '文字', type: 'Text' },
          { key: 'color', name: '文字颜色', type: 'Color' },
          { key: 'fontSize', name: '文字大小', type: 'Number' },
        ],
        config: {
          bgColor: 'rgba(255,255,255,1)',
          text: '',
          fontSize: 16,
          color: 'rgba(210,210,210,1)',
          height: 30,
        },
      };
      t.default = o;
    },
    'Ps1+': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
        a = e('RGNM'),
        r = {
          editData: [
            ...a.baseConfig,
            { key: 'sourceData', name: '数据源', type: 'DataList', cropRate: 1 },
            { key: 'round', name: '图片圆角', type: 'Number' },
            {
              key: 'imgSize',
              name: '图片大小',
              type: 'Select',
              range: [
                { key: '60', text: '60 x 60' },
                { key: '80', text: '80 x 80' },
                { key: '100', text: '100 x 100' },
                { key: '120', text: '120 x 120' },
                { key: '150', text: '150 x 150' },
              ],
            },
            { key: 'fontSize', name: '文字大小', type: 'Number' },
            { key: 'color', name: '文字颜色', type: 'Color' },
          ],
          config: Object(o.a)(
            {
              sourceData: [
                {
                  id: '1',
                  title: '趣谈小课',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '001',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
                    },
                  ],
                },
                {
                  id: '2',
                  title: '趣谈小课',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '002',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
                    },
                  ],
                },
              ],
              round: 0,
              imgSize: '80',
              fontSize: 16,
              color: 'rgba(153,153,153,1)',
            },
            a.baseDefault,
          ),
        };
      t.default = r;
    },
    RGNM: function(n, t, e) {
      'use strict';
      e.r(t),
        e.d(t, 'baseConfig', function() {
          return o;
        }),
        e.d(t, 'baseDefault', function() {
          return a;
        });
      var o = [
          { key: 'baseTop', name: '纵向位移', type: 'Number' },
          { key: 'baseLeft', name: '横向位移', type: 'Number' },
          { key: 'baseRadius', name: '圆角', type: 'Number' },
          { key: 'baseRotate', name: '旋转', type: 'Number' },
          { key: 'baseScale', name: '缩放', type: 'Number' },
          { key: 'baseHeight', name: '容器高度%', type: 'Number' },
          { key: 'baseWidth', name: '容器宽度%', type: 'Number' },
        ],
        a = {
          baseTop: 0,
          baseLeft: 0,
          baseRadius: 0,
          baseRotate: 0,
          baseScale: 100,
          baseHeight: 100,
          baseWidth: 100,
        };
    },
    'Ywj+': function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'text', name: '文本', type: 'Text' },
          { key: 'speed', name: '滚动速度', type: 'Number' },
          {
            key: 'theme',
            name: '主题',
            type: 'Select',
            range: [
              { key: 'default', text: '默认' },
              { key: 'warning', text: '警告' },
              { key: 'primary', text: '主要' },
              { key: 'success', text: '成功' },
              { key: 'danger', text: '危险' },
            ],
          },
          { key: 'isClose', name: '是否可关闭', type: 'Switch' },
        ],
        config: { text: '通知栏: 趣谈前端上线啦', speed: 50, theme: 'warning', isClose: !1 },
      };
      t.default = o;
    },
    aMux: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('3wTj'),
        a = { Video: o.default };
      t.default = a;
    },
    ae55: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('FSN0'),
        a = e('zm62'),
        r = e('ForS'),
        m = e('1YRe'),
        i = e('EEmK'),
        l = {
          Chart: o.default,
          Line: a.default,
          Pie: r.default,
          Area: m.default,
          XProgress: i.default,
        };
      t.default = l;
    },
    e8Ny: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
        a = e('RGNM'),
        r = {
          editData: [
            ...a.baseConfig,
            {
              key: 'direction',
              name: '方向',
              type: 'Radio',
              range: [
                { key: 'down', text: '从上到下' },
                { key: 'left', text: '从左到右' },
              ],
            },
            { key: 'swipeable', name: '是否可拖拽', type: 'Switch' },
            { key: 'autoPlay', name: '是否自动播放', type: 'Switch' },
            { key: 'imgList', name: '图片列表', type: 'DataList' },
          ],
          config: Object(o.a)(
            {
              direction: 'left',
              swipeable: !1,
              autoPlay: !1,
              imgList: [
                {
                  id: '1',
                  title: '趣谈小课1',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '001',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/1_1740bd7c3dc.png',
                    },
                  ],
                },
                {
                  id: '2',
                  title: '趣谈小课1',
                  desc: '致力于打造优质小课程',
                  link: 'xxxxx',
                  imgUrl: [
                    {
                      uid: '001',
                      name: 'image.png',
                      status: 'done',
                      url: 'http://io.nainor.com/uploads/2_1740bd8d525.png',
                    },
                  ],
                },
              ],
            },
            a.baseDefault,
          ),
        };
      t.default = r;
    },
    mjeU: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'fontSize', name: '标题大小', type: 'Number' },
          { key: 'titColor', name: '标题颜色', type: 'Color' },
          {
            key: 'titWeight',
            name: '标题粗细',
            type: 'Select',
            range: [
              { key: '300', text: '300 x 300' },
              { key: '400', text: '400 x 400' },
              { key: '500', text: '500 x 500' },
              { key: '600', text: '600 x 600' },
            ],
          },
          { key: 'bgColor', name: '背景色', type: 'Color' },
          { key: 'btnColor', name: '按钮颜色', type: 'Color' },
          { key: 'btnTextColor', name: '按钮文本颜色', type: 'Color' },
          { key: 'api', name: '表单Api地址', type: 'Text' },
          { key: 'formControls', name: '表单控件', type: 'FormItems' },
        ],
        config: {
          title: '表单定制组件',
          fontSize: 18,
          titColor: 'rgba(60,60,60,1)',
          titWeight: '400',
          bgColor: 'rgba(255,255,255,1)',
          btnColor: 'rgba(20,54,226,100)',
          btnTextColor: 'rgba(255,255,255,1)',
          api: '',
          formControls: [
            { id: '1', type: 'Text', label: '姓名', placeholder: '请输入姓名' },
            { id: '2', type: 'Number', label: '年龄', placeholder: ' 请输入年龄' },
            {
              id: '4',
              type: 'MySelect',
              label: '爱好',
              options: [
                { label: '篮球', value: '1' },
                { label: '乒乓球', value: '2' },
                { label: '健身', value: '3' },
              ],
            },
          ],
        },
      };
      t.default = o;
    },
    pRIO: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'text', name: '文字', type: 'TextArea' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'fontSize', name: '字体大小', type: 'Number' },
          { key: 'indent', name: '首行缩进', type: 'Number', range: [0, 100] },
          {
            key: 'textAlign',
            name: '对齐方式',
            type: 'Select',
            range: [
              { key: 'left', text: '左对齐' },
              { key: 'center', text: '居中对齐' },
              { key: 'right', text: '右对齐' },
            ],
          },
          { key: 'lineHeight', name: '行高', type: 'Number', step: 0.1 },
        ],
        config: {
          text: '我是长文本有一段故事，dooring可视化编辑器无限可能，赶快来体验吧，骚年们，奥利给~',
          color: 'rgba(60,60,60,1)',
          fontSize: 14,
          indent: 20,
          lineHeight: 1.8,
          textAlign: 'left',
        },
      };
      t.default = o;
    },
    pv5J: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('k1fw'),
        a = e('yIYF'),
        r = e('aMux'),
        m = e('ae55'),
        i = Object(o.a)(Object(o.a)(Object(o.a)({}, a.default), r.default), m.default);
      t.default = i;
    },
    uaKF: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'color', name: '颜色', type: 'Color' },
          { key: 'size', name: '大小', type: 'Number' },
          { key: 'spin', name: '旋转动画', type: 'Switch' },
          {
            key: 'type',
            name: '图标类型',
            type: 'CardPicker',
            icons: [
              'AccountBookTwoTone',
              'AlertTwoTone',
              'ApiTwoTone',
              'AppstoreTwoTone',
              'AudioTwoTone',
              'BankTwoTone',
              'BellTwoTone',
              'BookTwoTone',
              'BugTwoTone',
              'BuildTwoTone',
              'BulbTwoTone',
              'CalculatorTwoTone',
              'CalendarTwoTone',
              'CameraTwoTone',
              'CarTwoTone',
              'CarryOutTwoTone',
              'CiCircleTwoTone',
              'CloudTwoTone',
              'CodeTwoTone',
              'CrownTwoTone',
              'CustomerServiceTwoTone',
              'DollarCircleTwoTone',
              'EnvironmentTwoTone',
              'ExperimentTwoTone',
              'FireTwoTone',
              'GiftTwoTone',
              'InsuranceTwoTone',
              'LikeTwoTone',
              'LockTwoTone',
              'MailTwoTone',
              'MessageTwoTone',
              'PhoneTwoTone',
              'PictureTwoTone',
              'PlaySquareTwoTone',
              'RedEnvelopeTwoTone',
              'ShopTwoTone',
              'TrademarkCircleTwoTone',
              'StarTwoTone',
              'SafetyCertificateTwoTone',
              'SettingTwoTone',
              'RocketTwoTone',
            ],
          },
        ],
        config: { color: 'rgba(74,144,226,1)', size: 36, spin: !1, type: 'CarTwoTone' },
      };
      t.default = o;
    },
    v7n1: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'tabs', name: '项目类别', type: 'MutiText' },
          { key: 'activeColor', name: '激活颜色', type: 'Color' },
          { key: 'color', name: '文字颜色', type: 'Color' },
          { key: 'fontSize', name: '文字大小', type: 'Number' },
          { key: 'imgSize', name: '图片大小', type: 'Number' },
          { key: 'sourceData', name: '数据源', type: 'DataList' },
        ],
        config: {
          tabs: ['类别一', '类别二'],
          color: 'rgba(153,153,153,1)',
          activeColor: 'rgba(0,102,204,1)',
          fontSize: 16,
          imgSize: 100,
          sourceData: [
            {
              id: '1',
              title: '趣谈小课1',
              desc: '致力于打造优质小课程',
              link: 'xxxxx',
              type: 0,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
                },
              ],
            },
            {
              id: '2',
              title: '趣谈小课2',
              desc: '致力于打造优质小课程',
              link: 'xxxxx',
              type: 0,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://io.nainor.com/uploads/2_1740c7033a9.png',
                },
              ],
            },
            {
              id: '3',
              title: '趣谈小课3',
              desc: '致力于打造优质小课程',
              link: 'xxxxx',
              type: 1,
              imgUrl: [
                {
                  uid: '001',
                  name: 'image.png',
                  status: 'done',
                  url: 'http://io.nainor.com/uploads/1_1740c6fbcd9.png',
                },
              ],
            },
          ],
        },
      };
      t.default = o;
    },
    yIYF: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('e8Ny'),
        a = e('Eyt2'),
        r = e('mjeU'),
        m = e('94Fo'),
        i = e('uaKF'),
        l = e('MfVi'),
        y = e('691P'),
        u = e('Ps1+'),
        d = e('pRIO'),
        s = e('Ywj+'),
        p = e('+WcE'),
        c = e('v7n1'),
        g = e('5pCo'),
        f = {
          Carousel: o.default,
          Footer: a.default,
          Form: r.default,
          Header: m.default,
          Icon: i.default,
          Image: y.default,
          List: u.default,
          LongText: d.default,
          WhiteTpl: l.default,
          Notice: s.default,
          Qrcode: p.default,
          Tab: c.default,
          Text: g.default,
        };
      t.default = f;
    },
    zm62: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = {
        editData: [
          { key: 'title', name: '标题', type: 'Text' },
          { key: 'size', name: '标题大小', type: 'Number' },
          { key: 'color', name: '标题颜色', type: 'Color' },
          { key: 'paddingTop', name: '上边距', type: 'Number' },
          { key: 'data', name: '数据源', type: 'Table' },
        ],
        config: {
          title: '折线图',
          size: 14,
          color: 'rgba(0,0,0,1)',
          paddingTop: 10,
          data: [
            { name: 'A', value: 20 },
            { name: 'B', value: 60 },
            { name: 'C', value: 20 },
            { name: 'D', value: 80 },
          ],
        },
      };
      t.default = o;
    },
  },
]);

//# sourceMappingURL=51.js.map
