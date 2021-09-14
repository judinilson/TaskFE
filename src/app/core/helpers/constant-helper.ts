import { environment } from '../environments/environment';

export class ConstantHelper {
  static readonly urlAuth = `${environment.apiUrl}/auth`;
  static readonly urlUserAdmin = `${environment.apiUrl}/userAdmin`;
  static readonly urlUser = `${environment.apiUrl}/user`;
  static readonly urlNews = `${environment.apiUrl}/news`;
  static readonly urlUpload = `${environment.apiUrl}/upload`;

  static readonly close_big = 'assets/images/close.svg';
  static readonly picture404 = 'assets/images/error-image.png';
  static readonly pictureLogo = 'assets/images/logo.png';
  static readonly pictureLogoW = 'assets/images/logo-w.png';
  static readonly pictureDefaultNews = 'assets/images/news-illust.svg';
  static readonly picturePlay = 'assets/images/play.svg';
  static readonly pictureAccountBg = 'assets/images/bg-acc.jpg';
  static readonly pictureNicheDefault = 'assets/images/house.svg';
  static readonly plus_icon = 'assets/icons/plus.svg';

  static readonly usericon = 'assets/images/user_icon.png';
  static readonly clothes1 = 'assets/images/clothes/1.jpg';
  static readonly clothes2 = 'assets/images/clothes/2.jpg';
  static readonly clothes3 = 'assets/images/clothes/3.jpg';

  static readonly telegramicon = 'assets/images/social/telegram.png';
  static readonly vkicon = 'assets/images/social/vk.png';
  static readonly instagramicon = 'assets/images/social/instagram.png';
  static readonly tiktokicon = 'assets/images/social/tiktok.png';
  static readonly youtubeicon = 'assets/images/social/youtube.png';
  static readonly whatssapicon = 'assets/images/social/whatssap.png';
  static readonly callicon = 'assets/images/social/callicon.png';
  static readonly like = 'assets/images/niche/like.svg';
  static readonly unlike = 'assets/images/niche/unlike.svg';
  // unactive
  static readonly telegram = 'assets/icons/telegram.svg';
  static readonly instagram = 'assets/icons/instagram.svg';
  static readonly tiktok = 'assets/icons/tiktok.svg';
  static readonly vk = 'assets/icons/vk.svg';
  static readonly youtube = 'assets/icons/youtube.svg';
  static readonly whatssap = 'assets/icons/whatssap.svg';
  static readonly call = 'assets/icons/call.svg';

  static readonly USER_TOKEN = 'TOKEN';
  static readonly MINUTE_OFFSET_REFRESH = 4;
  static readonly EMPTY_JSON = '{}';
  static readonly platformName = 'EzTarget';
}
