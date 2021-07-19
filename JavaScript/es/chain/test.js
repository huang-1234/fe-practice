
const numberArr = {
  type: "FcRow",
  children: [
    {
      type: "col",
      props: {
        span: 24,
        offset: 0,
        push: 0,
        pull: 0
      },
      children: [
        {
          type: "input",
          field: "1",
          title: "项序号",
          info: "",
          props: {
            type: "number"
          },
          _fc_drag_tag: "input",
          hidden: false,
          display: true
        },
        {
          type: "input",
          field: "2",
          title: "   ",
          info: "",
          props: {
            type: "number"
          },
          _fc_drag_tag: "input",
          hidden: false,
          display: true
        },
        {
          type: "input",
          field: "3",
          title: "  ",
          info: "",
          props: {
            type: "number"
          },
          _fc_drag_tag: "input",
          hidden: false,
          display: true
        },
        {
          type: "FcRow",
          children: [
            {
              type: "col",
              props: {
                span: 12,
                offset: 4,
                push: 0,
                pull: 0
              },
              children: [
                {
                  type: "el-button",
                  children: [
                    "新增"
                  ],
                  _fc_drag_tag: "el-button",
                  hidden: false,
                  display: true
                }
              ],
              _fc_drag_tag: "col",
              hidden: false,
              display: true
            }
          ],
          _fc_drag_tag: "row",
          hidden: false,
          display: true
        }
      ],
      _fc_drag_tag: "col",
      hidden: false,
      display: true
    }
  ],
  _fc_drag_tag: "row",
  hidden: false,
  display: true
}


const numberArr2 = {
  "type": "FcRow",
  "children": [
    {
      "type": "col",
      "props": {
        "span": 24,
        "offset": 0,
        "push": 0,
        "pull": 0
      },
      "children": [
        {
          "type": "input",
          "field": "1",
          "title": "项序号",
          "info": "",
          "props": {
            "type": "number"
          },
          "_fc_drag_tag": "input",
          "hidden": false,
          "display": true
        },
        {
          "type": "input",
          "field": "2",
          "title": "   ",
          "info": "",
          "props": {
            "type": "number"
          },
          "_fc_drag_tag": "input",
          "hidden": false,
          "display": true
        },
        {
          "type": "input",
          "field": "3",
          "title": "  ",
          "info": "",
          "props": {
            "type": "number",
            "loading": false,
            "size": "mini",
            "disabled": false,
            "icon": "addItem"
          },
          "_fc_drag_tag": "input",
          "hidden": false,
          "display": true
        },
        {
          "type": "FcRow",
          "children": [
            {
              "type": "col",
              "props": {
                "span": 12,
                "offset": 4,
                "push": 0,
                "pull": 0
              },
              "children": [
                {
                  "type": "el-button",
                  "children": [
                    "新增"
                  ],
                  "_fc_drag_tag": "el-button",
                  "hidden": false,
                  "display": true
                }
              ],
              "_fc_drag_tag": "col",
              "hidden": false,
              "display": true
            }
          ],
          "_fc_drag_tag": "row",
          "hidden": false,
          "display": true
        }
      ],
      "_fc_drag_tag": "col",
      "hidden": false,
      "display": true
    }
  ],
  "_fc_drag_tag": "row",
  "hidden": false,
  "display": true
}

// console.log(numberArr2.children[0].type);

const componentStack = new Array();
console.log(componentStack);