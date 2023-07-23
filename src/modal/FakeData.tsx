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
  {
    _id: '4',
    title: 'Làm thế nào để giảm căng thẳng trong công việc',
    content:
      'Các mẹo đơn giản giúp bạn giảm căng thẳng và áp lực trong công việc hàng ngày.',
    type: NewsType.Study,
    like: 15,
    dislike: 4,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '5',
    title: 'Kỹ năng giao tiếp hiệu quả',
    content:
      'Học cách giao tiếp một cách hiệu quả để truyền đạt ý kiến và ý tưởng một cách rõ ràng.',
    type: NewsType.Study,
    like: 20,
    dislike: 6,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '6',
    title: 'Khám phá vẻ đẹp thiên nhiên',
    content:
      'Những bức ảnh đẹp về thiên nhiên và những địa điểm du lịch tuyệt vời.',
    type: NewsType.Study,
    like: 12,
    dislike: 2,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '7',
    title: 'Lợi ích của việc đọc sách',
    content:
      'Tìm hiểu về những lợi ích vượt trội mà việc đọc sách mang lại cho con người.',
    type: NewsType.Study,
    like: 18,
    dislike: 1,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '8',
    title: 'Tầm quan trọng của rèn luyện thể chất',
    content:
      'Tại sao rèn luyện thể chất là yếu tố quan trọng đối với sức khỏe và cảm xúc.',
    type: NewsType.Tuition,
    like: 25,
    dislike: 5,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '9',
    title: 'Kiến thức về lịch sử thế giới',
    content:
      'Những sự kiện quan trọng trong lịch sử thế giới và tác động của chúng đến ngày nay.',
    type: NewsType.Activity,
    like: 30,
    dislike: 7,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '10',
    title: 'Sự phát triển của công nghệ thông tin',
    content:
      'Những bước tiến trong công nghệ thông tin và tác động của chúng đến xã hội.',
    type: NewsType.Tuition,
    like: 22,
    dislike: 3,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  // Sao chép và dán các đối tượng tại đây, sao chép đủ 20 lần nữa
  {
    _id: '11',
    title: 'Cách phát triển khả năng sáng tạo',
    content:
      'Những cách để phát triển và khuyến khích khả năng sáng tạo của bản thân.',
    type: NewsType.Tuition,
    like: 18,
    dislike: 2,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '12',
    title: 'Cuộc sống sau nghỉ hưu',
    content:
      'Những cách để tận hưởng cuộc sống sau khi nghỉ hưu và phát triển sự nghiệp thứ hai.',
    type: NewsType.Tuition,
    like: 16,
    dislike: 1,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '13',
    title: 'Khám phá văn hóa đa dạng',
    content: 'Câu chuyện về những văn hóa đa dạng và phong phú trên thế giới.',
    type: NewsType.Study,
    like: 12,
    dislike: 3,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '14',
    title: 'Những bài học từ thiên nhiên',
    content:
      'Những bài học cuộc sống từ thiên nhiên và thế giới tự nhiên xung quanh chúng ta.',
    type: NewsType.Activity,
    like: 20,
    dislike: 5,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '15',
    title: 'Cuộc sống ngoài Trái Đất',
    content:
      'Khám phá những khả năng và cơ hội cho cuộc sống ngoài Trái Đất trong tương lai.',
    type: NewsType.Activity,
    like: 24,
    dislike: 7,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '16',
    title: 'Công nghệ và cuộc sống',
    content:
      'Tìm hiểu về vai trò của công nghệ trong cuộc sống hàng ngày của chúng ta.',
    type: NewsType.Tuition,
    like: 30,
    dislike: 8,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '17',
    title: 'Nghệ sĩ tài năng và sự sáng tạo',
    content:
      'Giới thiệu về những nghệ sĩ tài năng và những tác phẩm sáng tạo của họ.',
    type: NewsType.Tuition,
    like: 28,
    dislike: 6,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '18',
    title: 'Kỹ năng lãnh đạo trong công việc',
    content: 'Những kỹ năng lãnh đạo quan trọng giúp bạn phát triển sự nghiệp.',
    type: NewsType.Study,
    like: 36,
    dislike: 4,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '19',
    title: 'Cuộc sống trong tương lai',
    content: 'Khám phá cuộc sống và công nghệ trong tương lai không xa.',
    type: NewsType.Tuition,
    like: 32,
    dislike: 3,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '20',
    title: 'Sức mạnh của nghệ thuật',
    content: 'Cách nghệ thuật tác động và thay đổi cảm xúc của con người.',
    type: NewsType.Tuition,
    like: 38,
    dislike: 5,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '21',
    title: 'Cách giữ cho tâm hồn luôn bình yên',
    content:
      'Hãy khám phá những bí quyết giữ cho tâm hồn luôn bình yên và hạnh phúc.',
    type: NewsType.Study,
    like: 28,
    dislike: 4,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '22',
    title: 'Hành trình khám phá vũ trụ',
    content: 'Những khám phá mới trong thiên văn học và vũ trụ vô cùng bí ẩn.',
    type: NewsType.Activity,
    like: 32,
    dislike: 8,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '23',
    title: 'Mẹo nhỏ cho cuộc sống hạnh phúc',
    content:
      'Những mẹo đơn giản giúp bạn tận hưởng cuộc sống hạnh phúc mỗi ngày.',
    type: NewsType.Tuition,
    like: 17,
    dislike: 2,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '24',
    title: 'Nghệ sĩ tài năng và sự sáng tạo',
    content:
      'Giới thiệu về những nghệ sĩ tài năng và những tác phẩm sáng tạo của họ.',
    type: NewsType.Tuition,
    like: 24,
    dislike: 3,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '25',
    title: 'Kỹ năng lãnh đạo trong công việc',
    content: 'Những kỹ năng lãnh đạo quan trọng giúp bạn phát triển sự nghiệp.',
    type: NewsType.Study,
    like: 19,
    dislike: 1,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '26',
    title: 'Công nghệ sạch cho tương lai',
    content: 'Giới thiệu về các công nghệ sạch và bền vững đang phát triển.',
    type: NewsType.Tuition,
    like: 18,
    dislike: 2,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '27',
    title: 'Tuyệt tác kiến trúc thế giới',
    content:
      'Các công trình kiến trúc đáng ngưỡng mộ từ khắp nơi trên thế giới.',
    type: NewsType.Tuition,
    like: 25,
    dislike: 4,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '28',
    title: 'Kỹ năng sống cho tương lai',
    content: 'Những kỹ năng quan trọng để sẵn sàng cho tương lai công việc.',
    type: NewsType.Study,
    like: 30,
    dislike: 6,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '29',
    title: 'Cuộc phiêu lưu trong thiên nhiên hoang dã',
    content:
      'Những kinh nghiệm phiêu lưu và thú vị trong thiên nhiên hoang dã.',
    type: NewsType.Tuition,
    like: 22,
    dislike: 2,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
  {
    _id: '30',
    title: 'Cuộc sống trong tương lai',
    content: 'Khám phá cuộc sống và công nghệ trong tương lai không xa.',
    type: NewsType.Tuition,
    like: 28,
    dislike: 5,
    publishedAt: '2023-07-18T17:21:19.791Z',
  },
];

export default FakeNews;
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
