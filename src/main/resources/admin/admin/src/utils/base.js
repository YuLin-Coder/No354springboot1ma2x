const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot1ma2x/",
            name: "springboot1ma2x",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1ma2x/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汽车租赁管理系统"
        } 
    }
}
export default base
