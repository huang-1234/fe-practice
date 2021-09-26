const jsonDom = {
  "id": 1,
  "zIndex": 1,
  "children": [
    {
      "id": 2,
      "zIndex": 2
    },
    {
      "id": 3,
      "zIndex": 1,
      "children": [
        {
          "id": 4,
          "zIndex": 9
        }
      ]
    }
  ]
}
const dom = JSON.parse(jsonDom);
console.log(dom)


const jsonDom = {
  "id": 1,
  "zIndex": 1,
  "children": [
    {
      "id": 2,
      "zIndex": 2
    },
    {
      "id": 3,
      "zIndex": 2,
      "children": [
        {
          "id": 4,
          "zIndex": 3
        }
      ]
    }
  ]
}
2
4

const jsonDom = {
  "id": 1,
  "zIndex": 1,
  "children": [
    {
      "id": 2,
      "zIndex": 3,
      "children": [
        {
          "id": 4,
          "zIndex": 11
        }
      ]
    },
    {
      "id": 3,
      "zIndex": 3,
      "children": [
        {
          "id": 6,
          "zIndex": 9
        }
      ]
    }
  ]
}
4
6