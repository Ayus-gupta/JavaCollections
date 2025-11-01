// LIST (JS array)
const demoList = [];
function renderList(){ document.getElementById('listView').textContent = JSON.stringify(demoList); }
function setListResult(msg){ document.getElementById('listResult').textContent = msg; }
function listAdd(){ const v=document.getElementById('listInput').value; demoList.push(parseValue(v)); renderList(); setListResult('add(e) -> added'); }
function listAddAt(){ const i=parseInt(document.getElementById('listIndex').value); const v=document.getElementById('listInput').value; if(isNaN(i)||i<0||i>demoList.length){ setListResult('invalid index'); return;} demoList.splice(i,0,parseValue(v)); renderList(); setListResult('add(index,e) -> inserted at '+i); }
function listGet(){ const i=parseInt(document.getElementById('listIndex').value); if(isNaN(i)||i<0||i>=demoList.length){ setListResult('IndexOutOfBoundsException (simulated)'); return;} setListResult('get('+i+') -> '+JSON.stringify(demoList[i])); }
function listSet(){ const i=parseInt(document.getElementById('listIndex').value); const v=document.getElementById('listInput').value; if(isNaN(i)||i<0||i>=demoList.length){ setListResult('IndexOutOfBoundsException (simulated)'); return;} const old=demoList[i]; demoList[i]=parseValue(v); renderList(); setListResult('set('+i+') replaced '+JSON.stringify(old)); }
function listRemoveIndex(){ const i=parseInt(document.getElementById('listIndex').value); if(isNaN(i)||i<0||i>=demoList.length){ setListResult('IndexOutOfBoundsException (simulated)'); return;} const removed=demoList.splice(i,1); renderList(); setListResult('remove(index) -> removed '+JSON.stringify(removed[0])); }
function listRemoveValue(){ const v=parseValue(document.getElementById('listInput').value); const idx=demoList.indexOf(v); if(idx===-1){ setListResult('Element not found'); return;} demoList.splice(idx,1); renderList(); setListResult('remove(object) -> removed at index '+idx); }
function listContains(){ const v=parseValue(document.getElementById('listInput').value); setListResult('contains -> '+(demoList.indexOf(v)!==-1)); }
function listIndexOf(){ const v=parseValue(document.getElementById('listInput').value); setListResult('indexOf -> '+demoList.indexOf(v)); }
function listSize(){ setListResult('size() -> '+demoList.length); }
function listClear(){ demoList.length=0; renderList(); setListResult('cleared'); }

// MAP (JS Map)
const demoMap = new Map();
function renderMap(){ const obj={}; for(const [k,v] of demoMap.entries()) obj[k]=v; document.getElementById('mapView').textContent = JSON.stringify(obj); }
function setMapResult(msg){ document.getElementById('mapResult').textContent = msg; }
function mapPut(){ const k=document.getElementById('mapKey').value; const v=document.getElementById('mapVal').value; if(k===''){ setMapResult('key required'); return;} const had=demoMap.has(k); demoMap.set(k,v); renderMap(); setMapResult('put -> '+(had? 'replaced':'added')+' key '+k); }
function mapGet(){ const k=document.getElementById('mapKey').value; setMapResult('get -> '+(demoMap.has(k)?demoMap.get(k):'null')); }
function mapRemove(){ const k=document.getElementById('mapKey').value; const ok=demoMap.delete(k); renderMap(); setMapResult('remove -> '+ok); }
function mapContainsKey(){ const k=document.getElementById('mapKey').value; setMapResult('containsKey -> '+demoMap.has(k)); }
function mapContainsVal(){ const v=document.getElementById('mapVal').value; let found=false; for(const val of demoMap.values()){ if(val===v){ found=true; break; }} setMapResult('containsValue -> '+found); }
function mapKeySet(){ setMapResult('keySet -> ['+Array.from(demoMap.keys()).join(', ')+']'); }
function mapValues(){ setMapResult('values -> ['+Array.from(demoMap.values()).join(', ')+']'); }

// QUEUE (JS array used as FIFO queue)
const demoQueue = [];
function renderQueue(){ document.getElementById('queueView').textContent = JSON.stringify(demoQueue); }
function setQueueResult(msg){ document.getElementById('queueResult').textContent = msg; }
function queueOffer(){ const v=document.getElementById('queueInput').value; if(v===''){ setQueueResult('value required'); return;} demoQueue.push(parseValue(v)); renderQueue(); setQueueResult('offer -> true'); }
function queuePoll(){ if(demoQueue.length===0){ setQueueResult('poll -> null'); return;} const val=demoQueue.shift(); renderQueue(); setQueueResult('poll -> '+JSON.stringify(val)); }
function queueRemove(){ if(demoQueue.length===0){ setQueueResult('remove -> throws NoSuchElementException (simulated)'); return;} const val=demoQueue.shift(); renderQueue(); setQueueResult('remove -> '+JSON.stringify(val)); }
function queuePeek(){ setQueueResult('peek -> '+(demoQueue.length? JSON.stringify(demoQueue[0]): 'null')); }
function queueElement(){ if(demoQueue.length===0){ setQueueResult('element -> throws NoSuchElementException (simulated)'); return;} setQueueResult('element -> '+JSON.stringify(demoQueue[0])); }
function queueSize(){ setQueueResult('size -> '+demoQueue.length); }
function queueClear(){ demoQueue.length=0; renderQueue(); setQueueResult('cleared'); }

// utility
function parseValue(s){ if(s==='') return s; if(!isNaN(s) && s.trim()!=='') return Number(s); return s; }

// initial render
renderList(); renderMap(); renderQueue();