import{s as o,t as r,b as s,L as n,i as P,c as a,f as i,k as Q,a as p}from"./index-08c4e9bb.js";import"./index-5262867b.js";import"./Bar.vue_vue_type_script_setup_true_lang-2f216bc1.js";import"./app-192cbc12.js";import"./Pie.vue_vue_type_script_setup_true_lang-fa06143e.js";import"./Line.vue_vue_type_script_setup_true_lang-07562c79.js";import"./index-771e958b.js";import"./Github.vue_vue_type_script_setup_true_lang-5f576015.js";import"./columns-d84895c5.js";import"./office-building-cc7a1721.js";import"./iphone-89710f1a.js";import"./user-3-fill-99d174b6.js";import"./index-68a687a6.js";const c=o({String:r.string,Number:r.number,"True False":r.bool,PropertyName:r.propertyName,Null:r.null,",":r.separator,"[ ]":r.squareBracket,"{ }":r.brace}),g=s.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",stateData:"#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",goto:"!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",maxTerm:25,nodeProps:[["openedBy",7,"{",12,"["],["closedBy",8,"}",13,"]"]],propSources:[c],skippedNodes:[0],repeatNodeCount:2,tokenData:"(p~RaXY!WYZ!W]^!Wpq!Wrs!]|}$i}!O$n!Q!R$w!R![&V![!]&h!}#O&m#P#Q&r#Y#Z&w#b#c'f#h#i'}#o#p(f#q#r(k~!]Oc~~!`Upq!]qr!]rs!rs#O!]#O#P!w#P~!]~!wOe~~!zXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#g~#jR!Q![#s!c!i#s#T#Z#s~#vR!Q![$P!c!i$P#T#Z$P~$SR!Q![$]!c!i$]#T#Z$]~$`R!Q![!]!c!i!]#T#Z!]~$nOh~~$qQ!Q!R$w!R![&V~$|RT~!O!P%V!g!h%k#X#Y%k~%YP!Q![%]~%bRT~!Q![%]!g!h%k#X#Y%k~%nR{|%w}!O%w!Q![%}~%zP!Q![%}~&SPT~!Q![%}~&[ST~!O!P%V!Q![&V!g!h%k#X#Y%k~&mOg~~&rO]~~&wO[~~&zP#T#U&}~'QP#`#a'T~'WP#g#h'Z~'^P#X#Y'a~'fOR~~'iP#i#j'l~'oP#`#a'r~'uP#`#a'x~'}OS~~(QP#f#g(T~(WP#i#j(Z~(^P#X#Y(a~(fOQ~~(kOW~~(pOV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),y=()=>t=>{try{JSON.parse(t.state.doc.toString())}catch(O){if(!(O instanceof SyntaxError))throw O;const e=m(O,t.state.doc);return[{from:e,message:O.message,severity:"error",to:e}]}return[]};function m(t,O){let e;return(e=t.message.match(/at position (\d+)/))?Math.min(+e[1],O.length):(e=t.message.match(/at line (\d+) column (\d+)/))?Math.min(O.line(+e[1]).from+ +e[2]-1,O.length):0}const u=n.define({name:"json",parser:g.configure({props:[P.add({Object:a({except:/^\s*\}/}),Array:a({except:/^\s*\]/})}),i.add({"Object Array":Q})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function N(){return new p(u)}export{N as json,u as jsonLanguage,y as jsonParseLinter};
