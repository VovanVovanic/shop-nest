export const onlyText = (_string: string, limit: null | number = null): string => {
 let res = _string
  .replace(/<[^>]+>/g, '')
  .replace(/&[^;]+./g, ' ')
  .replace(
   /([\u 2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,''
 )
 
 if(limit) res = res.slice(0,limit) + '...'
 return res
}