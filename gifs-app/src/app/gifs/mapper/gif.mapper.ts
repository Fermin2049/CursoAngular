import { Gif } from '../interface/gif.interface';
import { GiphyItem } from './../interface/giphy.interfaces';
export class GifMapper {
  static mapGiphyItemToGif(GiphyItem: GiphyItem): Gif {
    return {
      id: GiphyItem.id,
      title: GiphyItem.title,
      url: GiphyItem.images.original.url,
    };
  }

  static mapGiphyItemToGifArray(item: GiphyItem[]): Gif[] {
    return item.map(this.mapGiphyItemToGif);
  }
}
