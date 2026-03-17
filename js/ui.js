// This function takes our data and builds the HTML cards
export function renderCatalog(items) {
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = ''; // Clear out any loading text

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>Stock: ${item.stock}</p>
            <input type="number" id="qty-${item.id}" value="1" min="1" max="${item.stock}" style="width: 50px;">
            <button onclick="window.handleCheckout('${item.id}', '${item.name}')">Check Out</button>
        `;
        grid.appendChild(card);
    });
}
