import {ClassInfo} from '../types/ClassInfo';
import {NewsType} from '../types/NewType';
import {News} from '../types/News';
import {ItemTerm} from '../types/ItemTerm';
import {AppIcons} from '../constant/AppAsset';
import {TypeNotification} from '../types/Notification';
import {User} from '../types/User';

export const fakeNotification: TypeNotification[] = [
  {
    isRead: false,
    isSent: true,
    _id: '64b6ca0f9fda0eb930137a84',
    content: 'Bạn có bài tập mới',
    user: {
      fullName: 'Nguyễn Văn A',
      email: 'concu@gmail.com',
      picture:
        'https://img.freepik.com/free-vector/cute-pig-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7818.jpg?t=st=1690733118~exp=1690733718~hmac=e9cb622d4f14635fad29588f7437a9648a04a787d3410f4e5922feef26248283',
      classCode: 'CTT12CDT01',
      facility: 'Công nghệ thông tin',
      phone: '0123456789',
    },
    type: 'homework',
    createdAt: '2023-07-18T17:21:19.791Z',
    updatedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    isRead: false,
    isSent: true,
    _id: '64b6ca0f9fda0eb930137a85',
    content: 'Bạn có bài tập mới đi con mẹ mày nhác con cặc',
    user: {
      fullName: 'Nguyễn Văn A',
      email: 'concu@gmail.com',
      picture:
        'https://img.freepik.com/free-vector/cute-pig-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7818.jpg?t=st=1690733118~exp=1690733718~hmac=e9cb622d4f14635fad29588f7437a9648a04a787d3410f4e5922feef26248283',
      classCode: 'CTT12CDT01',
      facility: 'Công nghệ thông tin',
      phone: '0123456789',
    },
    type: 'homework',
    createdAt: '2023-07-18T17:21:19.791Z',
    updatedAt: '2023-07-18T17:21:19.791Z',
  },

  {
    isRead: false,
    isSent: true,
    _id: '64b6ca0f9fda0eb930137a86',
    content: 'Bạn có bài tập mới đi con mẹ mày nhác đĩ mẹ mày',
    user: {
      fullName: 'Nguyễn Văn A',
      email: 'concu@gmail.com',
      picture:
        'https://img.freepik.com/free-vector/cute-pig-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7818.jpg?t=st=1690733118~exp=1690733718~hmac=e9cb622d4f14635fad29588f7437a9648a04a787d3410f4e5922feef26248283',
      classCode: 'CTT12CDT01',
      facility: 'Công nghệ thông tin',
      phone: '0123456789',
    },
    type: 'homework',
    createdAt: '2023-07-18T17:21:19.791Z',
    updatedAt: '2023-07-18T17:21:19.791Z',
  },

  {
    isRead: false,
    isSent: true,
    _id: '64b6ca0f9fda0eb930137a87',
    content: 'Bạn có bài tập mới đi con mẹ mày nhác vãi lồn ra',
    user: {
      fullName: 'Nguyễn Văn A',
      email: 'concu@gmail.com',
      picture:
        'https://img.freepik.com/free-vector/cute-pig-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7818.jpg?t=st=1690733118~exp=1690733718~hmac=e9cb622d4f14635fad29588f7437a9648a04a787d3410f4e5922feef26248283',
      classCode: 'CTT12CDT01',
      facility: 'Công nghệ thông tin',
      phone: '0123456789',
    },
    type: 'homework',
    createdAt: '2023-07-18T17:21:19.791Z',
    updatedAt: '2023-07-18T17:21:19.791Z',
  },

  {
    isRead: false,
    isSent: true,
    _id: '64b6ca0f9fda0eb930137a88',
    content: 'Bạn có bài tập mới đi con mẹ mày nhác vãi lồn ra asdasdasdasd',
    user: {
      fullName: 'Nguyễn Văn A',
      email: 'concu@gmail.com',
      picture:
        'https://img.freepik.com/free-vector/cute-pig-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7818.jpg?t=st=1690733118~exp=1690733718~hmac=e9cb622d4f14635fad29588f7437a9648a04a787d3410f4e5922feef26248283',
      classCode: 'CTT12CDT01',
      facility: 'Công nghệ thông tin',
      phone: '0123456789',
    },
    type: 'homework',
    createdAt: '2023-07-18T17:21:19.791Z',
    updatedAt: '2023-07-18T17:21:19.791Z',
  },

  {
    isRead: false,
    isSent: true,
    _id: '64b6ca0f9fda0eb930137a89',
    content:
      'Bạn có bài tập mới đi con mẹ mày nhác vãi lồn ra asdasdasdasd 1eqweqweq',
    user: {
      fullName: 'Nguyễn Văn A',
      email: 'concu@gmail.com',
      picture:
        'https://img.freepik.com/free-vector/cute-pig-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7818.jpg?t=st=1690733118~exp=1690733718~hmac=e9cb622d4f14635fad29588f7437a9648a04a787d3410f4e5922feef26248283',
      classCode: 'CTT12CDT01',
      facility: 'Công nghệ thông tin',
      phone: '0123456789',
    },
    type: 'homework',
    createdAt: '2023-07-18T17:21:19.791Z',
    updatedAt: '2023-07-18T17:21:19.791Z',
  },
];

export const fakeTerm: ItemTerm[] = [
  {
    _id: '64b6ca0f9fda0eb930137a84',
    subjectCode: 'COM108',
    subjectName: 'Lập trình hướng đối tượng',
    status: 'passed',
    mark: 9,
    icon: AppIcons.java,
  },
  {
    _id: '64b6ca0f9fda0eb930137a85',
    subjectCode: 'COM109',
    subjectName: 'Cấu trúc dữ liệu và giải thuật',
    status: 'passed',
    mark: 8,
    icon: AppIcons.data,
  },
  {
    _id: '64b6ca0f9fda0eb930137a86',
    subjectCode: 'COM110',
    subjectName: 'Cơ sở dữ liệu',
    status: 'studying',
    mark: 0,
    icon: AppIcons.sql,
  },
  {
    _id: '64b6ca0f9fda0eb930137a87',
    subjectCode: 'COM111',
    subjectName: 'Lập trình web',
    status: 'failed',
    mark: 4,
    icon: AppIcons.web,
  },
  {
    _id: '64b6ca0f9fda0eb930137a88',
    subjectCode: 'COM112',
    subjectName: 'Lập trình di động',
    status: 'passed',
    mark: 10,
    icon: AppIcons.mobile,
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
