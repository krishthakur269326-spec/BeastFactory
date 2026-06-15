function showTab(tabId){
            document.querySelectorAll('.box').forEach(box => box.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');
        }