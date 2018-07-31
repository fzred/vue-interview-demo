import axiosProvider from './axiosProvider'

const serviceName = '/demo-address/'

export function index () {
  return axiosProvider.post(serviceName + 'index')
}

export function create (params) {
  return axiosProvider.post(serviceName + 'create', params)
}

export function update (params) {
  return axiosProvider.post(serviceName + 'update', params)
}

export function remove (params) {
  return axiosProvider.post(serviceName + 'delete', params)
}
