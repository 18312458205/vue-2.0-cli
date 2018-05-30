import Mock from 'mockjs'

Mock.mock('/wangyajing/login?user=admin&pass=admin', function () {
  console.log('mock login')
  return {
    success: true,
    data: [
      {
        'deviceName': '设备1',
        'deviceId': '1111'
      },
      {
        'deviceName': '设备2',
        'deviceId': '2222'
      }
    ]
  }
})

Mock.mock('/wangyajing/login?user=aaa&pass=aaa', function () {
  console.log('mock login')
  return {
    success: true,
    data: [
      {
        'deviceName': 'qqq',
        'deviceId': 'qqq'
      },
      {
        'deviceName': 'qqq',
        'deviceId': 'qqq'
      }
    ]
  }
})
