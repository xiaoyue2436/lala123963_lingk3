/*
太平通App
抓包ecustomer.cntaiping
域名请求头里的API-TOKEN
或者x-ac-token-ticket 
二选一

格式：export cntaiping="token=eyJ0eXAiOiJKV1QiLCJhbGciOxxxxxxx"  多账号换行隔开

cron 32 5,36 8,12,18 * * ?

*/

const $ = new Env("太平通");
let envSplitor = ['\n']  //多账号隔开方式，默认换行可自定义

///////////////////////////////维护参数自行更换//////////////////////////////////
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; V2203A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4425 MMWEBSDK/20220805 Mobile Safari/537.36 MMWEBID/1571 MicroMessenger/8.0.27.2220(0x28001B37) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64'                    //默认UA
let helpid = []     //互助id[165067,165067,165067]英文逗号隔开


var version_='jsjiami.com.v7';const _0x2c597e=_0x1f45;(function(_0xf83422,_0x3a2cc1,_0x298cd1,_0x3f43c8,_0x158c78,_0x3d7ba0,_0x45651d){return _0xf83422=_0xf83422>>0x3,_0x3d7ba0='hs',_0x45651d='hs',function(_0x159ad9,_0x35f393,_0x5f0baf,_0x1ddc73,_0x53a245){const _0x3813cd=_0x1f45;_0x1ddc73='tfi',_0x3d7ba0=_0x1ddc73+_0x3d7ba0,_0x53a245='up',_0x45651d+=_0x53a245,_0x3d7ba0=_0x5f0baf(_0x3d7ba0),_0x45651d=_0x5f0baf(_0x45651d),_0x5f0baf=0x0;const _0x394e84=_0x159ad9();while(!![]&&--_0x3f43c8+_0x35f393){try{_0x1ddc73=parseInt(_0x3813cd(0x395,'8v32'))/0x1+-parseInt(_0x3813cd(0x209,'V6KU'))/0x2*(parseInt(_0x3813cd(0x203,'zqVO'))/0x3)+-parseInt(_0x3813cd(0x32a,'u%bk'))/0x4+parseInt(_0x3813cd(0x273,'LTtO'))/0x5+-parseInt(_0x3813cd(0x1f5,'zqVO'))/0x6*(parseInt(_0x3813cd(0x32e,'0ds1'))/0x7)+-parseInt(_0x3813cd(0x21a,'8V7*'))/0x8+parseInt(_0x3813cd(0x376,'*F13'))/0x9*(parseInt(_0x3813cd(0x367,'[OH1'))/0xa);}catch(_0xff873a){_0x1ddc73=_0x5f0baf;}finally{_0x53a245=_0x394e84[_0x3d7ba0]();if(_0xf83422<=_0x3f43c8)_0x5f0baf?_0x158c78?_0x1ddc73=_0x53a245:_0x158c78=_0x53a245:_0x5f0baf=_0x53a245;else{if(_0x5f0baf==_0x158c78['replace'](/[TMBALlGFwgUbRuYyr=]/g,'')){if(_0x1ddc73===_0x35f393){_0x394e84['un'+_0x3d7ba0](_0x53a245);break;}_0x394e84[_0x45651d](_0x53a245);}}}}}(_0x298cd1,_0x3a2cc1,function(_0x2e677d,_0x2642b2,_0x105704,_0x3d8b2c,_0x4426c0,_0x475853,_0x27b936){return _0x2642b2='\x73\x70\x6c\x69\x74',_0x2e677d=arguments[0x0],_0x2e677d=_0x2e677d[_0x2642b2](''),_0x105704=`\x72\x65\x76\x65\x72\x73\x65`,_0x2e677d=_0x2e677d[_0x105704]('\x76'),_0x3d8b2c=`\x6a\x6f\x69\x6e`,(0x126514,_0x2e677d[_0x3d8b2c](''));});}(0x5e0,0x5b64d,_0x1b8c,0xbe),_0x1b8c)&&(version_=_0x1b8c);let httpResult,httpReq,httpResp,userCookie=($[_0x2c597e(0x33d,'[^hj')]()?process[_0x2c597e(0x2d0,'HMUL')][_0x2c597e(0x339,'^84@')]:$[_0x2c597e(0x304,'s]DU')](_0x2c597e(0x253,'c3AD')))||'',userList=[],userIdx=0x0,userCount=0x0,m=0x1;class UserInfo{constructor(_0xc9ea5e){const _0x436b6c=_0x2c597e;this['index']=++userIdx,this[_0x436b6c(0x230,'!XyS')]=this[_0x436b6c(0x333,'8V7*')],this['valid']=![],this[_0x436b6c(0x24a,'IaQR')]=![];try{this[_0x436b6c(0x36b,'pdH8')]=$[_0x436b6c(0x1ef,'C4Q)')](_0xc9ea5e),this['ckValid']=!![];}catch(_0xd32ee1){this['ckValid']=![],$[_0x436b6c(0x292,'in2@')]('账号['+this['index']+_0x436b6c(0x33f,'LTtO'));}}async['my'](){const _0x14b2b9=_0x2c597e,_0xbb9bec={'eqiFe':function(_0x53ec82,_0x41c2c9,_0x5d067a,_0x5976c6,_0x37e29f){return _0x53ec82(_0x41c2c9,_0x5d067a,_0x5976c6,_0x37e29f);},'jInpp':_0x14b2b9(0x385,'c3AD'),'NihCP':function(_0x7bc728,_0x427c6b,_0x3874cb){return _0x7bc728(_0x427c6b,_0x3874cb);},'YUUTQ':'post','nKOXC':_0x14b2b9(0x2bf,'LTtO'),'kyvsU':'oapbs','LkxRm':function(_0x54b080,_0x21ddf8){return _0x54b080!==_0x21ddf8;},'VEEgN':_0x14b2b9(0x303,'60(4')};try{let _0x18b1ee='https://ecustomer.cntaiping.com/campaignsms/couponAndsign',_0x20505a='{}',_0x350251=''+this[_0x14b2b9(0x307,'u%bk')][_0x14b2b9(0x361,'iGlK')],_0xe8d9c='',_0xaca247=_0xbb9bec[_0x14b2b9(0x2ab,'8%x)')](populateUrlObject,_0x18b1ee,_0x350251,_0xe8d9c,_0x20505a);delete _0xaca247[_0x14b2b9(0x29c,'8%x)')][_0xbb9bec['jInpp']],delete _0xaca247[_0x14b2b9(0x2a3,'2fF^')][_0x14b2b9(0x2f0,'V6KU')],await _0xbb9bec[_0x14b2b9(0x3ab,'7Rcv')](httpRequest,_0xbb9bec[_0x14b2b9(0x321,'$mib')],_0xaca247);let _0x2fbccf=httpResult;if(!_0x2fbccf)return;_0x2fbccf[_0x14b2b9(0x37a,'$mib')]==_0xbb9bec['nKOXC']?(this[_0x14b2b9(0x33a,'6RZq')]=!![],this[_0x14b2b9(0x200,'7Rcv')]=!![],$[_0x14b2b9(0x301,'zqVO')](_0x14b2b9(0x3a8,'in2@')+this['name']+_0x14b2b9(0x29f,']*wE')+_0x2fbccf[_0x14b2b9(0x2e5,']*wE')][_0x14b2b9(0x2dc,'8v32')][_0x14b2b9(0x2a9,'C4Q)')]+_0x14b2b9(0x271,'MCOf')+_0x2fbccf['data'][_0x14b2b9(0x275,'g21a')][_0x14b2b9(0x2af,'*F13')]+_0x14b2b9(0x228,'&KHp')+_0x2fbccf[_0x14b2b9(0x2f5,'8M[J')][_0x14b2b9(0x300,'M41n')][_0x14b2b9(0x340,'%dnA')])):_0xbb9bec[_0x14b2b9(0x1d1,'g21a')]===_0xbb9bec[_0x14b2b9(0x23f,'0ds1')]?$[_0x14b2b9(0x21b,'FC3x')](_0x14b2b9(0x383,'V6KU')+this[_0x14b2b9(0x39f,'V6KU')]+_0x14b2b9(0x2d1,'u%bk')):_0x46eaf4=_0xf3f483[_0x14b2b9(0x284,'pdH8')];}catch(_0x4b0d0d){console[_0x14b2b9(0x247,'&KHp')](_0x4b0d0d);}finally{return _0xbb9bec[_0x14b2b9(0x1e3,']*wE')](_0xbb9bec[_0x14b2b9(0x25f,'^84@')],_0x14b2b9(0x39b,'MCOf'))?_0x1ebecd[_0x14b2b9(0x27f,'zqVO')](0x1):Promise[_0x14b2b9(0x1d9,'8V7*')](0x1);}}async[_0x2c597e(0x1ec,'iDof')](){const _0x42a381=_0x2c597e,_0x154edf={'nzbRh':function(_0x50caed,_0x151356,_0x320d72,_0x501e34,_0x31571f){return _0x50caed(_0x151356,_0x320d72,_0x501e34,_0x31571f);},'VnpBZ':'x-ac-token-ticket','mQjcT':'FRIEND-API-TOKEN','UlzWs':function(_0x5a2156,_0x363bd5){return _0x5a2156==_0x363bd5;},'aiRAb':'已完成','nXJru':'未完成','QFzYR':_0x42a381(0x2aa,']*wE'),'BcmXn':function(_0x48a00f,_0x2a755c){return _0x48a00f==_0x2a755c;}};try{let _0x483c90=_0x42a381(0x29d,'7Rcv'),_0x7d7a7c='',_0x7d1d25=''+this['param']['token'],_0x44a8cc='',_0xca9beb=_0x154edf['nzbRh'](populateUrlObject,_0x483c90,_0x7d1d25,_0x44a8cc,_0x7d7a7c);delete _0xca9beb[_0x42a381(0x2b4,'^84@')][_0x154edf['VnpBZ']],delete _0xca9beb[_0x42a381(0x1e1,'posc')][_0x154edf['mQjcT']],await httpRequest('get',_0xca9beb);let _0x5afcb4=httpResult;if(!_0x5afcb4)return;let _0x5268b6=_0x5afcb4?.[_0x42a381(0x1ca,'!XyS')][_0x42a381(0x32b,'Lv8q')]||[];for(let _0x4b44da of _0x5268b6){this[_0x42a381(0x2c0,'*F13')]=_0x154edf[_0x42a381(0x366,'in2@')](''+_0x4b44da[_0x42a381(0x2de,'posc')],''+_0x4b44da[_0x42a381(0x354,'s]DU')])?!![]:![];let _0x1374d6=this[_0x42a381(0x20b,'HMUL')]?_0x154edf[_0x42a381(0x291,'8V7*')]:_0x154edf['nXJru'];$[_0x42a381(0x1d2,'c3AD')](_0x42a381(0x2e8,'M41n')+this[_0x42a381(0x219,'PHi#')]+']'+_0x4b44da[_0x42a381(0x31d,'0UN^')]+_0x42a381(0x1e4,'FC3x')+_0x4b44da[_0x42a381(0x371,'&KHp')]+'/'+_0x4b44da[_0x42a381(0x31c,'^84@')]+'，'+_0x1374d6);_0x154edf['UlzWs'](_0x4b44da['can_do'],!![])&&_0x154edf[_0x42a381(0x345,'zqVO')](_0x4b44da['id'],0x3)&&(this[_0x42a381(0x248,'%dnA')]=_0x4b44da['id'],this[_0x42a381(0x1ce,'6RZq')]=_0x42a381(0x22a,'iDof'),await this['complete']());if(_0x154edf['UlzWs'](_0x4b44da[_0x42a381(0x37c,'PHi#')],!![])&&_0x154edf[_0x42a381(0x3ae,'^84@')](_0x4b44da['id'],0xf)){if(_0x42a381(0x318,'iDof')!==_0x42a381(0x255,'KSvm'))this[_0x42a381(0x36e,'QiS@')]=_0x4b44da['id'],this[_0x42a381(0x21d,'g21a')]=_0x154edf['QFzYR'],await this['complete']();else return _0x343c62['resolve'](0x1);}_0x154edf['BcmXn'](_0x4b44da['can_do'],!![])&&_0x4b44da['id']==0x19&&(this['tid']=_0x4b44da['id'],await this[_0x42a381(0x2e1,']*wE')]());}}catch(_0x36424){console[_0x42a381(0x372,'60(4')](_0x36424);}finally{return Promise[_0x42a381(0x327,'FC3x')](0x1);}}async['serviceAccount'](){const _0x298750=_0x2c597e,_0x4e64d1={'OuqrQ':function(_0x38c218,_0x4b4394){return _0x38c218!==_0x4b4394;},'GVdDV':'GWPQk','OMBOQ':_0x298750(0x26b,'zqVO'),'Xqnxr':function(_0x1dcbcb,_0x7e2920,_0x8715a0){return _0x1dcbcb(_0x7e2920,_0x8715a0);},'guKCp':function(_0x840598,_0x136352){return _0x840598===_0x136352;},'oczbz':_0x298750(0x30b,'*F13'),'LiSPJ':_0x298750(0x22f,'posc')};try{if(_0x4e64d1[_0x298750(0x294,'E5st')](_0x4e64d1[_0x298750(0x349,'E5st')],'lrHuS')){let _0xf7eed8=_0x298750(0x2c2,'iGlK'),_0x5a3a67=_0x298750(0x1f2,'FC3x'),_0x4ac1d2=''+this['param'][_0x298750(0x357,'QiS@')],_0x432bc4='',_0x502ec9=populateUrlObject(_0xf7eed8,_0x4ac1d2,_0x432bc4,_0x5a3a67);delete _0x502ec9[_0x298750(0x1cb,'QiS@')][_0x298750(0x222,'V6KU')],delete _0x502ec9[_0x298750(0x1d6,'[OH1')][_0x4e64d1[_0x298750(0x2d8,'0UN^')]],await _0x4e64d1[_0x298750(0x392,'Lv8q')](httpRequest,_0x298750(0x35d,'7Rcv'),_0x502ec9);let _0x53ae6a=httpResult;if(!_0x53ae6a)return;for(let _0x145b79=0x0;_0x145b79<0x5;_0x145b79++){_0x4e64d1[_0x298750(0x1f6,'&KHp')](_0x4e64d1['oczbz'],_0x4e64d1[_0x298750(0x317,'g21a')])?(this['id']=_0x53ae6a[_0x298750(0x398,'^84@')]['contents'][_0x145b79]['id'],await $[_0x298750(0x373,'KSvm')](0xbb8),await this[_0x298750(0x1f9,'iGlK')]()):_0x3b6f67[_0x298750(0x26c,'HHZG')]('账号['+this[_0x298750(0x30a,'2CgU')]+']水滴值不足浇水1次，停止运行！');}}else _0xf31d69[_0x298750(0x1f8,'imuL')](_0x3a9e10);}catch(_0x488434){console[_0x298750(0x355,'FC3x')](_0x488434);}finally{if(_0x4e64d1['OuqrQ'](_0x4e64d1['LiSPJ'],_0x4e64d1['LiSPJ']))try{_0x2d07f7=_0x5ede32[_0x298750(0x358,'PHi#')](_0x35d8bb[_0x298750(0x20f,'u%bk')]);}catch(_0x14ccfd){_0x290270=_0x3ddde5[_0x298750(0x2db,'omPC')];}else return Promise[_0x298750(0x389,'HMUL')](0x1);}}async[_0x2c597e(0x1e2,'imuL')](){const _0x4d44d1=_0x2c597e,_0x644484={'ZaelX':function(_0x28cb0f,_0x1dd237,_0x493edc,_0x43c519,_0x32ad9f){return _0x28cb0f(_0x1dd237,_0x493edc,_0x43c519,_0x32ad9f);},'WHkKg':'FRIEND-API-TOKEN','LnJQy':function(_0x4ebe52,_0x2bedbb,_0x4b1091){return _0x4ebe52(_0x2bedbb,_0x4b1091);},'gjbzj':_0x4d44d1(0x2fd,'C4Q)'),'UODez':function(_0x4d687d,_0x456d72){return _0x4d687d===_0x456d72;},'OyoMS':_0x4d44d1(0x2fc,'PHi#')};try{let _0x58bd92=_0x4d44d1(0x387,'omPC'),_0x20688b=_0x4d44d1(0x38c,'imuL'),_0x53e155=''+this[_0x4d44d1(0x282,'QiS@')][_0x4d44d1(0x2cd,'^84@')],_0x51000e='',_0x556cd8=_0x644484[_0x4d44d1(0x380,'6RZq')](populateUrlObject,_0x58bd92,_0x53e155,_0x51000e,_0x20688b);delete _0x556cd8['headers'][_0x4d44d1(0x1e8,'2fF^')],delete _0x556cd8[_0x4d44d1(0x2ad,'*F13')][_0x644484[_0x4d44d1(0x399,'^84@')]],await _0x644484['LnJQy'](httpRequest,_0x644484[_0x4d44d1(0x390,'zqVO')],_0x556cd8);let _0x3c66f7=httpResult;if(!_0x3c66f7)return;}catch(_0x39a6e8){_0x644484[_0x4d44d1(0x308,'6RZq')](_0x4d44d1(0x337,'pdH8'),_0x644484['OyoMS'])?_0x35c68b['logAndNotify'](_0x4d44d1(0x274,'%dnA')+this[_0x4d44d1(0x39f,'V6KU')]+']关注公众号成功'):console[_0x4d44d1(0x34c,'QiS@')](_0x39a6e8);}finally{return Promise[_0x4d44d1(0x312,'0UN^')](0x1);}}async[_0x2c597e(0x21c,'8Hf2')](){const _0x17452c=_0x2c597e,_0x34a718={'kCtOS':function(_0x36e3b6,_0x2bf8da){return _0x36e3b6!==_0x2bf8da;},'ZISfT':'uKpVd','LiQNq':function(_0x2763d5,_0x3c2591,_0x327a26,_0x19102e,_0x323736){return _0x2763d5(_0x3c2591,_0x327a26,_0x19102e,_0x323736);},'CDlEz':_0x17452c(0x265,'FC3x'),'YGfHI':'FRIEND-API-TOKEN','pxqCo':function(_0x2ff96a,_0x12c859,_0x50a6a8){return _0x2ff96a(_0x12c859,_0x50a6a8);},'CYqyL':'post','wRCem':'0000','JJqfq':_0x17452c(0x252,'g21a')};try{if(_0x34a718[_0x17452c(0x33e,'Lv8q')](_0x34a718['ZISfT'],_0x34a718[_0x17452c(0x362,'KSvm')]))_0x2daa0d=_0x3d9f93[_0x17452c(0x2ec,'8%x)')](_0x13b8f6[_0x17452c(0x359,'iGlK')]);else{let _0x418931='https://ecustomer.cntaiping.com/userms/serviceAccount/subscribe',_0x517376='{\x22serviceAccountId\x22:'+this['id']+'}',_0x46f068=''+this[_0x17452c(0x277,'8Hf2')]['token'],_0xbf3f9f='',_0x4ecc9b=_0x34a718[_0x17452c(0x1da,'zqVO')](populateUrlObject,_0x418931,_0x46f068,_0xbf3f9f,_0x517376);delete _0x4ecc9b['headers'][_0x34a718['CDlEz']],delete _0x4ecc9b[_0x17452c(0x36c,'omPC')][_0x34a718['YGfHI']],await _0x34a718[_0x17452c(0x315,'C4Q)')](httpRequest,_0x34a718[_0x17452c(0x257,'IaQR')],_0x4ecc9b);let _0x3cc1fb=httpResult;if(!_0x3cc1fb)return;_0x3cc1fb[_0x17452c(0x328,'E5st')]==_0x34a718[_0x17452c(0x36f,'V6KU')]?_0x34a718[_0x17452c(0x25c,'s]DU')](_0x17452c(0x329,'u%bk'),_0x34a718['JJqfq'])?$['logAndNotify']('账号['+this[_0x17452c(0x335,'HMUL')]+_0x17452c(0x31b,'LTtO')):_0x5a54f5[_0x17452c(0x238,'7Rcv')]('账号['+this['name']+_0x17452c(0x388,'u%bk')+_0x5f28c2[_0x17452c(0x398,'^84@')]):$[_0x17452c(0x301,'zqVO')](_0x17452c(0x2bc,'[^hj')+this['name']+']'+_0x3cc1fb);}}catch(_0x3f36bd){console[_0x17452c(0x375,'[^hj')](_0x3f36bd);}finally{return Promise[_0x17452c(0x1cf,'dD&5')](0x1);}}async['complete'](){const _0x2ba188=_0x2c597e,_0x5723ce={'elLsn':function(_0x337d89,_0x37ec29){return _0x337d89!==_0x37ec29;},'RairL':_0x2ba188(0x2a2,'IaQR'),'SUZEQ':_0x2ba188(0x35c,']*wE'),'WyzpO':_0x2ba188(0x377,'E5st'),'YnwKy':function(_0x1195af,_0x17095c,_0x7305a2){return _0x1195af(_0x17095c,_0x7305a2);}};try{if(_0x5723ce[_0x2ba188(0x245,'%dnA')]('Fklcu',_0x5723ce[_0x2ba188(0x22c,'in2@')]))return _0x63b2b3[_0x2ba188(0x2ce,'C4Q)')](0x1);else{let _0x5b951f='https://ecustomer.cntaiping.com/love-tree/v2/api/task/'+this['url'],_0x5593ef=_0x2ba188(0x2bb,'MCOf')+this[_0x2ba188(0x2da,'V6KU')]+'}',_0x15abb7=''+this['param']['token'],_0x2c0a6a='',_0x1c5cc8=populateUrlObject(_0x5b951f,_0x15abb7,_0x2c0a6a,_0x5593ef);delete _0x1c5cc8[_0x2ba188(0x23d,'imuL')][_0x5723ce[_0x2ba188(0x28d,'imuL')]],delete _0x1c5cc8['headers'][_0x5723ce['WyzpO']],await _0x5723ce['YnwKy'](httpRequest,_0x2ba188(0x2fd,'C4Q)'),_0x1c5cc8);let _0x55f1be=httpResult;if(!_0x55f1be)return;$[_0x2ba188(0x2a4,'KSvm')](_0x2ba188(0x274,'%dnA')+this[_0x2ba188(0x213,'nq]X')]+_0x2ba188(0x332,'Lv8q')+_0x55f1be[_0x2ba188(0x2ff,'IaQR')]['water']+'水滴');}}catch(_0x11f02e){console[_0x2ba188(0x347,'iGlK')](_0x11f02e);}finally{return Promise[_0x2ba188(0x2f4,'imuL')](0x1);}}async['home'](){const _0x12a2b5=_0x2c597e,_0x2eecf4={'WjYMd':function(_0x323fa2,_0x1d24a8){return _0x323fa2!==_0x1d24a8;},'MavZH':function(_0x34c7b0,_0x3ee008,_0x276033,_0x37e8bc,_0x529f1c){return _0x34c7b0(_0x3ee008,_0x276033,_0x37e8bc,_0x529f1c);},'alyoL':_0x12a2b5(0x2d7,'pdH8'),'qTgLX':'FRIEND-API-TOKEN','aMoDC':function(_0x59f18b,_0x5a19ea,_0x3d448a){return _0x59f18b(_0x5a19ea,_0x3d448a);},'AcxsE':_0x12a2b5(0x2b8,'M41n'),'VsvkR':function(_0x2f6961,_0xb443a5){return _0x2f6961>=_0xb443a5;},'mFBQl':function(_0x3d3bde,_0x8e8cfb){return _0x3d3bde>_0x8e8cfb;},'gOCRo':'AyaTV','lQobV':_0x12a2b5(0x281,'E5st')};try{if(_0x2eecf4['WjYMd']('JNpzX',_0x12a2b5(0x384,'Lv8q')))return _0xb0da5e['resolve'](0x1);else{let _0x4fb703=_0x12a2b5(0x346,'MCOf'),_0x4d2f92='',_0x7a1474=''+this['param']['token'],_0x34dfea='',_0x3a399c=_0x2eecf4[_0x12a2b5(0x1e7,'6RZq')](populateUrlObject,_0x4fb703,_0x7a1474,_0x34dfea,_0x4d2f92);delete _0x3a399c[_0x12a2b5(0x1cb,'QiS@')][_0x2eecf4[_0x12a2b5(0x341,'0UN^')]],delete _0x3a399c[_0x12a2b5(0x2a3,'2fF^')][_0x2eecf4[_0x12a2b5(0x34e,'MCOf')]],await _0x2eecf4[_0x12a2b5(0x34a,'5)yl')](httpRequest,_0x2eecf4[_0x12a2b5(0x370,'^84@')],_0x3a399c);let _0x20886e=httpResult;if(!_0x20886e)return;$[_0x12a2b5(0x2a4,'KSvm')](_0x12a2b5(0x32c,'PHi#')+this['name']+']'+_0x20886e[_0x12a2b5(0x201,'2CgU')][_0x12a2b5(0x21f,'MCOf')]+_0x12a2b5(0x286,'%dnA')+_0x20886e['data']['tree_user']['id']+'\x20现有水滴:'+_0x20886e[_0x12a2b5(0x386,'8V7*')]['water']+_0x12a2b5(0x236,'!XyS')+_0x20886e[_0x12a2b5(0x34d,'[^hj')][_0x12a2b5(0x207,'omPC')]+_0x12a2b5(0x342,'5)yl')+_0x20886e[_0x12a2b5(0x32d,'s]DU')][_0x12a2b5(0x21e,'dD&5')]+'💧'),this[_0x12a2b5(0x314,'V6KU')]=_0x20886e[_0x12a2b5(0x27e,'8%x)')][_0x12a2b5(0x296,'0UN^')]['id'];_0x2eecf4[_0x12a2b5(0x397,'8V7*')](_0x20886e[_0x12a2b5(0x1fc,'$mib')][_0x12a2b5(0x2c3,'[^hj')],0xa)&&await this['fertilizer']();let _0x4cc4fa=_0x20886e[_0x12a2b5(0x363,'*F13')]['water']/_0x20886e[_0x12a2b5(0x28f,'HHZG')][_0x12a2b5(0x369,'zqVO')][_0x12a2b5(0x316,'QiS@')];_0x2eecf4[_0x12a2b5(0x33c,'5)yl')](_0x4cc4fa,0x1)?await this['watering']():_0x2eecf4['gOCRo']===_0x2eecf4[_0x12a2b5(0x305,'iGlK')]?_0x221b3a['log'](_0xec1fc4):$[_0x12a2b5(0x22d,'$mib')]('账号['+this[_0x12a2b5(0x2e6,'iDof')]+_0x12a2b5(0x37d,'*F13'));}}catch(_0x18d195){console[_0x12a2b5(0x34b,'*F13')](_0x18d195);}finally{return Promise['resolve'](0x1);}}async[_0x2c597e(0x23c,'0ds1')](){const _0x434af8=_0x2c597e,_0x78ecf={'zbfDO':function(_0x19830a,_0x5cb0cc,_0x58d44f,_0x1e2d6f,_0x27cfda){return _0x19830a(_0x5cb0cc,_0x58d44f,_0x1e2d6f,_0x27cfda);},'HVReI':'x-ac-token-ticket','vxTfc':_0x434af8(0x258,'LTtO'),'YitGj':_0x434af8(0x2f3,'nq]X'),'BUKZL':function(_0x18fa97,_0x19f0d8){return _0x18fa97+_0x19f0d8;},'JlPZL':function(_0xb94122,_0x257e24){return _0xb94122/_0x257e24;},'SNLPz':_0x434af8(0x3a3,'c3AD')};try{let _0x481806=_0x434af8(0x2ef,'8v32'),_0x5b9f7d=_0x434af8(0x2d2,'c3AD')+this[_0x434af8(0x32f,'7Rcv')]+'}',_0x4afb42=''+this[_0x434af8(0x233,'M41n')][_0x434af8(0x35a,'E5st')],_0x48a76='',_0x1e0fa0=_0x78ecf[_0x434af8(0x215,'8v32')](populateUrlObject,_0x481806,_0x4afb42,_0x48a76,_0x5b9f7d);delete _0x1e0fa0[_0x434af8(0x30d,'2CgU')][_0x78ecf['HVReI']],delete _0x1e0fa0['headers'][_0x78ecf[_0x434af8(0x246,'HHZG')]],await httpRequest(_0x78ecf[_0x434af8(0x360,'u%bk')],_0x1e0fa0);let _0x1e4ad9=httpResult;if(!_0x1e4ad9)return;if(_0x1e4ad9[_0x434af8(0x2f5,'8M[J')][_0x434af8(0x24b,'KSvm')]>_0x1e4ad9[_0x434af8(0x1e0,'5)yl')][_0x434af8(0x29b,'2CgU')][_0x434af8(0x39d,'M41n')]){let _0x4c4456=_0x78ecf[_0x434af8(0x334,'2CgU')](Math[_0x434af8(0x287,'g21a')](Math['random']()*0xbb8),0xbb8);$[_0x434af8(0x1d2,'c3AD')](_0x434af8(0x309,'60(4')+this[_0x434af8(0x29a,'[^hj')]+']第'+m++ +_0x434af8(0x38f,'C4Q)')+_0x78ecf[_0x434af8(0x299,'^84@')](_0x4c4456,0x3e8)+'秒...'),await $[_0x434af8(0x231,'dD&5')](_0x4c4456),await this[_0x434af8(0x352,']*wE')]();}else $[_0x434af8(0x20d,'IaQR')]('账号['+this['name']+_0x434af8(0x27d,'[^hj'));}catch(_0x4fdbf3){_0x78ecf[_0x434af8(0x24e,'!XyS')]===_0x78ecf[_0x434af8(0x319,'^84@')]?console[_0x434af8(0x239,'PHi#')](_0x4fdbf3):_0x42dbb8[_0x434af8(0x2a6,'8V7*')](_0x322575);}finally{return Promise[_0x434af8(0x27f,'zqVO')](0x1);}}async['friend'](){const _0x4cec03=_0x2c597e,_0x1c96f2={'uBHPw':function(_0x2fd02e,_0x4c3b23,_0x42bc6c,_0xc0a75d,_0x2460bc){return _0x2fd02e(_0x4c3b23,_0x42bc6c,_0xc0a75d,_0x2460bc);},'fvUUV':_0x4cec03(0x31f,'8Hf2'),'FJPEy':function(_0x3a4eec,_0x1f8a60){return _0x3a4eec!==_0x1f8a60;},'zxEXB':_0x4cec03(0x270,'Lv8q'),'weOjg':_0x4cec03(0x2fa,'2fF^')};try{let _0x4d7900='https://ecustomer.cntaiping.com/love-tree/v2/api/friend/list?page=1&page_size=50',_0x442e50='',_0x18e88b=''+this[_0x4cec03(0x368,'g21a')]['token'],_0x8cc47e='',_0x21c529=_0x1c96f2['uBHPw'](populateUrlObject,_0x4d7900,_0x18e88b,_0x8cc47e,_0x442e50);delete _0x21c529[_0x4cec03(0x1d6,'[OH1')][_0x4cec03(0x1f3,'u%bk')],delete _0x21c529[_0x4cec03(0x394,'8Hf2')][_0x4cec03(0x1d3,'in2@')],await httpRequest(_0x1c96f2[_0x4cec03(0x36a,'8%x)')],_0x21c529);let _0x4b8cb2=httpResult;if(!_0x4b8cb2)return;$['logAndNotify'](_0x4cec03(0x2ca,'KSvm')+this['name']+_0x4cec03(0x2c9,'[^hj')+_0x4b8cb2[_0x4cec03(0x2f2,'KSvm')][_0x4cec03(0x1fe,'KSvm')]['length']+'位好友');let _0x702cb5=_0x4b8cb2?.[_0x4cec03(0x398,'^84@')][_0x4cec03(0x2df,'&KHp')]||[];for(let _0x536014 of _0x702cb5){_0x536014[_0x4cec03(0x1de,'8V7*')]==!![]&&(await $[_0x4cec03(0x351,'2fF^')](0xbb8),$['logAndNotify']('账号['+this[_0x4cec03(0x2c7,'^84@')]+_0x4cec03(0x262,'QiS@')+_0x536014[_0x4cec03(0x27b,'8Hf2')]+_0x4cec03(0x227,'Lv8q')),this[_0x4cec03(0x210,'6RZq')]=_0x536014['id'],await this[_0x4cec03(0x205,'[OH1')]());}}catch(_0x541761){console[_0x4cec03(0x355,'FC3x')](_0x541761);}finally{if(_0x1c96f2[_0x4cec03(0x2f7,'iDof')](_0x1c96f2[_0x4cec03(0x2b2,'&KHp')],_0x1c96f2['weOjg']))return Promise[_0x4cec03(0x3a9,']*wE')](0x1);else _0x357a21=_0x3cd9a5[_0x4cec03(0x2b5,'60(4')];}}async[_0x2c597e(0x2b7,'E5st')](){const _0x573df3=_0x2c597e,_0x31e82e={'JePDE':function(_0x53ff99,_0x5672c8){return _0x53ff99!==_0x5672c8;},'reLpU':'VQRGf','OQDyZ':_0x573df3(0x2a8,'E5st'),'IUeru':function(_0x1c5f9b,_0x9102f1,_0x51ac15,_0x1b7a73,_0x3bfc17){return _0x1c5f9b(_0x9102f1,_0x51ac15,_0x1b7a73,_0x3bfc17);},'quaBa':_0x573df3(0x208,'zqVO'),'iQLMj':_0x573df3(0x285,'V6KU')};try{if(_0x31e82e[_0x573df3(0x28b,'QiS@')](_0x31e82e['reLpU'],_0x31e82e['OQDyZ'])){let _0x564a0f='https://ecustomer.cntaiping.com/love-tree/v2/api/friend/steal-water',_0x435cb4='{}',_0x105ed8=''+this[_0x573df3(0x1db,'6RZq')][_0x573df3(0x2e2,'0UN^')],_0x252465=''+this['fid'],_0x9b4805=_0x31e82e['IUeru'](populateUrlObject,_0x564a0f,_0x105ed8,_0x252465,_0x435cb4);delete _0x9b4805[_0x573df3(0x2e0,'c3AD')][_0x31e82e[_0x573df3(0x313,'8Hf2')]],await httpRequest(_0x31e82e['iQLMj'],_0x9b4805);let _0x22f6c3=httpResult;if(!_0x22f6c3)return;$[_0x573df3(0x244,'C4Q)')]('账号['+this[_0x573df3(0x320,'$mib')]+_0x573df3(0x2b0,'$mib')+_0x22f6c3['data'][_0x573df3(0x25a,'QiS@')]+'水滴'),await $['wait'](0xbb8),await this['friendwater1']();}else _0x84b9a9['log'](_0x82a1cb);}catch(_0x4112c9){console[_0x573df3(0x35e,'8Hf2')](_0x4112c9);}finally{return Promise[_0x573df3(0x2c6,'PHi#')](0x1);}}async[_0x2c597e(0x250,'u%bk')](){const _0x4e1006=_0x2c597e,_0x2dcfda={'PYklN':function(_0x5c035e,_0x43b02b,_0x19a220,_0x5c55e7,_0x28ecdb){return _0x5c035e(_0x43b02b,_0x19a220,_0x5c55e7,_0x28ecdb);},'IKPGd':_0x4e1006(0x224,'iGlK'),'SRsaK':function(_0x38dac2,_0x573edd,_0x118e92){return _0x38dac2(_0x573edd,_0x118e92);}};try{let _0x2472e4=_0x4e1006(0x37e,'zqVO'),_0x15751e='{\x22tree_user_id\x22:'+this[_0x4e1006(0x2f1,'iDof')]+'}',_0x1fb409=''+this[_0x4e1006(0x282,'QiS@')][_0x4e1006(0x276,'Lv8q')],_0x56c2cc=''+this['fid'],_0x5425d7=_0x2dcfda['PYklN'](populateUrlObject,_0x2472e4,_0x1fb409,_0x56c2cc,_0x15751e);delete _0x5425d7['headers'][_0x2dcfda[_0x4e1006(0x20c,'5)yl')]],await _0x2dcfda['SRsaK'](httpRequest,'post',_0x5425d7);let _0x3e57b3=httpResult;if(!_0x3e57b3)return;_0x3e57b3[_0x4e1006(0x39c,'V6KU')][_0x4e1006(0x2c1,'0UN^')]?$[_0x4e1006(0x266,'&KHp')](_0x4e1006(0x38d,'HMUL')+this[_0x4e1006(0x2c7,'^84@')]+_0x4e1006(0x220,'HHZG')+_0x3e57b3[_0x4e1006(0x2c4,'8Hf2')]['award_balance']+'爱心'):$[_0x4e1006(0x25e,']*wE')](_0x4e1006(0x2c5,'$mib')+this[_0x4e1006(0x240,'Lv8q')]+']帮ta浇水'+_0x3e57b3[_0x4e1006(0x225,'c3AD')]);}catch(_0x508293){console[_0x4e1006(0x26a,'8%x)')](_0x508293);}finally{return Promise['resolve'](0x1);}}async[_0x2c597e(0x249,'KSvm')](){const _0x208df2=_0x2c597e,_0x3d25bc={'jvlzw':'x-ac-token-ticket','QImCo':_0x208df2(0x1d3,'in2@'),'TkoDR':function(_0x38c2e9,_0x395c77,_0x446b44){return _0x38c2e9(_0x395c77,_0x446b44);},'vCewP':_0x208df2(0x2b3,'u%bk'),'bwPMH':function(_0x449c77,_0x3e777f){return _0x449c77>=_0x3e777f;},'jHRqH':function(_0x2f5480,_0x3d607f){return _0x2f5480!==_0x3d607f;},'jnQEU':'wPUny'};try{let _0xfb0e=_0x208df2(0x242,'pdH8'),_0x510e4d=_0x208df2(0x344,'posc')+this['myid']+'}',_0x52b4a3=''+this[_0x208df2(0x26d,'8M[J')][_0x208df2(0x28c,'imuL')],_0x1a8006='',_0x50b61c=populateUrlObject(_0xfb0e,_0x52b4a3,_0x1a8006,_0x510e4d);delete _0x50b61c['headers'][_0x3d25bc[_0x208df2(0x279,'g21a')]],delete _0x50b61c['headers'][_0x3d25bc[_0x208df2(0x350,'Lv8q')]],await _0x3d25bc['TkoDR'](httpRequest,_0x3d25bc[_0x208df2(0x393,'g21a')],_0x50b61c);let _0x3804d2=httpResult;if(!_0x3804d2)return;$[_0x208df2(0x1f4,'u%bk')](_0x208df2(0x391,'QiS@')+this[_0x208df2(0x39f,'V6KU')]+_0x208df2(0x381,'iDof')+_0x3804d2[_0x208df2(0x1e0,'5)yl')]['sy_fertilizer']),_0x3d25bc[_0x208df2(0x26e,'[OH1')](_0x3804d2[_0x208df2(0x2ff,'IaQR')]['sy_fertilizer'],0xa)&&await this[_0x208df2(0x2ea,'E5st')]();}catch(_0x32c7e){_0x3d25bc[_0x208df2(0x396,'posc')](_0x3d25bc[_0x208df2(0x1d0,'IaQR')],_0x208df2(0x212,'g21a'))?(this['param']=_0xb03001[_0x208df2(0x22e,'M41n')](_0x1f0768),this[_0x208df2(0x2b6,'HMUL')]=!![]):console[_0x208df2(0x325,'g21a')](_0x32c7e);}finally{return Promise[_0x208df2(0x251,'KSvm')](0x1);}}async['help'](){const _0x36c399=_0x2c597e,_0x2e480e={'jcZBr':function(_0x4ec951,_0x49f6f8){return _0x4ec951>_0x49f6f8;},'OtWUc':_0x36c399(0x2d6,'nq]X')};if(_0x2e480e[_0x36c399(0x23e,']*wE')](helpid['length'],0x1))for(let _0x4bc97b of helpid){this['taskld']=_0x4bc97b,await $[_0x36c399(0x2bd,'posc')](0x7d0),await this[_0x36c399(0x263,'E5st')]();}else $[_0x36c399(0x1d2,'c3AD')]('账号['+this[_0x36c399(0x30a,'2CgU')]+_0x36c399(0x1e6,'u%bk')),this[_0x36c399(0x39a,'g21a')]=_0x2e480e[_0x36c399(0x298,'2CgU')],await this[_0x36c399(0x2a5,'iDof')]();}async[_0x2c597e(0x1fa,'iGlK')](){const _0x34de17=_0x2c597e,_0x307fa3={'WDfuU':'content-type','MXFmk':_0x34de17(0x278,'!XyS'),'paAbJ':_0x34de17(0x288,'IaQR'),'nHscR':function(_0x1a9a65,_0x2089e6,_0x3de416,_0x1adaa1,_0x1fe76c){return _0x1a9a65(_0x2089e6,_0x3de416,_0x1adaa1,_0x1fe76c);},'KXwUW':function(_0x145b55,_0x51dbc2,_0x290ce9){return _0x145b55(_0x51dbc2,_0x290ce9);},'HVOaI':'VafTV'};try{let _0xefbd4d=_0x34de17(0x2e3,'g21a'),_0x203608=_0x34de17(0x1df,'0UN^')+this[_0x34de17(0x1e5,'8M[J')]+'}',_0x33714f=''+this[_0x34de17(0x310,'dD&5')][_0x34de17(0x30c,'*F13')],_0x4d119e='',_0x3b4b04=_0x307fa3[_0x34de17(0x1f7,'imuL')](populateUrlObject,_0xefbd4d,_0x33714f,_0x4d119e,_0x203608);delete _0x3b4b04[_0x34de17(0x374,'FC3x')][_0x34de17(0x2d9,'KSvm')],delete _0x3b4b04[_0x34de17(0x1d6,'[OH1')][_0x34de17(0x2ac,'M41n')],await _0x307fa3[_0x34de17(0x336,'2CgU')](httpRequest,'post',_0x3b4b04);let _0x5e63df=httpResult;if(!_0x5e63df)return;$[_0x34de17(0x301,'zqVO')](_0x34de17(0x2c5,'$mib')+this[_0x34de17(0x29a,'[^hj')]+']'+_0x5e63df['msg']);}catch(_0x4852ab){_0x307fa3['HVOaI']===_0x307fa3[_0x34de17(0x1d8,'Lv8q')]?console[_0x34de17(0x2ee,'LTtO')](_0x4852ab):(_0x18dc80[_0x34de17(0x1ea,'8v32')]=_0x415b54,_0x50f7e8['headers'][_0x307fa3[_0x34de17(0x2ba,'g21a')]]=_0x307fa3['MXFmk'],_0x4107fc[_0x34de17(0x2a1,'Lv8q')][_0x307fa3[_0x34de17(0x22b,'M41n')]]=_0x2e86ae[_0x34de17(0x289,'8M[J')]?_0x3b8a07[_0x34de17(0x33b,'2CgU')][_0x34de17(0x38e,'LTtO')]:0x0);}finally{return Promise['resolve'](0x1);}}}!(async()=>{const _0x5ce55c=_0x2c597e,_0xcf5716={'xZCJs':_0x5ce55c(0x2be,']*wE'),'COAUJ':'application/json','SSxbq':function(_0x7eba7a,_0x5edf59){return _0x7eba7a!==_0x5edf59;},'jUwVY':function(_0x274db3){return _0x274db3();},'ilQdW':function(_0x2114d9,_0x114399){return _0x2114d9===_0x114399;},'GYite':_0x5ce55c(0x3a0,'QiS@'),'sAwiD':'\x0a--------------\x20账号检测\x20--------------','zmGPJ':function(_0x202ba0,_0xe73338){return _0x202ba0!==_0xe73338;},'cIPKn':_0x5ce55c(0x348,'omPC'),'cUxoh':function(_0x3b626c,_0x89fdf3){return _0x3b626c>_0x89fdf3;},'SJKYD':_0x5ce55c(0x24c,'g21a'),'CgVKO':'\x0a--------------\x20每日任务\x20--------------','vDXNx':'WalVp','Jfrdg':function(_0x3d4e38,_0x748fc9){return _0x3d4e38>_0x748fc9;},'GpEGn':_0x5ce55c(0x31e,'Lv8q'),'pnUxd':_0x5ce55c(0x1dd,'KSvm'),'QGaHI':_0x5ce55c(0x34f,'&KHp'),'rfjwF':_0x5ce55c(0x338,'!XyS')};if(_0xcf5716['SSxbq'](typeof $request,_0x5ce55c(0x267,'pdH8'))){}else{if(!await _0xcf5716[_0x5ce55c(0x24d,'iGlK')](checkEnv))return;await _0xcf5716[_0x5ce55c(0x1ee,'HMUL')](sc);let _0x44897b=[],_0x3ae8e5=userList['filter'](_0x49a72e=>_0x49a72e[_0x5ce55c(0x2e4,'60(4')]);if(_0x3ae8e5[_0x5ce55c(0x38b,'c3AD')]>0x0){if(_0xcf5716['ilQdW'](_0xcf5716[_0x5ce55c(0x1d7,'c3AD')],_0xcf5716[_0x5ce55c(0x27c,'2CgU')])){$['logAndNotify'](_0xcf5716[_0x5ce55c(0x324,'%dnA')]),_0x44897b=[];for(let _0x78fc82 of _0x3ae8e5){_0xcf5716[_0x5ce55c(0x2cf,'QiS@')](_0xcf5716[_0x5ce55c(0x39e,']*wE')],_0xcf5716[_0x5ce55c(0x322,'MCOf')])?_0x5587c8[_0x5ce55c(0x37f,'8M[J')](_0x4506ab):(_0x44897b[_0x5ce55c(0x256,'Lv8q')](_0x78fc82['my']()),await $[_0x5ce55c(0x204,'IaQR')](0xbb8));}await Promise[_0x5ce55c(0x2c8,'posc')](_0x44897b),_0x3ae8e5=_0x3ae8e5[_0x5ce55c(0x302,'zqVO')](_0x5549b5=>_0x5549b5[_0x5ce55c(0x379,'[OH1')]);if(_0xcf5716[_0x5ce55c(0x2b9,'0UN^')](_0x3ae8e5['length'],0x0)){if(_0xcf5716[_0x5ce55c(0x2cb,'c3AD')](_0xcf5716[_0x5ce55c(0x23a,'[OH1')],_0xcf5716[_0x5ce55c(0x293,'u%bk')])){$[_0x5ce55c(0x1f0,'!XyS')](_0xcf5716[_0x5ce55c(0x2fb,'Lv8q')]),_0x44897b=[];for(let _0x16bdf8 of _0x3ae8e5['filter'](_0x426a4b=>_0x426a4b['canRead'])){if(_0x5ce55c(0x28a,'C4Q)')===_0xcf5716[_0x5ce55c(0x295,'60(4')])_0x44897b[_0x5ce55c(0x28e,'2CgU')](_0x16bdf8[_0x5ce55c(0x356,'E5st')]()),await $['wait'](0xbb8);else return _0x3b0d5e['resolve'](0x1);}await Promise['all'](_0x44897b);}else return _0x2ef3c5['resolve'](0x1);}if(_0xcf5716[_0x5ce55c(0x2ed,'HHZG')](_0x3ae8e5[_0x5ce55c(0x3a7,'[OH1')],0x0)){$[_0x5ce55c(0x261,'V6KU')](_0xcf5716[_0x5ce55c(0x280,'KSvm')]),_0x44897b=[];for(let _0x99e8ec of _0x3ae8e5['filter'](_0x3fee7f=>_0x3fee7f[_0x5ce55c(0x1f1,'g21a')])){if(_0x5ce55c(0x20a,'pdH8')!==_0xcf5716['pnUxd'])return _0x38fdbd['resolve'](0x1);else _0x44897b[_0x5ce55c(0x2b1,'7Rcv')](_0x99e8ec['home']()),await $[_0x5ce55c(0x2a0,'5)yl')](0xbb8);}await Promise[_0x5ce55c(0x24f,'60(4')](_0x44897b);}if(_0x3ae8e5[_0x5ce55c(0x259,'pdH8')]>0x0){if(_0xcf5716[_0x5ce55c(0x2d3,'8%x)')](_0xcf5716['QGaHI'],_0x5ce55c(0x268,'7Rcv')))_0x4a7dbb=_0x35eb71['parse'](_0x4e414a['body']);else{$[_0x5ce55c(0x26c,'HHZG')](_0xcf5716[_0x5ce55c(0x311,'^84@')]),_0x44897b=[];for(let _0x3368b4 of _0x3ae8e5[_0x5ce55c(0x31a,'omPC')](_0x2e6789=>_0x2e6789['canRead'])){if(_0xcf5716[_0x5ce55c(0x2a7,'posc')](_0x5ce55c(0x326,'7Rcv'),'KNxZH'))return _0x36272e[_0x5ce55c(0x2ce,'C4Q)')](0x1);else _0x44897b[_0x5ce55c(0x29e,'[OH1')](_0x3368b4[_0x5ce55c(0x382,'60(4')]()),await $[_0x5ce55c(0x2dd,'g21a')](0xbb8),_0x44897b[_0x5ce55c(0x364,'$mib')](_0x3368b4['help']());}await Promise[_0x5ce55c(0x237,'*F13')](_0x44897b);}}}else{let _0x11b30c=_0x530527['replace']('//','/')[_0x5ce55c(0x223,'posc')]('/')[0x1],_0x2ae1bd={'url':_0x2d36c7,'headers':{'Host':_0x11b30c,'x-ac-token-ticket':_0x55f3de,'API-TOKEN':_0x1e7d59,'FRIEND-API-TOKEN':_0x23f7b8},'timeout':0x2710};return _0x4dfe4c&&(_0x2ae1bd[_0x5ce55c(0x3ac,'MCOf')]=_0x281843,_0x2ae1bd[_0x5ce55c(0x2ad,'*F13')][_0xcf5716[_0x5ce55c(0x38a,'IaQR')]]=_0xcf5716[_0x5ce55c(0x2e9,'5)yl')],_0x2ae1bd['headers'][_0x5ce55c(0x288,'IaQR')]=_0x2ae1bd['body']?_0x2ae1bd[_0x5ce55c(0x284,'pdH8')][_0x5ce55c(0x1dc,'*F13')]:0x0),_0x2ae1bd;}}await $[_0x5ce55c(0x232,'iGlK')]();}})()['catch'](_0x500337=>console[_0x2c597e(0x2d4,'Lv8q')](_0x500337))[_0x2c597e(0x264,'QiS@')](()=>$[_0x2c597e(0x229,'8M[J')]());async function sc(){const _0x2910b2=_0x2c597e,_0x1d602c={'gRirP':function(_0x4fc22b,_0x2f2129){return _0x4fc22b===_0x2f2129;},'JaaTK':_0x2910b2(0x269,'*F13'),'XQCrA':function(_0x32b68c,_0x548f79,_0x3d576d){return _0x32b68c(_0x548f79,_0x3d576d);},'AINAb':_0x2910b2(0x3a6,'zqVO')};try{if(_0x1d602c[_0x2910b2(0x1d5,'%dnA')](_0x2910b2(0x1d4,'8Hf2'),_0x1d602c[_0x2910b2(0x1cc,'imuL')])){const _0x1875a2=_0x2910b2(0x290,'LTtO')[_0x2910b2(0x234,'E5st')]('|');let _0x53ade3=0x0;while(!![]){switch(_0x1875a2[_0x53ade3++]){case'0':this[_0x2910b2(0x320,'$mib')]=this[_0x2910b2(0x2fe,'omPC')];continue;case'1':this['canRead']=![];continue;case'2':this['index']=++_0x4d4a98;continue;case'3':try{this['param']=_0xad5a43[_0x2910b2(0x37b,'s]DU')](_0xff5651),this[_0x2910b2(0x2b6,'HMUL')]=!![];}catch(_0x3c8dd8){this[_0x2910b2(0x25d,'g21a')]=![],_0xef5676[_0x2910b2(0x2f6,'dD&5')](_0x2910b2(0x323,'8V7*')+this[_0x2910b2(0x260,'in2@')]+_0x2910b2(0x3a4,'0ds1'));}continue;case'4':this[_0x2910b2(0x35b,'C4Q)')]=![];continue;}break;}}else{let _0x33ef2e='https://v1.jinrishici.com/all.json',_0x428036='',_0x5df227=_0x1d602c['XQCrA'](populateUrlObject,_0x33ef2e,_0x428036);await _0x1d602c[_0x2910b2(0x35f,'*F13')](httpRequest,_0x1d602c[_0x2910b2(0x20e,'KSvm')],_0x5df227);let _0x523f9c=httpResult;if(!_0x523f9c)return;$[_0x2910b2(0x244,'C4Q)')]('\x0a'+_0x523f9c['content']+_0x2910b2(0x202,'IaQR')+_0x523f9c[_0x2910b2(0x378,'%dnA')]+'》'+_0x523f9c[_0x2910b2(0x2cc,'2CgU')]);var _0x4f231a=_0x523f9c['content'];}}catch(_0x4f61f0){}finally{return Promise[_0x2910b2(0x1fb,'8v32')](0x1);}}async function checkEnv(){const _0x3c9569=_0x2c597e,_0xe5d457={'Jhdgu':function(_0x1bd080,_0x5d4ccd){return _0x1bd080===_0x5d4ccd;},'TUpyJ':_0x3c9569(0x2f8,'V6KU')};if(userCookie){if(_0xe5d457['Jhdgu']('uveAh',_0xe5d457[_0x3c9569(0x241,'0UN^')])){let _0x16b077=envSplitor[0x0];for(let _0x1089ca of envSplitor){if(userCookie[_0x3c9569(0x30f,'M41n')](_0x1089ca)>-0x1){_0x16b077=_0x1089ca;break;}}for(let _0xbc63db of userCookie[_0x3c9569(0x2d5,'V6KU')](_0x16b077)){if(_0xbc63db)userList[_0x3c9569(0x243,'8M[J')](new UserInfo(_0xbc63db));}userCount=userList[_0x3c9569(0x353,'[^hj')];}else return _0x281329['resolve'](0x1);}else{console[_0x3c9569(0x26a,'8%x)')](_0x3c9569(0x36d,'8%x)'));return;}return console[_0x3c9569(0x306,'^84@')](_0x3c9569(0x297,'8Hf2')+userCount+_0x3c9569(0x23b,'8Hf2')),!![];}function populateUrlObject(_0x327f6b,_0x2c7082,_0x4c9562,_0xa9e8b5=''){const _0x5c2592=_0x2c597e,_0x211638={'KaHIK':_0x5c2592(0x254,']*wE'),'bJabq':_0x5c2592(0x365,'0UN^'),'HPHru':_0x5c2592(0x2f9,'imuL')};let _0x270ae7=_0x327f6b[_0x5c2592(0x2eb,'omPC')]('//','/')[_0x5c2592(0x1fd,'2CgU')]('/')[0x1],_0x5ccfbb={'url':_0x327f6b,'headers':{'Host':_0x270ae7,'x-ac-token-ticket':_0x2c7082,'API-TOKEN':_0x2c7082,'FRIEND-API-TOKEN':_0x4c9562},'timeout':0x2710};return _0xa9e8b5&&(_0x211638['KaHIK']==='Zovdp'?_0x1aaa10[_0x5c2592(0x226,'$mib')](_0xceab96):(_0x5ccfbb[_0x5c2592(0x20f,'u%bk')]=_0xa9e8b5,_0x5ccfbb['headers'][_0x211638['bJabq']]=_0x5c2592(0x1eb,'^84@'),_0x5ccfbb[_0x5c2592(0x2ae,'pdH8')][_0x211638['HPHru']]=_0x5ccfbb['body']?_0x5ccfbb['body'][_0x5c2592(0x206,'QiS@')]:0x0)),_0x5ccfbb;}function randomArr(_0x420b8f){const _0xcc6de5=_0x2c597e,_0xd6c69c={'vBRsW':function(_0x2059f9,_0x4c928c,_0x55fdeb){return _0x2059f9(_0x4c928c,_0x55fdeb);}};return _0x420b8f[_0xd6c69c[_0xcc6de5(0x214,']*wE')](parseInt,Math[_0xcc6de5(0x235,'60(4')]()*_0x420b8f[_0xcc6de5(0x1e9,'iGlK')],0xa)];}async function httpRequest(_0x1b1aad,_0x3e6de0){const _0x45a54c=_0x2c597e,_0x3cca6b={'UbGzq':function(_0x17e64a,_0x44141b){return _0x17e64a===_0x44141b;},'mEnVO':_0x45a54c(0x3a1,'&KHp'),'pnTXa':_0x45a54c(0x330,'6RZq'),'IOWXF':function(_0x204365,_0x33e299){return _0x204365!==_0x33e299;}};return httpResult=null,httpReq=null,httpResp=null,new Promise(_0x2cc5e1=>{const _0x392f6c=_0x45a54c,_0xf685a7={'HlrUg':function(_0x563493,_0x1bcc4d){return _0x563493==_0x1bcc4d;},'DCRwu':function(_0x3aa57f,_0x4599cd){const _0x44c484=_0x1f45;return _0x3cca6b[_0x44c484(0x1cd,'MCOf')](_0x3aa57f,_0x4599cd);},'QYirl':_0x3cca6b['mEnVO'],'XGypm':_0x3cca6b['pnTXa'],'OcgoY':function(_0x9a1f13,_0x367f09){return _0x3cca6b['IOWXF'](_0x9a1f13,_0x367f09);},'ErngB':_0x392f6c(0x217,'8M[J')};$[_0x392f6c(0x3a5,'2CgU')](_0x1b1aad,_0x3e6de0,async(_0x24267e,_0x433639,_0x5dff02)=>{const _0x588317=_0x392f6c;try{httpReq=_0x433639,httpResp=_0x5dff02;if(_0x24267e)httpResult=JSON['parse'](_0x433639[_0x588317(0x26f,'*F13')]);else{if(_0x5dff02[_0x588317(0x272,'FC3x')]){if(_0xf685a7[_0x588317(0x283,'60(4')](typeof _0x5dff02[_0x588317(0x272,'FC3x')],'object'))httpResult=_0x5dff02[_0x588317(0x2e7,'QiS@')];else{if(_0xf685a7[_0x588317(0x30e,'KSvm')](_0xf685a7['QYirl'],_0xf685a7[_0x588317(0x1ed,'MCOf')]))return _0x5879a4[_0x588317(0x211,'60(4')](0x1);else try{httpResult=JSON[_0x588317(0x1ff,'LTtO')](_0x5dff02['body']);}catch(_0xd34c56){httpResult=_0x5dff02[_0x588317(0x27a,'HMUL')];}}}}}catch(_0x49e831){}finally{if(_0xf685a7[_0x588317(0x221,'HHZG')](_0xf685a7[_0x588317(0x218,'iDof')],_0xf685a7['ErngB']))return _0x22fa3b[_0x588317(0x3ad,'omPC')](0x1);else _0x2cc5e1();}});});}function _0x1f45(_0x244e77,_0x271dea){const _0x1b8cd7=_0x1b8c();return _0x1f45=function(_0x1f4537,_0xc12810){_0x1f4537=_0x1f4537-0x1ca;let _0xbee469=_0x1b8cd7[_0x1f4537];if(_0x1f45['fGjeax']===undefined){var _0x4d6ad7=function(_0x224599){const _0x5e8e25='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x28b2b6='',_0x4d4a98='';for(let _0x270e77=0x0,_0xaa4959,_0x44d8ec,_0xad5a43=0x0;_0x44d8ec=_0x224599['charAt'](_0xad5a43++);~_0x44d8ec&&(_0xaa4959=_0x270e77%0x4?_0xaa4959*0x40+_0x44d8ec:_0x44d8ec,_0x270e77++%0x4)?_0x28b2b6+=String['fromCharCode'](0xff&_0xaa4959>>(-0x2*_0x270e77&0x6)):0x0){_0x44d8ec=_0x5e8e25['indexOf'](_0x44d8ec);}for(let _0xff5651=0x0,_0x5d3db4=_0x28b2b6['length'];_0xff5651<_0x5d3db4;_0xff5651++){_0x4d4a98+='%'+('00'+_0x28b2b6['charCodeAt'](_0xff5651)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4d4a98);};const _0x4b109f=function(_0xef5676,_0x2b5f92){let _0x2b5832=[],_0x4d4cc5=0x0,_0xb03001,_0x1f0768='';_0xef5676=_0x4d6ad7(_0xef5676);let _0x1c4416;for(_0x1c4416=0x0;_0x1c4416<0x100;_0x1c4416++){_0x2b5832[_0x1c4416]=_0x1c4416;}for(_0x1c4416=0x0;_0x1c4416<0x100;_0x1c4416++){_0x4d4cc5=(_0x4d4cc5+_0x2b5832[_0x1c4416]+_0x2b5f92['charCodeAt'](_0x1c4416%_0x2b5f92['length']))%0x100,_0xb03001=_0x2b5832[_0x1c4416],_0x2b5832[_0x1c4416]=_0x2b5832[_0x4d4cc5],_0x2b5832[_0x4d4cc5]=_0xb03001;}_0x1c4416=0x0,_0x4d4cc5=0x0;for(let _0x16f914=0x0;_0x16f914<_0xef5676['length'];_0x16f914++){_0x1c4416=(_0x1c4416+0x1)%0x100,_0x4d4cc5=(_0x4d4cc5+_0x2b5832[_0x1c4416])%0x100,_0xb03001=_0x2b5832[_0x1c4416],_0x2b5832[_0x1c4416]=_0x2b5832[_0x4d4cc5],_0x2b5832[_0x4d4cc5]=_0xb03001,_0x1f0768+=String['fromCharCode'](_0xef5676['charCodeAt'](_0x16f914)^_0x2b5832[(_0x2b5832[_0x1c4416]+_0x2b5832[_0x4d4cc5])%0x100]);}return _0x1f0768;};_0x1f45['BGMlil']=_0x4b109f,_0x244e77=arguments,_0x1f45['fGjeax']=!![];}const _0x2c1cf3=_0x1b8cd7[0x0],_0xfa7c5=_0x1f4537+_0x2c1cf3,_0xcc085=_0x244e77[_0xfa7c5];return!_0xcc085?(_0x1f45['DkIqsP']===undefined&&(_0x1f45['DkIqsP']=!![]),_0xbee469=_0x1f45['BGMlil'](_0xbee469,_0xc12810),_0x244e77[_0xfa7c5]=_0xbee469):_0xbee469=_0xcc085,_0xbee469;},_0x1f45(_0x244e77,_0x271dea);}function _0x1b8c(){const _0x4ae033=(function(){return[...[version_,'FYjsTjiuaYmwil.YcloUgmU.GRvU7MuAbATyFrBL==','W6NcSmoHBW','jmkAsYpdHqrMW6BdTw3cNYBdGSoDWRFcUCkdqrv5WRG','W7BcGmotW5VcNa','WRKSW7/dIJG','rLvtsr9ilwahW4tcKMi','W7xcLCoGWOVcVehdPL8','W44pW5Smwa','vIFdGge','AhrHdq','Avi4tmksBKK','W7BcGmoGW5JcUW','WRrWW73cJ2m','W75BE8k+WR/dIW','goIdO+AuTd4','ns7cPG','W6nSWQ9By8o0W5C7hvi1fq','WRxcKCo4','kmkJW5RdTmog','5lID6lsF5y25','kCouWOldPvJdG2tcIq','lSktpfFcJwtdGW','WQ0bsMtdUW','nComWOddS38','W7RcUbdcTG','W4v3E3VdPG','W4H8WPH7rmkpd8oVvmkKW7j2kq3cHLvcyuTYW4/cLCoDbSo7hmkwWQxcPxOjfedcK0BdQSkvvehcOSkRc1/cVSo7bmkNWPldSmowwuBdVSkxxLfvWPlcLmoTBvn0FW','W73cQSo8yG','W54cW5BdRhjRCSoEnSkCWQes','W4tcKGVcKwC','W5OWW5KCxa','WQTNvG','W5xcLYm','bSk1BZlcQJtcMYbxW6u','WOzuW7HgW61BzG','e8kPqJhcOIZcLYG','WRRcQSoRDbe','Cg8GBCkM','AWJdOvqk','W61wEq','g8oYsCk7WRFdLKxcOcBcNHpdJq','eSk1BINcRY7cLW','WR/cSCoktJW','FSk5ymkmW77cJCkfctW','WQeRyLddNa','e8kFws/cOG','W6tcRa7cUW','WQzSW6DTW4q','bCo6WQRcRrjKWOZcOCkMWOLHWOVcTmoJpx4','W4XTWOjSq8oD','WO/cPtZcRcBcI8kqWRydWPVdPW','B8keW4hdQN/dOeVcQ8oh','dwqvW67dGW','WOJcS8oozZhcISk1','WQSnD2FdP8o4W4/dPmomWOFdK3C','BgldJmk1W6C','WOiJW7ldNqW','p1pdV3KWuKldLSoRW7H5WOy','WQhLPQZLJPldTW','WQ9LW73cLIy','WPRcUdFcRcBcUmkE','DICjW7tdNSkUWQFcTmol','WQTNvSoAW73dMmo1W6uFWOpdIbm','W5vMWOHUuCoCtSkLvq','W6b7WO5SEG','dtBcOCkCmW','W44UWRm','tmo1cJLhWR/cOCoPWRBcMSkiW4VcQCkIgCoa','W4aNW6O7uCkdWRxdHKtcTwq4','W73cVSo9A2m','gCkEW4hdOmok','nI3cRSk9','W4pcOWxcSCo6','W4VOJBlLVlpcOW','vrGKWQa','CmkCW5BdNgGrWPtcO8kxWPuDWP3cRq','6lAh5yYjha','WO/cUCoXAItcSmk4imoOWPHKWRG','W6dcTHBcTSog','r1JdVd0h','wtBdNwGzimklWORcOJtcS8o/WPyasWe','WOhcRSo0FcO','W589AvG','wvddRtC1eaLgWPK','WPC/WPytW54','aUAYIoA5TowdGos5UoI3VE+8VEwcJ+AVTEI/MUIHHU+9Kq','W4yGWQbJ','EmocmbnLWO3dQq','j8kGwahcRq','WQ1cW4lcKKC','WOZcScVcRcC','W4rwz8kpWRC','W4jNWOHY','i1pdQ0W','5yIi5yMLdSkM','WO3cTmo3As8','WQzAW7HGW61uDHb7qYpdKSo3WRe','W6/cSmoRCW','W6umW53dU2W','WRBcTaNcIq8','mSkznLBcHG','fCkJb3BcUq','WQatWOWp','W4GPW7KB','CCouW5pcLgHCWPdcNmof','W4SqW73cHre','WOCIW7hdUrPoWPVdKCkxcdnS','lSokA8khWP0','WOH1W6dcLey','W7P+tCkuWQG','W6vqBMFdS8oiarzx','5ywg5OMh5yQ+','WP8sWQGYW5G','CeVdMCkiW6u','mCoDW63cMq','WQquWPOcW6qWWRFcUCkp','W4OKWRvMWPFcLru','W6D3WRXQFSkQWRz7dfGMhX/cJCoMW7BdMYBdQmkmk8kwW6/dNcWAbCoIuqRdMty2c1/dU8ofz8kjlfbhkeC/kYi9daLmimk8WO7dMCopzWS','c8kCW6ldHq','WPRNRjZLIkaC','W7auW5lcIq','W7ZcVbZcT8onpsu','WQnEW7P3W70','W5hdOYhcRK/dNmk9','dmk/EGFcRtZcVdvgW75yWOi','l8kqsIpcMa','W4ywW4G','W4mZW7WFAW','WQfkW7BcQ2a','W58iW4ldNN1Owq','WQqnFvBdPCo5W7xdRSkvWOldNgddH23dOCkDpsW','W4CWWR1eWPC','W4dcS8oBW7ZcMhBcPhddT8oReJS9W6ZdHuC','pcFcQ8kGb8oByG','W4HTWO1VuSohuW','psZcVSkHbCoBCmkqkZ3dGcC','D+wbJEAWGoIoV+w/PHy','W792WRTY','WR1WDmodW5e','dCoVu8kQ','uKldQmk2W4WTW4i','W65vCCkJ','W545w0ddPSoEWOG','WQfYW7JcG3KPW7H7DcvK','W6hcHmoM','W7j3C23dHa','WRZcNmo+CWG','WPddP8oqW7dcNxVcUW','6lw55y2lW5S','W50+W4qp','WQqnFLldRmoYW7xcPSomWPFdHwS','C8kyW5pdMa','jZBcQ8kWbW','W6jwBMpdGmoIbrjrswq','CK4Js8kmjWe2W7i5oCkbmxqEy1KPWQn4sLzsW4dcMXeLqMiGW5ZdL8o3W5/cLYlcHIT0W4qHW7ZcUmonW4uWhMRcGXhdNCkikCk5c8oxW7ZdK8koWRNdT8kxEmkVWP9RW5FdSbvsuCkKhSoTvmkMemoqW6e','oCozW7lcIbWIwmkPW7j4','u1JdUJ0','6lsm5y+nBW','WQVcM8oSjSodtfa','veBdPmk3','W4SZW4e','aUs/NoAEICog'],...(function(){return[...['6lwg5yYNrG','Dmk7rCkjW4a','WRetWOSpW5q3','tKJdOSk3W4C','W4aiW4ldGNb5wq','WOBcVb7cNqa','W5G8EW','ioADPEIVGUI3UoAlRUwMG+I0L++/JEwoIUMeTowLKoAwToAkOUAJLEAEJEwoLUMeKUAHV+w/Sa','zSo1ymkFW7lcMmkZeIJdKI7dICopgmoLW6y','W7esWQXGWOm','W7JcTHO','ieZdTfeQ','sr7dGCofCCkF','W5GLWO1OgSobt8kRvmkPWQPXnahcGfve','W55Vsu3dVq','gmo9FcxdRIZcNtfxW7KtWO/dSt3cN2JcVG','j1xdVa','WRWcWRTb','WOFdSGz5FSklnSoJsbFcUde','WPZcUCoXCG','W44+W5qKtSkYW593W4ZdJ1P9WQjF','WRj7vmoPW6a','DCkYDCkjW7lcJ8kF','WRqhyLddOmo/W6tdISoBWO3dMNVdGJq','W6vnygFdGG','WOpcRmoSDI7dMCo+AmoJWQLIWRSJbJZcGg3cVeT4mSkMx1jLWRunW5lcTSo2W6aIyCkwWPLGwmkoW6jhW7tcUCkRjx7dNGnSb8kkWQLWW6iNbYxcTMdcKSk+W5xdQ2/cT3VdH3i7W6xdKCorFW','W69rq8k7WRZdJ0a','WQmdzeC','kCkusZy','WP7cVJ3cTa','6lAG5yYwW4K','W4q6W7RcQmk9','WQfLW6pcKN4HW6zGzti','WQWiWQ9uqH3cOq','W5iGWQzXWPC','W6yUW78Ewa','l8ohWOq','WOVdPXTLDmoICmkRqYBcVJldOaT0qMJcOWyoiINdIwBdG34RWQu8AmoxpdxcJ8k4Ev5MemkeWRhdRG9UBW3cTWddS8oxfMNdG8obza1mw8kBnCoQW7C','fw7dKx0qCIhdUmopW5GYWQVcQhVcUCol','kSkmtZC','bmkXAsC','ceFcH8kb','nmktlLZcHgddLq','W6NcVSo7AW','C3PVocW3cSopW57cImkurG','aCk/DHBdKa','jKRdVxK2','bCkzm0FcJxJdHhjDCrqcqmoS','W47dKGRcMv4','W5FcVIVcMmoN','WRhcK8o3cSoT','W4icW4ldMq','WRCdWRTDwW','WOfuW6j1','W6lcGmo7W5xcR2hdOfBdICoWtb8','zSoijd1NWP/dGSohWPlcUSodW6y','BmoolWHSWOK','W6f/ymkZWRS','auivW4xdSCk5mW','DMS4wCkP','vKJdRG','dCoHuSk/WRq','i8k8W5fjsG','6lAQ5y+ntG','WR4hWPic','bttcHCkvna','ic3cOCkHda','WRGdWP4dW543WRC','jmkttZhcTG','W6/cJ8o2W5ZcRN3dRW','B3r6gc8','sehdO8kLW68','W6nhEg3dGmolfW','rKZdRX4l','pKxdSvW','W4ivW4ddRNm','WPpcVZZcKJ3cTCktWRifWQhdVmo9W4ldU8o+Dh/dNa','WOtcU8oIzcC','nmk5vIRdSW','AwNdHCkcW5m','WRGeWRnmrGW','hUwhM+AWI+wgHos9I+wpL+AkSEwjVW','xKBdSmknW5S6W4zkW5hdPWKAWPpdGa','W6vlF27dIq','WP7dTfddVSkfyNVcO1LwFwhcUxddLSkV56wc5Qs26lYh5BQKWR7dGYGMqMLih8ojWONdP3PGAbe','ufZdUG','rfTzBq','C29Hxca','WOJcJmo0W5lcLW','6lAm5y6oW7q','W5lcVZdcI00','WOFcT8o/','W51qWODjvq','rriZWRBdPSkxWOK','WQrVW7xcGW','b8oQCmksWPe','t8k2gmoMW6NcGGlcUt/cVHJcN8od','W6dcUa7cUmoKjIxdUG','6lE/5yYjW4q','aKyvW4a','B8khW4ddSfpdGxRcNCoc','W6j6WQf+','f8kCW4vosq','CSkCW5VdM2GtWPhcTCk+WRi1WOVcMG','W4NOJA7LV6RdQq','W4mxW4VcOqS','WPiZWRq9W7C','W5mZyeq','WPS+WOGYW6W','W5v9WOPjDq','mMVcGcLDBSohW5pdPNBdSmo9W5fEcu/KU7BLI4lKUzNLIBZcSLFdUSkZySkUW6D/xSk8W7tcVtznW7C','wuNdVCkZW4aVW5HfW4q','amksW7Lfva','WRijWPSE','W6OZW7NcRmkB','nSopW47cKXeR','W7/cMGNcNmo7','hSoRWQJMO5tLVzpPLlNORy4','W4JcKdpcH27cQSoQWR8','W7boCM3dOa','WQFMMBVMLz7LJjlPOBe','W5P/WQddIa1bWQxdJCkN','W5f9W5KjwCkYW7DJW43dJNDmWR5wWPW/','x8olosT6','WOpcSCoqW6NcIMpcRKpdSZjNvmk6WQL9pmoXe0NdSHWkW7iImSk5A8owWR/dV8kFjvmvWQ4aWOJdUKVcKSkdr1hcJIpdJSoCW7FdMCoThNCvW7asDmo3W6W','DLuW','WPuIWO93za','WObwW7xcOKe','W6y4W5tcUCk0','oc3cRq','WPdcVJ4','o8oDW7tcNq','WPRcKCodW5xcOq','WQHWD8oTW6q','W4xcKbdcKmoh','W47dPYNcVG','WRadzepdU8o1W6/dRa','m8ozW67cMWeM','buGmW5hdVmkOjJCyo35i','wXGN','WOP5W4xcH2qMW7W','WOJcVJlcQcq','WQNcN8oToSok','EfuZqG','WRnVW7RcG3K','W4qmW53dHhG','WR9pCuxcPmoOW67dOmoDWOdcMhRdHspdVSkzoG','W79SWRTU','w1BdQq','dbpcICk2iW','jmoPvmkzWRm','BLu8xSkr','oSkztIdcLW','mcpcVSkL','wK9hya','W7jnzxBdICotbL5rvwBcGW','WR4HW6ZdRWC','sSoDWQNcNSk2W7VcSmkZfWqbmSkH','WPVcUCoQzZa','FSovjHLwWO7dV8onWPq','W4q3WOfxWQq','W5bPWP5QwG','WRyiWR5CrGZcTW'],...(function(){return['WQJMNAVMIQRLIllcSCkSrUIVRUMANoITV+IfN+ACR+ISTEAzTG','WOJcUd0','jg7dM10Z','E0tdSCkHW6W','WQrNxmoRW7/dMCopW680WONdGb4','W6bvCG','f8kXDdi','xXiHWR3dR8ktWP8','m8otW6C','zxpdVCkUn8oJumk5oq','WOfsW5JcO1KjWQjBuaK7ymooWOxcO8os','W47cJc7cHwdcTG','dCkiW73dHmoM','svvqBq','fvmtWPpdUSk+ptW','WRRcN8oXfSolvq','cEAXTUA4VUwdUos5R+I0MUA1LUAZIeNMRBNVVQlLGj/MRlBOV4ROO7/VVki','ySotnWX6W4hcO8khWOpcSmoqW6ZcKSkgmCoRdmotW6G7W4NdGSk5WR3dLmkbW78QFHdcOJH/WRXdAGtcHslcQL1rqCoqfCklWPHemSoXWOJcRmoIuIr+DvBcPxXTnXddRG','W6hcSmoO','lmksW7baAa','gUAvIoIcG+AjG+wiTKhLIBVKV5RdOG','W6PiFmk/WR7dGG','6lw15y+lW4m','W57cLW3cQCoW','xmkhxCoaW4pcSSkNiHu','W44yW5VcPq','WRyzWQTiuetdQ8kYoSkDoI9sdw4eW6VcOmo7W7TwWOOxfxDrW4NcJGJdNSogW6NdImkYvbNdKwvMW44uW5JdKSkiW4r1W5ddSCkYW5RcH8kGCG5WW4C/ymoHWRz3CmkTWRxcGbG','iow6RLtcV+A2NUAYHG','W483FK7dPSobWOK','WP1VW5vEW7S','CCkYESkkW6pcLq','pCoukvlcM33dUtTInKa+bCkWW5VdTmol','6lAB5y6LvG','l8onWO3cJYHi','5Q6t5RsQ5Rkf776S6zQt5PY156215BY0','BConiqzJ','6lEA5yYMaG','W4ZcQbpcQ8oA','WP3cM8o9Cq0','x1ZdRZGpdbS','W5dcOvOMn8oVpmoNtWBcJI8','W4axW78kDa','W7WkW5NcRYe','xKBdVCkZ','Bw/dOSkzW44','WP/cUCoRBthcHW','WOBcGmorW7dcKG','n13dRfK','W6NcJ8o3W6BcOvpdVvtdLCo9vGegW4ldSN8oqW','WQqRqg3dPW','pv3dTv0','WQ/cSHlcNWe','WRb5vmo1W7O','WPtdJhFdLtJdQSkZWOFdL8kSWR7dGmo4','u8kLqSkkW4u','a8o2WR3MORZLVkxPLRpOR6u','WQmdWPed','BCocnW','f8kmW7/dISo2WQa','6lEn5y66W40','WRuhy0NdPCoQW6q','lcm/sxjHf8oyW4/cO8klCa','W4fQWQbzxq','WONcQSoaW6a','WQWiWQXxtWJcOq','B0VdS8kfW5O','xcFdMwu','WPtcTdJcQs/cPSku','dmkxpgFcOW','WR7cP8oJW6pcIa','a8kbW7K','Bxb7fI4Liq','WO9BW4DrW50','WOdcOCoUDqG','CCk4C8kSW7NcMCkIcc/dNJRdRW','WQ0FW5/dVtPUW7JdV8kZkhHbuCkkWQ3cHW','wMZdVH0j','W4BcRc7cKfK','e8kmW7ddICoNWRRdSW','wSkoFCkzW7i','W5ZcJZlcSSoH','W5GCW5ZcQX9HW5S','rSooeJj4','bSksW6Dnxq','ocFcPmkJfSob','nCk6ur7cTa','W4KyW4hcMWbJW5VdTe4','W6Oay2FdGmonlqzwswtcUs4VW7/dGG','W6muW4/cNa','W4i6W4WFwCkLW5S','j8ksoq','WOSjAhtdPa','f1PTW7K','W7NcVSo8ywiH','ioI2PUwpL+wZJ+s5L8ka5l2/5PsH5Rkh5A235OMX5lMU5yID77Yz5y+t5yUN5yMg5lYF6io6','o8ksW6n2Ea','W4hcQYhcQqFdMSkHW6XgW6LeEmkbp8k+W7BdMq','DL85xmklDq','WOhdVaTS','w1FdUCk+W4a8W5bFW4RdRdHBWOZdNL0Y','cSkmCJldMGPH','WRpcGSoDW6NcLa','W5ChENFdKW','W4ezW4pcN3z8u8oF','vcNdIKuEj8kKWPhcVZlcU8kP','WOJcUCo2vdJcGSk1','tfuWWRJdRCkeW47dI8kNWPiDW41YoSo3Bt/dP8otocbnAf92pmkLWPS','bCkTqCk9W7tdHL3cQJFcLuZcImoDDGmRWQK','eCoVr8kFWRFdLNZcRIBcKGFcHq','omkuCu85W4NdO8o9WQdcP8ogW4S','WQb9ESoyW6m','kmk+lLdcUG','kSkzoG','Au81smkCB0D7W7i','CL87s8oo','WPhdTHX6A8kUoG','tLTaAq','WQmwWPmoW48','fCkJEdtcSa','m8ojWPhcMZK','W6XIWQziAmoXW70','WRqhWOSg','W4uvWPZIGidIGPZIGk7IGjBJGlC','m8oMiJHKWOpdGW','WPjuW79G','hCkBW7JdImoSWQZdT8khkXmk','WPdcTdFcQJ7cVa','WRGiWQ1msHlcRCoNoSkm','CSkkiH8KWO/dO8odWOpcVCkiW6VcJ8kkn8oRcG','yaRcRWHUbf/dGCo6W5nMWRa','W7vIWQbtqa','W44MBfxdRW','W44+W6VcUSkt','WOLAW7fvW6zEtfjdtYVdJa','iCkzuWFcOq','h8oVrmkN','emkAW7e','W75FzSk1WRZdKee','WPZcImonAcq','fKNcMCkq','WReGqLxdNG','WPNdSqLrsa','vbrtWPlcOmo/pqCblhnO','W6RcImo7wx4','aSkhsdtdQW','WRFcN8oYla','WP9lWP/dS0iLWOBdGu/dRL3cQtW','wXGNWPJdPmkfWQlcNSoXW4PzWPG','reZdRc8jdafjWPK','WP7cQSo0','ChTTjIu2mmo/W53cGmkgwSoZ','WOxcRmohW7lcPJFdOahdSW','W7hLUABdUrVMTBJMS5pOJyZLVl4k','W6mRW6OvzG','kXhdUvTZqMpdKSo6W78YWOVcJLpcL8oGW7C','W5KVW4essa','yHC2wmosAufYW7i0yCkglhGyy18','ECk2ymkm','rLvt','5y275lMl5yUv','6ysw5BIjeEEmQ+AEMUwMLUw7IoMfM+w5QSoq'];}())];}())];}());_0x1b8c=function(){return _0x4ae033;};return _0x1b8c();};var version_ = 'jsjiami.com.v7';

////////////////////////////////////////////////////////////////////
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else {
                s = this.setval(t, e);
            }
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["content-type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["content-type"]) t.headers["content-type"] = "application/json";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}
