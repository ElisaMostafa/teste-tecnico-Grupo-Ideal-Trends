(() => {
	const form = document.getElementById('form-contato');
	if (!form) return;

	// Atualize com o número oficial no formato internacional (ex.: 55DDXXXXXXXXX)
	const WHATSAPP_NUMBER = '5511948938702';

	function buildMessage(data) {
		const linhas = [
			'Olá, Café Vitta! Gostaria de mais informações.',
			`Nome: ${data.nome || '-'}`,
			`Telefone: ${data.telefone || '-'}`,
			`Email: ${data.email || '-'}`,
			`Assunto: ${data.assunto || '-'}`,
			'',
			'Mensagem:',
			data.mensagem || '-',
		];
		return linhas.join('\n');
	}

	function toWaMeUrl(number, text) {
		const enc = encodeURIComponent(text);
		return `https://wa.me/${number}?text=${enc}`;
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const fd = new FormData(form);
		const data = Object.fromEntries(fd.entries());

		// Validação simples
		const required = ['nome', 'assunto', 'mensagem'];
		const invalid = required.filter((f) => !(data[f] && String(data[f]).trim()));
		if (invalid.length) {
			alert('Por favor, preencha os campos obrigatórios.');
			return;
		}

		const mensagem = buildMessage(data);
		const url = toWaMeUrl(WHATSAPP_NUMBER, mensagem);
		window.open(url, '_blank');
	});
})();

