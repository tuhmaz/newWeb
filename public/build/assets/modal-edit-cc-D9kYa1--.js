document.addEventListener("DOMContentLoaded",function(o){(function(){const n=document.querySelector(".credit-card-mask-edit"),i=document.querySelector(".expiry-date-mask-edit"),a=document.querySelector(".cvv-code-mask-edit");n&&new Cleave(n,{creditCard:!0,onCreditCardTypeChanged:function(e){document.querySelector(".card-type-edit").innerHTML=e!=""&&e!="unknown"?'<img src="'+assetsPath+"img/icons/payments/"+e+'-cc.png" height="28"/>':""}}),i&&new Cleave(i,{date:!0,delimiter:"/",datePattern:["m","y"]}),a&&new Cleave(a,{numeral:!0,numeralPositiveOnly:!0}),FormValidation.formValidation(document.getElementById("editCCForm"),{fields:{modalEditCard:{validators:{notEmpty:{message:"Please enter your credit card number"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-12"}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus},init:e=>{e.on("plugins.message.placed",function(t){t.element.parentElement.classList.contains("input-group")&&t.element.parentElement.insertAdjacentElement("afterend",t.messageElement)})}})})()});
