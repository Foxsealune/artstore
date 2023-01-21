document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quantity').forEach(q => {
      q.addEventListener('input', e => {
        let p = +e.target.closest('tr').querySelector('[data-amount]').dataset.amount * +e.target.value;
        e.target.closest('tr').querySelector('.total').innerText = `$${p.toFixed(2)}`;
      })
    })
  })

