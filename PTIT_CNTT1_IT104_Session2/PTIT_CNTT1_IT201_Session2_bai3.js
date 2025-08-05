function typeConsole(input = 'log') {
    console[input]('Đây là type: ', input);
}

typeConsole();
typeConsole('warn');
typeConsole('error');
