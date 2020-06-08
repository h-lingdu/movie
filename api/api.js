import request from '../utils/request'

export function getHot(){
    return request({
        url:'in_theaters'
      })
}

export function getComingSoonData(){
  return request({
    url:'coming_soon'
  })
}
export function getTop250Data(){
  return request({
    url:'top250'
  })
}

export function getDetailData(obj){
  return request({
    url:`subject/${obj.id}`,
  })
}