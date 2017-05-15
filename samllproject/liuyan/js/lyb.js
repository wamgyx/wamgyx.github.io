$(function(){
	const textarea=$(".lybbox textarea")[0];
	const btn=$(".lybbox input[type=button]")[0];
	const con=$(".con ul")[0];
	let len=120;
	console.log();
	// 点提交按钮或按ctrl+enter进行提交
	textarea.onkeydown=btn.onclick=function(e){
		if(e.type=="click"||(e.keyCode==13&&e.ctrlKey)){
			let text=textarea.value;
			let li=$("<li>");
			if(textarea.value.trim()==""){
				textarea.value="";
				return;
			}
			textarea.value="";
			li.innerHTML=text;
			con.appendChild(li);
		}
	}
	textarea.oninput=function(){
		// if(textarea.value.length<=len){
		// 	let text=textarea.value;
		// 	const yzishu=$(".tishi span")[0];
		// 	const wzishu=$(".tishi i")[0];
		// 	yzishu.innerHTML=text.length;
		// 	wzishu.innerHTML=len-text.length;
		// }else{
		// 	textarea.value=textarea.value.slice(0,len);
		// }
		let text=textarea.value;
		const yzishu=$(".tishi span")[0];
		const wzishu=$(".tishi i")[0];
		if(text.length>len){
			textarea.value=textarea.value.substr(0,len);
			text=textarea.value
		}
		yzishu.innerHTML=text.length;
		wzishu.innerHTML=len-text.length;
	}
	// textarea.onkeypress=textarea.onkeyup=function(){
	// 	if(textarea.value.length<=len){
	// 		let text=textarea.value;
	// 		const yzishu=$(".tishi span")[0];
	// 		const wzishu=$(".tishi i")[0];
	// 		yzishu.innerHTML=text.length;
	// 		wzishu.innerHTML=len-text.length;
	// 	}else{
	// 		textarea.value=textarea.value.slice(0,len);
	// 	}
	// }
})