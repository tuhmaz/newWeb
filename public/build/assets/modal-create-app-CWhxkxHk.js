$(function(){const u=document.getElementById("createApp"),c=document.querySelector(".app-credit-card-mask"),r=document.querySelector(".app-expiry-date-mask"),a=document.querySelector(".app-cvv-code-mask");function i(){c&&new Cleave(c,{creditCard:!0,onCreditCardTypeChanged:function(t){document.querySelector(".app-card-type").innerHTML=t!=""&&t!="unknown"?'<img src="'+assetsPath+"img/icons/payments/"+t+'-cc.png" class="cc-icon-image" height="28"/>':""}})}r&&new Cleave(r,{date:!0,delimiter:"/",datePattern:["m","y"]}),a&&new Cleave(a,{numeral:!0,numeralPositiveOnly:!0}),u.addEventListener("show.bs.modal",function(t){const e=document.querySelector("#wizard-create-app");if(typeof e!==void 0&&e!==null){const l=[].slice.call(e.querySelectorAll(".btn-next")),o=[].slice.call(e.querySelectorAll(".btn-prev")),d=e.querySelector(".btn-submit"),s=new Stepper(e,{linear:!1});l&&l.forEach(n=>{n.addEventListener("click",p=>{s.next(),i()})}),o&&o.forEach(n=>{n.addEventListener("click",p=>{s.previous(),i()})}),d&&d.addEventListener("click",n=>{alert("Submitted..!!")})}})});