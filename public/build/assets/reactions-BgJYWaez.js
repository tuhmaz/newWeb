class r{constructor(){this.token=document.querySelector('meta[name="csrf-token"]').getAttribute("content")}async toggleReaction(e,a){try{const t=await fetch("/api/reactions/toggle",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":this.token},body:JSON.stringify({comment_id:e,type:a})}),n=await t.json();if(n.success)return this.updateReactionUI(e,n.stats),n.action}catch(t){console.error("Error toggling reaction:",t)}}async getReactionStats(e){try{const a=await fetch(`/api/reactions/stats/${e}`),t=await a.json();t.success&&this.updateReactionUI(e,t.stats)}catch(a){console.error("Error fetching reaction stats:",a)}}updateReactionUI(e,a){const t=["like","love","haha","wow","sad","angry"],n=document.querySelector(`#reactions-${e}`);n&&t.forEach(c=>{const s=n.querySelector(`.reaction-count-${c}`);s&&(s.textContent=a[c]||0)})}}document.addEventListener("DOMContentLoaded",()=>{window.reactionHandler=new r,document.querySelectorAll(".reaction-button").forEach(o=>{o.addEventListener("click",async e=>{e.preventDefault();const a=o.dataset.commentId,t=o.dataset.type;await window.reactionHandler.toggleReaction(a,t)==="added"?o.classList.add("active"):o.classList.remove("active")})})});
