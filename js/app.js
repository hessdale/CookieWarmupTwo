let monkeys_html = document.getElementById(`monkeys`);

monkeys_html.insertAdjacentHTML(`afterend`, `<div id="monkey">
<img src="/images/funny_monkey.jpeg" alt="funny monkey" width="200px">
</div><div id="monkey">
<img src="/images/monkey_big_ears.jpeg" alt="funny monkey" width="200px">
</div><div id="monkey">
<img src="/images/sad_chimp.jpeg" alt="funny monkey" width="200px">
</div>`);

function store_cookie(details) {
    let monkey_src = monkey.getAttribute(`src`);
    Cookies.set(`monkeypic`, monkey_src);
}


let monkey = document.getElementById(`monkey`);

for (i = 0; i < monkey.length; i++) {
    monkey.addEventListener(`click`,)
}