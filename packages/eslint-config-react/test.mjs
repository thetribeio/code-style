import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { ESLint } from 'eslint';

// Paths
const packageRoot = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = dirname(dirname(packageRoot));

// Instanciate ESLint
const eslint = new ESLint({
    baseConfig: {
        extends: './index.js',
        rules: {
            // We run the test withour node_modules
            'import/no-unresolved': 'off',
            // Examples often declare variables that arent used
            'no-unused-vars': 'off',
        },
    },
    cwd: packageRoot,
    useEslintrc: false,
});

// Extract examples from code style
const codeStyle = await readFile(join(repositoryRoot, 'styles', 'JavascriptReact.md'), 'utf8');
const examples = codeStyle.matchAll(/(?<type>Good|Bad):\n```\n(?<code>.*?)```/gs);

// Test them
for (const { groups: { type, code } } of examples) {
    const [result] = await eslint.lintText(code);

    if (type === 'Good') {
        if (result.errorCount > 0) {
            console.error(`Failed test: code that should pass returns error "${result.messages[0].message}":\n${code.trimEnd()}`)
        }
    } else {
        if (result.errorCount === 0) {
            console.error(`Failed test: code that should error returns no error:\n${code.trimEnd()}`)
        }
    }
}
