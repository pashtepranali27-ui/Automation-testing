
let responseTime = 850;  // ms
let sla = 1000;

let iswithinSLA  = responseTime <= sla ? "✅ Within SLA" : "❌ SLA Breach";
console.log(iswithinSLA);
