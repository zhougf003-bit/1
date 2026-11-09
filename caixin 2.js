const raw = $persistentStore.read('YQC_PREMIUM');
let parsed = null;
try { parsed = raw ? JSON.parse(raw) : null; } catch(e) {}
const key = parsed && parsed.SECRET_KEY;
console.log('=== 诊断 ===');
console.log('raw 存在: ' + (raw ? 'yes' : 'no'));
console.log('SECRET_KEY: ' + (key ? ('yes, len=' + key.length) : 'no'));
console.log('POLICY_GROUP: ' + (parsed && parsed.POLICY_GROUP ? parsed.POLICY_GROUP : 'no'));
$done({});
