### webpack5+react18

### 2022-5-25
1. 打包方式完善
2. webpack以及babel都使用es的打包方式
```
// webpack
output: {
    library: {
        type: 'module'
    },
}

// babel
"presets": [
    [
        "@babel/preset-env",
        {
            "corejs": { 
                "version": "3.8", 
                "proposals": true 
            },
            "useBuiltIns": "usage", // usage只转移用到新语言,entry全部转移
            "modules": false	// 保留es模块
        }
    ],
    "@babel/preset-react"
],
```