import mockjs from "mockjs"

export default {
  "get /local/getTaskList": mockjs.mock({
    success: true,
    status: "0",
    data: {
      "lastMonth|10": [{
        id: mockjs.Random.integer(0, 100),
        'age|15-90': 0,
        name: "@cname",
        city: "@city(true)",
        templateName: mockjs.Random.string(5),
        imageUrl: mockjs.Random.image(),
        nurseGrade: mockjs.Random.integer(1, 10),
        taskExecuteDate: mockjs.Random.date(),
        customerId: "@id()",
        checkInTime: mockjs.Random.date(),
        bedName: mockjs.Random.string(5),
        taskType: mockjs.Random.boolean(),
        templateCode: mockjs.Random.string(5),
      }],
      "currentMonth|10": [{
        id: mockjs.Random.integer(0, 100),
        'age|15-90': 0,
        name: "@cname",
        city: "@city(true)",
        templateName: mockjs.Random.string(5),
        imageUrl: mockjs.Random.image(),
        nurseGrade: mockjs.Random.integer(1, 10),
        taskExecuteDate: mockjs.Random.date(),
        customerId: "@id()",
        checkInTime: mockjs.Random.date(),
        bedName: mockjs.Random.string(5),
        taskType: mockjs.Random.boolean(),
        templateCode: mockjs.Random.string(5),
      }],
      "nextMonth|10": [{
        id: mockjs.Random.integer(0, 100),
        'age|15-90': 0,
        name: "@cname",
        city: "@city(true)",
        templateName: mockjs.Random.string(5),
        imageUrl: mockjs.Random.image(),
        nurseGrade: mockjs.Random.integer(1, 10),
        taskExecuteDate: mockjs.Random.date(),
        customerId: "@id()",
        checkInTime: mockjs.Random.date(),
        bedName: mockjs.Random.string(5),
        taskType: mockjs.Random.boolean(),
        templateCode: mockjs.Random.string(5),
      }],
    }
    // "data|10": [{
    //   id: mockjs.Random.integer(0, 100),
    //   'age|15-90': 0,
    //   name: "@cname",
    //   city: "@city(true)",
    //   templateName: mockjs.Random.string(5),
    //   imageUrl: mockjs.Random.image(),
    //   nurseGrade: mockjs.Random.integer(1, 10),
    //   taskExecuteDate: mockjs.Random.date(),
    //   customerId: "@id()",
    //   checkInTime: mockjs.Random.date(),
    //   bedName: mockjs.Random.string(5),
    //   taskType: mockjs.Random.boolean(),
    // }]
  })
}