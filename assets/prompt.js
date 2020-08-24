const prompt = document.getElementById('prompt');

function prompt_handle() {
	if (event.keyCode != 13 || event.which != 13)
		return;

	const content = prompt.value;

	switch (content) {
		case 'serxka':
			window.location.href = "/";
			break;
		case 'about':
			window.location.href = "/about";
			break;
		case 'posts':
			window.location.href = "/posts";
			break;
		case 'projects':
			window.location.href = "/projects";
			break;
	}
}
