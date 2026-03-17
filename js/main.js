import { renderCatalog } from './ui.js';

// Dummy data so we can see it working before we connect Google Sheets
const inventoryData = [
    { id: '1', name: 'A4 Paper (Ream)', stock: 50 },
    { id: '2', name: 'Blue Pens (Box)', stock: 15 },
    { id: '3', name: 'Sticky Notes', stock: 100 }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog(inventoryData);
});

// The checkout logic that fires when a button is clicked
window.handleCheckout = (itemId, itemName) => {
    const employee = document.getElementById('employee-name').value;
    const qty = document.getElementById(`qty-${itemId}`).value;

    if (!employee) {
        alert("Please select your name first!");
        return;
    }

    alert(`Success! ${employee} is checking out ${qty} of ${itemName}. (Next step: sending this to Google Sheets!)`);
};
