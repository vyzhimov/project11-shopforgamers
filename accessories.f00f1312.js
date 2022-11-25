function filterCards(s){var e=document.querySelectorAll(".accessories-list .accessories-item"),i=s.target.dataset.filter;"*"===i?e.forEach((function(s){return s.classList.remove("visually-hidden")})):e.forEach((function(s){s.classList.contains(i)?s.classList.remove("visually-hidden"):s.classList.add("visually-hidden")}))}
//# sourceMappingURL=accessories.f00f1312.js.map
