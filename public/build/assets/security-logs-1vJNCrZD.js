$(function(){const a=$("#select-all-logs"),o=$(".log-checkbox"),m=$("#bulk-delete-btn"),u=$("#toggle-select-all-btn");let s=!1;function r(){const e=$('input[name="selected_logs[]"]:checked');$("#bulk-delete-btn").toggleClass("d-none",e.length===0)}function d(e){$("#toggle-select-all-btn").html(e?'<i class="ri-checkbox-multiple-blank-line me-1"></i> إلغاء تحديد الكل':'<i class="ri-checkbox-multiple-line me-1"></i> تحديد الكل')}console.log("Loaded: selectAllCheckbox:",a.length),console.log("Loaded: logCheckboxes:",o.length),u.on("click",function(){s=!s,console.log("Toggle Select All:",s),o.prop("checked",s),a.prop("checked",s),r(),d()}),a.on("change",function(){console.log("Select All Checkbox Changed:",$(this).is(":checked")),o.prop("checked",$(this).is(":checked")),r()}),o.on("change",function(){const e=o.length===o.filter(":checked").length;console.log("Individual Checkbox Changed, All Checked:",e),a.prop("checked",e),r()}),$("#toggle-select-all-btn").on("click",function(){const e=$('input[name="selected_logs[]"]'),t=$("#select-all-logs"),l=t.prop("checked");e.prop("checked",!l),t.prop("checked",!l),r(),d(!l)}),$(document).on("change",'input[name="selected_logs[]"]',function(){r()}),$("#bulk-delete-btn").on("click",function(){const e=[];if($('input[name="selected_logs[]"]:checked').each(function(){e.push($(this).val())}),e.length===0)return void alert("الرجاء تحديد السجلات التي تريد حذفها");if(!confirm("هل أنت متأكد من حذف السجلات المحددة؟"))return;const t=$("#form-feedback");t.removeClass("d-none alert-danger alert-success"),$("#bulk-destroy-ids").val(e.join(","));const l=$("#bulk-destroy-form");$.ajax({url:l.attr("action"),method:"POST",data:new FormData(l[0]),processData:!1,contentType:!1,headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},beforeSend:function(){$("#bulk-delete-btn").prop("disabled",!0).html('<i class="ri-loader-2-line ri-spin"></i> جاري الحذف...')},success:function(n){n.success?(t.addClass("alert-success").removeClass("d-none").text(n.message),setTimeout(()=>{window.location.reload()},1e3)):t.addClass("alert-danger").removeClass("d-none").text(n.message||"حدث خطأ أثناء الحذف")},error:function(n){let c="حدث خطأ أثناء الحذف";n.responseJSON&&(c=n.responseJSON.message||c,console.error("Server Error:",n.responseJSON)),t.addClass("alert-danger").removeClass("d-none").text(c)},complete:function(){$("#bulk-delete-btn").prop("disabled",!1).html('<i class="ri-delete-bin-line me-1"></i> حذف السجلات المحددة')}})}),document.getElementById("toggle-select-all-btn").addEventListener("click",function(){const e=document.querySelectorAll('input[name="selected_logs[]"]'),t=document.getElementById("select-all-logs"),l=t.checked;e.forEach(i=>{i.checked=!l}),t.checked=!l;const n=document.getElementById("bulk-delete-btn"),c=Array.from(e).some(i=>i.checked);n.classList.toggle("d-none",!c)}),document.addEventListener("change",function(e){if(e.target.matches('input[name="selected_logs[]"]')){const t=document.querySelectorAll('input[name="selected_logs[]"]'),l=document.getElementById("bulk-delete-btn"),n=Array.from(t).some(c=>c.checked);l.classList.toggle("d-none",!n)}}),window.submitBulkDelete=function(){const e=[];if(document.querySelectorAll('input[name="selected_logs[]"]:checked').forEach(l=>{e.push(l.value)}),console.log("Selected IDs:",e),e.length===0)return alert("الرجاء تحديد السجلات التي تريد حذفها"),!1;if(!confirm("هل أنت متأكد من حذف السجلات المحددة؟"))return!1;const t=e.join(",");return console.log("IDs string to be sent:",t),document.getElementById("bulk-destroy-ids").value=t,console.log("Form data before submit:",new FormData(document.getElementById("bulk-destroy-form"))),document.getElementById("bulk-destroy-form").submit(),!0},$(".resolve-form").on("submit",function(e){e.preventDefault();const t=$(this);$.ajax({url:t.attr("action"),method:"POST",data:t.serialize(),success:function(l){t.closest("td").html('<span class="badge bg-label-success">تم الحل</span>'),l.message},error:function(l){console.error("Error:",l),alert("حدث خطأ أثناء تحديث حالة السجل")}})})});