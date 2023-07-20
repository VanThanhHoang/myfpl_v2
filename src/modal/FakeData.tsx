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
