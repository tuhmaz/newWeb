$(function(){const c=$("#select-all-logs"),e=$(".log-checkbox"),h=$("#bulk-delete-btn"),i=$("#toggle-select-all-btn");let o=!1;function n(){const l=e.filter(":checked").length>0;console.log("Bulk Delete Button Visibility:",l),h.toggleClass("d-none",!l)}console.log("Loaded: selectAllCheckbox:",c.length),console.log("Loaded: logCheckboxes:",e.length),i.on("click",function(){o=!o,console.log("Toggle Select All:",o),e.prop("checked",o),c.prop("checked",o),n(),i.html(o?'<i class="ri-checkbox-multiple-blank-line me-1"></i> إلغاء تحديد الكل':'<i class="ri-checkbox-multiple-line me-1"></i> تحديد الكل')}),c.on("change",function(){console.log("Select All Checkbox Changed:",$(this).is(":checked")),e.prop("checked",$(this).is(":checked")),n()}),e.on("change",function(){const l=e.length===e.filter(":checked").length;console.log("Individual Checkbox Changed, All Checked:",l),c.prop("checked",l),n()}),window.submitBulkDelete=function(){confirm("هل أنت متأكد من حذف السجلات المحددة؟")&&$("#bulk-delete-form").submit()},$(".resolve-form").on("submit",function(l){l.preventDefault();const t=$(this);$.ajax({url:t.attr("action"),method:"POST",data:t.serialize(),success:function(s){t.closest("td").html('<span class="badge bg-label-success">تم الحل</span>'),s.message},error:function(s){console.error("Error:",s),alert("حدث خطأ أثناء تحديث حالة السجل")}})})});