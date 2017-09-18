
module.exports = (env) => ({
    entry: [
        './index.ts'
    ],
    output: {
        filename: 'bundle.js',        
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader'],
                exclude: /node_modules/
            },
        ]
    },
})


