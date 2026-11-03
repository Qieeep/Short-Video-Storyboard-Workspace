/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "A06",
  "slug": "storyboard-desk",
  "name": "短视频分镜工作台",
  "desc": "按镜头整理画面、口播、素材与时长，导出分镜表和素材清单。",
  "fields": [
    {
      "key": "project",
      "label": "视频项目",
      "type": "text",
      "value": "水杯20秒展示"
    },
    {
      "key": "target",
      "label": "目标总时长（秒）",
      "type": "number",
      "value": 20,
      "min": 1
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "镜头清单",
      "columns": [
        {
          "key": "scene",
          "label": "镜头内容",
          "type": "textarea"
        },
        {
          "key": "voice",
          "label": "口播/字幕",
          "type": "textarea"
        },
        {
          "key": "asset",
          "label": "所需素材",
          "type": "text"
        },
        {
          "key": "seconds",
          "label": "秒数",
          "type": "number"
        }
      ],
      "rows": [
        {
          "scene": "手拿水杯出门",
          "voice": "随身带走一杯温暖",
          "asset": "手持近景",
          "seconds": 5
        },
        {
          "scene": "杯口与杯身细节",
          "voice": "简洁外观，方便携带",
          "asset": "商品细节照片",
          "seconds": 10
        },
        {
          "scene": "产品定格",
          "voice": "选一款你的日常搭档",
          "asset": "成品主图",
          "seconds": 5
        }
      ]
    }
  ],
  "dirname": "storyboard-desk",
  "example": {
    "_files": {},
    "project": "水杯20秒展示",
    "target": 20,
    "items": [
      {
        "scene": "手拿水杯出门",
        "voice": "随身带走一杯温暖",
        "asset": "手持近景",
        "seconds": 5
      },
      {
        "scene": "杯口与杯身细节",
        "voice": "简洁外观，方便携带",
        "asset": "商品细节照片",
        "seconds": 10
      },
      {
        "scene": "产品定格",
        "voice": "选一款你的日常搭档",
        "asset": "成品主图",
        "seconds": 5
      }
    ]
  },
  "inputTitle": "镜头安排",
  "outputTitle": "分镜预览",
  "action": "生成分镜表"
};
