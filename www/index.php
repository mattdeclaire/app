<?php define('DEV', true); ?>
<!doctype html>
<html>
<head>
	<title>App</title>
	<script <?php if (DEV): ?>src="/dev-js/vendor/require.js" data-main="/dev-js/init"><?php else: ?>src="/js/main.js"<?php endif; ?>></script>
</head>
<body>
	<h1>App</h1>
</body>
</html>