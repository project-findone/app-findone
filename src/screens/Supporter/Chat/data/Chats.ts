export default {
  id: '1',
  users: [{
    id: 'u1',
    name: 'Vadim',
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
  }, {
    id: 'u2',
    name: 'Lukas',
    imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p200x200/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_eui2=AeGly5fZLQUfAKei_EiACEq5Dfw2T_M-BQMN_DZP8z4FA_aLEVK_8e0dKvl_5vxVO0Zn-4OPzQ9pKS0c0XeXd898&_nc_ohc=z1ydC_UL4KsAX_tfrbv&_nc_oc=AQknywM4y1IAQaQZaZkPdtkUmaem060LXSByeTx3pdQXWfxW2_tdzfgRsQIXQK_zV94&_nc_ht=scontent.fkiv3-1.fna&tp=6&oh=69508c88f073f64f432fc1f1ab9299e8&oe=5F9C5FD5',
  }],
  messages: [{
    id: 'm1',
    content: 'Olá, boa tarde!',
    createdAt: '2022-11-06T12:48:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }, {
    id: 'm2',
    content: 'Oi, boa tarde!',
    createdAt: '2022-11-06T14:49:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  }, {
    id: 'm3',
    content: 'O que acontece?',
    createdAt: '2020-10-03T14:49:40.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  }, {
    id: 'm4',
    content: 'Eu vi um menino muito parecido com a Maria ontem de tarde',
    createdAt: '2020-10-03T14:50:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }, {
    id: 'm5',
    content: 'Estava na Rua Quirua 35',
    createdAt: '2020-10-03T14:51:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }, {
    id: 'm6',
    content: 'Muito obrigada!! Vou verificar',
    createdAt: '2020-10-03T14:49:00.000Z',
    user: {
      id: 'u2',
      name: 'Lukas',
    },
  }, {
    id: 'm7',
    content: 'Não há de quê ',
    createdAt: '2020-10-03T14:53:00.000Z',
    user: {
      id: 'u1',
      name: 'Vadim',
    },
  }],
};
