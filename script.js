function getPilihanKomputer(){
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(pilihanKomputer, pilihanPlayer){
    if( pilihanPlayer == pilihanKomputer )return 'SERI!';
    if( pilihanPlayer == 'gajah' ) return ( pilihanKomputer == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( pilihanPlayer == 'orang' ) return ( pilihanKomputer == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( pilihanPlayer == 'semut' ) return ( pilihanKomputer == 'orang' ) ? 'KALAH' : 'MENANG!';
}

const images = document.querySelectorAll('li img');
images.forEach(function(image){
    image.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = image.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);
        const gambarKomputer = document.querySelector('.img-komputer');
        gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    });
});