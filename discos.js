$(document).on('ready',inicia);

function inicia()
{
	$('button').on('click',compra);
}

function compra()
{
var nodo=$(this).parent().children().first().next().text();

$('aside').append('<li>'+nodo+'</li>');
}