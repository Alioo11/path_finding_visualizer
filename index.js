








const parseToCSS = (cssObjectProperty)=>{
    return JSON.stringify(cssObjectProperty).replace(/,/g, ";").replace(/"/g, "").replace("{", ``).replace("}", ``)
}
