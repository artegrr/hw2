// Task 1:Ремонт
alert(
  "Привет! Мой дядя заинтересовался, сколько банок краски необходимо для покраски стен в офисе длиной L метров, шириной – W и высотой – H, если одной банки хватает на 16м2, а размерами дверей и окон можно пренебречь? Заказов много, поэтому дядя попросил написать программу, которая будет все это считать."
);

let L = prompt("Какая длина L?");
let W = prompt("Какая ширина W?");
let H = prompt("Какая высота H?");

let parmArea = Math.ceil((L + W) * 2 * H / 16);
alert(`Получаем ${parmArea} банок`);