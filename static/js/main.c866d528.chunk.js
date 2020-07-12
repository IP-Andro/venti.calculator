(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{61:function(e,t,a){e.exports=a(79)},66:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),l=a.n(i),o=a(32),c=a(105),s=a(106),m=a(30),p=a(107),u=a(49),d=a.n(u),v=a(46),g=a(16);a(66);function b(e){return r.a.createElement(v.a,e,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}function h(){return r.a.createElement("div",{className:"nav-bar-flex"},r.a.createElement(c.a,Object(o.a)({position:"static",className:"nav-bar-root"},"position","static"),r.a.createElement(s.a,null,r.a.createElement(g.b,{to:"/disease-type"},r.a.createElement(b,{color:"secondary"},"home")),r.a.createElement(m.a,{variant:"h6",className:"app-title"},"V E N T I",r.a.createElement("span",{className:"app-sub-title"}," C A L")),r.a.createElement(p.a,{edge:"start",className:"menu-button-icon",color:"inherit","aria-label":"menu"},r.a.createElement(d.a,null)))))}var E=a(18),f=a(12),y=a(108),N=a(4),O=a(109),x=a(118),_=a(112),C=a(111),k=a(116),w=a(110),S=a(37),j=Object(y.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})),A=Object(N.a)({root:{color:S.a[400],"&$checked":{color:S.a[600]}},checked:{}})((function(e){return r.a.createElement(k.a,Object.assign({color:"default"},e))}));function L(e){var t=r.a.useState("ALS"),a=Object(f.a)(t,2),n=a[0],i=a[1],l=j(),o=e.onChangeHandler,c=e.list;return r.a.createElement(O.a,{className:l.root,style:{backgroundColor:"#253038",border:"1px solid #313538",boxSizing:"border-box",boxShadow:"0px 11px 55px #000000"}},c.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(x.a,{alignItems:"flex-start",style:t%2!==0?{background:"#1D262C"}:{}},r.a.createElement(w.a,{value:e.val,select:"true",checked:!1,color:"#F41062",control:r.a.createElement(A,{checked:n===e.val,onChange:function(e){i(e.target.value),o(e)}})}),r.a.createElement(C.a,{primary:e.item,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{color:"white",fontSize:"14px"}},void 0!==e.desc?e.desc:""))})),r.a.createElement(_.a,{variant:"inset",component:"li"}))})))}var T=a(113),P=r.a.createContext([{},function(){}]),R={COPD:"COPD",ALS:"ALS"};a(74);function D(){var e=Object(n.useContext)(P),t=Object(f.a)(e,2),a=t[0],i=t[1],l=[{item:"ALS / MND",desc:"Amyotrophic lateral sclerosis / Motor neurone disease",val:R.ALS},{item:"COPD",desc:"Chronic obstructive pulmonary disease",val:R.COPD},{item:"Others",val:"other"}];return r.a.createElement("div",{className:"disease-container"},r.a.createElement("h1",{className:"disease-heading"},"DISEASE TYPE"),r.a.createElement(L,{list:l,onChangeHandler:function(e){i(Object(E.a)(Object(E.a)({},a),{},{diseaseType:e.target.value}))}}),r.a.createElement(T.a,{className:"nav-button",variant:"contained",color:"secondary"},r.a.createElement(g.b,{className:"nav-button-link",to:"/control-modes"},"Next")))}a(75);function B(){var e=Object(n.useContext)(P),t=Object(f.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"control-mode-container"},r.a.createElement("h1",{className:"control-mode-heading"},"VENTILATOR"),r.a.createElement("h1",{className:"control-mode-sub-heading"},"CONTROL MODE"),r.a.createElement(L,{list:[{item:"Volume control",val:"volume"},{item:"Pressure control",val:"pressure"},{item:"Others",val:"other"}],onChangeHandler:function(e){i(Object(E.a)(Object(E.a)({},a),{},{controlMode:e.target.value}))}}),r.a.createElement(T.a,{className:"nav-button-next",variant:"contained",color:"secondary"},r.a.createElement(g.b,{className:"nav-button-link",to:"/settings"},"Next")),r.a.createElement(T.a,{className:"nav-button-back",variant:"contained",color:"secondary"},r.a.createElement(g.b,{className:"nav-button-link",to:"/disease-type"},"Back")))}var H=a(8),M=(a(76),a(114)),V=a(115),I=a(117),z=(a(77),Object(N.a)({root:{color:"#f50057",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(I.a));function F(e){var t=Object(n.useState)(Number(e.min)),a=Object(f.a)(t,2),i=a[0],l=a[1],o=Number(e.min),c=10*o,s=e.changeHandler;return r.a.createElement(M.a,{className:"custom-card"},r.a.createElement("div",{className:"custom-card-container"},r.a.createElement(V.a,null,r.a.createElement(m.a,{className:"card-title",color:"textSecondary",gutterBottom:!0},e.metric),r.a.createElement(m.a,{className:"card-value"},i,r.a.createElement("span",{className:"card-unit-symbol"},e.symbol))),r.a.createElement("div",{className:"slider-container"},r.a.createElement(z,{min:o,max:c,onChange:function(t,a){l(a),s(t,a,e.metric.toLowerCase())},valueLabelDisplay:"auto","aria-label":"pretto slider",defaultValue:20}))))}var K=Object(y.a)({root:{marginTop:"12px",background:"linear-gradient(#050B12,#010202)",boxShadow:"0px 10px 57px #07131f",width:"45%",height:"162px",borderLeft:"3px solid #1FBADC",marginLeft:"auto",marginRight:"auto",color:"#fff"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14,color:"#05A8DC",textAlign:"left",marginTop:"-11px"},valueSelected:{fontSize:48,color:"#fff",textAlign:"left",marginTop:"8px"},symbol:{fontSize:"14px",fontWeight:"normal",fontStyle:"normal"},pos:{marginBottom:12}});function U(e){var t=K();return r.a.createElement(M.a,{className:t.root},r.a.createElement("div",{style:{marginTop:"5px"}},r.a.createElement(V.a,null,r.a.createElement(m.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.settingName),r.a.createElement(m.a,{className:t.valueSelected},e.value),r.a.createElement(m.a,{className:t.symbol},e.metric))))}var W={settings:{vt_criteria:{value:"8",description:"vt",metric:"ml/kg"},lung_complaince:{value:"60",description:"Lung Compliance Value",metric:"ml/ cm H2O"},insp_trigger_senstivity:{value:"1",description:"Inpiration Trigger Sensitivity",metric:"LPM/cmH20",display:!0},exp_trigger_senstivity:{value:"40",description:"Expiration Trigger Sensitivity",metric:"% Peak Flow",display:!0},high_fio2:{value:"3",description:"Supplement Oxygen",metric:"LPM",display:!0}},alarms:{low_min_vent:{value:"5",description:"Low Minute Ventilation Alarm"},high_respiratory_rate:{operation:["op.bpm","+","10"],description:"High Respiratory Rate Alarm",value:"<Not_Calculated>"},low_respiratory_rate:{operation:["op.bpm","-","6"],value:"<Not_Calculated>",description:"Low Respiratory Rate Alarm"},apnea:{value:"20",description:"Apnea Alarm "}},ip:{height:{value:"165",property:"height",unit:"cm",description:"height in cm"},weight:{value:"65",property:"weight",unit:"kg",description:"weight text in Kg"}},op:{ibw:{operation:["ip.height","-","100"],description:"IBW",metric:"Kg",value:"<Not_Calculated>",dependsOn:!0},vt_calculated:{operation:["settings.vt_criteria","*","op.ibw"],description:"VT",metric:"ml",dependsOn:!0,value:"<Not_Calculated>"},pressure_support:{operation:["op.vt_calculated","/","settings.lung_complaince"],description:"Pressure Support",metric:"cm H2O",dependsOn:!0,value:"<Not_Calculated>"},bpm:{editingAllowedByUser:!0,description:"Respiratory Rate",metric:"BPM",dependsOn:!1,value:"15"},epap:{editingAllowedByUser:!0,description:"EPAP",metric:"cm H20",dependsOn:!1,value:"6"}}},J={settings:{vt_criteria:{value:"6",description:"vt",metric:"ml/kg"},lung_complaince:{value:"35",description:"Lung Compliance Value",metric:"ml/ cm H2O"},insp_trigger_senstivity:{value:"2",description:"Inpiration Trigger Sensitivity",metric:"LPM/cmH20",display:!0},exp_trigger_senstivity:{value:"70",description:"Expiration Trigger Sensitivity",metric:"% Peak Flow",display:!0},high_fio2:{value:"1",description:"Supplement Oxygen",metric:"LPM",display:!0}},alarms:{low_min_vent:{value:"4",description:"Low Minute Ventilation Alarm"},high_respiratory_rate:{operation:["op.bpm","+","15"],description:"High Respiratory Rate Alarm",value:"<Not_Calculated>"},low_respiratory_rate:{operation:["op.bpm","-","6"],value:"<Not_Calculated>",description:"Low Respiratory Rate Alarm"},apnea:{value:"15",description:"Apnea Alarm "}},ip:{height:{value:"165",property:"height",unit:"cm",description:"height in cm"},weight:{value:"65",property:"weight",unit:"kg",description:"weight text in Kg"}},op:{ibw:{operation:["ip.height","-","100"],description:"IBW calculation",metric:"Kg",dependsOn:!0,value:"<Not_Calculated>"},vt_calculated:{operation:["settings.vt_criteria","*","op.ibw"],description:"VT",metric:"ml",dependsOn:!0,value:"<Not_Calculated>"},pressure_support:{operation:["op.vt_calculated","/","settings.lung_complaince"],description:"Pressure Support",metric:"cm H2O",dependsOn:!0,value:"<Not_Calculated>"},bpm:{editingAllowedByUser:!0,description:"Respiratory Rate",metric:"BPM",dependsOn:!1,value:"16"},epap:{editingAllowedByUser:!0,description:"EPAP",metric:"cm H20",dependsOn:!1,value:"6"}}},$=function(e,t){var a=null,n=e.operation,r=Y(n[0],t),i=Y(n[2],t);switch(console.log("operation found - "+JSON.stringify(n)+" opr1 "+r+" opr2 "+i),n[1]){case"*":a=r*i;break;case"/":a=r/i;break;case"+":a=r+i;break;case"-":a=r-i}return Math.round(a)},Y=function(e,t){var a=t.ip,n=t.op,r=t.settings,i=null;if(isNaN(e)){var l=e.split("."),o=l[0],c=l[1];switch(o){case"settings":r[c]&&(i=Number(r[c].value));break;case"ip":i=Number(a[c].value);break;case"op":n[c].dependsOn?n[c].value=$(n[c],t):n[c].value=Number(n[c].value),i=n[c].value;break;default:console.log("unindentified parameter type ")}}else i=Number(e);return i};a(78);function q(){var e=Object(n.useContext)(P),t=Object(f.a)(e,2),a=t[0],i=(t[1],Object(n.useState)(null)),l=Object(f.a)(i,2),o=l[0],c=l[1],s=Object(n.useState)(!1),m=Object(f.a)(s,2),p=m[0],u=m[1];Object(n.useEffect)((function(){a.diseaseType===R.ALS?(console.log("Load Disease Config of "+a.diseaseType),c(W)):a.diseaseType===R.COPD?(console.log("Load Disease Config of "+a.diseaseType),c(J)):(console.log("Loading Default Config  "),c(W))}),[a.diseaseType]);var d=function(e,t,a){o.ip[a].value=t};return r.a.createElement("div",{className:"vent-container"},r.a.createElement("div",{className:"input-settings-container"},o&&Object.keys(o.ip).map((function(e,t){var a=o.ip[e];return r.a.createElement(F,{key:t,metric:a.property,symbol:a.unit,min:a.value,changeHandler:d})}))),r.a.createElement(T.a,{onClick:function(e){e.preventDefault(),u(!1)},className:"reset-button",variant:"contained",color:"secondary"},"Reset"),r.a.createElement(T.a,{onClick:function(e){e.preventDefault(),u(!0),Object.keys(o.op).map((function(e,t){o.op[e].operation&&3===o.op[e].operation.length&&(o.op[e].value=$(o.op[e],o))})),Object.keys(o.alarms).map((function(e,t){o.alarms[e].operation&&3===o.alarms[e].operation.length&&(console.log(e+" alarm oper "+o.alarms[e].operation),o.alarms[e].value=$(o.alarms[e],o))})),c(Object(E.a)(Object(E.a)({},o),{},{diseaseConfig:o}))},className:"submit-button",variant:"contained",color:"secondary"},"Calculate"),r.a.createElement("div",{className:"setting-container"},p?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"settings-heading"},r.a.createElement("span",{style:{marginLeft:"9px"}},"Settings")),r.a.createElement("div",{className:"settings-section"},o&&o.op?Object.keys(o.op).map((function(e,t){var a=o.op[e];return r.a.createElement(U,{key:t,settingName:a.description,metric:a.metric,value:a.value})})):r.a.createElement("div",null)),r.a.createElement("div",{className:"additional-settings-heading"},r.a.createElement("span",{style:{marginLeft:"9px"}},"Additional settings")),r.a.createElement("div",{className:"additional-settings-section"},o&&o.settings?Object.keys(o.settings).map((function(e,t){var a=o.settings[e];if(a.display)return r.a.createElement(U,{key:t,settingName:a.description,metric:a.metric,value:a.value})})):r.a.createElement("div",null))):r.a.createElement("div",null)))}var G=function(){return r.a.createElement("div",null,r.a.createElement(g.a,{basename:"/"},r.a.createElement(h,null),r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/"},r.a.createElement(D,null)),r.a.createElement(H.a,{exact:!0,path:"/disease-type"},r.a.createElement(D,null)),r.a.createElement(H.a,{exact:!0,path:"/control-modes"},r.a.createElement(B,null)),r.a.createElement(H.a,{exact:!0,path:"/settings"},r.a.createElement(q,null)))))};l.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c866d528.chunk.js.map