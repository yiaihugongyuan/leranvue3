// 提供一系列过滤器，将进展情况、产业等id转化为相对应的文本
import { getData } from '@/api/data'
import { SCCY, ML, DL } from '@/components/cnindustryselector/options'
import { objHaseKey } from '@/utils/index'
/**
 * 本函数从湖北51020产业体系id，得到相对应的名称，只返回第一行
 * @param {num} id
 * @returns {string}
 */
export async function getHb51020(id) {
  const i = {
    value: '',
    label: ''
  }
  const data = await getData('getHb51020', { id })
  if (data.meta.data.length) {
    return data.meta.data[0]
  } else { return i }
}

export function getSCCYName(id) {
  if (objHaseKey(SCCY, id)) return SCCY[id]
  else return ''
}

export function getMLName(id) {
  if (objHaseKey(ML, id)) return ML[id]
  else return ''
}

export function getDLName(id) {
  if (objHaseKey(DL, id)) return DL[id]
  else return ''
}

export function preventZero(p) {
  if (p !== '0') return p
  return ''
}

export function getInvstorRank(id) {
  let r = '其他'
  id = parseInt(id)
  const ranks = {
    0: '普通企业',
    1: '上市公司',
    2: '央企直接投资',
    3: '境外世界500强',
    4: '民营500强',
    5: '高新技术企业'
  }
  if (objHaseKey(ranks, id)) r = ranks[id]
  return r
}
