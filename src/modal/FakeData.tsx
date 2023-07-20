import {ClassInfo} from '../types/ClassInfo';
import {NewsType} from '../types/NewType';
import {News} from '../types/News';
export const FakeNews: News[] = [
  {
    _id: '64b6ca0f9fda0eb930137a84',
    title: 'Bí quyết thành công trong học tập',
    content: 'Hãy khám phá những bí quyết giúp bạn thành công trong học tập.',
    type: NewsType.Study,
    like: 10,
    dislike: 2,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '64b6ca0f9fda0eb930137a85',
    title: 'Cách quản lý tài chính hiệu quả cho sinh viên',
    content:
      'Tìm hiểu cách quản lý tài chính một cách thông minh và hiệu quả trong thời gian học tập.',
    type: NewsType.Tuition,
    like: 5,
    dislike: 1,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '64b6ca0f9fda0eb930137a86',
    title: '10 hoạt động thú vị cho ngày cuối tuần',
    content:
      'Hãy khám phá những hoạt động thú vị để thư giãn và giải trí trong ngày cuối tuần.',
    type: NewsType.Activity,
    like: 8,
    dislike: 3,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
];

export const fakeSchedule: ClassInfo[] = [
  {
    _id: '64b5150b8575b4fc209d60ff',
    classCode: 'MD18101',
    clsasAddress: {
      room: 'T1111',
      buiding: 'T',
      detailAdress: '',
    },
    slot: {
      _id: '64b4ec69db426a902d573b99',
      startTime: {
        hour: 7,
        minute: 15,
      },
      endTime: {
        hour: 9,
        minute: 15,
      },
      label: 'Ca 1',
    },
    link: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    date: '2023-07-19T00:00:00.000Z',
    note: 'ghi chu',
    status: 'HDI',
    description: 'Slide 4:Express js và hbs template (P2), Lab4(P2), Quiz4',
    teacher: {
      name: 'Hoàng Văn Thành',
      code: 'T250',
      photo:
        'https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2023_07_02/0207tintac.jpg',
    },
    subject: {
      code: 'MOB401',
      name: 'Lập trình VIET69',
    },
  },
  {
    _id: '64b5150b8575b4fc209d6101',
    classCode: 'MD18101',
    clsasAddress: {
      room: 'T1111',
      buiding: 'T',
      detailAdress: '',
    },
    slot: {
      _id: '64b4eccddb426a902d573b9c',
      startTime: {
        hour: 9,
        minute: 45,
      },
      endTime: {
        hour: 11,
        minute: 45,
      },
      label: 'Ca 3',
    },
    link: 'https://meet.google.com/tdi-sswa-joj',
    date: '2023-07-21T00:00:00.000Z',
    note: 'ghi chu 3',
    status: 'HDI',
    description: 'Slide 5: Upload file với thư viện multer (P1), Lab5(P1)',
    teacher: {
      name: 'Hoàng Văn Thành',
      code: 'T250',
      photo:
        'https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2023_07_02/0207tintac.jpg',
    },
    subject: {
      code: 'MOB405',
      name: 'Lập trình JAV 2',
    },
  },
  {
    _id: '64b5150b8575b4fc209d6101',
    classCode: 'MD18101',
    clsasAddress: {
      room: 'T1111',
      buiding: 'T',
      detailAdress: '',
    },
    slot: {
      _id: '64b4eccddb426a902d573b9c',
      startTime: {
        hour: 12,
        minute: 0,
      },
      endTime: {
        hour: 14,
        minute: 0,
      },
      label: 'Ca 3',
    },
    link: 'https://meet.google.com/tdi-sswa-joj',
    date: '2023-07-21T00:00:00.000Z',
    note: 'ghi chu 3',
    status: 'HDI',
    description: 'Slide 5: Upload file với thư viện multer (P1), Lab5(P1)',
    teacher: {
      name: 'Hoàng Văn Thành',
      code: 'T250',
      photo:
        'https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2023_07_02/0207tintac.jpg',
    },
    subject: {
      code: 'MOB405',
      name: 'Lập trình MOBILEBLOG',
    },
  },
  {
    _id: '64b5150b8575b4fc209d6101',
    classCode: 'MD18101',
    clsasAddress: {
      room: 'T1111',
      buiding: 'T',
      detailAdress: '',
    },
    slot: {
      _id: '64b4eccddb426a902d573b9c',
      startTime: {
        hour: 13,
        minute: 0,
      },
      endTime: {
        hour: 15,
        minute: 0,
      },
      label: 'Ca 3',
    },
    link: 'https://meet.google.com/tdi-sswa-joj',
    date: '2023-07-21T00:00:00.000Z',
    note: 'ghi chu 3',
    status: 'HDI',
    description: 'Slide 5: Upload file với thư viện multer (P1), Lab5(P1)',
    teacher: {
      name: 'Hoàng Văn Thành',
      code: 'T250',
      photo:
        'https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2023_07_02/0207tintac.jpg',
    },
    subject: {
      code: 'RPHANG305',
      name: 'Khảo sát không gian mạng',
    },
  },
  {
    _id: '64b5150b8575b4fc209d6101',
    classCode: 'MD18101',
    clsasAddress: {
      room: 'T1111',
      buiding: 'T',
      detailAdress: '',
    },
    slot: {
      _id: '64b4eccddb426a902d573b9c',
      startTime: {
        hour: 15,
        minute: 0,
      },
      endTime: {
        hour: 17,
        minute: 0,
      },
      label: 'Ca 3',
    },
    link: 'https://meet.google.com/tdi-sswa-joj',
    date: '2023-07-21T00:00:00.000Z',
    note: 'ghi chu 3',
    status: 'HDI',
    description: 'Slide 5: Upload file với thư viện multer (P1), Lab5(P1)',
    teacher: {
      name: 'Hoàng Văn Thành',
      code: 'T250',
      photo:
        'https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2023_07_02/0207tintac.jpg',
    },
    subject: {
      code: 'MOB405',
      name: 'Lập trình JAV 5',
    },
  },
];
