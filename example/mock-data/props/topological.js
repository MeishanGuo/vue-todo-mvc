export default {
  "nodes":[
    [
      {"label":"招聘","type":"production"},
      {"label":"测评","type":"production"},
      {"label":"Italent","type":"production"}
    ],
    [
      {"label":"应用入口","type":"appEntrance"}
    ],
    [
      {"label":"核心业务服务","type":"service"},
      {"label":"RabbitMQ","type":"service"},
      {"label":"KAFKA","type":"service"},
      {"label":"工作流服务","type":"service"}
    ],
    [
      {"label":"报告生成服务","type":"service"},
      {"label":"数据导出服务","type":"service"}
    ],
    [
      {"label":"ElasticSearch","type":"memory"}
      ,{"label":"Canssandra","type":"memory"}
      ,{"label":"SQLServer","type":"memory"}
      ,{"label":"Redis","type":"memory"}
      ,{"label":"第三方云服务","type":"cloud"}
    ]
  ],
  "links":[[[1,1],[2,1]],[[1,2],[2,1]],[[1,3],[2,1]],[[2,1],[3,1]],[[2,1],[3,2]],[[2,1],[3,3]],[[2,1],[3,4]],[[3,1],[5,1]],[[3,1],[5,3]],[[3,1],[5,4]],[[3,2],[4,1]],[[3,3],[4,2]],[[3,4],[5,3]],[[4,1],[5,2]],[[4,2],[5,5]]]}