webpackJsonp(["app/js/question-manage/form/index"],{b13eefde5dd7af09b834:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n,a,o){var i={optionId:Math.random().toString().replace(".",""),optionLabel:"选项"+(0,w.numberConvertLetter)(a),inputValue:t,checked:o};n.Options[i.optionId]=t.length>0?1:0,o&&(n.checkedNum+=1),e.push(i)}function s(e,t,n){for(var a=0;a<e.length;a++)e[a].optionId==n?(e[a].checked&&(t.checkedNum=0),e.splice(a,1),delete t.Options[n],a--):e[a].optionLabel="选项"+(0,w.numberConvertLetter)(a+1)}function l(e,t,n,a,o){var i=0;e.map(function(t,r){o?t.optionId!=n||a?a||(e[r].checked=!1):e[r].checked=!0:t.optionId==n&&(e[r].checked=!a),e[r].checked&&i++}),t.checkedNum=i}function c(e,t,n,a){e.map(function(t,o){t.optionId==n&&(e[o].inputValue=a)})}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n("3bf603ab287c2b428218"),p=a(f),h=n("e7f6be29a6dce7725ed1"),b=a(h),m=n("b334fd7e4c5a19234db2"),y=a(m),v=n("337072b7820da7b7eb2d"),g=a(v),w=n("3c398f87808202f19beb"),_=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.state={dataSource:[],isValidator:!1},n.validatorDatas={checkedNum:0,Options:{}};var a=n.props.dataSource,r=n.props.dataAnswer;if(a.length>0)a.map(function(e,t){for(var a=!1,o=0;o<r.length;o++)t==r[o]&&(a=!0);u(n.state.dataSource,e,n.validatorDatas,t+1,a)});else for(var s=1;s<=n.props.defaultNum;s++)u(n.state.dataSource,"",n.validatorDatas,s,!1);return n.subscriptionMessage(),n}return r(t,e),d(t,[{key:"subscriptionMessage",value:function(){var e=this;g.default.subscribe({channel:"manage-question",topic:"question-create-form-validator-start",callback:function(t,n){e.validatorOptions(t)}})}},{key:"publishMessage",value:function(e){g.default.publish({channel:"manage-question",topic:"question-create-form-validator-end",data:{isValidator:e}})}},{key:"validatorOptions",value:function(e){var t=0;this.setState({isValidator:e.isValidator});for(var n in this.validatorDatas.Options)t+=this.validatorDatas.Options[n];t<this.state.dataSource.length||(this.validatorDatas.checkedNum<this.props.minCheckedNum?(0,y.default)("danger","至少选择"+this.props.minCheckedNum+"个答案!"):this.publishMessage(!0))}},{key:"addOption",value:function(){return this.state.dataSource.length>=this.props.maxNum?void(0,y.default)("danger","选项最多"+this.props.maxNum+"个!"):(u(this.state.dataSource,"",this.validatorDatas,this.state.dataSource.length+1,!1),void this.setState({dataSource:this.state.dataSource}))}},{key:"changeOptionChecked",value:function(e,t){l(this.state.dataSource,this.validatorDatas,e,t,this.props.isRadio),this.setState({dataSource:this.state.dataSource}),this.validatorDatas.checkedNum<=0&&this.publishMessage(!1)}},{key:"deleteOption",value:function(e){return this.state.dataSource.length<=this.props.minNum?void(0,y.default)("danger","选项最少"+this.props.minNum+"个!"):(s(this.state.dataSource,this.validatorDatas,e),void this.setState({dataSource:this.state.dataSource}))}},{key:"updateInputValue",value:function(e,t){c(this.state.dataSource,this.validatorDatas,e,t),this.validatorDatas.Options[e]=t.length>0?1:0,t.length<=0&&this.publishMessage(!1),this.setState({dataSource:this.state.dataSource})}},{key:"render",value:function(){var e=this;return p.default.createElement("div",{className:"question-options-group"},this.state.dataSource.map(function(t,n){return p.default.createElement(b.default,{imageUploadUrl:e.props.imageUploadUrl,imageDownloadUrl:e.props.imageDownloadUrl,isRadio:e.props.isRadio,publishMessage:function(t){return e.publishMessage(t)},validatorDatas:e.validatorDatas,isValidator:e.state.isValidator,datas:t,key:n,index:n,deleteOption:function(t){return e.deleteOption(t)},changeOptionChecked:function(t,n){return e.changeOptionChecked(t,n)},updateInputValue:function(t,n){return e.updateInputValue(t,n)}})}),p.default.createElement("div",{className:"form-group"},p.default.createElement("div",{className:"col-md-8 col-md-offset-2"},p.default.createElement("a",{className:"btn btn-success btn-sm pull-right",onClick:function(){return e.addOption()}},"新增选项"))))}}]),t}(f.Component);t.default=_,_.defaultProps={defaultNum:4,maxNum:10,minNum:2,isRadio:!1,minCheckedNum:1}},"5a8ff9f4ed340a8713f6":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("2cf47b8094e4851a7f1f"),l=a(s),c=n("e4b87447ba3c59058410"),d=a(c),f=n("3bf603ab287c2b428218"),p=a(f),h=n("b13eefde5dd7af09b834"),b=a(h),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"initOptions",value:function(){d.default.render(p.default.createElement(b.default,{imageUploadUrl:this.imageUploadUrl,imageDownloadUrl:this.imageDownloadUrl,dataSource:this.dataSource,dataAnswer:this.dataAnswer}),document.getElementById("question-options"))}}]),t}(l.default);t.default=m},d5fb0e67d2d4c1ebaaed:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("b334fd7e4c5a19234db2"),u=a(r),s=function(){function e(t){o(this,e),this.$ele=t,this.initEvent()}return i(e,[{key:"initEvent",value:function(){var e=this;this.$ele.on("click",'[data-role="delte-item"]',function(t){return e._deleteItem(t)})}},{key:"_deleteItem",value:function(e){var t=$(e.currentTarget).button("loading");$.post(t.data("url"),{},function(e){"ok"==e.msg&&((0,u.default)("success",Translator.trans("删除成功！")),t.closest(".js-attachment-list").siblings(".js-upload-file").show(),t.closest(".js-attachment-list").closest("div").siblings('[data-role="fileId"]').val(""),t.closest("div").remove(),$(".js-upload-file").show())})}}]),e}();t.default=s},0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("fed3b995e613c074e80b"),u=a(r),s=n("2cf47b8094e4851a7f1f"),l=a(s),c=n("e85a87f5cf404e5d12c1"),d=a(c),f=n("5a8ff9f4ed340a8713f6"),p=a(f),h=n("3c1fcf442037b440aea5"),b=a(h),m=n("228720083c8f03b23e6d"),y=a(m),v=n("7fed9bfb1a62b2d3ee74"),g=a(v),w=n("d10d1a490b8cc019f3a3"),_=a(w),O=n("1be2a74362f00ba903a0"),k=a(O),E=function(){function e(){o(this,e)}return i(e,null,[{key:"getCreator",value:function(t,n){switch(t){case"single_choice":e=new d.default(n);break;case"uncertain_choice":e=new p.default(n);break;case"choice":e=new l.default(n);break;case"determine":e=new b.default(n);break;case"essay":e=new g.default(n);break;case"fill":e=new y.default(n);break;case"material":e=new _.default(n);break;default:e=new u.default(n),e.initTitleEditor(),e.initAnalysisEditor()}return e}}]),e}(),j=$('[data-role="question-form"]'),S=$('[data-role="question-form"]').find('[name="type"]').val();E.getCreator(S,j),new k.default($('[data-role="courseId"]'),$('[data-role="lessonId"]'))},fed3b995e613c074e80b:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("d5fb0e67d2d4c1ebaaed"),u=a(r),s=function(){function e(t){o(this,e),this.$form=t,this.titleFieldId="question-stem-field",this.analysisFieldId="question-analysis-field",this.validator=null,this.titleEditorToolBarName="Minimal",this._init(),this.attachmentActions=new u.default(t)}return i(e,[{key:"_init",value:function(){this._initEvent(),this._initValidate()}},{key:"_initEvent",value:function(){var e=this;this.$form.on("click","[data-role=submit]",function(t){return e.submitForm(t)})}},{key:"submitForm",value:function(e){var t=$(e.currentTarget).data("submission");this.$form.find("[name=submission]").val(t);var n=this;this.validator.form()&&($(e.currentTarget).button("loading"),n.$form.submit())}},{key:"_initValidate",value:function(){var e=this.$form.validate({onkeyup:!1,rules:{'[data-role="target"]':{required:!0},difficulty:{required:!0},stem:{required:!0},score:{required:!0,number:!0,max:999,min:0}},messages:{'[data-role="target"]':"请选择从属",difficulty:"请选择难度"}});this.validator=e}},{key:"initTitleEditor",value:function(e){var t=$("#"+this.titleFieldId),n=CKEDITOR.replace(this.titleFieldId,{toolbar:this.titleEditorToolBarName,filebrowserImageUploadUrl:t.data("imageUploadUrl"),height:t.height()});n.on("change",function(){t.val(n.getData()),e.form()}),n.on("blur",function(){t.val(n.getData()),e.form()})}},{key:"initAnalysisEditor",value:function(){var e=$("#"+this.analysisFieldId),t=CKEDITOR.replace(this.analysisFieldId,{toolbar:this.titleEditorToolBarName,filebrowserImageUploadUrl:e.data("imageUploadUrl"),height:e.height()});t.on("change",function(){e.val(t.getData())})}},{key:"titleEditorToolBarName",set:function(e){this._titleEditorToolBarName=e},get:function(){return this._titleEditorToolBarName}}]),e}();t.default=s},"2cf47b8094e4851a7f1f":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("fed3b995e613c074e80b"),l=a(s),c=n("e4b87447ba3c59058410"),d=a(c),f=n("3bf603ab287c2b428218"),p=a(f),h=n("b13eefde5dd7af09b834"),b=a(h),m=n("337072b7820da7b7eb2d"),y=a(m),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.isSubmit=!1,n.$submit=null,n.$questionOptions=$("#question-options"),n.dataSource=n.$questionOptions.data("choices"),n.dataAnswer=n.$questionOptions.data("answer"),n.dataSource?(n.dataSource=JSON.parse(n.dataSource),n.dataAnswer=JSON.parse(n.dataAnswer)):(n.dataSource=[],n.dataAnswer=[]),n.imageUploadUrl=n.$questionOptions.data("imageUploadUrl"),n.imageDownloadUrl=n.$questionOptions.data("imageDownloadUrl"),n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.initOptions(),n.subscriptionMessage(),n}return r(t,e),u(t,[{key:"_initEvent",value:function(){var e=this;this.$form.on("click","[data-role=submit]",function(t){return e.submitForm(t)})}},{key:"submitForm",value:function(e){this.$submit=$(e.currentTarget);var t=this.$submit.data("submission");this.$form.find("[name=submission]").val(t),this.validator.form()&&this.isSubmit&&this.submit(),this.isSubmit||this.publishMessage()}},{key:"submit",value:function(){this.$submit.button("loading"),this.$form.submit()}},{key:"initOptions",value:function(){d.default.render(p.default.createElement(b.default,{imageUploadUrl:this.imageUploadUrl,imageDownloadUrl:this.imageDownloadUrl,dataSource:this.dataSource,dataAnswer:this.dataAnswer,minCheckedNum:2}),document.getElementById("question-options"))}},{key:"publishMessage",value:function(){y.default.publish({channel:"manage-question",topic:"question-create-form-validator-start",data:{isValidator:!0}})}},{key:"subscriptionMessage",value:function(){var e=this;y.default.subscribe({channel:"manage-question",topic:"question-create-form-validator-end",callback:function(t,n){e.isSubmit=t.isValidator,e.isSubmit&&e.validator.form()&&e.submit()}})}}]),t}(l.default);t.default=v},e7f6be29a6dce7725ed1:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("3bf603ab287c2b428218"),l=a(s),c=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={datas:n.props.datas},n.editor=null,n.editorBody=null,n.editorHtml=null,n}return r(t,e),u(t,[{key:"componentDidMount",value:function(){this.initCkeditor()}},{key:"deleteOption",value:function(e){this.editorHtml=null,this.props.deleteOption(e.currentTarget.attributes["data-option-id"].value)}},{key:"onChangeChecked",value:function(e){this.updateInputValue(this.editor.getData()),this.props.changeOptionChecked(e.currentTarget.attributes["data-option-id"].value,this.props.datas.checked)}},{key:"initCkeditor",value:function(e){if(this.editor)this.editor.setData(datas.inputValue);else{this.editor=CKEDITOR.replace(this.props.datas.optionId,{toolbar:"Minimal",filebrowserImageUploadUrl:this.props.imageUploadUrl,height:120});var t=this;this.editor.on("instanceReady",function(){t.editorBody=$("#"+[t.props.datas.optionId]).parent().find("iframe").contents().find("body")}),this.editor.on("change",function(){setTimeout(function(){t.updateInputValue(t.editor.getData())},100)}),this.editor.on("blur",function(){setTimeout(function(){t.updateInputValue(t.editor.getData())},100)})}}},{key:"updateInputValue",value:function(e){this.editorHtml=e,this.props.updateInputValue(this.props.datas.optionId,e)}},{key:"render",value:function(){var e=this,t=this.props.isValidator&&this.props.datas.inputValue.length<=0,n="checkbox";return this.props.isRadio&&(n="radio"),this.editorBody&&this.editorHtml!=this.props.datas.inputValue&&this.editorBody.html(this.props.datas.inputValue),l.default.createElement("div",{className:"form-group"},l.default.createElement("div",{className:"col-sm-2 control-label"},l.default.createElement("label",{className:"choice-label control-label-required"},this.props.datas.optionLabel)),l.default.createElement("div",{className:"col-sm-8 controls"},l.default.createElement("textarea",{className:"form-control datas-input col-md-8",id:this.props.datas.optionId,defaultValue:this.props.datas.inputValue,name:"choices[]",value:this.props.datas.inputValue,"data-image-upload-url":this.props.imageUploadUrl,"data-image-download-url":this.props.imageDownloadUrl}),l.default.createElement("div",{className:"mtm"},l.default.createElement("label",null,l.default.createElement("input",{type:n,name:"answer[]","data-option-id":this.props.datas.optionId,value:this.props.index,checked:this.props.datas.checked,className:"answer-checkbox",onChange:function(t){return e.onChangeChecked(t)}}),"正确答案")),l.default.createElement("p",{className:t?"color-danger":"hidden"},"请输入选项内容")),l.default.createElement("div",{className:"col-sm-2"},l.default.createElement("a",{className:"btn btn-default btn-sm","data-option-id":this.props.datas.optionId,onClick:function(t){return e.deleteOption(t)},href:"javascript:;"},l.default.createElement("i",{className:"glyphicon glyphicon-trash"}))))}}]),t}(s.Component);t.default=c},"7fed9bfb1a62b2d3ee74":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("fed3b995e613c074e80b"),l=a(s),c=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.answerFieldId="question-answer-field",n.$answerField=$("#"+n.answerFieldId),n.init(),n}return r(t,e),u(t,[{key:"init",value:function(){var e=this;this.$answerField.rules("add",{required:!0});var t=CKEDITOR.replace(this.answerFieldId,{toolbar:"Minimal",filebrowserImageUploadUrl:this.$answerField.data("imageUploadUrl"),height:this.$answerField.height()});t.on("change",function(){e.$answerField.val(t.getData())}),t.on("blur",function(){e.$answerField.val(t.getData())})}}]),t}(l.default);t.default=c},"228720083c8f03b23e6d":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("fed3b995e613c074e80b"),l=a(s);jQuery.validator.addMethod("fillCheck",function(e,t){return this.optional(t)||/(\[\[(.+?)\]\])/i.test(e)},"请输入正确的答案,如今天是[[晴|阴|雨]]天");var c=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.titleEditorToolBarName="Question",n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.$titleField=$("#"+n.titleFieldId),n.init(),n}return r(t,e),u(t,[{key:"init",value:function(){this.$titleField.rules("add",{fillCheck:!0})}}]),t}(l.default);t.default=c},d10d1a490b8cc019f3a3:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n("fed3b995e613c074e80b"),s=a(u),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initTitleEditor(n.validator),n.initAnalysisEditor(),n}return r(t,e),t}(s.default);t.default=l},e85a87f5cf404e5d12c1:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("2cf47b8094e4851a7f1f"),l=a(s),c=n("e4b87447ba3c59058410"),d=a(c),f=n("3bf603ab287c2b428218"),p=a(f),h=n("b13eefde5dd7af09b834"),b=a(h),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"initOptions",value:function(){d.default.render(p.default.createElement(b.default,{imageUploadUrl:this.imageUploadUrl,imageDownloadUrl:this.imageDownloadUrl,dataSource:this.dataSource,dataAnswer:this.dataAnswer,isRadio:!0}),document.getElementById("question-options"))}}]),t}(l.default);t.default=m},"3c1fcf442037b440aea5":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("fed3b995e613c074e80b"),l=a(s),c=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initTitleEditor(n.validator),n.initAnalysisEditor(),n.$answerField=$('[name="answer[]"]'),n.init(),n}return r(t,e),u(t,[{key:"init",value:function(){this.$answerField.rules("add",{required:!0,messages:{required:Translator.trans("请输入正确答案")}})}}]),t}(l.default);t.default=c}});