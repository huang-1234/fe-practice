let Watcher = require('./watcher')
function Compile(el, vm) {
  this.vm = vm;
  this.el = document.querySelector(el);
  this.fragment = null;
  this.init();
}

Compile.prototype = {
  init: function () {
    if (this.el) {
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    } else {
      console.log('Dom元素不存在');
    }
  },
  nodeToFragment: function (el) {
    let fragment = document.createDocumentFragment();
    let child = el.firstChild;
    while (child) {
      // 将Dom元素移入fragment中
      fragment.appendChild(child);
      child = el.firstChild
    }
    return fragment;
  },
  compileElement: function (el) {
    let childNodes = el.childNodes;
    let self = this;
    [].slice.call(childNodes).forEach(function (node) {
      let reg = /\{\{(.*)\}\}/;
      let text = node.textContent;

      if (self.isElementNode(node)) {
        self.compile(node);
      } else if (self.isTextNode(node) && reg.test(text)) {
        self.compileText(node, reg.exec(text)[1]);
      }

      if (node.childNodes && node.childNodes.length) {
        self.compileElement(node);
      }
    });
  },
  compile: function (node) {
    let nodeAttrs = node.attributes;
    let self = this;
    Array.prototype.forEach.call(nodeAttrs, function (attr) {
      let attrName = attr.name;
      if (self.isDirective(attrName)) {
        let exp = attr.value;
        let dir = attrName.substring(2);
        if (self.isEventDirective(dir)) {  // 事件指令
          self.compileEvent(node, self.vm, exp, dir);
        } else {  // v-model 指令
          self.compileModel(node, self.vm, exp, dir);
        }
        node.removeAttribute(attrName);
      }
    });
  },
  compileText: function (node, exp) {
    let self = this;
    let initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, function (value) {
      self.updateText(node, value);
    });
  },
  compileEvent: function (node, vm, exp, dir) {
    let eventType = dir.split(':')[1];
    let cb = vm.methods && vm.methods[exp];

    if (eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false);
    }
  },
  compileModel: function (node, vm, exp, dir) {
    let self = this;
    let val = this.vm[exp];
    this.modelUpdater(node, val);
    new Watcher(this.vm, exp, function (value) {
      self.modelUpdater(node, value);
    });

    node.addEventListener('input', function (e) {
      let newValue = e.target.value;
      if (val === newValue) {
        return;
      }
      self.vm[exp] = newValue;
      val = newValue;
    });
  },
  updateText: function (node, value) {
    node.textContent = typeof value == 'undefined' ? '' : value;
  },
  modelUpdater: function (node, value, oldValue) {
    node.value = typeof value == 'undefined' ? '' : value;
  },
  isDirective: function (attr) {
    return attr.indexOf('v-') == 0;
  },
  isEventDirective: function (dir) {
    return dir.indexOf('on:') === 0;
  },
  isElementNode: function (node) {
    return node.nodeType == 1;
  },
  isTextNode: function (node) {
    return node.nodeType == 3;
  }
}