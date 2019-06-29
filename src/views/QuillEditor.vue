<template>
	<div class="edit_container">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
		
		<form id="upload" class="hidden" enctype="multipart/form-data" method="post">     <!--用来上传图片-->
		  <input type="file" name="image" id="selectImg" accept="image/gif, image/jpeg, image/png" @change="inputChangeImg" multiple/>
		</form>
		<button v-on:click="saveHtml">保存</button>
		<!-- 从数据库读取展示 -->
        <div v-html="str" class="ql-editor">
            {{str}}
        </div>
    </div>
</template>
<script>
	import { quillEditor } from "vue-quill-editor"; //调用编辑器
	import 'quill/dist/quill.core.css';
	import 'quill/dist/quill.snow.css';
	import 'quill/dist/quill.bubble.css';
	
	//vue-quill-edito的配置
	  const toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		['blockquote', 'code-block'],

		[{'header': 1}, {'header': 2}],               // custom button values
		[{'list': 'ordered'}, {'list': 'bullet'}],
		[{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
		[{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
		[{'direction': 'rtl'}],                         // text direction

		[{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
		[{'header': [1, 2, 3, 4, 5, 6, false]}],

		[{'color': []}, {'background': []}],          // dropdown with defaults from theme
		[{'font': []}],
		[{'align': []}],
		['link', 'image', 'video'],
		['clean']                                         // remove formatting button
	  ]
  
	export default {
		components: {
			quillEditor
		},
		data() {
			return {
				content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
				str: '',
				editorOption: {
					modules: {
						toolbar: {
						  container: toolbarOptions,  // 工具栏
						  handlers: {
							'image': function (value) {
							  if (value) {
								document.getElementById("selectImg").click();    //调用选择图片
							  } else {
								this.quill.format('image', false);
							  }
							}
						  }
						},
					}
				}
			}
		},
		methods: {
			onEditorReady(editor) { // 准备编辑器

			},
			onEditorBlur(){}, // 失去焦点事件
			onEditorFocus(){}, // 获得焦点事件
			onEditorChange(){}, // 内容改变事件
			escapeStringHTML(str) {// 转码
				str = str.replace(/&lt;/g,'<');
				str = str.replace(/&gt;/g,'>');
				return str;
			},
			saveHtml:function(event){
			  console.log(this.content);
			},
			inputChangeImg: function () { // input 选择图片时的操作
				let that = this;
				let input = document.getElementById('selectImg');
				if (input.files && input.files[0]) {
				  let item = input.files[0];
				  let reader = new FileReader();
				  reader.onload = function (e) {
					var form = new FormData();
					form.append("file", item);
					console.log(form)
					//console.log(e)
				  };
				  reader.readAsDataURL(item);
				}
			}
		},
		computed: {
			editor() {
				return this.$refs.myQuillEditor.quill;
			},
		},
		mounted() {
			//文本框插入图片内容测试
			/* let mEditor = this.editor;
			let length = mEditor.getSelection().index;
			mEditor.insertEmbed(length, 'image', 'http://51coach.com/headImg/20190228133715851.jpg');
			mEditor.setSelection(length + 1); */
		
			let content = '<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>';  // 请求后台返回的内容字符串
			this.str = this.escapeStringHTML(content);
		}
	}
</script>
<style scoped>
.hidden{
	display: none;
}
</style>