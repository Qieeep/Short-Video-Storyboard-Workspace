/* 短视频分镜工作台: deterministic business rules. MIT License. */
(function(){
'use strict';
const H=typeof module==='object'&&module.exports?require('./common.js'):globalThis.OPC;
const {clone,esc,num,money,lines,choices,required,tableRows,metric,note,safeName,csv,parseCSV,day,today,unique,replaceTokens,documentHTML,crc32,zipBytes}=H;
const process=function process(d){
 let elapsed=0;const rows=tableRows(d).map((r,i)=>{const s=num(r.seconds,'镜头秒数',0.1),start=elapsed;elapsed+=s;return [i+1,start.toFixed(1)+'—'+elapsed.toFixed(1),s,r.scene,r.voice,r.asset];});const target=num(d.target,'目标秒数',1);
 return {metrics:[metric('镜头数',rows.length),metric('总时长（秒）',elapsed.toFixed(1)),metric('目标时长',target),metric('差额（秒）',(elapsed-target).toFixed(1))],columns:['镜号','时间段','秒数','画面','口播/字幕','素材'],rows,sections:[note('素材采购/拍摄清单',unique(tableRows(d).flatMap(r=>lines(r.asset))).map(x=>'□ '+x).join('\n'))],notes:elapsed>target?['总时长超出目标 '+(elapsed-target).toFixed(1)+' 秒。']:[]};
};
const api={process};
if(typeof module==='object'&&module.exports)module.exports=api;else globalThis.Core=api;
})();
