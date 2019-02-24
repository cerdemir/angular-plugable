// https://rollupjs.org/guide/en#configuration-files

import angular from 'rollup-plugin-angular';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'src/main.ts',
    output: {
        file: '../../main-app/src/assets/plugins/plugin-stock.js',
        format: 'umd',
        name: 'plugin-invoice',
    },
    plugins: [
        angular(),
        resolve({
            jsnext: true,
            main: true,
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        typescript({
            typescript: require('typescript')
        }),
        commonjs()
    ],
    external: [
        '@angular/core',
        '@angular/common'
    ]
}]
