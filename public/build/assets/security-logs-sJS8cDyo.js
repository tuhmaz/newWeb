$(function(){const m=$("#select-all-logs"),s=$(".log-checkbox"),f=$("#bulk-delete-btn"),h=$("#toggle-select-all-btn");let r=!1;function i(){const e=$('input[name="selected_logs[]"]:checked');$("#bulk-delete-btn").toggleClass("d-none",e.length===0)}function g(e){$("#toggle-select-all-btn").html(e?'<i class="ri-checkbox-multiple-blank-line me-1"></i> إلغاء تحديد الكل':'<i class="ri-checkbox-multiple-line me-1"></i> تحديد الكل')}console.log("Loaded: selectAllCheckbox:",m.length),console.log("Loaded: logCheckboxes:",s.length),h.on("click",function(){r=!r,console.log("Toggle Select All:",r),s.prop("checked",r),m.prop("checked",r),i(),g()}),m.on("change",function(){console.log("Select All Checkbox Changed:",$(this).is(":checked")),s.prop("checked",$(this).is(":checked")),i()}),s.on("change",function(){const e=s.length===s.filter(":checked").length;console.log("Individual Checkbox Changed, All Checked:",e),m.prop("checked",e),i()}),$("#toggle-select-all-btn").on("click",function(){const e=$('input[name="selected_logs[]"]'),n=$("#select-all-logs"),t=n.prop("checked");e.prop("checked",!t),n.prop("checked",!t),i(),g(!t)}),$(document).on("change",'input[name="selected_logs[]"]',function(){i()}),$("#bulk-delete-btn").on("click",function(){const e=[];if($('input[name="selected_logs[]"]:checked').each(function(){e.push($(this).val())}),e.length===0)return void alert("الرجاء تحديد السجلات التي تريد حذفها");if(!confirm("هل أنت متأكد من حذف السجلات المحددة؟"))return;const n=$("#form-feedback");n.removeClass("d-none alert-danger alert-success"),$("#bulk-destroy-ids").val(e.join(",")),$.ajax({url:$("#bulk-destroy-form").attr("action"),method:"POST",data:{_token:$('meta[name="csrf-token"]').attr("content"),ids:e.join(",")},beforeSend:function(){$("#bulk-delete-btn").prop("disabled",!0).html('<i class="fas fa-spinner fa-spin"></i> جاري الحذف...')},success:function(t){t.success?(n.addClass("alert alert-success").html(t.message).removeClass("d-none"),setTimeout(()=>{window.location.reload()},1500)):n.addClass("alert alert-danger").html(t.message).removeClass("d-none")},error:function(t){const c=t.responseJSON?t.responseJSON.message:"حدث خطأ أثناء حذف السجلات";n.addClass("alert alert-danger").html(c).removeClass("d-none")},complete:function(){$("#bulk-delete-btn").prop("disabled",!1).html('<i class="fas fa-trash"></i> حذف المحدد')}})}),document.getElementById("toggle-select-all-btn").addEventListener("click",function(){const e=document.querySelectorAll('input[name="selected_logs[]"]'),n=document.getElementById("select-all-logs"),t=n.checked;e.forEach(o=>{o.checked=!t}),n.checked=!t;const c=document.getElementById("bulk-delete-btn"),u=Array.from(e).some(o=>o.checked);c.classList.toggle("d-none",!u)}),document.addEventListener("change",function(e){if(e.target.matches('input[name="selected_logs[]"]')){const n=document.querySelectorAll('input[name="selected_logs[]"]'),t=document.getElementById("bulk-delete-btn"),c=Array.from(n).some(u=>u.checked);t.classList.toggle("d-none",!c)}}),window.submitBulkDelete=function(){const e=[];if(document.querySelectorAll('input[name="selected_logs[]"]:checked').forEach(t=>{e.push(t.value)}),console.log("Selected IDs:",e),e.length===0)return alert("الرجاء تحديد السجلات التي تريد حذفها"),!1;if(!confirm("هل أنت متأكد من حذف السجلات المحددة؟"))return!1;const n=e.join(",");return console.log("IDs string to be sent:",n),document.getElementById("bulk-destroy-ids").value=n,console.log("Form data before submit:",new FormData(document.getElementById("bulk-destroy-form"))),document.getElementById("bulk-destroy-form").submit(),!0},$(".resolve-form").on("submit",function(e){e.preventDefault();const n=$(this);$.ajax({url:n.attr("action"),method:"POST",data:n.serialize(),success:function(t){n.closest("td").html('<span class="badge bg-label-success">تم الحل</span>'),t.message},error:function(t){console.error("Error:",t),alert("حدث خطأ أثناء تحديث حالة السجل")}})}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("select-all-checkbox"),n=document.querySelectorAll(".log-checkbox"),t=document.getElementById("bulk-delete-btn");function c(){const o=document.querySelectorAll(".log-checkbox:checked");t&&t.classList.toggle("d-none",o.length===0)}e&&e.addEventListener("change",function(){const o=this.checked;n.forEach(d=>{d.checked=o}),c()}),n.forEach(o=>{o.addEventListener("change",c)});const u=document.getElementById("bulk-destroy-form");u&&u.addEventListener("submit",function(o){o.preventDefault();const d=[];if(document.querySelectorAll(".log-checkbox:checked").forEach(l=>{d.push(l.value)}),d.length===0)return void alert("الرجاء تحديد سجل واحد على الأقل للحذف");if(!confirm("هل أنت متأكد من حذف السجلات المحددة؟"))return;const a=document.getElementById("form-feedback");a.classList.remove("d-none","alert-danger","alert-success"),document.getElementById("bulk-destroy-ids").value=d.join(",");const k=new FormData(this);fetch(this.action,{method:"POST",body:k,headers:{"X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').content}}).then(l=>l.json()).then(l=>{l.success?(a.classList.add("alert","alert-success"),a.textContent=l.message,setTimeout(()=>{window.location.reload()},1500)):(a.classList.add("alert","alert-danger"),a.textContent=l.message||"حدث خطأ أثناء الحذف")}).catch(l=>{a.classList.add("alert","alert-danger"),a.textContent="حدث خطأ أثناء الحذف",console.error("Error:",l)})}),document.querySelectorAll(".delete-form").forEach(o=>{o.addEventListener("submit",function(d){confirm("هل أنت متأكد من حذف هذا السجل؟")||d.preventDefault()})})})});