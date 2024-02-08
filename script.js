document.getElementById('botaoPesquisar').addEventListener('click', function() {
    let termoDePesquisa = document.getElementById('caixaPesquisa').value;
    fetchCriptoInfo(termoDePesquisa);
});

function fetchCriptoInfo(termoDePesquisa) {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${termoDePesquisa}`)
    .then(response => response.json())
    .then(data => {
        const infoSection = document.getElementById('info-section');
        infoSection.innerHTML = ''; // Essa função limpa a seção antes de adicionar novas informações
        data.forEach(coin => {
            const div = document.createElement('div');
            div.classList.add('cripto-Caixa');
            div.innerHTML = `
                <h2>${coin.name} (${coin.symbol.toUpperCase()})</h2>
                <p>Preço atual: $${coin.current_price}</p>
                <p>Alta 24h: $${coin.high_24h}</p>
                <p>Baixa 24h: $${coin.low_24h}</p>
            `;
            infoSection.appendChild(div);
        });
    })
    .catch(error => console.log(error));
}




