$(function(){const n=$("#select-all-logs"),o=$(".log-checkbox"),a=$("#bulk-delete-btn"),u=$("#toggle-select-all-btn");let c=!1;function s(){const e=o.filter(":checked").length>0;console.log("Bulk Delete Button Visibility:",e),a.toggleClass("d-none",!e)}console.log("Loaded: selectAllCheckbox:",n.length),console.log("Loaded: logCheckboxes:",o.length),u.on("click",function(){c=!c,console.log("Toggle Select All:",c),o.prop("checked",c),n.prop("checked",c),s(),u.html(c?'<i class="ri-checkbox-multiple-blank-line me-1"></i> إلغاء تحديد الكل':'<i class="ri-checkbox-multiple-line me-1"></i> تحديد الكل')}),n.on("change",function(){console.log("Select All Checkbox Changed:",$(this).is(":checked")),o.prop("checked",$(this).is(":checked")),s()}),o.on("change",function(){const e=o.length===o.filter(":checked").length;console.log("Individual Checkbox Changed, All Checked:",e),n.prop("checked",e),s()}),document.getElementById("toggle-select-all-btn").addEventListener("click",function(){const e=document.querySelectorAll('input[name="selected_logs[]"]'),t=document.getElementById("select-all-logs"),l=t.checked;e.forEach(r=>{r.checked=!l}),t.checked=!l;const d=document.getElementById("bulk-delete-btn"),i=Array.from(e).some(r=>r.checked);d.classList.toggle("d-none",!i)}),document.addEventListener("change",function(e){if(e.target.matches('input[name="selected_logs[]"]')){const t=document.querySelectorAll('input[name="selected_logs[]"]'),l=document.getElementById("bulk-delete-btn"),d=Array.from(t).some(i=>i.checked);l.classList.toggle("d-none",!d)}}),window.submitBulkDelete=function(){const e=[];if(document.querySelectorAll('input[name="selected_logs[]"]:checked').forEach(l=>{e.push(l.value)}),console.log("Selected IDs:",e),e.length===0)return alert("الرجاء تحديد السجلات التي تريد حذفها"),!1;if(!confirm("هل أنت متأكد من حذف السجلات المحددة؟"))return!1;const t=e.join(",");return console.log("IDs string to be sent:",t),document.getElementById("bulk-destroy-ids").value=t,console.log("Form data before submit:",new FormData(document.getElementById("bulk-destroy-form"))),document.getElementById("bulk-destroy-form").submit(),!0},$(".resolve-form").on("submit",function(e){e.preventDefault();const t=$(this);$.ajax({url:t.attr("action"),method:"POST",data:t.serialize(),success:function(l){t.closest("td").html('<span class="badge bg-label-success">تم الحل</span>'),l.message},error:function(l){console.error("Error:",l),alert("حدث خطأ أثناء تحديث حالة السجل")}})})});
