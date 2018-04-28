import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const media = [
      { id: 1, title: 'wolf', description: 'A wolf in a car', url: 'https://i.imgur.com/zPV7hGg.jpg', thumb: 'https://i.imgur.com/zPV7hGgb.jpg' },
      { id: 2, title: 'dog', description: 'A dog', url: 'https://i.imgur.com/Ze67tmF.mp4', thumb: 'https://i.imgur.com/Ze67tmFb.jpg' },
      { id: 3, title: 'P&R', description: 'Parks and Rec', url: 'https://i.imgur.com/eBHnuGN.mp4', thumb: 'https://i.imgur.com/eBHnuGNb.jpg' },
      { id: 4, title: 'dog2', description: 'Another dog', url: 'https://i.imgur.com/qp8xKBZ.mp4', thumb: 'https://i.imgur.com/qp8xKBZb.jpg'}
    ];
    return {media};
  }
}
