(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"454f":function(t,e,a){a("46a7");var i=a("584a").Object;t.exports=function(t,e,a){return i.defineProperty(t,e,a)}},"46a7":function(t,e,a){var i=a("63b6");i(i.S+i.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},5462:function(t,e,a){},"555c":function(t,e,a){"use strict";var i=a("5462"),s=a.n(i);s.a},"85f2":function(t,e,a){t.exports=a("454f")},9332:function(t,e,a){"use strict";var i=a("bafa"),s=a.n(i);s.a},b262:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-form"},[a("h2",[t._v("发卡管理")]),a("hr",{staticStyle:{"margin-bottom":"10px"}}),a("div",{staticClass:"table-area"},[a("div",{staticStyle:{margin:"10px"}}),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:"","row-key":"id","header-cell-class-name":"table-header"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"insurancePrice",label:"保险卡金额"}}),a("el-table-column",{attrs:{prop:"accessoriesPrice",label:"邮品金额"}}),a("el-table-column",{attrs:{prop:"createTime",label:"申请时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(t.transFormTime(e.row.createTime))+"\n                ")]}}])}),a("el-table-column",{attrs:{prop:"totalPrice",label:"总价"}}),a("el-table-column",{attrs:{prop:"operator",label:"操作人"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(0==e.row.status?"申请":1==e.row.status?"审批":"")+"\n                ")]}}])}),a("el-table-column",{attrs:{prop:"status",label:"操作",width:"auto"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.detail(e.row,"detail")}}},[t._v("明细")]),1==e.row.status?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.checkCardList(e.row)}}},[t._v("卡号列表")]):t._e(),1!=e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.access(e.row)}}},[t._v("发卡")]):t._e()]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":t.page.no,"page-size":t.page.size,total:t.page.total},on:{"current-change":t.handlePageChange}})],1),a("el-dialog",{staticClass:"user-dialog",attrs:{"close-on-click-modal":!1,title:"合同列表",visible:t.contractDialogVisible,"before-close":t.closeContractDialog,width:"900px"}},[a("send-card-contract-list",{ref:"sendCardList",on:{refresh:t.getData}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.contractDialogVisible=!1}}},[t._v("完 成")])],1)],1),a("el-dialog",{staticClass:"user-dialog",attrs:{"close-on-click-modal":!1,title:"卡号列表",visible:t.cardDialogVisible,"before-close":t.closeCardDialog,width:"900px"}},[t._l(t.cardList,(function(e,i){return a("div",{key:i},[t._v(t._s(e.insuranceId))])})),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.cardDialogVisible=!1}}},[t._v("完 成")])],1)],2)],1)])},s=[],o=(a("c5f6"),a("365c")),l=a("2ef0"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods-form"},[a("div",{staticStyle:{margin:"10px 0"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{model:t.searchForm,"label-width":"120px"}},[a("el-row",[a("el-col",{attrs:{span:8}}),a("el-col",{attrs:{span:8}}),a("div",["create"==t.sendCardOperate?a("el-button",{staticStyle:{"margin-left":"40px"},attrs:{type:"primary"},on:{click:t.sendCard}},[t._v("申请发卡")]):t._e()],1)],1)],1)],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:"","row-key":"id","header-cell-class-name":"table-header"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"合同号"}}),a("el-table-column",{attrs:{prop:"memberName",label:"客户名"}}),a("el-table-column",{attrs:{prop:"price",label:"合同金额"}}),a("el-table-column",{attrs:{prop:"status",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"white-space":"nowrap"}},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.detail(e.row)}}},[t._v("查看详情")])],1)]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":t.page.no,"page-size":t.page.size,total:t.page.total},on:{"current-change":t.handlePageChange}})],1),a("el-dialog",{staticClass:"user-dialog",attrs:{"close-on-click-modal":!1,title:"detail"===t.operate?"查看合同":"",visible:t.dialogVisible,"before-close":t.closeDialog,"append-to-body":"",width:"900px"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{model:t.detailInfo,"label-width":"140px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"合同号："}},[t._v("\n                            "+t._s(t.detailInfo.contractNo)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车主姓名："}},[t._v("\n                            "+t._s(t.detailInfo.memberName)+"\n                        ")])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系电话："}},[t._v("\n                            "+t._s(t.detailInfo.mobile)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"联系地址："}},[t._v("\n                            "+t._s(t.detailInfo.address)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车辆品牌："}},[t._v("\n                            "+t._s(t.detailInfo.brand)+"\n                        ")])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车辆型号："}},[t._v("\n                            "+t._s(t.detailInfo.vehicle)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车辆购买时间："}},[t._v("\n                            "+t._s(t.detailInfo.carBuyTime)+"\n                        ")])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车辆类型："}},[t._v("\n                            "+t._s("0"==t.detailInfo.carType?"新车":"1"==t.detailInfo.carType?"旧车":"")+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"原厂保修起始日期："}},[t._v("\n                            "+t._s(t.detailInfo.oldStartTime)+"\n                        ")])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"原厂保修结束日期："}},[t._v("\n                            "+t._s(t.detailInfo.oldEndTime)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车架号（VIN）："}},[t._v("\n                            "+t._s(t.detailInfo.vin)+"\n                        ")])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发动机号："}},[t._v("\n                            "+t._s(t.detailInfo.engineNum)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车牌号码："}},[t._v("\n                            "+t._s(t.detailInfo.licensePlate)+"\n                        ")])],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"车辆售出价格："}},[t._v("\n                            "+t._s(t.detailInfo.carPrice)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"延保销售日期"}},[t._v("\n                            "+t._s(t.detailInfo.createTime)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"行驶里程："}},[t._v("\n                            "+t._s(t.detailInfo.mileage)+"\n                        ")])],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:4!=t.detailInfo.status?"邮品：":"邮品卡号："}},[4!=t.detailInfo.status?a("div",t._l(t.detailInfo.accessoriesList,(function(e,i){return a("div",{key:i},[t._v(t._s(e.title))])})),0):t._e(),4==t.detailInfo.status?a("div",t._l(t.detailInfo.saleList,(function(e,i){return 1==e.saleType?a("div",{key:i},[t._v(t._s(e.title))]):t._e()})),0):t._e()])],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")])],1)],1),a("el-dialog",{staticClass:"user-dialog",attrs:{"close-on-click-modal":!1,title:"审批资料",visible:t.approvalDialogVisible,"before-close":t.closeApprovalDialog,width:"700px"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{model:t.form,"label-width":"120px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"合同图片上传"}},[a("upload-pic",{ref:"upload",on:{getUrl:t.getUrl}})],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.approvalDialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.approval}},[t._v("提交审批")])],1)],1),a("el-dialog",{staticClass:"user-dialog",attrs:{"close-on-click-modal":!1,title:"合同图片",visible:t.contractDialogVisible,"before-close":t.closeContractDialog,"append-to-body":"",width:"700px"}},[a("el-image",{staticClass:"stamp-pic",attrs:{src:t.contractPic}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.contractDialogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},r=[],c=(a("7f7f"),a("bd86")),d=a("6fc2"),u={name:"SendCardContractList",components:{UploadPic:d["a"]},data:function(){var t;return t={sendCardOperate:"create",contractDialogVisible:!1,contractPic:"",operate:"detail",tableData:[],name:"",detailInfo:{},page:{no:1,total:0,size:20},searchForm:{contractEndTime:"",contractStartTime:"",endTime:"",memberName:"",startTime:"",status:""},form:{address:"",brand:"",brandPic:"",lat:"",lng:"",status:""},selectContractId:"",dialogVisible:!1,approvalDialogVisible:!1,selectRow:[],contractValid:[],contractTime:[],status:"3"},Object(c["a"])(t,"name",""),Object(c["a"])(t,"approvalPic",""),Object(c["a"])(t,"approvalId",""),Object(c["a"])(t,"statusOpt",[{value:"1",label:"受理中"},{value:"2",label:"受理中"},{value:"3",label:"保单确认，未启保"},{value:"4",label:"保单启保中"}]),t},created:function(){},methods:{getUrl:function(t){this.approvalPic=t},approvalReady:function(t){var e=this;this.approvalId=t.id,this.approvalDialogVisible=!0,this.$nextTick((function(){e.$refs.upload.clearPic()}))},closeApprovalDialog:function(){this.approvalDialogVisible=!1},exportContract:function(t){var e=document.createElement("a");e.href="https://wuyoubao.sankinetwork.com/api/wyht/eportContract?id="+t.id,e.setAttribute("download",name),document.body.appendChild(e),e.click()},getStatus:function(t){for(var e=0;e<this.statusOpt.length;e++){var a=this.statusOpt[e];if(t==a.value)return a.label}},approval:function(){var t=this;if(""!=this.approvalPic){var e={id:this.approvalId,status:"2",pic:this.approvalPic};Object(o["h"])(e).then((function(e){t.$message.success({message:"提交审批成功"}),t.closeApprovalDialog(),t.getData()}))}else this.$message.warning({message:"请先上传合同图片"})},search:function(){this.getData()},handlePageChange:function(t){this.page.no=t,this.getData()},getContractData:function(t){var e=this;Object(o["s"])({id:t,page:1,pageSize:99999}).then((function(t){console.log(t),e.tableData=t.records,e.page.total=t.total,e.page.no=t.current}))},getData:function(){var t=this,e={pageSize:1e5,page:this.page.no,contractEndTime:this.contractValid[1]||"",contractStartTime:this.contractValid[0]||"",memberName:this.name,startTime:this.contractTime[0]||"",endTime:this.contractTime[1]||"",status:this.status};Object(o["k"])(e).then((function(e){t.tableData=e.records,t.page.total=e.total,t.page.no=e.current}))},handleSelectionChange:function(t){this.selectRow=t},sendCard:function(){var t=this;this.selectRow||this.$message.warning("请先选择要申请发卡的合同");for(var e=[],a=0;a<this.selectRow.length;a++){var i=this.selectRow[a];console.log(i),e.push(i.id)}try{var s=JSON.stringify(e);Object(o["f"])(s).then((function(e){t.$emit("refresh"),t.$message.success("申请成功"),t.getData()}))}catch(l){console.log(l)}},editSendCard:function(){var t=this;this.selectRow||this.$message.warning("请先选择本次要发卡的合同");for(var e=[],a=0;a<this.selectRow.length;a++){var i=this.selectRow[a];console.log(i),e.push(i.id)}try{JSON.stringify(e);var s={id:this.selectContractId,ids:e};Object(o["C"])(s).then((function(e){t.$emit("refresh"),t.$message.success("修改成功"),t.getContractData(t.selectContractId)}))}catch(l){console.log(l)}},edit:function(t){this.operate="edit",t.status=Number(t.status),this.form=Object(l["cloneDeep"])(t),this.openDialog()},detail:function(t){var e=this;Object(o["j"])({id:t.id}).then((function(t){e.detailInfo=t.contract,e.operate="detail",e.form=t,e.openDialog()}))},save:function(){var t=this,e=Object(l["cloneDeep"])(this.form);"edit"==this.operate&&userUpdate(e).then((function(e){e&&(t.$message.success({message:"修改成功"}),t.dialogVisible=!1,t.getData())}))},showContract:function(t){this.contractDialogVisible=!0,this.contractPic=t.pic},closeContractDialog:function(){this.contractDialogVisible=!1},openDialog:function(){this.dialogVisible=!0},closeDialog:function(){this.dialogVisible=!1}}},f=u,p=(a("555c"),a("2877")),g=Object(p["a"])(f,n,r,!1,null,"07129b80",null),m=g.exports,h={name:"ErrorManage",components:{SendCardContractList:m},data:function(){return{showTableStatus:"undo",operate:"detail",tableData:[],logList:[],page:{no:1,total:0,size:20},form:{remark:"",processingTime:"",picList:[]},detailForm:{},selectRow:[],status:"",postProd:[],cardList:[],selectRowId:"",contractDialogVisible:!1,cardDialogVisible:!1}},created:function(){this.getData()},methods:{transFormTime:function(t){if(!t)return"";var e=new Date(t),a=e.getFullYear()+"-",i=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",s=e.getDate()+" ",o=e.getHours()+":",l=e.getMinutes()+":",n=e.getSeconds();return a+i+s+o+l+n},askSendCard:function(){var t=this;this.contractDialogVisible=!0,this.$nextTick((function(){t.$refs.sendCardList.sendCardOperate="create",t.$refs.sendCardList.selectContractId="",t.$refs.sendCardList.getData()}))},checkCardList:function(t){var e=this;Object(o["s"])({id:t.id,page:1,pageSize:9999}).then((function(t){e.cardList=t.records,e.cardDialogVisible=!0}))},changeTable:function(t){this.showTableStatus=t,this.getData()},getCarInsuranceTitle:function(t){if(0==this.cardList.length)return"";for(var e=0;e<this.cardList.length;e++){var a=this.cardList[e];if(a.id==t)return a.title}},getStatus:function(t){var e=Number(t);switch(e){case 1:return"申请";case 2:return"回退";case 3:return"审核"}},changeStatus:function(t,e){},search:function(){this.getData()},handlePageChange:function(t){this.page.no=t,this.getData()},getData:function(){var t=this,e={page:this.page.no,pageSize:this.page.size,status:""};Object(o["z"])(e).then((function(e){console.log(e.records),t.tableData=e.records,t.page.total=e.total,t.page.no=e.current}))},handleSelectionChange:function(t){this.selectRow=t},edit:function(t){var e=this;this.operate="edit",t.status=Number(t.status),this.form={picList:[],remark:"",processingTime:""},this.$nextTick((function(){e.$refs.upload.clearPic()})),this.detailForm=Object(l["cloneDeep"])(t),this.openDialog()},access:function(t){var e=this;this.$confirm("确认发卡？").then((function(a){var i=t.id,s={id:i};Object(o["t"])(s).then((function(t){e.$message.success({message:"发卡成功"}),e.getData()}))})).catch((function(t){}))},detail:function(t,e){var a=this;this.contractDialogVisible=!0,this.$nextTick((function(){a.$refs.sendCardList.sendCardOperate="edit",a.$refs.sendCardList.selectContractId=t.id,a.$refs.sendCardList.getContractData(t.id)}))},del:function(t){var e=this;this.$confirm("确认删除当前发卡申请？").then((function(a){var i=t.id,s={id:i};Object(o["o"])(s).then((function(t){e.$message.success({message:"删除成功"}),e.getData()}))})).catch((function(t){}))},save:function(){var t=Object(l["cloneDeep"])(this.form);this.detailForm.id&&(t.guaranteeId=this.detailForm.id),this.operate},openContractDialog:function(){this.contractDialogVisible=!0},closeContractDialog:function(){this.contractDialogVisible=!1},closeCardDialog:function(){this.cardDialogVisible=!1}}},b=h,v=(a("9332"),Object(p["a"])(b,i,s,!1,null,"0b59a671",null));e["default"]=v.exports},bafa:function(t,e,a){},bd86:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("85f2"),s=a.n(i);function o(t,e,a){return e in t?s()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}}]);