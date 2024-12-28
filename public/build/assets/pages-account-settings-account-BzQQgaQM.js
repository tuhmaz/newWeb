document.addEventListener("DOMContentLoaded",function(s){(function(){const n=document.querySelector("#formAccountSettings"),l=document.querySelector("#formAccountDeactivation"),o=l.querySelector(".deactivate-account");n&&FormValidation.formValidation(n,{fields:{firstName:{validators:{notEmpty:{message:"Please enter first name"}}},lastName:{validators:{notEmpty:{message:"Please enter last name"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:".col-md-6"}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus},init:e=>{e.on("plugins.message.placed",function(t){t.element.parentElement.classList.contains("input-group")&&t.element.parentElement.insertAdjacentElement("afterend",t.messageElement)})}}),l&&FormValidation.formValidation(l,{fields:{accountActivation:{validators:{notEmpty:{message:"Please confirm you want to delete account"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:""}),submitButton:new FormValidation.plugins.SubmitButton,fieldStatus:new FormValidation.plugins.FieldStatus({onStatusChanged:function(e){e?o.removeAttribute("disabled"):o.setAttribute("disabled","disabled")}}),autoFocus:new FormValidation.plugins.AutoFocus},init:e=>{e.on("plugins.message.placed",function(t){t.element.parentElement.classList.contains("input-group")&&t.element.parentElement.insertAdjacentElement("afterend",t.messageElement)})}});const u=document.querySelector("#accountActivation");o&&(o.onclick=function(){u.checked==1&&Swal.fire({text:"Are you sure you would like to deactivate your account?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",customClass:{confirmButton:"btn btn-primary me-2 waves-effect waves-light",cancelButton:"btn btn-label-secondary waves-effect waves-light"},buttonsStyling:!1}).then(function(e){e.value?Swal.fire({icon:"success",title:"Deleted!",text:"Your file has been deleted.",customClass:{confirmButton:"btn btn-success waves-effect waves-light"}}):e.dismiss===Swal.DismissReason.cancel&&Swal.fire({title:"Cancelled",text:"Deactivation Cancelled!!",icon:"error",customClass:{confirmButton:"btn btn-success waves-effect waves-light"}})})});const c=document.querySelector("#phoneNumber"),r=document.querySelector("#zipCode");c&&new Cleave(c,{phone:!0,phoneRegionCode:"US"}),r&&new Cleave(r,{delimiter:"",numeral:!0});let a=document.getElementById("uploadedAvatar");const i=document.querySelector(".account-file-input"),m=document.querySelector(".account-image-reset");if(a){const e=a.src;i.onchange=()=>{i.files[0]&&(a.src=window.URL.createObjectURL(i.files[0]))},m.onclick=()=>{i.value="",a.src=e}}})()}),$(function(){var s=$(".select2");s.length&&s.each(function(){var n=$(this);n.wrap('<div class="position-relative"></div>'),n.select2({dropdownParent:n.parent()})})});