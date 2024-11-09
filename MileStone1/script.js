"use strict";
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
let exp_section = document.getElementById('experiance');
let exp_btn = document.getElementById('experiance_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
