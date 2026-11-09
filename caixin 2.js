const store = typeof $persistentStore !== 'undefined' ? $persistentStore : null;
const raw = store ? store.read('YQC_PREMIUM') : null;
const parsed = raw ? (()=>{ try { return JSON.parse(raw); } catch(e) { return null; } })() : null;
console.log('=== 诊断 ===');
console.log('原始值长度: ' + (raw ? raw.length : 'null'));
console.log('解析后字段: ' + (parsed ? Object.keys(parsed).join(',') : 'null'));
console.log('SECRET_KEY 存在: ' + (parsed && parsed.SECRET_KEY ? '是(长度'+parsed.SECRET_KEY.length+')' : '否'));
$done({});