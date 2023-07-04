// 本模块提供对项目表单数据进行解析加工，以便于服务器进行处理的方法

// 通用的参数检查函数，以确保输入的参数是一个合法的数组，否则返回false
function checkParams(params) {
  const unacceptedTypes = ['string', 'undefined', 'boolean', 'number', 'function', 'symbol']
  const typeofParam = typeof params
  // 如果参数不是符合要求的数据类型（数组），返回空对象
  if (unacceptedTypes.some(item => item === typeofParam)) return false
  // 如果对象长度为0，返回空对象
  if (Object.keys(params).length <= 0) return false
  return true
}

// 将用户表单搜集过来的数组，改造成可以与数据库字段对应的对象
// 注意系统默认不提供zfather的选择，所以表单数据第0个元素为1father
export function handleItemUnits(units = [], pre = '', mode = '=') {
  if (!checkParams(units)) return {}
  const params = {}
  let key = 0
  for (const index in units) {
    if (!units[index]) continue
    key = parseInt(index) + 1 + 'father'
    params[key] = { value: units[index], pre }
    if (mode) {
      params[key].mode = mode
    }
  }
  return params
}

export function handleCnIndustry(industries, pre = '', mode = '=') {
  if (!checkParams(industries)) return {}
  const params = {}
  const fieldMaps = ['IndustryCat1', 'IndustryCat2', 'IndustryCatDetail']
  for (const index in industries) {
    if (industries[index])params[fieldMaps[index]] = { value: industries[index], mode, pre }
  }
  return params
}

// 湖北51020产业体系，只要第二个维度的数据
export function handleHb51020(hbs, pre = '', mode = '=') {
  if (!checkParams(hbs)) return {}
  if (Object.keys(hbs).length < 2) return {}
  return { hb51020: { value: hbs[1], mode, pre }}
}

// 黄冈645产业体系，只要第1个维度的数据
export function handleHg645(hgs, pre = '', mode = '=') {
  if (!checkParams(hgs)) return {}
  if (Object.keys(hgs).length < 1) return {}
  return { hg645: { value: hgs[0], mode, pre }}
}

export function handleInvestorFrom(froms, pre = '', mode = '=') {
  if (!checkParams(froms)) return {}
  const params = {}
  const fieldMaps = ['InvestorProvince', 'InvestorCity']
  for (const index in froms) {
    if (froms[index])params[fieldMaps[index]] = { value: froms[index], mode, pre }
  }
  return params
}

