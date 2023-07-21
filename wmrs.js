/*
完美人生App: 一诺庄园

变量：捉包https://hms.cignacmb.com域名headars里的Authorization 多账号换行隔开
格式：export ynzy="Authorization=Bearer_xxxxxx"  


*/

const $ = new Env("一诺庄园");
let envSplitor = ['\n']  //多账号隔开方式
let defaultUA = 'Mozilla/5.0 (Linux; Android 10; ProjectTitan Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.186 Mobile Safari/537.36 ;hmsapp/5.5.36;HMS_APP_SESSIONID/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaWduRGF0YSI6IkQ2QkY2NTRFNDA5N0UwMkMyQzJGRTVCQzFDNjg0RTg2OTI5MjQzIiwibG9naW5UaW1lIjoiMTY2ODAwOTAxMzY5NyIsIm5iZiI6MTY2ODAwOTAxMywiZXhwdCI6MTY2ODA5NTQxMzY5NywiaXNzIjoiSldUIiwiZnJvbSI6IkFQUCIsImV4cCI6MTY3MzE5MzAxMywidXNlcklkIjoiNjczMzQ5NCIsImlhdCI6MTY2ODAwOTAxM30.jFay4AUDuTq0ZQd2bzgGFw_WUZOz-An3UQc16aItE00;' //换成自己的UA
let list = 'param=eyJhY3Rpb24iOiJNQiIsInNlYXJjaEtleSI6IiIsImNhdGVnb3J5IjoiQTA3Iiwic29ydFR5cGUiOiIwNCIsImludGVydmFsIjoiMDAiLCJhY3Rpdml0eVR5cGUiOiIwNCwwMywwMiwxMywxNCwwMCIsImN1cnJlbnRQYWdlIjoiMSIsInBhZ2VTaXplIjoiMTAifQ=='         //库存监控body，默认虚拟卡类 如需其他自己抓
//https://member.cignacmb.com/shop/member/interface/queryShopList


var _0xodH='jsjiami.com.v6',_0xodH_=['‮_0xodH'],_0x1081=[_0xodH,'UMK6ZRzCnMOfQMKuJAsPGA==','6LeR5Y+ldA==','wpXCqsOo','NMOJchkG','FGhFwr9dw7R7','w4I7RAZ3w5fCnQ==','BcOYLA/CkA==','QUzDkUnCjwLDhxjDpjgMw4zCvMKdfx01wrl9w4HCi0R9VClCwrYiOcOLWMK+Jw==','GFxGwp8=','w6dbw54+w70=','wrLCrV7CisK2wpTCvSBkwo3DlFfCojzCgXfCicK9RS3Dm8OcM3DDqV/DncKOMkY+aQzCscKePAfDvcKzMcKHe8Ozw6XDhWR2','w6xjw4sjAMOjNQ==','CsOwVBo0','bGfCn3g=','wrDDtMKjwqI=','wokVesO1dg8=','SQLChMOawrfDmAg=','E8K8wrEQw47Dt1DCtcK3w5LDhg==','BsOHMxI=','LHRpwoPCtw==','fz52w7Y7WcOww7ABLnoQeMOtwpQGwqPDgcKcdhRbOHd2wqdoW8OPwrnCiBMmB8KWw6nDj8K/QHokw5HCvAHDmyXDiydrwrTDsQ8Mwrd1w7tIwovDhGXCrQ==','Vj92w64nEcK2wqUIN2BRdQ==','NmTCqUzCrA==','XcKmQsKowrDCo08=','HcKUwokxw4U=','w77DqSUIwqM=','NsKsFwDDqQ==','HFU4CSU=','fC/CnTEfVMO5wpnDj3BTwqw=','w6ElwpswwrM=','wrgzX+airuW8jemVvuitsw==','UAjCvCtEKlkAwp3Cl8KEwoA=','6LWR5Y++cA==','NcKEwrE=','w57DjCU/wog=','w4F4QyB1Tit2wqHCo8OXwoM=','6LW+5YyAwo0=','GWhGwog=','PXMNKiXCp8OKw6fDk8KmDV8=','w7/DmcOxACDCksOqwprCtsOow48Lw604','LFUSGg==','EsKmwrMFw47CuTzDu8Kxw5vDjMOww5cmwojCjiPCvMK5w6fDhcO/w5PCvkpFIcKTwo/ClDjCiDTDohBxQsO/w7JsAlwow43CiMO4w75MwrDDq8OyW2Jaw7gswqfDhMKoasOYwo8=','O0ZWwo7CqsKAw6TDrDJfLMKnw7M=','ElZDwoLCoMKAw74=','NMOfVGwS','NntWwoHChg==','wpjDqMKDwpfCkw==','6Le05Y2TXg==','wo7ml6vor5TnspXDpcOX','w75vw6Q5w71+Bw==','PsO6UkE=','w7xrw6U3w7w=','PsO9GsK6w4Idwq3DkMKxWEhSew==','M8O6L8Kqw6o=','wpjClMOKRRo=','w5wxUyt4w5DCtsOZdcO7w5Ft','w5Hnjrrmnp7orqzns6LvvJI=','w7Zjw5k3IcOwMsOK','VFPDlUTCijLDhQPDvTI=','RMKqRMKtwpA=','JVUWCcOk','A1xVwoHCjA==','6LWZ5Y2/NQ==','DsKNwqs=','aA/CmMOFwpfDhx5v','UMOhYEEi','5p215oqg5YmkAMOSYOiun+mbmuiulOiHrOackeiuqOaYow==','SMOmTUQCwpPDjsOx','wp3DjsKdwqzClA==','wq0KXcO7Tw==','a8OhUUA=','K1ELAsOn','NsOpEFrCjg==','UwnCgg1H','eDTCjgACCsKYw5nDlnxYwrcZwpbCrhQ0w5AiwpBMaMOJfcOKwqwGBUrDo8K6woplEcKoWcOOMCLDhMOUwq8wwrN/w7Eew4TCisOEKsKgw6TCqMKBSMOkw5ABwqnCvMOmw5Y=','P3ccLiE=','T33Cj2lJB8KeOMO/wo9Lwr/DnA==','wo1eYCjDiA==','KMO+w4XCv8OlZMOGCsOtwpjCpQ==','Wumcs+imow==','wpPCv8OWUg7CtlPChQ==','6K+057G7w5vlupLlrb4=','wqDDvsK0wqvCuMO/w7Bc','w7g5wpAxwr7DnnTDicOpVW4=','wo4rwodqSMK8a8KGwqo1NDnDqkXCucK45Y6N6YSK5qKC5rWHwrnDuCzDtMKew4PDiy3DiAfDjS0AAsOQ','woPDkMK2wo/CuQ==','LHbCvG7Chw==','U8OlHMK9UQ==','w68qwpnDucKjaA==','GVh0wofCqcKbw6k=','w6hpw40GC8O1CMOEw7Nxf20=','P+mDmeefhuWPtu+/j8ObNuKZuO+6jOaeueWsn+aWsOS5oeWKj+WLsuW/nuWeg8OJw4tl54KJ6L+m6KG95Lii5q+lw5s=','QREm','GMKhwo5Bw6ME','wqhiw6rDgAQ=','YsObeFMp','6La05Y6zIA==','YGnClmQ=','wo7llZ/ns7jmnbrDpcOX','URTCvA==','EcONSBYk','wqQyUsOhYw==','ZsKSZ3o=','PsKyOA==','wpTCtsOoFcO5I2TCoMKcwp0QLg==','c8K9e0DCrw==','wp7CsMOjIMOyNQ==','LcO0T2chJTs=','wpTCvmbClcKU','CU4HPMOu','bSTCvxzClw1f','w7g+wow9','McKZwqAuByRQwrjDrSPCnA==','w5p2TRU=','TBLCqAI=','L0jCl0wTwrVQHcKVwoo7Xg7DqcOT','w6UlEsKt','RAkrw4IA','OsOVw6bCjsOX','TAbCnsOB','DMO9DMK/w4QbwpfDg8K3Qg==','PMOgMH/ChwfDoQ==','wrHCtsKh','w6EsFMKuwqJYfQ==','eMOvVlcm','wp7CsMOhNcO7K1M=','K3kAKg==','IMKRwqLClsOeEcOeGijDrTbCtA==','cTDCihwYU8OWwoLDknZbw7oEw4nDtwAqwpoqwp5daMKGJsObwq8ORFrDpMKxwp8uR8KuXMONJyPCjsOJw7wRwoJLwrpH','woTDuMKGwrbCrQ==','VynCoDEG','wog9bcOhdg==','w5cXw4tnQQ==','w4jDox4Cwps=','wp3Cr8Kfwpot','MsO9PMKaw50=','HMKnwoZM','N8K7NSfDvDIb','OMK0NgfDlw==','S1TDu2LCig==','IEjCgn0FwqJR','ScKRaxLCtA==','w494QBg=','D8KbwqLChcOPFw==','w74hFcK+wrtD','6LSG5Y6KEQ==','w54/WQ8=','JV7ChA==','woXCvm/Ci8KO','ZVHComhe','wobCtWXCtcKT','G2ZM','5Lmc6LaO5Y63','XRfCqwZDLXYbwoDCkcKMw5bCnsKGw6sGwqoiB8KzwqNrMsKOwozCkRsXwrvChsKdC8Oy','wpDCskDCksK6wpnCqHlZwpvDih0=','KV3Ck3UJwrNDPcKdwpY+PR/Ct8OQwojCvcOYS0PDtcKAD2wYJcKeLsORwr8pw5wuwoTDnsOsw4RlwpDCnmhgwoxrMlrDpA==','f8K6bCnCl8OVesOsHAcHBkxe','O13Cj3AU','IcO8dlIw','w4MtwoDDh8K+','JsOgInTCjgPDtw==','dSVmw78=','wr7DvsKpwrzCiMO2','FsO7IMK9w4kK','N8OrOWk=','S8Kuw7MJwo3DvyHCqMOq','wpLCqsOJSz4=','E8Kfwr7Cg8OW','PcOxMSLCgQLDq8O+','HcKjwrRUw6ofwrk=','FlxFwqfCq8KWw4PDuSdCI8Kx','6LW+5Y27w7E=','F8KmwoZQw74=','wpbCuMOiMQ==','w5XDjsO3PwM=','dsKsTcK4wrDCv0jDtcOPw5XDqyHDrkY=','CcOkClLChA==','Ym/CvVFA','ZcOkJMK+YQ==','IcOhZnQN','XcK3V8K8wqbDqxPDt8Orw53DtmjDuUc0dcOKwpzCiz8eVV5Pw6vCsGohUHEhw7bCqsKqa8KaVE/DqiAgw7JOccKNBFpsa3QcwqjCi8KECiPCm28xPMK6Z8KWwrc8wpPDqkk=','XjTCuBvClAlTGwvCnhNjw6E=','McK3LhHDjg==','dcKCehTCmw==','OcKuwqwaHg==','wqPCrsK/w6A3R8Kbw6U=','X8K+VDzCnsOSag==','6Le25YytwpY=','Tl3DjEA=','w7vmlYzotIbmiLrljq/mi6HliY8=','w5wCw7pOVg==','RsKWZcKvwoU=','KsOpw5nCtMO8ccOX','JELChFgOwrRsJsKAwpA2aw==','NsKWwrsu','w4rDihYowqDClcKeRyoCw6rCvw==','6LW55YypDw==','E1/CtUE=','PuaUl+i2u+aKseWPmuaJr+WItQ==','ZS9xw6kkFcK6','w6IlCcK4wqIWf8K4w7FGw4siw7AuwphzworCi8KGw6MyS8KDworDkng=','PU1PwrxV','w4Esw65FQw==','w5MxD8KxwqBZc8K7w5paw7t+w4w=','w7pzVTNS','w7ouwowlwojDkmTDoA==','FFJPwoM=','Quesv+WLvOiPhOW9rA==','wqHDssKgwrXCr8O9w6tPIQ==','wr7DtMKgwprCksO6w4pSMMO3w5BN','6Le15YyqdQ==','wr7Cu8Kgwrc=','TsKwcTLCnsONaw==','Rxg+','HMO2SUEW','esORN8Klbg==','V8KlYkTCmg==','fy9jw6ItEcKs','YxIkw50nasO6woLCs8OHw6QEwrMG','csKeUC/CtA==','bDHCqRDCkhpWNQvCmRE=','ZcKTdWbCrsOR','csKGYHM=','PXMNID7CtcOmw40=','wr7Cu8Kgwrds','PcOlRFYtJTPCscOQw44u','VBw5w4IMZcOjw4o=','eMOVJsKhasKcaMOzw4fCo3pz','FMKTwpQmMw==','6LS35Yy0woc=','wotRw7HDrg==','woFRw6jDqg==','w796w7I1w7hpDsKbw7LDr8O0','ayDCvxjCtRpXBA==','w4XmrZTkuafliKrltqTlr43miJk=','wqHDq8KrwrLCiA==','FFDCvEHCmg==','w512VgB2','O1nCkSsKwqNNJw==','LcOuFXHChxjDoA==','G2ZMwqxWw7FRw4EdHcOgPw==','6LWo5Y2yGA==','McOiw47CvsOo','fT4B5qKV5b2N6ZSd6K2h','VQnCvw9S','HV1Owq7Ctg==','VhTCmAgo','Z8KgS8K4woc=','IXcDKg==','w5XDlRQKwqfCkMK8fD8Yw6c=','wqbDhXbCmMOgwo5AwoU=','wrLmrKDkuoDlibjltL3lrqfmiIo=','PsKyOBfDuDMD','DMO8D8Kmw5gc','O3cdJALCsMOCw4w=','PMOtw57Cug==','LMKWwqUgOjF+wrw=','b8OvUV8NwpXDmcOg','wrbDusKzwro=','OsO0Ul4HKzvCgA==','B8KfwrjCgw==','wpcVd8O9cAPDlcK+','WAbCrws=','a8OcKcKQYsKZZg==','DVJLwpI=','VUzDhUTCkgTDsg3DvDwxwpfCpcOEfRk=','MMONbR8OacOt','fcK4dDbCug==','OFNIwpVx','C2PCjVsF','T2TCs09T','H31fwp1Lwq8wwoEBGcO1aEYxDsKWOsK7LsO1BcKGw5jCusOYS8KIwo/Du8OCPsOrB2XCuyvCjjPDncO0csOQwqrDpX/CiMOgb1tWfcOyBcOsMcO5wqvCpMOnwo7DhcOoF8OdWSFmHGhP','wqfCvF3CjcKcwpjCuDEw','woNzXDLDqlfDicOa','wqvDi1DClMOA','G8OpGsKz','L8Otw4PCrw==','wqLCv8Kuwr0vUMK9w68=','w4I7Vw9/w4LCncO1YMO8w5Nt','w74rHMKYwqFPVMKuw49Hw7Ro','6LWc5Yylwpw=','w4jDhBwM','I8OffwIGXMOnwr7Cu8KBwr3Clg==','w5LDl8OyEQ==','Yea0qOikkw==','AsOJMw3CqsKzflI=','wqzmra7kuazli7fltaPnu4flr67mi5/kuJU=','UlnDgkrClAXDrwg=','cSDCoRbDig==','PcKmwqUEw7g=','GMOJLQM=','ZS9xw7YMAsKrwr4=','EMKXwqvCjMOoHMOFRRk=','wqDDvsK0wrTCkMOow6E=','wqLCv8Kuwrc0QsKRw4jDq0gDag==','wpVfw6/Dvw==','GMKPNyXDnA==','woXCiMOHdh0=','w7owD8KpwrwRNcOuw5NDw6E/w4E3wp0vw5/CgcKkw6hWZsK9wo7CtyDDgMKaVMO7JknDoMKWwr4qFjjChDEvwqHCtcOrw6DDozDCuBAew4JtwqLDl2fCgcONw6Jhw7osPA==','w6AhGMK2wr1PU8KlwoY=','PsOkMXHChg==','w6fDkAUBwqHCg8K5Uj8fw6XCqcO0','fcKKbXTCtA==','O1nCgm0VwqNhJsKQwpw=','G3zCk2DCtA==','w6BSaBtQ','Vxwjw50=','6LWQ5Y2fGw==','Femiq+WMtSNA','IXcDKn0=','woERYMOz','6aKi57CV5p6/8YyOuQ==','VwjCkMO0wrXDiiN0eMOowoPCgQ==','6LWo5Y2ieg==','OkjCkGkkwrVRKg==','Y8Kmwq8RMRnCqA==','Ll8SAcOBQz4=','wqLDi3bChw==','EsKmwrMFw47CuTzDu8Kxw5vDjMOww5cmwojCjiPCvMK5w6fDhcO/w5PCvkpFIcKTwo/ClDjCiDTDohBxQsO/w7JsAlwow43CiMO4w75MwrDDq8OpUGhLw7g7wq7Do8KzYMOgwpUuwp7DlMOQRAY=','w7gqwo00wqY=','M8K0wq4yw5s=','aCUAw4MU','FFAbD8OL','G8K2AQTDqQ==','w58WwrnDmMKh','w7dyw4szEMOiBcOEw6N9','6LS55Y62wpc=','UgbCtg8=','wqXnrpDnuKg=','eyDCuBI=','PXMNKiXCp8OKw43DvMKoD1s5woFOLg==','XBXCmMOCwq/DhiF+esOkwonCuz1pwpXDv2d6wqM=','8KiNlkE=','MngXI8O3','CFZBwoPCrMKEw6jDsh1KKsKlw7TDrMKCFw==','FFErCsOn','w5gDwqsGwoA=','TOjsyjiami.GRGcoxm.vnW6gQWeINUq=='];if(function(_0xb472ac,_0x154a74,_0x5b87d3){function _0x5d08f3(_0x21441b,_0x4774aa,_0x105f2e,_0x58db58,_0x2c1faf,_0x1cab6e){_0x4774aa=_0x4774aa>>0x8,_0x2c1faf='po';var _0x3c104d='shift',_0x4acf38='push',_0x1cab6e='‮';if(_0x4774aa<_0x21441b){while(--_0x21441b){_0x58db58=_0xb472ac[_0x3c104d]();if(_0x4774aa===_0x21441b&&_0x1cab6e==='‮'&&_0x1cab6e['length']===0x1){_0x4774aa=_0x58db58,_0x105f2e=_0xb472ac[_0x2c1faf+'p']();}else if(_0x4774aa&&_0x105f2e['replace'](/[TOyGRGxnWgQWeINUq=]/g,'')===_0x4774aa){_0xb472ac[_0x4acf38](_0x58db58);}}_0xb472ac[_0x4acf38](_0xb472ac[_0x3c104d]());}return 0x116883;};return _0x5d08f3(++_0x154a74,_0x5b87d3)>>_0x154a74^_0x5b87d3;}(_0x1081,0xa3,0xa300),_0x1081){_0xodH_=_0x1081['length']^0xa3;};function _0x4c75(_0x24da48,_0x874431){_0x24da48=~~'0x'['concat'](_0x24da48['slice'](0x1));var _0xf8c5a8=_0x1081[_0x24da48];if(_0x4c75['HrYmVf']===undefined){(function(){var _0x126a72=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xe7091c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x126a72['atob']||(_0x126a72['atob']=function(_0x53a417){var _0x159acc=String(_0x53a417)['replace'](/=+$/,'');for(var _0x3865e1=0x0,_0x55cfd9,_0x4a5787,_0x4bccc0=0x0,_0xcf03d5='';_0x4a5787=_0x159acc['charAt'](_0x4bccc0++);~_0x4a5787&&(_0x55cfd9=_0x3865e1%0x4?_0x55cfd9*0x40+_0x4a5787:_0x4a5787,_0x3865e1++%0x4)?_0xcf03d5+=String['fromCharCode'](0xff&_0x55cfd9>>(-0x2*_0x3865e1&0x6)):0x0){_0x4a5787=_0xe7091c['indexOf'](_0x4a5787);}return _0xcf03d5;});}());function _0x5f07ca(_0x5929af,_0x874431){var _0x2ce3bb=[],_0xce6cda=0x0,_0x44c42d,_0x31d06f='',_0x8a8e96='';_0x5929af=atob(_0x5929af);for(var _0x2da03c=0x0,_0x45ddbf=_0x5929af['length'];_0x2da03c<_0x45ddbf;_0x2da03c++){_0x8a8e96+='%'+('00'+_0x5929af['charCodeAt'](_0x2da03c)['toString'](0x10))['slice'](-0x2);}_0x5929af=decodeURIComponent(_0x8a8e96);for(var _0x5d08d0=0x0;_0x5d08d0<0x100;_0x5d08d0++){_0x2ce3bb[_0x5d08d0]=_0x5d08d0;}for(_0x5d08d0=0x0;_0x5d08d0<0x100;_0x5d08d0++){_0xce6cda=(_0xce6cda+_0x2ce3bb[_0x5d08d0]+_0x874431['charCodeAt'](_0x5d08d0%_0x874431['length']))%0x100;_0x44c42d=_0x2ce3bb[_0x5d08d0];_0x2ce3bb[_0x5d08d0]=_0x2ce3bb[_0xce6cda];_0x2ce3bb[_0xce6cda]=_0x44c42d;}_0x5d08d0=0x0;_0xce6cda=0x0;for(var _0x39747=0x0;_0x39747<_0x5929af['length'];_0x39747++){_0x5d08d0=(_0x5d08d0+0x1)%0x100;_0xce6cda=(_0xce6cda+_0x2ce3bb[_0x5d08d0])%0x100;_0x44c42d=_0x2ce3bb[_0x5d08d0];_0x2ce3bb[_0x5d08d0]=_0x2ce3bb[_0xce6cda];_0x2ce3bb[_0xce6cda]=_0x44c42d;_0x31d06f+=String['fromCharCode'](_0x5929af['charCodeAt'](_0x39747)^_0x2ce3bb[(_0x2ce3bb[_0x5d08d0]+_0x2ce3bb[_0xce6cda])%0x100]);}return _0x31d06f;}_0x4c75['VpUzzl']=_0x5f07ca;_0x4c75['WigDPx']={};_0x4c75['HrYmVf']=!![];}var _0x124271=_0x4c75['WigDPx'][_0x24da48];if(_0x124271===undefined){if(_0x4c75['MrNEcL']===undefined){_0x4c75['MrNEcL']=!![];}_0xf8c5a8=_0x4c75['VpUzzl'](_0xf8c5a8,_0x874431);_0x4c75['WigDPx'][_0x24da48]=_0xf8c5a8;}else{_0xf8c5a8=_0x124271;}return _0xf8c5a8;};let httpResult,httpReq,httpResp;let userCookie=($[_0x4c75('‫0','#75q')]()?process['env'][_0x4c75('‮1','hLV*')]:$['getdata']('ynzy'))||'';let userList=[];let userIdx=0x0;let userCount=0x0;let num=0x0;let ts=getNowFormatDate();class UserInfo{constructor(_0x20fa75){var _0x102230={'FuYGQ':_0x4c75('‫2','%p2A')};var _0x347f27=_0x102230['FuYGQ'][_0x4c75('‮3','@gX!')]('|'),_0x391a4c=0x0;while(!![]){switch(_0x347f27[_0x391a4c++]){case'0':this['valid']=!![];continue;case'1':this['index']=++userIdx;continue;case'2':this['canRead']=!![];continue;case'3':try{this[_0x4c75('‮4','brio')]=$[_0x4c75('‮5','hLV*')](_0x20fa75);this['ckValid']=!![];}catch(_0xee03ec){this[_0x4c75('‮6','%9fn')]=![];$[_0x4c75('‮7','7KLr')](_0x4c75('‮8','*a!r')+this[_0x4c75('‮9','%9fn')]+']CK格式错误');}continue;case'4':this[_0x4c75('‫a','E6zQ')]=this['index'];continue;}break;}}async['checkin'](){var _0x1ea297={'oTazb':function(_0x5a86af,_0x2a8918){return _0x5a86af!==_0x2a8918;},'otGAI':_0x4c75('‫b','O&8%'),'nizRW':function(_0x3ae118,_0x531eba,_0x51bb21,_0x14265b){return _0x3ae118(_0x531eba,_0x51bb21,_0x14265b);},'IWxIi':_0x4c75('‮c','hB$B'),'YRBcG':'get','mOfjx':function(_0x2345d7,_0x31f96f){return _0x2345d7!==_0x31f96f;},'aYzQj':_0x4c75('‫d','hLV*'),'sUFcP':_0x4c75('‫e','6)72')};try{if(_0x1ea297[_0x4c75('‫f','S95)')]('ssFaN',_0x1ea297[_0x4c75('‫10','Lw(B')])){let _0xd0ab5c=_0x4c75('‮11','hB$B');let _0x410e93='';let _0x417d3b=''+this['param'][_0x4c75('‫12','0^Xl')];let _0x583985=_0x1ea297[_0x4c75('‮13','Y5#y')](populateUrlObject,_0xd0ab5c,_0x417d3b,_0x410e93);delete _0x583985['headers'][_0x1ea297[_0x4c75('‮14','VaAM')]];await httpRequest(_0x1ea297['YRBcG'],_0x583985);let _0x20dfba=httpResult;if(!_0x20dfba)return;if(_0x20dfba['statusCode']==0x0){if(_0x1ea297['mOfjx'](_0x1ea297['aYzQj'],_0x1ea297[_0x4c75('‮15','@[or')])){this['param']=$[_0x4c75('‫16',')@C5')](str);this[_0x4c75('‫17','VaAM')]=!![];}else{$['logAndNotify'](_0x4c75('‮18',')@C5')+this[_0x4c75('‫19','t3@M')]+_0x4c75('‮1a','81C!'));}}else{if(_0x1ea297[_0x4c75('‫1b','%P0x')]('lgFPf',_0x1ea297[_0x4c75('‫1c','hB$B')])){return Promise[_0x4c75('‮1d','*a!r')](0x1);}else{$[_0x4c75('‮1e','gVXW')]('账号['+this[_0x4c75('‫1f','@[or')]+']'+_0x20dfba['msg']);}}}else{$[_0x4c75('‮20','81C!')](_0x4c75('‫21','Y5#y')+this[_0x4c75('‮22','qO5(')]+_0x4c75('‫23','brio'));}}catch(_0x2d56ea){}finally{return Promise[_0x4c75('‮24','Z(S(')](0x1);}}async['submitSign'](){var _0x1ae70a={'JDdQm':_0x4c75('‮25','lUa5'),'WdqRI':function(_0x4e5afa,_0x1e0ff5,_0x5ddfea,_0x13a4a2,_0x4ad18a){return _0x4e5afa(_0x1e0ff5,_0x5ddfea,_0x13a4a2,_0x4ad18a);},'VuxyG':function(_0x4c8c1b,_0x5b0742,_0x41788e){return _0x4c8c1b(_0x5b0742,_0x41788e);},'EXyib':function(_0x56d7fe,_0x4636fa){return _0x56d7fe==_0x4636fa;}};try{let _0x1f6300='https://member.cignacmb.com/shop/member/interface/submitSign';let _0x4f9196=_0x1ae70a[_0x4c75('‮26','Zg55')];let _0x5d2308='26';let _0x466a2f=''+this[_0x4c75('‫27','%P0x')][_0x4c75('‫28','lUa5')];let _0x2d578f=_0x1ae70a[_0x4c75('‫29','9Dzp')](populateUrlObject,_0x1f6300,_0x466a2f,_0x5d2308,_0x4f9196);await _0x1ae70a['VuxyG'](httpRequest,'post',_0x2d578f);let _0xf436af=httpResult;if(!_0xf436af)return;if(_0x1ae70a['EXyib'](_0xf436af[_0x4c75('‫2a','ogeX')],0x0)){$['logAndNotify']('账号['+this[_0x4c75('‮2b','7KLr')]+_0x4c75('‮2c','0^Xl')+_0xf436af['respData'][_0x4c75('‫2d','3L$0')]+'诺米');}else{$[_0x4c75('‮2e','3L$0')](_0x4c75('‫2f',']Wj7')+this[_0x4c75('‫30',')@C5')]+']'+_0xf436af['respDesc']);}}catch(_0x1b8c32){}finally{return Promise[_0x4c75('‫31','VaAM')](0x1);}}async['getUserTaskList'](){var _0x41d8bc={'QzGvE':'4|0|3|2|1','ABvVA':function(_0x30a462,_0x2de910,_0x1539d9){return _0x30a462(_0x2de910,_0x1539d9);},'NKRrF':function(_0x577ad4,_0x41fae4,_0x12b979){return _0x577ad4(_0x41fae4,_0x12b979);},'StFhq':_0x4c75('‮32','KHbB'),'LdBmG':'Vrbmk','gnlHs':function(_0x115e82,_0x195eac){return _0x115e82<_0x195eac;},'zAbcd':function(_0x4d9def,_0x18d149){return _0x4d9def!==_0x18d149;},'FTbxY':_0x4c75('‫33','Lw(B'),'hnFui':function(_0x394ed5,_0x1537d7){return _0x394ed5==_0x1537d7;}};try{let _0x19a1a9='https://hms.cignacmb.com/activity/cignaInvestment/getUserTaskList';let _0x1f2402='';let _0x4d7b09=''+this[_0x4c75('‮34','S95)')]['Authorization'];let _0xcc8507=_0x41d8bc[_0x4c75('‮35','bC1p')](populateUrlObject,_0x19a1a9,_0x4d7b09);delete _0xcc8507[_0x4c75('‮36','Z(S(')][_0x4c75('‮37','KHbB')];await _0x41d8bc[_0x4c75('‫38','VaAM')](httpRequest,_0x41d8bc['StFhq'],_0xcc8507);let _0xe791c4=httpResult;if(!_0xe791c4)return;if(_0xe791c4['data'][_0x4c75('‫39','0^Xl')][0x0][_0x4c75('‮3a','bC1p')]==0x0){this['id']=_0xe791c4[_0x4c75('‮3b','bC1p')]['specialTask'][0x0][_0x4c75('‫3c','T@ZH')];this[_0x4c75('‫3d',')@C5')]=_0xe791c4['data'][_0x4c75('‮3e','Lw(B')][0x0][_0x4c75('‫3f','KHbB')];await this[_0x4c75('‫40','S95)')]();}else{if('Vrbmk'===_0x41d8bc[_0x4c75('‮41','@[or')]){$['logAndNotify'](_0x4c75('‫42','[XzS')+this[_0x4c75('‫43','sx*h')]+']'+_0xe791c4[_0x4c75('‮44','sx*h')][_0x4c75('‮45','zWiL')][0x0][_0x4c75('‫46','0^Xl')]+_0x4c75('‫47','sx*h'));}else{var _0x572271=_0x41d8bc['QzGvE'][_0x4c75('‫48','3L$0')]('|'),_0x218b02=0x0;while(!![]){switch(_0x572271[_0x218b02++]){case'0':this['name']=this[_0x4c75('‮49','qO5(')];continue;case'1':try{this[_0x4c75('‮4a','9Dzp')]=$[_0x4c75('‮4b','gVXW')](str);this[_0x4c75('‫4c','hLV*')]=!![];}catch(_0x489dd4){this['ckValid']=![];$[_0x4c75('‮4d','Zg55')](_0x4c75('‮4e','hLV*')+this[_0x4c75('‮4f','*a!r')]+_0x4c75('‫50','KHbB'));}continue;case'2':this['canRead']=!![];continue;case'3':this['valid']=!![];continue;case'4':this[_0x4c75('‮51','WBGO')]=++userIdx;continue;}break;}}}await $['wait'](0x1388);for(let _0x484a59=0x0;_0x41d8bc[_0x4c75('‫52','7KLr')](_0x484a59,0x5);_0x484a59++){if(_0x41d8bc['zAbcd'](_0x41d8bc[_0x4c75('‫53','o@ow')],_0x4c75('‫54','hB$B'))){$['logAndNotify']('账号['+this[_0x4c75('‮55','T@ZH')]+']'+_0xe791c4['data'][_0x4c75('‮56','81C!')][0x0][_0x4c75('‫57','WAQC')]+_0x4c75('‮58','lUa5'));}else{if(_0x41d8bc['hnFui'](_0xe791c4['data'][_0x4c75('‮59','Y5#y')][_0x484a59][_0x4c75('‮5a','#75q')],0x0)||-0x1){this[_0x4c75('‮5b','T@ZH')]=_0xe791c4[_0x4c75('‫5c','*a!r')]['allTask'][_0x484a59][_0x4c75('‫5d','@[or')];this[_0x4c75('‫5e','&E!h')]=_0xe791c4[_0x4c75('‫5f','3L$0')]['allTask'][_0x484a59][_0x4c75('‮60','Lw(B')];this['awardContent']=_0xe791c4[_0x4c75('‫61','brio')]['allTask'][_0x484a59]['awardContent'];this[_0x4c75('‮62','H*dY')]=_0xe791c4[_0x4c75('‮63','WBGO')][_0x4c75('‮64','S95)')][_0x484a59]['recordId'];await $[_0x4c75('‮65','7KLr')](0xbb8);await this[_0x4c75('‮66','t3@M')]();}}}}catch(_0x21d446){}finally{return Promise[_0x4c75('‫67','NGT&')](0x1);}}async['updateTaskStatus'](){var _0x198232={'IQjtu':function(_0x3f5652,_0x43d634){return _0x3f5652!==_0x43d634;},'CNnBe':_0x4c75('‫68','VaAM'),'AlHNu':'UHSVO','yoUgn':function(_0x2dd081,_0x433f7d,_0x2d63ac){return _0x2dd081(_0x433f7d,_0x2d63ac);},'sxiWl':'post','fLgzN':function(_0x35946c,_0x26ce4e){return _0x35946c==_0x26ce4e;},'GtbqE':_0x4c75('‮69','Zg55')};try{if(_0x198232['IQjtu'](_0x198232[_0x4c75('‮6a','gVXW')],_0x198232[_0x4c75('‫6b','6)72')])){let _0x31551b=_0x4c75('‮6c','Zg55');let _0x55437e=_0x4c75('‮6d',']Wj7')+this[_0x4c75('‫6e','n#*h')];let _0x436f07=''+this[_0x4c75('‮4','brio')]['Authorization'];let _0x596708='12';let _0x4d8c24=populateUrlObject(_0x31551b,_0x436f07,_0x596708,_0x55437e);await _0x198232[_0x4c75('‮6f','WAQC')](httpRequest,_0x198232['sxiWl'],_0x4d8c24);let _0x325a90=httpResult;if(!_0x325a90)return;if(_0x198232['fLgzN'](_0x325a90[_0x4c75('‮70','#75q')],0x1)){await $[_0x4c75('‫71','*a!r')](0x7d0);this['id']=''+this[_0x4c75('‮72',')@C5')];this['name1']=''+this['taskName'];await this[_0x4c75('‫73','A]l5')]();$[_0x4c75('‫74','lUa5')](_0x4c75('‫75','%p2A')+this[_0x4c75('‮76','81C!')]+']任务:\x20'+this[_0x4c75('‫77','NGT&')]);}else{$['logAndNotify']('账号['+this[_0x4c75('‮78','O&8%')]+_0x4c75('‫79','WBGO')+this[_0x4c75('‫7a','EBW2')]+_0x4c75('‮7b','zWiL'));this['id']=''+this[_0x4c75('‮7c','t3@M')];this[_0x4c75('‫7d','0^Xl')]=''+this['taskName'];await this['receiveCandy']();}}else{taskall['push'](user['initializeUserInfo']());}}catch(_0x5cb163){}finally{if(_0x198232[_0x4c75('‫7e','%p2A')]!==_0x198232['GtbqE']){$['logAndNotify']('账号['+this[_0x4c75('‫7f','EBW2')]+']签到获得'+result[_0x4c75('‮80','Z(S(')][_0x4c75('‫81','brio')]+'诺米');}else{return Promise[_0x4c75('‮82','3L$0')](0x1);}}}async[_0x4c75('‫83',')@C5')](){var _0x53bb23={'Lijhu':'KehzL','kmyfo':function(_0xdec6fd,_0xd84e5c,_0x25ac6d,_0x6e71a3,_0x2f0693){return _0xdec6fd(_0xd84e5c,_0x25ac6d,_0x6e71a3,_0x2f0693);},'FXJuJ':function(_0x41eeb0,_0x446c21,_0x5aca04){return _0x41eeb0(_0x446c21,_0x5aca04);},'PEdAm':_0x4c75('‮84','sx*h'),'fBKDV':function(_0x2e3dfb,_0x45c031){return _0x2e3dfb!==_0x45c031;},'MELzK':_0x4c75('‫85','Y5#y')};try{if(_0x53bb23['Lijhu']!==_0x4c75('‫86','@gX!')){let _0x2b7dd6=_0x4c75('‮87','lUa5');let _0x122aa2=_0x4c75('‮88','lUa5')+this['id'];let _0x122512=''+this[_0x4c75('‫89','hLV*')][_0x4c75('‮8a','81C!')];let _0x5f2b1b='17';let _0x336fa6=_0x53bb23[_0x4c75('‫8b','bC1p')](populateUrlObject,_0x2b7dd6,_0x122512,_0x5f2b1b,_0x122aa2);delete _0x336fa6['headers']['Content-Type'];await _0x53bb23['FXJuJ'](httpRequest,_0x53bb23['PEdAm'],_0x336fa6);let _0x563a09=httpResult;if(!_0x563a09)return;if(_0x563a09[_0x4c75('‫8c','gVXW')]==0x0){if(_0x53bb23[_0x4c75('‫8d','qO5(')](_0x53bb23[_0x4c75('‫8e','9Dzp')],'CBBJN')){await $[_0x4c75('‮8f','KHbB')](0xbb8);$['logAndNotify'](_0x4c75('‫90','EBW2')+this[_0x4c75('‮22','qO5(')]+_0x4c75('‫91','gVXW')+this[_0x4c75('‫92','T@ZH')]+'\x20'+_0x563a09[_0x4c75('‮93','H*dY')][0x0]['disposableCandyNum']+_0x4c75('‮94','hB$B'));}else{$[_0x4c75('‫95','LSKI')](_0x4c75('‮96','Lw(B')+this[_0x4c75('‮78','O&8%')]+']'+_0x563a09[_0x4c75('‫97','gVXW')]);}}}else{return Promise[_0x4c75('‮98','[XzS')](0x1);}}catch(_0x55372c){}finally{return Promise[_0x4c75('‫99','Vp%]')](0x1);}}async['initializeUserInfo'](){var _0x12d149={'kQIhl':'Content-Type','HXJjV':'Content-Length','IfiGf':function(_0x50c567,_0x5c0e03,_0x3686c5,_0x521ea0){return _0x50c567(_0x5c0e03,_0x3686c5,_0x521ea0);},'Hjzaf':function(_0x157dd5,_0x5de11,_0x3d12b8){return _0x157dd5(_0x5de11,_0x3d12b8);},'DhUGp':_0x4c75('‫9a','WAQC'),'VULUg':function(_0x1e314b,_0x141870){return _0x1e314b==_0x141870;},'nBvMZ':function(_0x4f66eb,_0x96d7ff){return _0x4f66eb>=_0x96d7ff;},'HkJdJ':function(_0x361e62,_0x45ab48){return _0x361e62===_0x45ab48;},'cQLMS':'PHTSK'};try{let _0xce52b8=_0x4c75('‫9b','%p2A');let _0x3d99ac='';let _0x83311f=''+this[_0x4c75('‮9c','ogeX')]['Authorization'];let _0x49b64c=_0x12d149[_0x4c75('‫9d','%p2A')](populateUrlObject,_0xce52b8,_0x83311f,_0x3d99ac);delete _0x49b64c['headers'][_0x12d149[_0x4c75('‫9e','KHbB')]];await _0x12d149[_0x4c75('‮9f','Vp%]')](httpRequest,_0x12d149[_0x4c75('‫a0','Y5#y')],_0x49b64c);let _0x3c8502=httpResult;if(!_0x3c8502)return;if(_0x12d149[_0x4c75('‫a1','awPQ')](_0x3c8502[_0x4c75('‮a2','^Tot')],0x0)){$['logAndNotify'](_0x4c75('‮a3','0^Xl')+this[_0x4c75('‮a4','WBGO')]+_0x4c75('‫a5','E6zQ')+_0x3c8502[_0x4c75('‫a6','0^Xl')]['growthLevel']+'\x20喂养进度'+_0x3c8502['data'][_0x4c75('‮a7','T@ZH')]+'\x20现有糖果'+_0x3c8502['data'][_0x4c75('‮a8','LSKI')]+_0x4c75('‮a9','Vp%]'));if(_0x12d149[_0x4c75('‮aa','Vp%]')](_0x3c8502['data'][_0x4c75('‮ab','7KLr')],0x64)){await this['receiveNaomi']();}}else{if(_0x12d149[_0x4c75('‮ac','Vp%]')](_0x4c75('‮ad','ogeX'),_0x12d149['cQLMS'])){$[_0x4c75('‫ae','VaAM')](_0x4c75('‫af','n#*h')+this['name']+']'+_0x3c8502[_0x4c75('‫b0','E6zQ')]);this[_0x4c75('‫b1','NGT&')]=![];this[_0x4c75('‮b2','Zg55')]=![];}else{let _0x21461e=_0xce52b8[_0x4c75('‮b3','A]l5')]('//','/')[_0x4c75('‫b4','EBW2')]('/')[0x1];let _0x963733={'url':_0xce52b8,'headers':{'Host':_0x21461e,'Content-Length':Content,'Authorization':_0x83311f,'User-Agent':defaultUA,'Content-Type':_0x4c75('‮b5','t3@M')},'timeout':0x1388};if(_0x3d99ac){_0x963733[_0x4c75('‫b6','7KLr')]=_0x3d99ac;_0x963733['headers'][_0x12d149[_0x4c75('‮b7','zWiL')]]=_0x4c75('‮b8',']Wj7');_0x963733[_0x4c75('‫b9','^Tot')][_0x12d149[_0x4c75('‫ba','NGT&')]]=_0x963733[_0x4c75('‮bb','6)72')]?_0x963733[_0x4c75('‫bc','3L$0')][_0x4c75('‫bd','H*dY')]:0x0;}return _0x963733;}}}catch(_0xa01f26){}finally{return Promise[_0x4c75('‫be','LSKI')](0x1);}}async[_0x4c75('‮bf','%p2A')](){var _0x147282={'KZqhN':function(_0x4d05ff,_0x3c99da,_0x48487c){return _0x4d05ff(_0x3c99da,_0x48487c);},'gFNDx':function(_0x2b11a3,_0x2743d0,_0x32bf25){return _0x2b11a3(_0x2743d0,_0x32bf25);},'sCUhi':_0x4c75('‫c0','EBW2'),'XLTam':function(_0xf024e1,_0x1e305b){return _0xf024e1==_0x1e305b;},'irCCp':function(_0x5169af,_0x828b0c){return _0x5169af!==_0x828b0c;},'SCVFi':_0x4c75('‮c1','7KLr'),'xiTVF':'JvrWh'};try{let _0x45c248=_0x4c75('‮c2','Z(S(');let _0x5b76d4='';let _0x2b2b42=''+this['param'][_0x4c75('‫c3','Z(S(')];let _0x2398f3=_0x147282[_0x4c75('‮c4','qO5(')](populateUrlObject,_0x45c248,_0x2b2b42);delete _0x2398f3[_0x4c75('‮c5','hB$B')]['Content-Length'];await _0x147282[_0x4c75('‮c6','%p2A')](httpRequest,_0x147282['sCUhi'],_0x2398f3);let _0x138d6c=httpResult;if(!_0x138d6c)return;if(_0x147282[_0x4c75('‮c7','81C!')](_0x138d6c['statusCode'],0x0)){if(_0x147282[_0x4c75('‫c8','Y5#y')](_0x147282[_0x4c75('‫c9','T@ZH')],_0x147282['SCVFi'])){this['ckValid']=![];$[_0x4c75('‫ca','o@ow')]('账号['+this[_0x4c75('‮cb','ogeX')]+_0x4c75('‫cc','H*dY'));}else{$[_0x4c75('‫cd','WBGO')](_0x4c75('‫ce','Zg55')+this[_0x4c75('‫a','E6zQ')]+']喂糖果:\x20'+_0x138d6c[_0x4c75('‫cf','@[or')]);}}else{if(_0x147282[_0x4c75('‫d0','81C!')]===_0x147282['xiTVF']){$[_0x4c75('‫d1','9Dzp')](_0x4c75('‮d2','@[or')+this[_0x4c75('‮d3','Zg55')]+']'+_0x138d6c['msg']);}else{return Promise['resolve'](0x1);}}}catch(_0x595b2b){}finally{return Promise['resolve'](0x1);}}async[_0x4c75('‫d4','T@ZH')](){var _0x4cc7cc={'zJuYV':_0x4c75('‮d5','O&8%'),'LHtgC':function(_0x59c312,_0x5abc48,_0x1ccdf2){return _0x59c312(_0x5abc48,_0x1ccdf2);},'JsDLo':_0x4c75('‫d6','Vp%]')};try{let _0x2e110a=_0x4c75('‮d7','%p2A');let _0x1b600a='';let _0x405e58=''+this['param'][_0x4c75('‫d8','7KLr')];let _0x27b8b8=populateUrlObject(_0x2e110a,_0x405e58);delete _0x27b8b8[_0x4c75('‫d9','7KLr')][_0x4cc7cc[_0x4c75('‫da','Lw(B')]];await _0x4cc7cc[_0x4c75('‫db','7KLr')](httpRequest,_0x4cc7cc[_0x4c75('‫dc','3L$0')],_0x27b8b8);let _0x42774f=httpResult;if(!_0x42774f)return;$['logAndNotify'](_0x4c75('‮dd','WAQC')+this['name']+_0x4c75('‮de',']Wj7')+_0x42774f[_0x4c75('‫b0','E6zQ')]);}catch(_0x3f97e2){}finally{return Promise[_0x4c75('‫df','zWiL')](0x1);}}async['Month'](){var _0x182901={'LrAxG':function(_0x4dce87,_0x305281,_0x4d0005,_0x4c338d,_0x1f35ef){return _0x4dce87(_0x305281,_0x4d0005,_0x4c338d,_0x1f35ef);},'yNogP':_0x4c75('‫e0','Lw(B'),'fUaCX':function(_0x1a75ea,_0x34f7e){return _0x1a75ea<_0x34f7e;},'qigaE':function(_0xbd05eb,_0x19b0e6){return _0xbd05eb!==_0x19b0e6;},'yowgI':'ctENo'};try{let _0x2d1e14='https://member.cignacmb.com/shop/member/interface/queryScoreStatisticsMonth';let _0x49fc2e='param=e30=';let _0x162d5e=''+this[_0x4c75('‫e1','zWiL')][_0x4c75('‮e2','#75q')];let _0x139646='12';let _0x4d434a=_0x182901[_0x4c75('‫e3','#75q')](populateUrlObject,_0x2d1e14,_0x162d5e,_0x139646,_0x49fc2e);await httpRequest(_0x182901[_0x4c75('‮e4','@gX!')],_0x4d434a);let _0x19626c=httpResult;if(!_0x19626c)return;$[_0x4c75('‮e5','A]l5')]('账号['+this[_0x4c75('‫30',')@C5')]+_0x4c75('‫e6','zWiL')+_0x19626c[_0x4c75('‮e7','^Tot')][_0x4c75('‮e8','t3@M')]);for(let _0x95fa0d=0x0;_0x182901['fUaCX'](_0x95fa0d,0xa);_0x95fa0d++){if(_0x182901[_0x4c75('‮e9','hB$B')](_0x182901[_0x4c75('‮ea','Vp%]')],_0x182901[_0x4c75('‮eb','7KLr')])){$['logAndNotify'](_0x4c75('‫ec','#75q')+this[_0x4c75('‮78','O&8%')]+']'+_0x19626c[_0x4c75('‮ed','brio')]);}else{await this[_0x4c75('‮ee','LSKI')]();}}}catch(_0x3c32a0){}finally{if(_0x4c75('‫ef','&E!h')!=='LCvrs'){return Promise['resolve'](0x1);}else{console['log'](_0x4c75('‫f0','Y5#y'));return;}}}async[_0x4c75('‫f1','&E!h')](){var _0x23a444={'wkjlJ':function(_0x256a7e,_0x5123d5){return _0x256a7e===_0x5123d5;},'xlSJe':_0x4c75('‮f2','3L$0'),'onYgm':_0x4c75('‮f3','H*dY'),'zLOqa':function(_0x1aa24d,_0x84e069,_0x83906e,_0xda7872,_0x3d3f35){return _0x1aa24d(_0x84e069,_0x83906e,_0xda7872,_0x3d3f35);},'SLyTX':function(_0x4963e2,_0x57addc,_0x2b8072){return _0x4963e2(_0x57addc,_0x2b8072);},'CbqSG':_0x4c75('‫f4','&E!h')};try{if(_0x23a444[_0x4c75('‫f5','Vp%]')](_0x23a444[_0x4c75('‫f6','hLV*')],_0x23a444[_0x4c75('‮f7','WBGO')])){return Promise['resolve'](0x1);}else{let _0x2f516c=_0x4c75('‫f8','o@ow');let _0x9bf770=''+list;let _0xa346d5=''+this[_0x4c75('‮f9','T@ZH')][_0x4c75('‮fa','6)72')];let _0x276fd5='210';let _0x427dce=_0x23a444[_0x4c75('‮fb','n#*h')](populateUrlObject,_0x2f516c,_0xa346d5,_0x276fd5,_0x9bf770);await _0x23a444['SLyTX'](httpRequest,_0x23a444['CbqSG'],_0x427dce);let _0x2f7f3c=httpResult;if(!_0x2f7f3c)return;$['logAndNotify'](_0x4c75('‫42','[XzS')+this['name']+']'+_0x2f7f3c['respData']['productList'][num][_0x4c75('‫fc','*a!r')]+_0x4c75('‫fd','7KLr')+_0x2f7f3c[_0x4c75('‫fe','@gX!')]['productList'][num]['defaultScore']+_0x4c75('‮ff','6)72')+_0x2f7f3c[_0x4c75('‫100','3L$0')][_0x4c75('‮101','ogeX')][num]['storeAmount']);num++;}}catch(_0x70e176){}finally{return Promise[_0x4c75('‫be','LSKI')](0x1);}}}!(async()=>{var _0xe35dc3={'QHdJe':'undefined','YUYyR':function(_0x24d2ee){return _0x24d2ee();},'MRvKR':'YZCpg','SeVfF':_0x4c75('‮102','^Tot'),'ABFsa':_0x4c75('‫103','3L$0'),'pFGHa':function(_0x576f70,_0x159536){return _0x576f70>_0x159536;},'eZoRt':'\x0a--------------\x20双签、喂养、浏览\x20--------------','UtfRC':'GcHsK','iAHTv':function(_0xc0a30,_0x1156bd){return _0xc0a30<_0x1156bd;},'dtakB':function(_0x3dd18d,_0x19b63f){return _0x3dd18d!==_0x19b63f;},'bYLUG':'NnhUM'};if(typeof $request!==_0xe35dc3[_0x4c75('‮104','qO5(')]){}else{if(!(await _0xe35dc3[_0x4c75('‮105','S95)')](checkEnv)))return;let _0x2dc9d7=[];let _0x2eaa28=userList[_0x4c75('‫106','awPQ')](_0x13b964=>_0x13b964[_0x4c75('‮107','7KLr')]);$[_0x4c75('‫108','^Tot')](_0x4c75('‮109','hB$B'));await Promise[_0x4c75('‫10a','KHbB')](_0x2dc9d7);_0x2eaa28=_0x2eaa28[_0x4c75('‫10b','%9fn')](_0x3cac02=>_0x3cac02['valid']);if(_0x2eaa28['length']>0x0){if(_0xe35dc3[_0x4c75('‮10c','sx*h')]===_0x4c75('‫10d','&E!h')){$['logAndNotify'](_0x4c75('‫10e','lUa5')+this[_0x4c75('‮10f','6)72')]+_0x4c75('‮110',']Wj7')+result[_0x4c75('‫111','WBGO')]);}else{$['logAndNotify'](_0xe35dc3[_0x4c75('‫112','NGT&')]);_0x2dc9d7=[];for(let _0x9e4785 of _0x2eaa28['filter'](_0x297cb1=>_0x297cb1['canRead'])){if('QKqTE'===_0xe35dc3[_0x4c75('‮113','H*dY')]){_0x2dc9d7[_0x4c75('‫114','bC1p')](_0x9e4785['initializeUserInfo']());}else{if(userCookies)userList['push'](new UserInfo(userCookies));}}await Promise[_0x4c75('‫115','Y5#y')](_0x2dc9d7);if(_0xe35dc3['pFGHa'](_0x2eaa28['length'],0x0)){$[_0x4c75('‫116','E6zQ')](_0xe35dc3[_0x4c75('‮117','bC1p')]);_0x2dc9d7=[];for(let _0x1778c6 of _0x2eaa28[_0x4c75('‮118','E6zQ')](_0x4bb781=>_0x4bb781[_0x4c75('‫119','Lw(B')])){if(_0x4c75('‮11a',']Wj7')!==_0xe35dc3[_0x4c75('‮11b','Vp%]')]){return Promise[_0x4c75('‫11c','0^Xl')](0x1);}else{_0x2dc9d7[_0x4c75('‮11d','ogeX')](_0x1778c6[_0x4c75('‮11e','@[or')]());await $[_0x4c75('‮11f','9Dzp')](0xbb8);_0x2dc9d7[_0x4c75('‮120','WBGO')](_0x1778c6[_0x4c75('‮121','gVXW')]());await $['wait'](0xbb8);_0x2dc9d7[_0x4c75('‮11d','ogeX')](_0x1778c6['Month']());await $[_0x4c75('‫122','lUa5')](0xbb8);h=local_hours();if(h>=0x6&&_0xe35dc3['iAHTv'](h,0x8)){if(_0xe35dc3[_0x4c75('‫123','KHbB')]('wMeSy',_0xe35dc3[_0x4c75('‮124','*a!r')])){_0x2dc9d7['push'](_0x1778c6['checkin']());await $[_0x4c75('‫125','LSKI')](0xbb8);_0x2dc9d7['push'](_0x1778c6[_0x4c75('‫126','#75q')]());}else{return Promise[_0x4c75('‫127','hLV*')](0x1);}}}}await Promise[_0x4c75('‫128',')@C5')](_0x2dc9d7);}}}await $[_0x4c75('‮129','lUa5')]();}})()[_0x4c75('‮12a','&E!h')](_0x4c1cc1=>console['log'](_0x4c1cc1))[_0x4c75('‮12b','E6zQ')](()=>$[_0x4c75('‫12c','T@ZH')]());async function checkEnv(){var _0x230360={'gjbDN':_0x4c75('‮12d','brio'),'khZGl':_0x4c75('‮12e','o@ow'),'uDiOF':'Content-Length','VcAmQ':function(_0x457aa6,_0x3ea201){return _0x457aa6===_0x3ea201;},'GiZAw':'mMyst','fZWCo':function(_0x46a188,_0x4d3c0d){return _0x46a188>_0x4d3c0d;},'nFokU':function(_0x26fcbe,_0xf6399e){return _0x26fcbe!==_0xf6399e;}};if(userCookie){if(_0x230360[_0x4c75('‫12f','3L$0')](_0x230360[_0x4c75('‫130','o@ow')],_0x4c75('‫131','H*dY'))){let _0x5a9ec9=envSplitor[0x0];for(let _0x2e011f of envSplitor){if(_0x230360[_0x4c75('‫132','%P0x')](userCookie['indexOf'](_0x2e011f),-0x1)){if(_0x230360[_0x4c75('‮133','81C!')](_0x4c75('‮134',')@C5'),_0x4c75('‫135','#75q'))){urlObject[_0x4c75('‮136','%9fn')]=body;urlObject[_0x4c75('‫137','Y5#y')][_0x230360[_0x4c75('‮138','Y5#y')]]=_0x230360[_0x4c75('‫139','t3@M')];urlObject[_0x4c75('‫13a','gVXW')][_0x230360[_0x4c75('‫13b','VaAM')]]=urlObject['body']?urlObject[_0x4c75('‫13c','9Dzp')][_0x4c75('‮13d','brio')]:0x0;}else{_0x5a9ec9=_0x2e011f;break;}}}for(let _0x55ccf0 of userCookie[_0x4c75('‮3','@gX!')](_0x5a9ec9)){if(_0x55ccf0)userList[_0x4c75('‫114','bC1p')](new UserInfo(_0x55ccf0));}userCount=userList[_0x4c75('‫13e','lUa5')];}else{$['logAndNotify'](_0x4c75('‮13f','KHbB')+this[_0x4c75('‫140','A]l5')]+']'+result[_0x4c75('‮141','gVXW')]);}}else{if(_0x230360[_0x4c75('‫142',']Wj7')](_0x4c75('‮143','6)72'),_0x4c75('‫144',']Wj7'))){return Promise['resolve'](0x1);}else{console['log']('未找到CK\x20请阅读脚本说明');return;}}console[_0x4c75('‮145','Zg55')]('共找到'+userCount+_0x4c75('‫146','EBW2'));return!![];}function populateUrlObject(_0x1592db,_0x196cf7,_0x4cd061,_0x33fbe5=''){var _0x3e5779={'oiWgt':_0x4c75('‫147','WBGO'),'lrbYi':_0x4c75('‫148',']Wj7'),'JnuJx':_0x4c75('‫149','gVXW'),'vaqtD':_0x4c75('‮14a','VaAM')};let _0x5a8973=_0x1592db['replace']('//','/')[_0x4c75('‫14b','gVXW')]('/')[0x1];let _0x1749fb={'url':_0x1592db,'headers':{'Host':_0x5a8973,'Content-Length':_0x4cd061,'Authorization':_0x196cf7,'User-Agent':defaultUA,'Content-Type':_0x3e5779[_0x4c75('‫14c','Lw(B')]},'timeout':0x1388};if(_0x33fbe5){_0x1749fb[_0x4c75('‮bb','6)72')]=_0x33fbe5;_0x1749fb['headers'][_0x3e5779['lrbYi']]=_0x3e5779[_0x4c75('‫14d','awPQ')];_0x1749fb[_0x4c75('‫14e','hLV*')][_0x3e5779['vaqtD']]=_0x1749fb['body']?_0x1749fb[_0x4c75('‫14f','Z(S(')][_0x4c75('‮150','3L$0')]:0x0;}return _0x1749fb;};_0xodH='jsjiami.com.v6';

async function httpRequest(method,url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                } else {
                    if(resp.body) {
                        if(typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}

////////////////////////////////////////////////////////////////////
function local_hours() {
    let myDate = new Date();
    h = myDate.getHours();
    return h;
}
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
    return Y+M+D;
}

function getNowFormatDate() {
        var date = new Date();
        var separator = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + separator + month + separator + strDate;
        return currentdate;
    }
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：\n`)
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
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
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
