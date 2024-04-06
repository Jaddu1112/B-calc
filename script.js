
document.getElementById('breadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const quantity = document.getElementById('quantity').value.trim();
    if (quantity.toLowerCase() === 'e') {
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').style.display = 'none';
        return;
    }
    // Example calculation (replace with actual calculation logic)
    const full = parseInt(quantity) * 1000 / 400;
    const loose = (parseInt(quantity) * 1000) % 400;
    const box = parseInt(full / 36);
    const packet = parseInt(full % 36);

    const table = `
        <table id="resultTable">
            <thead>
                <tr>
                    <th>Qty</th>
                    <th>Quantity</th>
                    <th>full</th>
                    <th>loose</th>
                    <th>box</th>
                    <th>packet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${quantity}</td>
                    <td>${quantity}</td>
                    <td>${full.toFixed(2)}</td>
                    <td>${loose}</td>
                    <td>${box}</td>
                    <td>${packet}</td>
                </tr>
            </tbody>
        </table>
    `;
    document.getElementById('result').innerHTML = table;
    document.getElementById('result').style.display = 'block';
});
