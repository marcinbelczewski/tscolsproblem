
module.exports = (env) => ({
    entry: [
        './index.tsx'
    ],
    output: {
        filename: 'bundle.js',        
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
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


