import Vue from 'vue'

function registerCompont (component) {
  Vue.component(component.name, component)
}

registerCompont(require('./TextEllipsis').default)
